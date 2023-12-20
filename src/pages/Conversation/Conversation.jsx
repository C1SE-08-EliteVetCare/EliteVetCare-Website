import React, {useEffect} from 'react';
import Header from "../../components/Header/Header";
import ConversationSidebar from "../../components/Conversation/ConversationSidebar";
import {useDispatch, useSelector} from "react-redux";
import {fetchConversationsThunk} from "../../redux/slices/conversation";

const Conversation = ({children}) => {
    const accessToken = localStorage.getItem('access-token')
    const dispatch = useDispatch()
    const {conversations} = useSelector((state) => state.conversation)

    useEffect(() => {
        dispatch(fetchConversationsThunk(accessToken))
    }, [accessToken, dispatch]);

    return (
        <div className="wrapper">
            <Header/>
            <div className="h-full w-full flex justify-start items-center overflow-hidden">
                <ConversationSidebar conversations={conversations}/>
                {React.Children.map(children, child =>
                    React.cloneElement(child, {conversations: conversations})
                )}
            </div>
        </div>
    );
};

export default Conversation;