import React, {useEffect, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiamondTurnRight, faEdit, faMars, faVenus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";
import {Link, useParams} from "react-router-dom";
import * as petService from "../../services/petService"
import {Spinner} from "@material-tailwind/react";
import {toast} from "sonner";

const PetProfile = () => {
    const formData = new FormData()
    const [selectPet, setSelectPet] = useState({
        name: "",
        species: "",
        age: 0,
        breed: 0,
        weight: "",
        furColor: "",
        avatar: "",
    })
    const [petUpdate, setPetUpdate] = useState({
        name: "",
        species: "",
        age: 0,
        breed: 0,
        weight: "",
        furColor: "",
        avatar: "",
    })
    const [loading, setLoading] = useState(true)
    const [upLoading, setUpLoading] = useState(false)
    const accessToken = localStorage.getItem('access-token')
    const petId = useParams().id
    const avatarRef = useRef();
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        (async () => {
            const petDetail = await petService.getPet(accessToken, petId)
            if (petDetail.statusCode === 200) {
                setSelectPet(petDetail.response)
                setPetUpdate(petDetail.response)
                setLoading(false)
            }
        })()
    }, [loading])

    const handleClose = () => {
        setShowModal(!showModal)
        setPetUpdate(selectPet)
    }

    const fieldsUpdate = [
        { key: 'name', value: petUpdate.name, condition: selectPet.name !== petUpdate.name },
        { key: 'species', value: petUpdate.species, condition: selectPet.species !== petUpdate.species },
        { key: 'breed', value: petUpdate.breed, condition: selectPet.breed !== petUpdate.breed },
        { key: 'gender', value: petUpdate.gender, condition: selectPet.gender !== petUpdate.gender },
        { key: 'age', value: petUpdate.age, condition: selectPet.age !== petUpdate.age },
        { key: 'weight', value: petUpdate.weight, condition: selectPet.weight !== petUpdate.weight },
        { key: 'furColor', value: petUpdate.furColor, condition: selectPet.furColor !== petUpdate.furColor },
        { key: 'avatar', value: petUpdate.avatar, condition: petUpdate.avatar !== selectPet.avatar }
    ];

    const updateProfile = async () => {
        fieldsUpdate.forEach(field => {
            if (field.condition) {
                formData.append(field.key, field.value);
            }
        });
        // for (let pair of formData.entries()) {
        //     console.log(pair[0] + ': ' + pair[1]);
        // }

        // Check empty form data
        const formDataIterator = formData.entries();
        const firstEntry = formDataIterator.next();
        if (firstEntry.done) {
            setUpLoading(false)
            toast.info("Bạn chưa cập nhật thông tin mới nào")
        }

        const updateRes = await petService.updateProfile(accessToken, formData, petId)
        if (updateRes.statusCode === 200) {
            toast.success("Cập nhật thành công")
            setShowModal(!showModal)
            setUpLoading(false)
            setLoading(true)
        } else {
            toast.error("Cập nhật không thành công")
            setUpLoading(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUpLoading(true)
        updateProfile()
    }
    return (
        <>
            <div className="w-[78%] h-[520px] bg-white py-4 px-8 shadow-2xl">
                <div className="flex justify-between">
                    <h1 className="text-xl font-medium text-primaryColor text-start mb-4">Hồ sơ thú cưng</h1>
                    <motion.button whileHover={{scale: 1.1}} className="text-primaryColor hover:text-blue-700"
                                   onClick={() => setShowModal(!showModal)}>
                        <FontAwesomeIcon icon={faEdit} className="mx-2"/>
                        <span>Chỉnh sửa</span>
                    </motion.button>
                </div>
                {loading ? (
                    <div className="w-full h-80 flex items-center justify-center">
                        <Spinner className="h-12 w-12" color="blue"/>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-around items-center">
                            <div>
                                <div className="flex justify-between items-center p-4 shadow-2xl rounded-2xl">
                                    <div className="flex flex-col text-start">
                                        <span className="text-lg font-bold">{selectPet.name}</span>
                                        <p className="w-[300px] text-normal truncate">Loài: {selectPet.species}</p>
                                        <p className="w-[300px] text-normal truncate">Tuổi: {selectPet.age} tháng</p>
                                    </div>
                                    {selectPet.gender === "Đực" ? (
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
                            <Link to={`/pet-owner/pet-condition/${selectPet.id}`}
                                  className="text-xl text-primaryColor hover:text-blue-700">
                                Tình trạng của thú cưng này
                                <FontAwesomeIcon className="ml-2" icon={faDiamondTurnRight}/>
                            </Link>
                        </div>
                    </>
                )}
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
                                        onClick={handleClose}
                                >
                                    <FontAwesomeIcon className="text-2xl" icon={faXmark}/>
                                </button>
                            </div>
                            <div className="px-6 py-6 lg:px-8">
                                <form onSubmit={(e) => handleSubmit(e)} className="flex justify-between items-center">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="">
                                            <label className="block text-start mb-2 text-sm font-medium text-gray-900">Tên thú cưng</label>
                                            <input type="text"
                                                   value={petUpdate.name}
                                                   onChange={(e) => setPetUpdate({...petUpdate, name: e.target.value})}
                                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                   placeholder="" required/>
                                        </div>
                                        <div>
                                            <label
                                                className="block text-start mb-2 text-sm font-medium text-gray-900">Loài</label>
                                            <input type="text"
                                                   value={petUpdate.species}
                                                   onChange={(e) => setPetUpdate({...petUpdate, species: e.target.value})}
                                                   placeholder=""
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                   required/>
                                        </div>
                                        <div>
                                            <label
                                                className="block text-start mb-2 text-sm font-medium text-gray-900">Giống</label>
                                            <input type="text"
                                                   value={petUpdate.breed}
                                                   onChange={(e) => setPetUpdate({...petUpdate, breed: e.target.value})}
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                   placeholder="" required/>
                                        </div>
                                        <div>
                                            <label className="block text-start mb-2 text-sm font-medium text-gray-900">Giới tính</label>
                                            <select name="gender" id="gender"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    value={petUpdate.gender}
                                                    onChange={(e) => setPetUpdate({...petUpdate, gender: e.target.value})}
                                            >
                                                <option value="Đực">Đực</option>
                                                <option value="Cái">Cái</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label
                                                className="block text-start mb-2 text-sm font-medium text-gray-900">Tuổi (Theo tháng)</label>
                                            <input type="number" placeholder=""
                                                   value={petUpdate.age}
                                                   onChange={(e) => setPetUpdate({...petUpdate, age: e.target.value})}
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                   required/>
                                        </div>

                                        <div className="">
                                            <label className="block text-start mb-2 text-sm font-medium text-gray-900">Cân nặng (Kg)</label>
                                            <input type="number" placeholder=""
                                                   value={petUpdate.weight}
                                                   onChange={(e) => setPetUpdate({...petUpdate, weight: e.target.value})}
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                   required/>
                                        </div>
                                        <div className="col-span-2">
                                            <label className="block text-start mb-2 text-sm font-medium text-gray-900">Màu lông</label>
                                            <input type="text" placeholder=""
                                                   value={petUpdate.furColor}
                                                   onChange={(e) => setPetUpdate({...petUpdate, furColor: e.target.value})}
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                   required/>
                                        </div>
                                        <button type="submit"
                                                className="col-span-2 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 outline-none focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                            {upLoading ? (
                                                <div className="flex items-center justify-center">
                                                    <Spinner className="h-4 w-4 mr-4"/>
                                                    <span>Đang lưu....</span>
                                                </div>
                                            ) : (
                                                <span>Lưu thay đổi</span>
                                            )}
                                        </button>

                                    </div>
                                    <label className="">
                                        <h2 className="p-2 text-xl font-medium text-primaryColor">Hình ảnh</h2>
                                        <div className="relative border-4 border-dashed rounded-2xl cursor-pointer">
                                            <input className="hidden" type="file" name="file" id="file" ref={avatarRef} onChange={() => setPetUpdate({
                                                ...petUpdate,
                                                avatar: avatarRef.current.files[0]
                                            })}/>
                                            <img
                                                className="w-[275px] h-72 object-cover rounded-2xl hover:blur-sm hover:cursor-pointer"
                                                src={`${typeof petUpdate.avatar === "string" ? petUpdate.avatar : URL.createObjectURL(petUpdate.avatar)}`}
                                                alt="anh thu cung"
                                            />
                                            <FontAwesomeIcon className="absolute top-[50%] text-2xl text-primaryColor"
                                                             icon={faEdit}
                                            />
                                            <span className="block my-1">Click để thay đổi</span>
                                        </div>
                                    </label>
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
