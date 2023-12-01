import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo, faDiamondTurnRight, faMars, faVenus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";
import Pagination from "../../components/Pagination/Pagination";
import {Link} from "react-router-dom";
import Search from "../../components/Search/Search";
import * as petService from "../../services/petService"
import {useDispatch, useSelector} from "react-redux";
import {Spinner} from "@material-tailwind/react";
import noDataImg from "../../assets/vectors/no data.svg";
import {toast} from "sonner";
import petTreatmentSlice from "../../redux/slices/petTreatments";

const TrackingPet = () => {
    const accessToken = localStorage.getItem('access-token')
    const dispatch = useDispatch()
    const [loadingBtn, setLoadingBtn] = useState(false)
    const {petTreatments, loading, activeTab, pagination, filters} = useSelector(
        (state) => state.petTreatment
    );
    const { setPetTreatments, setPagination, setActiveTab, setFilters, setLoading } = petTreatmentSlice.actions

    const [showModal, setShowModal] = useState(false);
    const [petTreatment, setPetTreatment] = useState({})
    const handleShowModal = (e) => {
        const id = parseInt(e.target.closest('ul').getAttribute("data-id"))
        setShowModal(!showModal);
        setPetTreatment(petTreatments.filter(item => item.id === id)[0])
    }
    const handleAccept = async (treatmentId) => {
        setLoadingBtn(true)
        const res = await petService.acceptTreatment(accessToken, treatmentId)
        if (res.statusCode === 200) {
            setLoadingBtn(false)
            setShowModal(!showModal)
            dispatch(setLoading(true))
            const now = new Date()
            toast.message("Thành công", {
                description: `Hồ sơ đã được tiếp nhận lúc ${now}`
            })
        } else {
            setLoadingBtn(false)
            toast.error("Có lỗi. Vui lòng thử lại sau")
        }
    }

    useEffect(() => {
        (async () => {
            const res = await petService.getTreatment(accessToken, {...filters})
            if (res.statusCode === 200) {
                dispatch(setPetTreatments(res.response.data))
                const {currentPage, lastPage} = res.response
                dispatch(setPagination({
                    page: currentPage,
                    totalPages: lastPage
                }))
                dispatch(setLoading(false))
            }
        })()
    }, [accessToken, filters, showModal]);

    const handleChangeTab = (tab) => {
        dispatch(setActiveTab(tab));
        const newFilters = tab > 0 ? {...filters, status: tab} : {...filters, page: 1, status: 2};
        dispatch(setLoading(true));
        dispatch(setFilters(newFilters));
    }
    const handlePageChange = (newPage) => {
        dispatch(setLoading(true))
        dispatch(setFilters({
            ...filters,
            page: newPage
        }))
    }

    const handleSearchChange = (searchValue) => {
        dispatch(setLoading(true))
        dispatch(setFilters({
            ...filters,
            page: 1,
            search: searchValue
        }))
    }

    const handleChangeSelect = (type, value) => {
        dispatch(setLoading(true))
        if (value !== "Tất cả") {
            type === "species" ?
                dispatch(setFilters({
                    ...filters,
                    page: 1,
                    species: value
                })) :
                dispatch(setFilters({
                    ...filters,
                    page: 1,
                    breed: value
                }))
        } else {
            dispatch(setFilters({
                ...filters,
                page: 1,
                species: null,
                breed: null
            }))
        }
    }

    return (
        <>
            <div className="w-[78%] bg-white py-4 px-8 shadow-2xl">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-medium text-primaryColor text-start mb-4">Hồ sơ điều trị thú cưng</h1>
                    <Search title="Tìm theo tên thú cưng" handleSearchChange={handleSearchChange}/>
                    <div className="space-x-3">
                        <select
                            onChange={e => handleChangeSelect("species", e.target.value)}
                            className="px-4 py-2 rounded-lg text-sm bg-gray-50 border-2 border-gray-300 focus:outline-primaryColor hover:bg-gray-200">
                            <option value="Tất cả">Loại: Tất cả</option>
                            <option value="Chó">Chó</option>
                            <option value="Mèo">Mèo</option>
                        </select>
                        <select
                            onChange={e => handleChangeSelect("breed", e.target.value)}
                            className="px-4 py-2 rounded-lg text-sm bg-gray-50 border-2 border-gray-300 focus:outline-primaryColor hover:bg-gray-200">
                            <option value="Tất cả">Giống loài: Tất cả</option>
                            <option value="Bulldog">Bulldog</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Mèo Ashare">Mèo Ashare</option>
                            <option value="Siberia">Siberia</option>
                            <option value="Chihuahua">Chihuahua</option>
                            <option value="Tam thể">Tam thể</option>
                        </select>
                    </div>
                </div>
                <ul className="flex justify-center my-4">
                    <li
                        className={`${activeTab === 1 && "border-b-primaryColor"} py-1.5 mr-10 w-40 border-b-4 cursor-pointer hover:border-b-primaryColor hover:transition-all hover:duration-300`}
                        onClick={() => handleChangeTab(1)}>Đang
                        chờ duyệt
                    </li>
                    <li
                        className={`${activeTab === 2 && "border-b-primaryColor"} py-1.5 mr-10 w-40 border-b-4 cursor-pointer hover:border-b-primaryColor hover:transition-all hover:duration-300`}
                        onClick={() => handleChangeTab(2)}>Đã
                        nhận
                    </li>
                </ul>

                <ul className="grid grid-cols-12 gap-4 mt-6 py-2 border-b-2 bg-gray-50">
                    <li className="col-span-2 font-bold">Ảnh</li>
                    <li className="col-span-2 font-bold">Tên thú cưng</li>
                    <li className="col-span-1 font-bold">Loài</li>
                    <li className="col-span-2 font-bold">Giống</li>
                    <li className="col-span-1 font-bold">Tuổi</li>
                    <li className="col-span-3 font-bold">Tên chủ</li>
                    <li className="col-span-1 font-bold">Chi tiết</li>
                </ul>
                {loading ? (
                    <div className="h-full">
                        <Spinner className="w-10 h-10 mx-auto mt-60" color="blue"/>
                    </div>
                ) : (
                    petTreatments.length > 0 ? (
                        petTreatments.map((item) => (
                            <ul
                                key={item.id}
                                data-id={item.id}
                                className="grid grid-cols-12 gap-4 py-2 border-b-2 justify-items-center items-center odd:bg-gray-50">
                                <li className="col-span-2">
                                    <img
                                        src={item?.pet?.avatar}
                                        alt="anh thu cung" className="w-16 h-16 object-cover rounded"/>
                                </li>
                                <li className="col-span-2">{item?.pet?.name}</li>
                                <li className="col-span-1">{item?.pet?.species}</li>
                                <li className="col-span-2">{item?.pet?.breed}</li>
                                <li className="col-span-1">{item?.pet?.age} tháng</li>
                                <li className="col-span-3">{item?.pet?.owner?.fullName}</li>
                                <motion.li whileHover={{scale: 1.2}}
                                           className="col-span-1 text-xl text-gray-400 hover:text-primaryColor"
                                           onClick={handleShowModal}
                                >
                                    <FontAwesomeIcon icon={faCircleInfo}/></motion.li>
                            </ul>
                        ))
                    ) : (
                        <div className="w-full h-[75%] flex justify-center items-center flex-col">
                            <img src={noDataImg} alt="anh" className="w-36 h-36 text-primaryColor mr-8"></img>
                            <h2 className="text-xl font-medium mt-6 mb-2">Không có hồ sơ nào</h2>
                            <p className="text-gray-400 w-[40%]">Hiện tại phòng khám của bạn chưa có chưa có hồ sơ điều
                                trị nào của thú cưng được gửi lên</p>
                        </div>
                    )
                )}
                {(petTreatments.length > 6 && pagination.page !== 1) && <Pagination pagination={pagination} onPageChange={handlePageChange}/>}
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
                                    <div className="flex flex-col p-4">
                                        <p className="font-medium">Chủ: <span
                                            className="font-normal">{petTreatment?.pet?.owner?.fullName}</span></p>
                                        <p className="font-medium">Số điện thoại: <span
                                            className="font-normal">{petTreatment?.pet?.owner?.phone}</span></p>
                                    </div>
                                    <div className="">
                                    </div>
                                    <div className="flex justify-between items-center p-4 shadow-2xl rounded-2xl">
                                        <div className="flex flex-col text-start">
                                            <span className="text-lg font-bold">{petTreatment?.pet?.name}</span>
                                            <p className="w-[300px] text-normal truncate">Loài: {petTreatment?.pet?.species}</p>
                                            <p className="w-[300px] text-normal truncate">Tuổi: {petTreatment?.pet?.age} tháng</p>
                                        </div>
                                        {petTreatment?.pet?.gender === "Đực" ? (
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
                                         src={petTreatment?.pet?.avatar}
                                         alt="anh thu cung"/>
                                </div>
                            </div>
                            {petTreatment?.dateAccepted === null ? (
                                <motion.div whileHover={{scale: 1.1}} className="mb-6">
                                    <button className="py-2 px-4 bg-primaryColor text-white rounded hover:bg-blue-600"
                                            onClick={() => handleAccept(petTreatment?.id)}>
                                        {loadingBtn ? (
                                            <div className="flex justify-center items-center">
                                                <Spinner className="h-6 w-6 mr-4"/>
                                                Đang xử lý...
                                            </div>
                                        ) : (
                                            <span>Tiếp nhận hồ sơ</span>
                                        )}
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div whileHover={{scale: 1.1}} className="py-6">
                                    <Link to={`/vet/pet-advice/${petTreatment?.pet?.id}`}
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