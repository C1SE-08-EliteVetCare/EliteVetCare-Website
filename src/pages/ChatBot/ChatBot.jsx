import React, { useState } from "react";
import image from "../../assets/images/ChatBot.png";

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [sendMessage, setsendMessage] = useState("");
    const handleSendMessage = () => {
        if (newMessage) {
            setMessages([...messages, { text: newMessage, user: "user" }]);
            setNewMessage("");
        }
    };

    return (
        <div class="bg-[#f8f8f8] w-235 h-450 rounded flex items-stretch mt-1">
            <div className="w-1/12 "></div>
            <div className="w-2/12 ">
                <div className="Service bg-[#EFEFF8] w-235 h-full text-left rounded-2xl shadow-md border-4 border-[#00000027] p-2">
                    <h2 class="font-bold p=4">
                        {" "}
                        Dịch vụ Chatbot của EliteVetCare
                    </h2>
                    <p className="my-4 p=4">
                        Một dịch vụ chatbot có thể giúp bạn có thông tin về:
                    </p>
                    <ul className="p-4">
                        <li className="p-2">1. Bệnh thông tin vè thú cưng.</li>
                        <li className="p-2">2. Thông tin về các phòng khám.</li>
                        <li className="p-2">3. Đưa ra gợi ý.</li>
                        <li className="p-2">
                            4. Hỗ trợ trả lời các câu hỏi đơn giản
                        </li>
                        <li className="p-2">5. Và nhiều thông tin khác</li>
                    </ul>

                    <p className="p-2">
                        Như vậy, chatbot này có thể giúp đơn giản hóa quá trình
                        tương tác giữa người dùng và các phòng khám.
                    </p>
                </div>
            </div>
            <div className="w-1/12 "></div>
            <div className="w-7/12">
                <div className="w-705 h-full p-16 bg-[#FFFFFF] rounded-2xl shadow-md border-4 border-[#00000027]">
                    <div className="flex items-center ">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                            <img
                                src={image}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="ml-4">
                            <div className="font-semibold text-3xl">
                                ChatBot
                            </div>
                            <div className="text-blue-900 font-semibold">
                                ElitVetCare
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex  justify-between">
                            <div className="container flex gap-20">
                                <div className="message-box">
                                    <div
                                        className="message w-80 p-4 text-center bg-blue-500 text-lg rounded-lg mt-4"
                                        id="message1"
                                    ></div>
                                    <div
                                        className="message w-60 p-4 text-center bg-blue-500 text-lg rounded-lg mt-8"
                                        id="message1"
                                    ></div>
                                    <div
                                        className="message w-40 p-4 text-center bg-blue-500 text-lg rounded-lg mt-8"
                                        id="message1"
                                    ></div>
                                </div>
                            </div>
                            <div
                                className="w-72 h-16 p-4 text-center bg-blue-400 bg-opacity-60 text-white text-lg rounded-lg relative top-52 mb-4"
                                id="message2"
                            ></div>
                        </div>
                    </div>
                    <div className=" flex  rounded-full border-4 border-[#0000002f] shadow-lg mt-56">
                        <div className=" mx-3 px-1 bg-white  flex items-center">
                            <input
                                type="text"
                                id="input"
                                placeholder="Vui lòng nhập câu hỏi ..."
                                className=" flex items-start  bg-transparent outline-none border-none "
                            />
                        </div>
                        <div className="mx-96 flex items-center my-">
                            <button
                                className="px-28 text-blue-600"
                                onClick={sendMessage}
                            >
                                <span class="material-symbols-outlined">
                                    send
                                </span>
                            </button>
                        </div>
                    </div>
                    <i className="block text-center mt-4 text-xs text-gray-500">
                        Chatbot UPI Verion 1.3.1. Bản quyền 2023. Đại học Duy
                        Tân , Sinh viên Gruop_8 , Captone_1 chuyên ngành CMU
                        phát triển
                    </i>
                </div>
            </div>
        </div>
    );
};

export default ChatBot;
