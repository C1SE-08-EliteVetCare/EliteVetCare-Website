import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import * as chatService from "../../services/chatService";
import MessagePanel from "../Message/MessagePanel";
import SocketContext from "../../context/socketContext";
import AuthContext from "../../context/authContext";
import {useDispatch, useSelector} from "react-redux";
import {fetchMessagesThunk, setMessages} from "../../redux/slices/conversation";

const ConversationChannel = ({conversations}) => {
    const socket = useContext(SocketContext)
    const {id} = useParams()
    const {auth} = useContext(AuthContext)
    const dispatch = useDispatch()
    const accessToken = localStorage.getItem('access-token')
    let recipient = {}
    const {messages} = useSelector((state) => state.conversation)

    // console.log(conversation.messages)

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
        socket.on('connect', () => console.log('Connected'))
        socket.on('onMessage', (payload) => {
            const {conversation, ...message} = payload
            console.log('Message received', message)
            console.log(message?.author?.id, auth.id)
            if (message?.author?.id !== auth.id) {
                dispatch(setMessages(message))
                // setMessages((prev) => [message, ...prev])
            }
        })

        return () => {
            socket.off('connect')
            socket.off('onMessage')
        }
    }, [auth.id, dispatch, messages, socket])


    return (
        <div className="h-full w-full mt-[60px] overflow-hidden">
            <MessagePanel recipient={recipient} ></MessagePanel>
        </div>
    );
};

export default ConversationChannel;