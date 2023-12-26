import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import MessagePanel from "../Message/MessagePanel";
import SocketContext from "../../context/socketContext";
import AuthContext from "../../context/authContext";
import {useDispatch, useSelector} from "react-redux";
import {fetchMessagesThunk} from "../../redux/slices/message";
import ModalPicture from "../ModalPicture/ModalPicture";

const ConversationChannel = ({conversations}) => {
    const socket = useContext(SocketContext)
    const accessToken = localStorage.getItem('access-token')
    const {auth} = useContext(AuthContext)
    const {id} = useParams()
    const {isShowModal} = useSelector((state) => state.image)
    const dispatch = useDispatch()
    const [timer, setTimer] = useState(0)
    const [isTyping, setIsTyping] = useState(false);
    const [isRecipientTyping, setIsRecipientTyping] = useState(false);
    let recipient = {}

    if (conversations && conversations.length > 0) {
        const conversation = conversations.filter((item) => item?.id === Number(id))[0]
        if (conversation?.recipient?.id !== auth.id) {
            recipient = conversation?.recipient
        } else {
            recipient = conversation?.creator
        }
    }

    useEffect(() => {
        (async () => {
            dispatch(fetchMessagesThunk({accessToken, id}))
        })()
    }, [id])

    useEffect(() => {
        socket.emit('onConversationJoin', { conversationId: id });
        socket.on('userJoin', () => {
            console.log('userJoin');
        });
        socket.on('userLeave', () => {
            console.log('userLeave');
        });

        socket.on('onTypingStart', () => {
            console.log('onTypingStart: User has started typing...');
            setIsRecipientTyping(true);
        });

        socket.on('onTypingStop', () => {
            console.log('onTypingStop: User has stopped typing...');
            setIsRecipientTyping(false);
        });

        return () => {
            socket.emit('onConversationLeave', { conversationId: id });
            socket.off('userJoin');
            socket.off('userLeave');
            socket.off('onTypingStart');
            socket.off('onTypingStop');
        };
    }, [id]);

    const sendTypingStatus = () => {
        if (isTyping) {
            console.log('isTyping = true');
            clearTimeout(timer);
            setTimer(setTimeout(() => {
                console.log('User stopped typing');
                socket.emit('onTypingStop', { conversationId: id });
                setIsTyping(false);
            }, 1000))
        } else {
            console.log('isTyping = false');
            setIsTyping(true);
            socket.emit('onTypingStart', { conversationId: id });
        }
    }

    return (
        <div className="h-full w-full mt-[60px] overflow-hidden">
            <MessagePanel sendTypingStatus={sendTypingStatus} isRecipientTyping={isRecipientTyping} recipient={recipient} ></MessagePanel>
            {isShowModal && <ModalPicture/>}
        </div>
    );
};

export default ConversationChannel;