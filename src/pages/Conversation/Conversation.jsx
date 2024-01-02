import React, {useContext, useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import ConversationSidebar from "../../components/Conversation/ConversationSidebar";
import {useDispatch, useSelector} from "react-redux";
import {addConversation, fetchConversationsThunk, updateConversation} from "../../redux/slices/conversation";
import {setMessages} from "../../redux/slices/message";
import SocketContext from "../../context/socketContext";
import AuthContext from "../../context/authContext";
import {useParams} from "react-router-dom";
import {toast} from "sonner";
import {Helmet} from "react-helmet";

const Conversation = ({children}) => {
    const socket = useContext(SocketContext)
    const {auth} = useContext(AuthContext)
    const {id} = useParams()
    const accessToken = localStorage.getItem('access-token')
    const dispatch = useDispatch()
    const {conversations} = useSelector((state) => state.conversation)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        dispatch(fetchConversationsThunk(accessToken)).unwrap().then((data) => {
            if (data.response.length === 0) {
                setShowModal(!showModal)
                toast.info("Bạn chưa có cuộc trò chuyện nào. Hãy tạo cuộc trò chuyện mới !")
            }
        })
    }, [accessToken, dispatch]);

    useEffect(() => {
        socket.on('connected', (data) => console.log('Connected', data))
        socket.on('onMessage', (payload) => {
            const {conversation, message} = payload
            console.log('Message received', message)
            console.log(conversation)
            console.log(message?.author?.id, auth.id && auth.id)
            if (auth.id && message?.author?.id !== auth.id) {
                dispatch(setMessages({
                    id: conversation.id,
                    data: message
                }))
            }
            dispatch(updateConversation(conversation))
        })
        socket.on('onConversation', (payload) => {
            console.log('Received onConversation Event');
            console.log(payload);
            toast.info('Bạn có tin nhắn mới từ người lạ')
            dispatch(addConversation(payload));
        });
        socket.on('onReceiveUserTyping', (payload) => {
            console.log(payload)
        })

        return () => {
            socket.off('connected')
            socket.off('onMessage')
            socket.off('onConversation')
        }
    }, [id])

    return (
        <div className="wrapper">
            <Helmet>
                <title>Chat | EliteVetCare</title>
            </Helmet>
            <Header/>
            <div className="h-full w-full flex justify-start items-center overflow-hidden">
                <ConversationSidebar conversations={conversations} showModal={showModal} setShowModal={setShowModal}/>
                {React.Children.map(children, child =>
                    React.cloneElement(child, {conversations: conversations})
                )}
            </div>
        </div>
    );
};

export default Conversation;