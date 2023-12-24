import React, {useContext, useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMessage} from "@fortawesome/free-solid-svg-icons";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import CreateConversationForm from "./CreateConversationForm";
import {motion} from "framer-motion";
import AuthContext from "../../context/authContext";
import {format} from "date-fns";
import {utcToZonedTime} from "date-fns-tz";

const ConversationSidebar = ({conversations}) => {
    const {id} = useParams()
    const {auth} = useContext(AuthContext)
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const [currentTime, setCurrentTime] = useState(new Date());

    const getName = (fullName) => {
        const arrStr = fullName.split(' ')
        return arrStr[arrStr.length - 1]
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const calculateDateDifference = (startDate, endDate) => {
        const timeDiff = endDate.getTime() - startDate.getTime();
        const seconds = timeDiff / 1000;
        let result;

        switch (true) {
            case seconds >= 7 * 24 * 60 * 60:
                // More than 7 days difference, return the later date
                result = `${Math.floor(seconds / (7 * 24 * 60 * 60))} tuần`;
                break;
            case seconds >= 24 * 60 * 60:
                // Less than 7 days difference, return the number of days
                result = `${Math.floor(seconds / (24 * 60 * 60))} ngày`;
                break;
            case seconds >= 60 * 60:
                // Less than 1 day difference, return the number of hours
                result = `${Math.floor(seconds / (60 * 60))} giờ`;
                break;
            case seconds >= 60:
                // Less than 1-hour difference, return the number of minutes
                result = `${Math.floor(seconds / 60)} phút`;
                break;
            default:
                // Less than 1-minute difference, return the number of seconds
                result = `${Math.floor(seconds)} giây`;
        }
        return result;
    }

    return (
        <>
            {showModal && <CreateConversationForm setShowModal={setShowModal}/>}
            <aside className="fixed top-[61px] left-0 bottom-0 h-full w-[300px] bg-gray-50 border-r-2 overflow-auto">
                <header className="flex justify-between items-center px-[20px] py-[17px] bg-gray-200">
                    <Link to="/conversations" className="flex items-center gap-x-2">
                        <FontAwesomeIcon icon={faMessage} className="text-primaryColor"/>
                        <h1 className="text-primaryColor font-normal font-chewy">EliteVetCare Chat</h1>
                    </Link>
                    <motion.div whileHover={{scale: 1.3}} onClick={() => setShowModal(!showModal)}>
                        <svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" className="h-6 w-6">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M9 11H15M12 8V14M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z"
                                    stroke="#007AFE" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                            </g>
                        </svg>
                    </motion.div>
                </header>
                <div className="">
                    {conversations && conversations.length > 0 && (
                        conversations.map((item) => (
                            <div
                                className={`flex items-center gap-[20px] py-[10px] px-[20px] border-b-2 box-border cursor-pointer ${item.id === parseInt(id) ? "bg-blue-50" : "hover:bg-gray-100"}`}
                                key={item.id}
                                onClick={() => navigate(`/conversations/${item.id}`)}
                            >
                                <img className="h-[40px] w-[40px] rounded-full object-cover"
                                     src={auth.id === item?.recipient.id ? item?.creator?.avatar : item?.recipient?.avatar || "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"}
                                     alt="avatar"/>
                                <div className="flex flex-col">
                                    <span
                                        className="font-bold w-[145px] truncate text-start">{auth.id === item?.recipient.id ? item?.creator?.fullName : item?.recipient?.fullName}</span>
                                    <div className="flex items-center flex-row justify-between gap-x-2">
                                        {item?.lastMessageSent.imgUrl !== null ? (
                                            <span
                                                className="text-[14px] w-[145px] truncate text-start">{auth.id === item?.lastMessageSent?.author?.id ? "Bạn đã gửi một ảnh" : `${getName(item?.lastMessageSent?.author?.fullName)} đã gửi một ảnh`}</span>
                                        ) : (
                                            <span
                                                className="text-[14px] w-[145px] truncate text-start">{auth.id === item?.lastMessageSent?.author?.id ? `Bạn: ${item?.lastMessageSent?.content}` : item?.lastMessageSent?.content}</span>
                                        )}
                                        <span className="text-[13px] font-light">{item.lastMessageSent &&
                                            <span>{calculateDateDifference(new Date(item.lastMessageSent.createdAt), currentTime)}</span>}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </aside>
        </>
    );
};

export default ConversationSidebar;