import React, { useState } from "react";
import image from "../ChatBot/ChatBot.png";

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        if (newMessage) {
            setMessages([...messages, { text: newMessage, user: "user" }]);
            setNewMessage("");
        }
    };

    return (
        <div class="bg-[#f8f8f8] w-235 h-450 rounded flex items-stretch mt-1">
            <div class="h-screen flex">
                <div class="w-12 h-full text-center rounded-3xl bg-opacity-70 bg-[#007AFE] shadow-md ">
                    <br />
                    <ul>
                        <li>
                            <span class="material-symbols-outlined text-gray-800 p1">
                                smart_toy
                            </span>
                        </li>
                        <li>
                            <span class="material-symbols-outlined">home</span>
                        </li>
                        <li>
                            <span class="material-symbols-outlined">chat</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-3/12 ">
                <div className="Service w-235 h-full text-left rounded-r-3xl bg-opacity-70 bg-[#00000027] shadow-md p-2">
                    <h2> Dịch vụ Chatbot của EliteVetCare</h2>
                    <p className="">
                        Một dịch vụ chatbot có thể giúp bạn có thông tin về:
                    </p>
                    <ul className="p-4">
                        <li>1. Sự sẵn có của sách.</li>
                        <li>2. Vị trí của thư viện.</li>
                        <li>3. Ngày mượn và ngày trả sách.</li>
                        <li>
                            4. Thông tin về tiền phạt cho việc mượn sách trễ
                            hạn.
                        </li>
                        <li>5. Và nhiều thông tin khác</li>
                    </ul>

                    <p className="p-4">
                        Như vậy, chatbot này có thể giúp đơn giản hóa quá trình
                        tương tác giữa người dùng và thư viện UPI.
                    </p>
                </div>
            </div>
            <div className="w-9/12">
                <div className="w-705 h-full p-16 bg-[#E6EBFB] rounded-2xl shadow-md border-4 border-[#00000027]">
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
                    <div className=" flex justify-center rounded-3xl border-4 border-[#00000065] mt-56">
                        <div className="flex items-center border-r-black">
                            <div className="w-166 h-14 px-4 bg-[#E6EBFB] rounded-lg text-l">
                                <input
                                    type="text"
                                    id="input"
                                    placeholder="Vui lòng nhập câu hỏi..."
                                    className="w-full h-full bg-transparent outline-none border-none"
                                />
                            </div>
                            <div className="ml-4">
                                <button className="w-19 h-9 border-none outline-none rounded-md text-center bg-[#E6EBFB] text-blue-900 font-semibold cursor-pointer text-lg">
                                    <span class="material-symbols-outlined">
                                        send
                                    </span>
                                </button>
                            </div>
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
