import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import Overlay from "./Overlay";

const ConversationSidebar = () => {
    const mockData = [
        {
            id: 1,
            name: "Quang Quoc",
            lastMessage: "Hom nay an gi"
        },
        {
            id: 2,
            name: "Quoc Quoc",
            lastMessage: "Hom nay an gi"
        },
        {
            id: 3,
            name: "Quang Huy",
            lastMessage: "Hom nay an gi"
        }, {
            id: 4,
            name: "Quang Quoc",
            lastMessage: "Hom nay an gi"
        },
        {
            id: 5,
            name: "Quang Quoc",
            lastMessage: "Hom nay an gi"
        },
        {
            id: 6,
            name: "Quang Quoc",
            lastMessage: "Hom nay an gi"
        },
        {
            id: 7,
            name: "Quang Quoc",
            lastMessage: "Hom nay an gi"
        },
        {
            id: 8,
            name: "Quang Quoc",
            lastMessage: "Hom nay an gi"
        },
        {
            id: 9,
            name: "Quang Quoc",
            lastMessage: "Hom nay an gi"
        },
        {
            id: 10,
            name: "Quang Quoc",
            lastMessage: "Hom nay an gi"
        },
        {
            id: 11,
            name: "Quang Quoc",
            lastMessage: "Hom nay an gi"
        },
        {
            id: 12,
            name: "Quang Quoc",
            lastMessage: "Hom nay an gi"
        }
    ]
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            {showModal && <Overlay setShowModal={setShowModal}/>}
            <aside className="fixed top-20 left-0 bottom-0 h-full w-[270px] bg-gray-50 border-r-2 overflow-y-scroll">
                <header className="flex justify-between items-center px-[20px] bg-gray-200 h-[50px]">
                    <h1>Conversation</h1>
                    <div onClick={() => setShowModal(!showModal)}>
                        <FontAwesomeIcon icon={faSquarePlus} className="h-4 w-4"/>
                    </div>
                </header>
                <div className="">
                    {mockData.map((item) => (
                        <div className="flex items-center gap-[20px] py-[10px] px-[32px] border-b-2 box-border"
                             onClick={() => navigate(`/conversations/${item.id}`)}
                        >
                            <div className="bg-primaryColor h-[40px] w-[40px] rounded-full"></div>
                            <div>
                                <span className="flex font-bold">{item.name}</span>
                                <span className="text-[14px]">{item.lastMessage}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>
        </>
    );
};

export default ConversationSidebar;