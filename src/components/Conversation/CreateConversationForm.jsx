import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {addConversation} from "../../redux/slices/conversation";
import AuthContext from "../../context/authContext";

const CreateConversationForm = ({setShowModal}) => {
    const dispatch = useDispatch()
    const {auth} = useContext(AuthContext)

    return (
        <div
            className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-900 bg-opacity-50">
            <div className="relative min-w-[40%] max-h-full">
                <div
                    className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div
                        className="flex items-start justify-between py-4 px-6 border-b border-gray-300 rounded-t">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Cuộc trò chuyện mới</h3>
                        <button type="button"
                                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                                onClick={() => setShowModal(false)}
                        >
                            <FontAwesomeIcon className="text-2xl" icon={faXmark}/>
                        </button>
                    </div>
                    <div className="px-6 py-6 lg:px-8">
                        <form action="#" className="flex justify-between items-center flex-col space-y-6">
                            <div className="flex flex-col w-full">
                                <label className="font-medium text-start mb-1.5">Người nhận</label>
                                <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                                    placeholder=""/>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="font-medium text-start mb-1.5">Nội dung tin nhắn</label>
                                <textarea
                                    className="h-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"/>
                            </div>
                            <div className="flex space-x-2 w-full justify-end">
                                <button className="bg-gray-200 py-1.5 px-4 rounded hover:bg-gray-300"
                                        onClick={() => setShowModal(false)}>Hủy
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(addConversation({
                                            id: Math.random(),
                                            createdAt: '',
                                            creator: {
                                                id: auth.id,
                                                email: auth.email,
                                                fullName: auth.fullName,
                                                avatar: auth.avatar
                                            },
                                            recipient: {
                                                id: 1,
                                                email: '',
                                                fullName: '',
                                                avatar: ''
                                            },
                                            lastMessageSent: {
                                                id: 1,
                                                content: 'ok',
                                                createdAt: ''
                                            }
                                        }))
                                    }}
                                    className="bg-primaryColor text-white py-1.5 px-9 rounded hover:bg-blue-600">Gửi
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateConversationForm;
