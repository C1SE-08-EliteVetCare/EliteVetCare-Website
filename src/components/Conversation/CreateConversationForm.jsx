import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faXmark} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {createConversationsThunk} from "../../redux/slices/conversation";
import HeadlessTippy from '@tippyjs/react/headless';
import {useDebounce} from "../../hook/useDebounce";
import * as userService from "../../services/userService"
import {motion} from "framer-motion";
import {Spinner} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";

const CreateConversationForm = ({setShowModal}) => {
    const navigate = useNavigate()
    const accessToken = localStorage.getItem('access-token')
    const {conversations} = useSelector((state) => state.conversation)
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')
    const searchDebounce = useDebounce(searchValue, 1000)
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([])
    const [selectedUser, setSelectedUser] = useState({})
    const [content, setContent] = useState('')

    useEffect(() => {
        const fetchApiVet = async () => {
            const result = await userService.getAllVet({search: searchDebounce});
            setSearchResult(result.response)
            setShowResult(true)
            setLoading(false)
        }
        if (searchDebounce !== '') {
            fetchApiVet()
        } else {
            setShowResult(false)
            setLoading(false)
        }
    }, [searchDebounce]);

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setLoading(true)
            setSearchValue(searchValue);
        }
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleSelectUser = (item) => {
        setSelectedUser(item)
        setShowResult(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const existConversation = conversations.find((item) => item.recipient.email === selectedUser.email)

        if (existConversation) {
            setShowModal(false)
            navigate(`/conversations/${existConversation.id}`)
        } else {
            dispatch(createConversationsThunk({accessToken, email: selectedUser.email, message: content}))
                .then((data) => {
                    console.log(data)
                    console.log('done');
                    setShowModal(false);
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

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
                        <form onSubmit={handleSubmit} className="flex justify-between items-center flex-col space-y-6">
                            <div className="flex flex-col w-full">
                                <div className="flex items-center gap-x-2 justify-between">
                                    <label className="font-medium text-start mb-1.5">Người nhận</label>
                                    <button className="mb-1.5 py-1 px-2 border border-gray-300 rounded-md">Đề xuất
                                    </button>
                                </div>
                                <HeadlessTippy
                                    interactive
                                    visible={showResult && searchResult.length > 0}
                                    placement="bottom"
                                    render={(attrs) => (
                                        <div tabIndex="-1" {...attrs}
                                             className="flex flex-col gap-2 w-full py-2 bg-white drop-shadow-2xl rounded-md">
                                            <h4 className="px-[12px] pb-2 font-medium border-b-2">Tài khoản</h4>
                                            <div className="max-h-[300px] overflow-y-auto">
                                                {searchResult.map((item) => (
                                                    <div
                                                        className="flex gap-4 py-2 px-6 items-center hover:bg-gray-100 cursor-pointer"
                                                        key={item.id}
                                                        onClick={() => handleSelectUser(item)}
                                                    >
                                                        <img src={item?.avatar} alt="avatar"
                                                             className="w-10 h-10 rounded-full object-cover"/>
                                                        <div className="flex flex-col items-start">
                                                            <h4 className="font-medium">{item?.fullName}</h4>
                                                            <span
                                                                className="text-sm">Phòng khám: {item?.clinic?.name}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    onClickOutside={handleHideResult}
                                >
                                    <div className="relative">
                                        <input
                                            type="text"
                                            required
                                            className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                                            placeholder="Tên người nhận"
                                            value={searchValue}
                                            onChange={handleChange}
                                        />
                                        <div
                                            className={`${Object.keys(selectedUser).length > 0 ? "block" : "hidden"} absolute top-[5px] bg-blue-50 rounded-md px-4 py-1 shadow left-[10px]`}>
                                            <motion.span whileHover={{scale: 1.3}}
                                                         className="absolute bg-white rounded-full p-1 top-[-5px] right-[-9px]"
                                                         onClick={() => {
                                                             setSearchValue('')
                                                             setSelectedUser({})
                                                         }}
                                            >
                                                <FontAwesomeIcon
                                                    className="block h-3 w-3 text-center justify-items-center"
                                                    icon={faClose}/>
                                            </motion.span>
                                            {selectedUser?.fullName}
                                        </div>
                                        {loading && <Spinner color='blue'
                                                             className="h-6 w-6 absolute right-[20px] bottom-[9px]"/>}
                                    </div>
                                </HeadlessTippy>
                            </div>

                            <div className="flex flex-col w-full">
                                <label className="font-medium text-start mb-1.5">Nội dung tin nhắn</label>
                                <textarea
                                    required
                                    className="h-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                                    placeholder="Nội dung tin nhắn"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                            </div>
                            <div className="flex space-x-2 w-full justify-end">
                                <button className="bg-gray-200 py-1.5 px-4 rounded hover:bg-gray-300"
                                        onClick={() => setShowModal(false)}>Hủy
                                </button>
                                <button
                                    // onClick={(e) => {
                                    //     e.preventDefault()
                                    //     dispatch(addConversation({
                                    //         id: Math.random(),
                                    //         createdAt: '',
                                    //         creator: {
                                    //             id: auth.id,
                                    //             email: auth.email,
                                    //             fullName: auth.fullName,
                                    //             avatar: auth.avatar
                                    //         },
                                    //         recipient: {
                                    //             id: 1,
                                    //             email: '',
                                    //             fullName: '',
                                    //             avatar: ''
                                    //         },
                                    //         lastMessageSent: {
                                    //             id: 1,
                                    //             content: 'ok',
                                    //             createdAt: ''
                                    //         }
                                    //     }))
                                    // }}
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
