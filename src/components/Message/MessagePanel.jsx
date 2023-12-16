import React, {useContext, useState} from 'react';
import MessageContainer from "./MessageContainer";
import MessageInputField from "./MessageInputField";
import {useParams} from "react-router-dom";
import * as chatService from "../../services/chatService"
import AuthContext from "../../context/authContext";
import {useDispatch} from "react-redux";
import {setMessages} from "../../redux/slices/conversation";

const MessagePanel = ({recipient}) => {
    const {id} = useParams()
    const {auth} = useContext(AuthContext)
    const accessToken = localStorage.getItem('access-token')
    const dispatch = useDispatch()
    const [content, setContent] = useState('')
    let contentReq = ''
    const sendMessage = async (e) => {
        e.preventDefault()
        console.log(id)
        console.log('Sending message', content)
        if(!id || !content) return;

        contentReq = content
        dispatch(setMessages({
            id: Math.random(),
            author: {
                id: auth.id,
                avatar: auth.avatar,
                fullName: auth.fullName
            },
            content: contentReq,
            createdAt: new Date()
        }))
        try {
            await Promise.all([
                chatService.createMessage(accessToken, {
                    content: contentReq,
                    conversationId: id
                }),
                setContent('')
            ])
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="fixed top-[60px] bottom-[20px] left-[270px] right-0  bg-inherit  flex flex-col">
            <header
                className="bg-gray-50 text-start border-2 w-full h-[62px] px-[32px] absolute top-0 left-0 right-0 z-20">
                {recipient && (
                    <div className="h-full flex items-center justify-center gap-x-[12px]">
                        <img className="bg-primaryColor h-[40px] w-[40px] rounded-full object-cover"
                             src={recipient?.avatar || "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"}
                             alt="avatar"/>
                        <span className="font-bold">{recipient?.id === auth.id ? recipient?.fullName : recipient?.fullName}</span>
                    </div>
                )}
            </header>
            {/*<div className="h-full flex flex-col p-[25px]">*/}
            <MessageContainer/>
            <MessageInputField content={content} setContent={setContent} sendMessage={sendMessage}/>
            {/*</div>*/}
        </div>
    );
};

export default MessagePanel;