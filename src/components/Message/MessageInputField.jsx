import React from 'react';

const MessageInputField = ({content, setContent, sendMessage}) => {
    return (
        // MessageInputContainer
        <div className="w-full mt-[12px] px-[25px]">
            <form action="" onSubmit={sendMessage}>
                <input type="text" placeholder="Nhập tin nhắn"
                       className=" block w-full p-[10px] border border-gray-600 text-gray-900 text-normal rounded-sm focus:outline-primaryColor hover:border-primaryColor"
                       value={content}
                       onChange={(e) => setContent(e.target.value)}
                />
            </form>
            {/*<input type="text" className=" bg-gray-200 outline-none border-none p-[15px] w-full"/>*/}
        </div>
    );
};

export default MessageInputField;