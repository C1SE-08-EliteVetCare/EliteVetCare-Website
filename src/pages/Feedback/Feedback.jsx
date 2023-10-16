import React, {useState} from 'react';
import bannerFeedback from "../../assets/images/banner-feedback.png"
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faXmark} from "@fortawesome/free-solid-svg-icons";
import Rate from "../../components/Rate/Rate";

const Feedback = () => {
    const [showModal, setShowModal] = useState(false)
    const [rating, setRating] = useState(0)
    return (
        <>
            <div className="w-full">
                <img className="w-full h-full object-cover" src={bannerFeedback} alt="banner feedback"/>
                <div className="max-w-screen-xl mx-auto my-8">
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-medium text-primaryColor text-start mb-4">Đánh giá nổi bật</h1>
                        <motion.button whileHover={{scale: 1.1}}
                                       className="px-2 rounded text-white bg-primaryColor hover:bg-blue-600"
                                       onClick={() => setShowModal(!showModal)}
                        >
                            <FontAwesomeIcon icon={faPenToSquare} className="mx-2"/>
                            <span>Viết đánh giá</span>
                        </motion.button>
                    </div>
                    <div className="w-full shadow-md mt-6 py-3 px-6 mb-2">
                        <div className="grid grid-cols-12 text-start gap-y-2 p-2">
                            <div className="col-span-9">
                                <div className="flex space-x-4">
                                    <img
                                        src="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"
                                        alt="avatar"
                                        className="w-10 h-10 object-cover rounded-full"/>
                                    <div>
                                        <span>Dương Quang Quốc</span>
                                        <p className="text-sm text-gray-400 mb-2"><span
                                            className="font-medium">Chủ đề:</span> Đánh giá toàn bộ ứng dụng
                                        </p>
                                        <p>Ứng dụng thật tuyệt vời, nhanh mượt, đa dạng chức năng, bác sĩ thân thiện, tư
                                            vấn nhiệt tình Ứng dụng thật tuyệt vời, nhanh mượt, đa dạng chức năng, bác
                                            sĩ thân thiện, tư vấn nhiệt tình</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3 self-start flex justify-center items-center space-x-4">
                                <div className="flex items-center space-x-1">
                                    <Rate rating={5}/>
                                </div>
                                <span className="text-gray-500">23-10-2023 15:30:16</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Modal create feedback*/}
            {showModal && (
                <div
                    className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-900 bg-opacity-50">
                    <div className="relative min-w-[40%] max-h-full">
                        <div
                            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div
                                className="flex items-start justify-between py-4 px-6 border-b border-gray-300 rounded-t">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Viết đánh giá</h3>
                                <button type="button"
                                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                                        onClick={() => setShowModal(!showModal)}
                                >
                                    <FontAwesomeIcon className="text-2xl" icon={faXmark}/>
                                </button>
                            </div>
                            <div className="px-6 py-6 lg:px-8">
                                <form action="#" className="flex justify-between items-center flex-col space-y-6">
                                    <div>
                                        <label className="font-medium mb-1.5">Mức độ hài lòng</label>
                                        <Rate rating={rating} onRating={(rate) => setRating(rate)}
                                              classStyle="text-xl mt-2 px-1"/>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="font-medium text-start mb-1.5">Chủ đề</label>
                                        <input
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder=""/>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="font-medium text-start mb-1.5">Nội dung</label>
                                        <textarea
                                            className="h-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                                    </div>
                                    <div className="flex space-x-2 w-full justify-end">
                                        <button className="bg-gray-200 py-1.5 px-4 rounded hover:bg-gray-300"
                                                onClick={() => setShowModal(!showModal)}>Hủy
                                        </button>
                                        <button
                                            className="bg-primaryColor text-white py-1.5 px-9 rounded hover:bg-blue-600">Gửi
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Feedback;