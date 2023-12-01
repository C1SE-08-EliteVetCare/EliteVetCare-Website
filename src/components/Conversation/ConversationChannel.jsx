import React from 'react';
import {useParams} from "react-router-dom";

const ConversationChannel = () => {
    console.log(useParams())
    return (
        <div className="h-full ml-[270px]">
            Chanel page
        </div>
    );
};

export default ConversationChannel;