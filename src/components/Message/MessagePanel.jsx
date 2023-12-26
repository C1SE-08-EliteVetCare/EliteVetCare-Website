import React, {useContext, useState} from 'react';
import MessageContainer from "./MessageContainer";
import MessageInputField from "./MessageInputField";
import {useParams} from "react-router-dom";
import * as chatService from "../../services/chatService"
import AuthContext from "../../context/authContext";
import {useDispatch, useSelector} from "react-redux";
import {setMessages} from "../../redux/slices/message";

const MessagePanel = ({recipient, sendTypingStatus, isRecipientTyping}) => {
    const {id} = useParams()
    const {auth} = useContext(AuthContext)
    const accessToken = localStorage.getItem('access-token')
    const dispatch = useDispatch()
    const [content, setContent] = useState('')
    const formData = new FormData()
    let contentReq = ''

    const sendMessage = async (e) => {
        e.preventDefault()
        if(!id || !content) return;

        contentReq = content
        dispatch(setMessages({
            id: parseInt(id),
            data: {
                id: Math.random(),
                author: {
                    id: auth.id,
                    avatar: auth.avatar,
                    fullName: auth.fullName
                },
                content: contentReq,
                imgUrl: null,
                createdAt: new Date()
            }
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

    const uploadImg = async (e) => {
        e.preventDefault()
        console.log(e.target.files[0])
        console.log(URL.createObjectURL(e.target.files[0]))
        dispatch(setMessages({
            id: parseInt(id),
            data: {
                id: Math.random(),
                author: {
                    id: auth.id,
                    avatar: auth.avatar,
                    fullName: auth.fullName
                },
                content: contentReq,
                imgUrl: URL.createObjectURL(e.target.files[0]),
                createdAt: new Date()
            }
        }))

        formData.append('conversationId', id)
        formData.append('img', e.target.files[0])
        try {
            await chatService.createMessageWithImage(accessToken, formData)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="fixed top-[60px] bottom-[20px] left-[300px] right-0 bg-inherit flex flex-col">
            <header
                className="bg-gray-50 text-start border-2 w-full h-[62px] px-[32px] absolute top-0 left-0 right-0 z-20">
                {recipient && (
                    <div className="h-full flex items-center justify-center gap-x-[12px]">
                        <img className="bg-primaryColor h-[40px] w-[40px] rounded-full object-cover"
                             src={recipient?.avatar || "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"}
                             alt="avatar"/>
                        <span className="font-bold">{recipient?.fullName}</span>
                    </div>
                )}
            </header>
            <MessageContainer/>
            {isRecipientTyping && (
                <div className="flex flex-row items-center gap-3 ml-[40px] pt-[10px]">
                    <img src={recipient?.avatar} alt="avatar" className="h-[40px] w-[40px] rounded-full "/>
                    <div className="is-typing">
                        <div className="jump1"></div>
                        <div className="jump2"></div>
                        <div className="jump3"></div>
                    </div>
                </div>
            )}
            <MessageInputField content={content} setContent={setContent} sendMessage={sendMessage} uploadImg={uploadImg} sendTypingStatus={sendTypingStatus}/>
        </div>
    );
};

export default MessagePanel;