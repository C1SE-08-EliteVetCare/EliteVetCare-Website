import React from 'react';

const MessageInputField = ({content, setContent, sendMessage, sendTypingStatus}) => {
    return (
        // MessageInputContainer
        <>
            {/*<div>Đang nhập</div>*/}
            <div className="w-full mt-[12px] px-[25px]">
                <form action="" onSubmit={sendMessage}>
                    <input type="text" placeholder="Nhập tin nhắn"
                           className=" block w-full p-[10px] border border-gray-600 text-gray-900 text-normal rounded-sm focus:outline-primaryColor hover:border-primaryColor"
                           value={content}
                           onChange={(e) => setContent(e.target.value)}
                           onKeyDown={sendTypingStatus}
                    />
                </form>
            </div>
        </>
    );
};

export default MessageInputField;