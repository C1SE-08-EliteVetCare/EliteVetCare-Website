import React from 'react';
import ConversationSidebar from "../../components/Conversation/ConversationSidebar";
import {Outlet, useParams} from "react-router-dom";
import Header from "../../components/Header/Header";
import ConversationPanel from "../../components/Conversation/ConversationPanel";

const Conversation = () => {
    const {id} = useParams()
    return (
        <div className="wrapper">
            <Header/>
            <div className="h-full flex justify-start items-center">
                <ConversationSidebar/>
                {!id && <ConversationPanel/>}
                <Outlet/>
            </div>
        </div>
    );
};

export default Conversation;