import React, {useContext, useEffect, useState} from 'react';
import {format, formatRelative} from "date-fns";
import {Spinner} from "@material-tailwind/react";
import AuthContext from "../../context/authContext";
import {utcToZonedTime} from "date-fns-tz";
import {vi} from "date-fns/locale";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {setShowImage} from "../../redux/slices/image";

export const FormattedMessage = ({user, message, viewTime, toggleShowTime, renderImage}) => {
    const currentDate = new Date()

    return (
        user.id === message?.author?.id ? (
            // account owner
            <div className="flex gap-[20px] items-center py-[5px] w-full justify-end pl-[50%]">
                <div className="flex flex-col items-end">
                    <div className="flex gap-x-2 items-center">
                        <span className={`${(viewTime.isView && viewTime.id === Number(message.id)) ? "block" : "hidden"} absolute right-[51%] text-[12px] font-medium opacity-50`}>{formatRelative(utcToZonedTime(new Date(message?.createdAt), 'Asia/Ho_Chi_Minh'), new Date(), {locale: vi})}</span>
                        {message.content &&
                            <span
                                className="text-sm text-start cursor-pointer break-all bg-primaryColor text-white py-2 px-2.5 rounded-b-xl rounded-tl-xl"
                                onMouseMoveCapture={(e) => toggleShowTime(e, true)}
                                onMouseOutCapture={(e) => toggleShowTime(e, false)}
                                data-id={message.id}
                            >
                                {message.content}
                            </span>
                        }
                        {message.imgUrl && renderImage(message, toggleShowTime)}
                    </div>
                </div>
            </div>
        ) : (
            // recipient
            <div className="flex gap-[20px] items-start py-[5px] w-full">
                <img className="bg-primaryColor h-[40px] w-[40px] rounded-full object-cover"
                     src={message?.author?.avatar || "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"}
                     alt="avatar"/>
                <div className="flex flex-col items-start gap-y-1.5">
                    <div className='flex items-center gap-2'>
                        <span className="text-[#757575] font-medium">{message?.author?.fullName}</span>
                        <span className="text-[14px] font-medium opacity-30">{formatRelative(utcToZonedTime(new Date(message?.createdAt), 'Asia/Ho_Chi_Minh'), currentDate, {locale: vi})}</span>
                    </div>
                    {message.content &&
                        <span className="message-item-content text-sm text-start mt-[3px] cursor-pointer break-all bg-gray-200 text-black py-2 px-2.5 rounded-b-xl rounded-tr-xl">
                            {message?.content}
                        </span>
                    }
                    {message.imgUrl && renderImage(message, toggleShowTime)}
                </div>
            </div>
        )
    )
}

const MessageContainer = () => {
    const {auth} = useContext(AuthContext)
    const {id} = useParams()
    const {messages, loading} = useSelector((state) => state.message)
    // const {selectedImage} = useSelector((state) => state.message)
    const dispatch = useDispatch()

    const [viewTime, setViewTime] = useState({
        id: null,
        isView: false
    })

    const toggleShowTime = (e, isView) => {
        isView ?
            setViewTime({
                id: Number(e.target.dataset.id),
                isView: true
            })
            : setViewTime({
                id: null,
                isView: false
            })
    }

    const renderImage = (message, toggleShowTime) => {
        return (
            <img onMouseMoveCapture={(e) => toggleShowTime(e, true)}
                 onMouseOutCapture={(e) => toggleShowTime(e, false)}
                 onClick={(e) => {
                     dispatch(setShowImage({selectedImage: message.imgUrl, isShowModal: true}))
                 }}
                 data-id={message.id} className="h-auto max-w-xs hover:opacity-90 rounded-xl object-cover cursor-pointer" src={message.imgUrl} alt=""/>
        )
    }

    const formatMessages = () => {
        const msgs = messages.find((cm) => cm.id === parseInt(id))
        return msgs && msgs.data.map((m, index, arr) => {
            const currentMessage = arr[index];
            const nextMessage = arr[index + 1];
            // console.log(currentMessage);
            // console.log(nextMessage);
            if (arr.length === index + 1) {
                // At the end
                return <FormattedMessage key={m.id} user={auth} message={m} viewTime={viewTime} toggleShowTime={toggleShowTime} renderImage={renderImage} />;
            }
            if (currentMessage.author.id === nextMessage.author.id) {
                return (
                    // account owner
                    auth.id === m?.author?.id ? (
                        <div className="relative flex gap-y-[20px] items-center py-[5px] pl-[50%] w-full justify-end" key={m.id}>
                            <span className={`${(viewTime.isView && viewTime.id === Number(m.id)) ? "block" : "hidden"} absolute right-[50%] text-[12px] font-medium opacity-50`}>
                                {format(utcToZonedTime(new Date(m?.createdAt), 'Asia/Ho_Chi_Minh'), 'hh:mm a')}
                            </span>
                            {m.content &&
                                <span
                                    className="text-sm text-start ml-[10px] cursor-pointer break-all bg-primaryColor text-white py-2 px-2.5 rounded-b-xl rounded-tl-xl"
                                    onMouseMoveCapture={(e) => toggleShowTime(e, true)}
                                    onMouseOutCapture={(e) => toggleShowTime(e, false)}
                                    data-id={m.id}
                                >
                                    {m.content}
                                </span>
                            }
                            {m.imgUrl && renderImage(m, toggleShowTime)}
                        </div>
                    ) : (
                        // recipient
                        <div className="relative flex gap-y-[20px] items-center py-[5px] w-full pl-[60px] pr-[50%]" key={m.id}>
                            <span className={`${(viewTime.isView && viewTime.id === Number(m.id)) ? "block" : "hidden"} absolute left-0 text-[12px] font-medium opacity-30`}>{format(utcToZonedTime(new Date(currentMessage?.createdAt), 'Asia/Ho_Chi_Minh'), 'hh:mm a')}</span>
                            {m.content &&
                                <span
                                    className="text-sm text-start mr-[10px] cursor-pointer break-all bg-gray-200 py-2 px-2.5 rounded-b-xl rounded-tr-xl"
                                    onMouseMoveCapture={(e) => toggleShowTime(e, true)}
                                    onMouseOutCapture={(e) => toggleShowTime(e, false)}
                                    data-id={m.id}
                                >
                                    {m.content}
                                </span>
                            }
                            {m.imgUrl && renderImage(m, toggleShowTime)}
                        </div>
                    )
                );
            }
            return <FormattedMessage user={auth} message={m} key={m.id} viewTime={viewTime} toggleShowTime={toggleShowTime} renderImage={renderImage}/>;
        });
    };

    useEffect(() => {
        formatMessages();
    });

    return (
        <div
            className="h-full flex flex-col-reverse items-start overflow-y-scroll py-[5px] px-[40px] mt-14">
            {loading ? (
                <Spinner className="h-12 w-12 m-auto" color="blue"/>
            ) : (
                formatMessages()
            )}
        </div>
    );
};


export default MessageContainer;