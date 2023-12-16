import React, {useContext, useEffect, useState} from 'react';
import {format, formatRelative} from "date-fns";
import {Spinner} from "@material-tailwind/react";
import AuthContext from "../../context/authContext";
import {utcToZonedTime} from "date-fns-tz";
import {vi} from "date-fns/locale";
import {useSelector} from "react-redux";


export const FormattedMessage = ({user, message}) => {
    const currentDate = new Date()

    return (
        <div className="flex gap-[20px] items-center py-[5px]">
            <img className="bg-primaryColor h-[40px] w-[40px] rounded-full object-cover"
                 src={message?.author?.avatar || "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"}
                 alt="avatar"/>
            <div className="flex flex-col items-start">
                <div className='flex items-center gap-2'>
                    <span className={`${user?.id === message?.author?.id ? "text-primaryColor" : "text-[#757575]"} font-medium`}>{message?.author?.fullName}</span>
                    <span
                        className="text-[14px] font-medium opacity-30">{formatRelative(utcToZonedTime(new Date(message?.createdAt), 'Asia/Ho_Chi_Minh'), currentDate, {locale: vi})}</span>
                </div>
                <span className="message-item-content text-sm text-start pt-[3px] cursor-pointer">
                    {message?.content}
                </span>
            </div>
        </div>
    )
}

const MessageContainer = () => {
    const {messages, loading} = useSelector((state) => state.conversation)
    const {auth} = useContext(AuthContext)

    const [viewTime, setViewTime] = useState({
        id: null,
        isView: false
    })


    const formatMessages = () => {

        return messages.map((m, index, arr) => {
            // console.log(index);
            const currentMessage = arr[index];
            const nextMessage = arr[index + 1];
            // console.log(currentMessage);
            // console.log(nextMessage);
            if (arr.length === index + 1) {
                // console.log('At the end');
                return <FormattedMessage key={m.id} user={auth} message={m} />;
            }
            if (currentMessage.author.id === nextMessage.author.id) {
                return (
                    <div className="relative flex gap-y-[20px] items-center py-[5px]" key={m.id}>
                        <span className={`${(viewTime.isView && viewTime.id === Number(m.id)) ? "block" : "hidden"} absolute text-[12px] font-medium opacity-30`}>{format(utcToZonedTime(new Date(currentMessage?.createdAt), 'Asia/Ho_Chi_Minh'), 'hh:mm a')}</span>
                        <span className="text-sm text-start pl-[60px] cursor-pointer"
                              onMouseMoveCapture={(e) => setViewTime({
                                id: Number(e.target.dataset.id),
                                isView: true
                              })}
                              onMouseOutCapture={(e) => setViewTime({
                                  id: null,
                                  isView: false
                              })}
                              data-id={m.id}
                        >
                            {m.content}
                        </span>
                    </div>
                );
            }
            return <FormattedMessage user={auth} message={m} key={m.id}/>;
        });
    };

    useEffect(() => {
        formatMessages();
    });

    return (
        <div
            className="h-full flex flex-col-reverse items-start overflow-y-scroll py-[5px] px-[32px] mt-14">
            {loading ? (
                <Spinner className="h-12 w-12 m-auto" color="blue"/>
            ) : (
                formatMessages()
            )}
        </div>
    );
};


export default MessageContainer;