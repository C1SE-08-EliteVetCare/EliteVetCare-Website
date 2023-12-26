import React from 'react';
import svgChat from '../../assets/vectors/undraw_chat_re_re1u.svg'

const ConversationPanel = () => {
    return (
        <div className="h-full ml-[300px]">
            <div className="mt-[80px] flex flex-col gap-8">
                <img className="h-[500px] w-screen" src={svgChat} alt="Chat"/>
            </div>
        </div>
    );
};

export default ConversationPanel;