import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import MessagePanel from "../Message/MessagePanel";
import SocketContext from "../../context/socketContext";
import AuthContext from "../../context/authContext";
import {useDispatch} from "react-redux";
import {fetchMessagesThunk, setMessages} from "../../redux/slices/message";
import {updateConversation} from "../../redux/slices/conversation";


const ConversationChannel = ({conversations}) => {
    const socket = useContext(SocketContext)
    const {id} = useParams()
    const {auth} = useContext(AuthContext)
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

    useEffect(() => {
        socket.emit('onClientConnect', { conversationId: parseInt(id) })
        socket.on('connected', (data) => console.log('Connected', data))
        socket.on('onMessage', (payload) => {
            const {conversation, message} = payload
            console.log('Message received', message)
            console.log(conversation)
            console.log(message?.author?.id, auth.id)
            if (message?.author?.id !== auth.id) {
                dispatch(setMessages({
                    id: conversation.id,
                    data: message
                }))
            }
            dispatch(updateConversation(conversation))
        })

        return () => {
            socket.off('connected')
            socket.off('onMessage')
        }
    }, [id])

    const sendTypingStatus = () => {
        console.log('You are typing')
        socket.emit('onUserTyping', { conversationId: id})
    }

    return (
        <div className="h-full w-full mt-[60px] overflow-hidden">
            <MessagePanel sendTypingStatus={sendTypingStatus} recipient={recipient} ></MessagePanel>
        </div>
    );
};

export default ConversationChannel;