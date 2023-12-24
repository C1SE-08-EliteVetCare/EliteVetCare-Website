import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import MessagePanel from "../Message/MessagePanel";
import SocketContext from "../../context/socketContext";
import AuthContext from "../../context/authContext";
import {useDispatch, useSelector} from "react-redux";
import {fetchMessagesThunk} from "../../redux/slices/message";
import ModalPicture from "../ModalPicture/ModalPicture";


const ConversationChannel = ({conversations}) => {
    const socket = useContext(SocketContext)
    const {id} = useParams()
    const {auth} = useContext(AuthContext)
    const {isShowModal} = useSelector((state) => state.image)
    const dispatch = useDispatch()
    const accessToken = localStorage.getItem('access-token')
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

    const sendTypingStatus = () => {
        console.log('You are typing')
        socket.emit('onUserTyping', { conversationId: id})
    }

    return (
        <div className="h-full w-full mt-[60px] overflow-hidden">
            <MessagePanel sendTypingStatus={sendTypingStatus} recipient={recipient} ></MessagePanel>
            {isShowModal && <ModalPicture/>}
        </div>
    );
};

export default ConversationChannel;