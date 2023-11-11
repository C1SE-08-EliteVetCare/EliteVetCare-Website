import React, {useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiamondTurnRight, faEdit, faMars, faVenus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const PetProfile = () => {
    const selectPet = useSelector((state) => state.pets.selectedPet);
    const avaterRef = useRef();
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="w-[78%] h-fit bg-white py-4 px-8 shadow-2xl">
                <div className="flex justify-between">
                    <h1 className="text-xl font-medium text-primaryColor text-start mb-4">Hồ sơ thú cưng</h1>
                    <motion.button whileHover={{scale: 1.1}} className="text-primaryColor hover:text-blue-700"
                                   onClick={() => setShowModal(!showModal)}>
                        <FontAwesomeIcon icon={faEdit} className="mx-2"/>
                        <span>Chỉnh sửa</span>
                    </motion.button>
                </div>
                <div className="flex justify-around items-center">
                    <div>
                        <div className="flex justify-between items-center p-4 shadow-2xl rounded-2xl">
                            <div className="flex flex-col text-start">
                                <span className="text-lg font-bold">{selectPet.name}</span>
                                <p className="w-[300px] text-normal truncate">Loài: {selectPet.species}</p>
                                <p className="w-[300px] text-normal truncate">Tuổi: {selectPet.age} tháng</p>
                            </div>
                            {selectPet.gender === "Đực" ? (
                                <FontAwesomeIcon className="bg-primaryColor p-2 rounded-md text-white" icon={faMars}/>
                            ) : (
                                <FontAwesomeIcon className="bg-pink-500 p-2 rounded-md text-white" icon={faVenus}/>
                            )}
                        </div>
                        <h2 className="text-xl font-medium text-primaryColor mt-9">Thông số chi tiết</h2>
                        <ul className="mt-2 grid grid-cols-3 gap-2">
                            <li className="flex flex-col p-2 bg-green-100 rounded-xl shadow-md">
                                <h3>Giống</h3>
                                <span className="font-bold text-green-900">{selectPet.breed}</span>
                            </li>
                            <li className="flex flex-col p-2 bg-green-100 rounded-xl shadow-md">
                                <h3>Cân nặng</h3>
                                <span className="font-bold text-green-900">{selectPet.weight} kg</span>
                            </li>
                            <li className="flex flex-col p-2 bg-green-100 rounded-xl shadow-md">
                                <h3>Màu lông</h3>
                                <span className="font-bold text-green-900">{selectPet.furColor}</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-medium text-primaryColor p-4">Hình ảnh</h2>
                        <img className="w-[275px] h-72 object-cover rounded-2xl"
                             src={selectPet.avatar}
                             alt="anh thu cung"/>
                    </div>
                </div>
                <div className="w-fit mx-auto p-4 mt-9">
                    <Link to="/pet-owner/pet-condition/12345" className="text-xl text-primaryColor hover:text-blue-700">
                        Tình trạng của thú cưng này
                        <FontAwesomeIcon className="ml-2" icon={faDiamondTurnRight}/>
                    </Link>
                </div>
            </div>
            {/* Modal edit*/}
            {showModal && (
                <div
                    className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-900 bg-opacity-50">
                    <div className="relative min-w-[50%] max-h-full">
                        <div
                            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div
                                className="flex items-start justify-between py-4 px-6 border-b border-gray-300 rounded-t">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Chỉnh sửa hồ sơ</h3>
                                <button type="button"
                                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                                        onClick={() => setShowModal(!showModal)}
                                >
                                    <FontAwesomeIcon className="text-2xl" icon={faXmark}/>
                                </button>
                            </div>
                            <div className="px-6 py-6 lg:px-8">
                                <form action="#" className="flex justify-between items-center">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="">
                                            <label className="block text-start mb-2 text-sm font-medium text-gray-900">Tên
                                                thú cưng</label>
                                            <input type="text"
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                   placeholder="" required/>
                                        </div>
                                        <div>
                                            <label
                                                className="block text-start mb-2 text-sm font-medium text-gray-900">Loài</label>
                                            <input type="text" placeholder=""
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                   required/>
                                        </div>
                                        <div>
                                            <label
                                                className="block text-start mb-2 text-sm font-medium text-gray-900">Giống</label>
                                            <input type="text"
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                   placeholder="" required/>
                                        </div>
                                        <div>
                                            <label
                                                className="block text-start mb-2 text-sm font-medium text-gray-900">Tuổi</label>
                                            <input type="text" placeholder=""
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                   required/>
                                        </div>
                                        <div>
                                            <label className="block text-start mb-2 text-sm font-medium text-gray-900">Màu
                                                lông</label>
                                            <input type="text"
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                   placeholder="" required/>
                                        </div>
                                        <div className="">
                                            <label className="block text-start mb-2 text-sm font-medium text-gray-900">Cân
                                                nặng</label>
                                            <input type="text" placeholder=""
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                   required/>
                                        </div>
                                        <button type="submit"
                                                className="col-span-2 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Lưu
                                            thay đổi
                                        </button>
                                    </div>
                                    <div className="">
                                        <h2 className="p-2 text-xl font-medium text-primaryColor">Hình ảnh</h2>
                                        <input hidden type="file" name="file" id="file" ref={avaterRef}/>
                                        <div className="relative">
                                            <img
                                                className="w-[275px] h-72 object-cover rounded-2xl mb-6 hover:blur-sm hover:cursor-pointer"
                                                src="https://ph-files.imgix.net/75c2cda9-e2c3-4bcd-a0b1-0595daba1844.png?auto=format&fit=crop"
                                                alt="anh thu cung" onClick={() => avaterRef.current.click()}
                                            />
                                            <FontAwesomeIcon className="absolute top-[50%] text-2xl text-primaryColor"
                                                             icon={faEdit}
                                                             onClick={() => avaterRef.current.click()}/>
                                        </div>
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

export default PetProfile;
