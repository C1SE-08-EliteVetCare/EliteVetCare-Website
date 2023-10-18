import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo, faDiamondTurnRight, faMars, faSearch, faVenus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";
import Pagination from "../../components/Pagination/Pagination";
import {Link} from "react-router-dom";

const TrackingPet = () => {
    const [showModal, setShowModal] = useState(false);
    const [pet, setPet] = useState({})
    const [tab, setTab] = useState(2)
    const gender = 1;
    const listPetExample = [
        {
            id: 1,
            name: "TiTi",
            breed: "Bulldog",
            age: "1y 4m",
            ownerName: "Dương Quang Quốc",
            image: "https://ph-files.imgix.net/75c2cda9-e2c3-4bcd-a0b1-0595daba1844.png?auto=format&fit=crop",
            status: 1,
        },
        {
            id: 2,
            name: "TiTi",
            breed: "Bulldog",
            age: "1y 4m",
            ownerName: "Dương Quang Quốc",
            image: "https://ph-files.imgix.net/75c2cda9-e2c3-4bcd-a0b1-0595daba1844.png?auto=format&fit=crop",
            status: 2,
        },
        {
            id: 3,
            name: "TiTi",
            breed: "Bulldog",
            age: "1y 4m",
            ownerName: "Dương Quang Quốc",
            image: "https://ph-files.imgix.net/75c2cda9-e2c3-4bcd-a0b1-0595daba1844.png?auto=format&fit=crop",
            status: 1,
        },
        {
            id: 4,
            name: "TiTi",
            breed: "Bulldog",
            age: "1y 4m",
            ownerName: "Dương Quang Quốc",
            image: "https://ph-files.imgix.net/75c2cda9-e2c3-4bcd-a0b1-0595daba1844.png?auto=format&fit=crop",
            status: 2,
        },
        {
            id: 5,
            name: "TiTi",
            breed: "Bulldog",
            age: "1y 4m",
            ownerName: "Dương Quang Quốc",
            image: "https://ph-files.imgix.net/75c2cda9-e2c3-4bcd-a0b1-0595daba1844.png?auto=format&fit=crop",
            status: 1,
        },
        {
            id: 6,
            name: "TiTi",
            breed: "Bulldog",
            age: "1y 4m",
            ownerName: "Dương Quang Quốc",
            image: "https://ph-files.imgix.net/75c2cda9-e2c3-4bcd-a0b1-0595daba1844.png?auto=format&fit=crop",
            status: 1,
        }
    ];
    const handleShowModal = (e) => {
        const id = parseInt(e.target.closest('ul').getAttribute("data-id"))
        setShowModal(!showModal);
        setPet(listPetExample.filter(item => item.id === id)[0])
    }
    const handleApcept = (e) => {
        const copiedPets = [...listPetExample];
        const petIndex = listPetExample.findIndex((item) => item.id === pet.id);
        if (petIndex >= 0) {
            copiedPets[petIndex] = {...copiedPets[petIndex], status: 2}
            setPet({...pet, status: 2})
        }
        // listPetExample.map((item) => {
        //     if (item.id === pet.id) {
        //         return {...pet, status: 2}
        //     }
        //     return item;
        // })
    }
    return (
        <>
            <div className="w-[78%] bg-white py-4 px-8 shadow-2xl">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-medium text-primaryColor text-start mb-4">Hồ sơ thú cưng</h1>
                    <motion.div whileHover={{scale: 1.1}} className="mx-auto w-fit px-4 py-2 rounded-lg bg-bgColor">
                        <input type="text" placeholder="Tìm theo tên thú cưng"
                               className="bg-transparent outline-none px-2"/>
                        <FontAwesomeIcon icon={faSearch}/>
                    </motion.div>
                    <div className="space-x-3">
                        <select
                            className="px-5 py-2 rounded-lg border-2 border-gray-400 bg-bgColor focus:outline-primaryColor hover:bg-gray-200">
                            <option>Loại: Tất cả</option>
                            <option>Chó</option>
                            <option>Mèo</option>
                        </select>
                        <select
                            className="px-5 py-2 rounded-lg border-2 border-gray-400 bg-bgColor focus:outline-primaryColor hover:bg-gray-200">
                            <option>Giống loài: Tất cả</option>
                            <option>Bulldog</option>
                            <option>Alaska</option>
                        </select>
                    </div>
                </div>
                <ul className="flex justify-center my-4">
                    <li
                        className={`${tab === 1 && "border-b-primaryColor"} py-1.5 mr-10 w-40 border-b-4 cursor-pointer hover:border-b-primaryColor hover:transition-all hover:duration-300`}
                        onClick={() => setTab(1)}>Đang
                        chờ duyệt
                    </li>
                    <li
                        className={`${tab === 2 && "border-b-primaryColor"} py-1.5 mr-10 w-40 border-b-4 cursor-pointer hover:border-b-primaryColor hover:transition-all hover:duration-300`}
                        onClick={() => setTab(2)}>Đã
                        nhận
                    </li>
                </ul>

                <ul className="grid grid-cols-12 gap-4 mt-6 py-2 border-b-2">
                    <li className="col-span-2 font-bold">Ảnh</li>
                    <li className="col-span-2 font-bold">Tên thú cưng</li>
                    <li className="col-span-2 font-bold">Giống loài</li>
                    <li className="col-span-2 font-bold">Tuổi</li>
                    <li className="col-span-3 font-bold">Tên chủ</li>
                    <li className="col-span-1 font-bold">Chi tiết</li>
                </ul>
                {listPetExample.map((item, index) => (
                    item.status === tab &&
                    <ul
                        key={item.id}
                        data-id={item.id}
                        className="grid grid-cols-12 gap-4 py-2 border-b-2 justify-items-center items-center">
                        <li className="col-span-2">
                            <img
                                src={item.image}
                                alt="anh thu cung" className="w-16 h-16 object-cover rounded"/>
                        </li>
                        <li className="col-span-2">{item.name}</li>
                        <li className="col-span-2">{item.breed}</li>
                        <li className="col-span-2">{item.age}</li>
                        <li className="col-span-3">{item.ownerName}</li>
                        <motion.li whileHover={{scale: 1.2}}
                                   className="col-span-1 text-xl text-gray-400 hover:text-primaryColor"
                                   onClick={handleShowModal}
                        >
                            <FontAwesomeIcon icon={faCircleInfo}/></motion.li>
                    </ul>
                ))}
                {listPetExample.length > 6 && <Pagination/>}
            </div>

            {/*Modal*/}
            {showModal && (
                <div
                    className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-900 bg-opacity-50">
                    <div className="relative min-w-[50%] max-h-full">
                        <div
                            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div
                                className="flex items-start justify-between py-4 px-6 border-b border-gray-300 rounded-t">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Hồ sơ chi tiết</h3>
                                <button type="button"
                                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                                        onClick={() => setShowModal(!showModal)}
                                >
                                    <FontAwesomeIcon className="text-2xl" icon={faXmark}/>
                                </button>
                            </div>
                            <div className="flex justify-around items-center mb-8">
                                <div>
                                    <div className="p-4">
                                        <span className="font-medium">Chủ: </span> {pet.ownerName}
                                    </div>
                                    <div className="flex justify-between items-center p-4 shadow-2xl rounded-2xl">
                                        <div className="flex flex-col text-start">
                                            <span className="text-lg font-bold">{pet.name}</span>
                                            <p className="w-[300px] text-normal truncate">Loài: Chó</p>
                                            <p className="w-[300px] text-normal truncate">Tuổi: {pet.age}</p>
                                        </div>
                                        {gender === 1 ? (
                                            <FontAwesomeIcon className="bg-primaryColor p-2 rounded-md text-white"
                                                             icon={faMars}/>
                                        ) : (
                                            <FontAwesomeIcon className="bg-pink-500 p-2 rounded-md text-white"
                                                             icon={faVenus}/>
                                        )}
                                    </div>
                                    <h2 className="text-xl font-medium text-primaryColor mt-9">Thông số chi tiết</h2>
                                    <ul className="mt-2 grid grid-cols-3 gap-2">
                                        <li className="flex flex-col p-2 bg-green-100 rounded-xl shadow-md">
                                            <h3>Giống</h3>
                                            <span className="font-bold text-green-900">Bulldog</span>
                                        </li>
                                        <li className="flex flex-col p-2 bg-green-100 rounded-xl shadow-md">
                                            <h3>Cân nặng</h3>
                                            <span className="font-bold text-green-900">42 kg</span>
                                        </li>
                                        <li className="flex flex-col p-2 bg-green-100 rounded-xl shadow-md">
                                            <h3>Màu lông</h3>
                                            <span className="font-bold text-green-900">Trắng xám</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-xl font-medium text-primaryColor p-4">Hình ảnh</h2>
                                    <img className="w-[275px] h-72 object-cover rounded-2xl"
                                         src={pet.image}
                                         alt="anh thu cung"/>
                                </div>
                            </div>
                            {pet.status === 1 ? (
                                <motion.div whileHover={{scale: 1.1}} className="mb-6">
                                    <button className="py-2 px-4 bg-primaryColor text-white rounded hover:bg-blue-600"
                                            onClick={handleApcept}>Chấp nhận hồ sơ
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div whileHover={{scale: 1.1}} className="py-6">
                                    <Link to="/vet/pet-advice/12345"
                                          className="text-lg font-medium text-primaryColor hover:text-blue-600">
                                        Xem tình trạng và đánh giá
                                    </Link>
                                    <FontAwesomeIcon className="text-primaryColor px-2" icon={faDiamondTurnRight}/>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TrackingPet;