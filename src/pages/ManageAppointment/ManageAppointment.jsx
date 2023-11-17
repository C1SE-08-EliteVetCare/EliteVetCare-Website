import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo, faXmark} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";
import * as appointmentService from "../../services/appointmentService"
import {useDispatch, useSelector} from "react-redux";
import {setAppointments, setFilters, setLoading, setPagination} from "../../redux/actions/appointments";
import {Spinner} from "@material-tailwind/react";
import noDataImg from "../../assets/vectors/no data.svg";
import {format} from "date-fns";
import Pagination from "../../components/Pagination/Pagination";
import {toast} from "sonner";

const ManageAppointment = () => {
    const accessToken = localStorage.getItem('access-token')
    const {appointments, loading, pagination, filters} = useSelector(
        (state) => state.appointment
    );
    const [loadingBtn, setLoadingBtn] = useState({
        action: 0,
        isLoading: false
    })
    const dispatch = useDispatch()
    const [appointment, setAppointment] = useState({})
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        (async () => {
            const res = await appointmentService.getAppointmentForVet(accessToken, {...filters, limit: 12})
            dispatch(setAppointments(res.response.data))
            const {currentPage, lastPage} = res.response
            dispatch(setPagination({
                page: currentPage,
                totalPages: lastPage
            }))
            dispatch(setLoading(false))
            // console.log(res.response.data)
        })()
    }, [accessToken, dispatch, filters, loading]);

    const handlePageChange = (newPage) => {
        console.log("New page: ", newPage)
        dispatch(setLoading(true))
        dispatch(setFilters({
            ...filters,
            page: newPage
        }))
    }

    const handleChangeStatus = (status) => {
        const newFilters = status > 0 ? {...filters, status: status} : {...filters, page: 1, status: null};
        dispatch(setLoading(true));
        dispatch(setFilters(newFilters));
    }

    const handleShowModal = (e) => {
        const id = parseInt(e.target.closest('ul').getAttribute("data-id"))
        setShowModal(!showModal);
        setAppointment(appointments.filter(item => item.id === id)[0])
    }

    const toggleStatus = async (action, appointId) => {
        console.log('OK')
        console.log(action, appointId)
        if (action === 1) {
            setLoadingBtn({action: 1, isLoading: true})
        } else {
            setLoadingBtn({action: 2, isLoading: true})
        }
        const res = await appointmentService.toggleStatusAppointment(accessToken, appointId, action)
        if (res.statusCode === 200) {
            if (action === 1) {
                toast.message("Cuộc hẹn đã được chấp nhận", {
                    description: `Thời gian: ${format(new Date(appointment.appointmentDate), 'dd/MM/yyyy')} vào lúc ${appointment.appointmentTime}`
                })
                setShowModal(!showModal)
                setLoadingBtn({action: 0, isLoading: false})
                dispatch(setLoading(true))
            } else {
                toast.success("Từ chối cuộc hẹn thành công")
                setShowModal(!showModal)
                setLoadingBtn(false)
                dispatch(setLoading(true))
            }
        } else {
            toast.error("Có lỗi khi xử lý")
        }
    }
    return (<>
        <div className="w-[78%] bg-white py-4 px-8 shadow-2xl">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-medium text-primaryColor text-start mb-4">Danh sách cuộc hẹn</h1>
                <div className="space-x-3">
                    <select
                        className="px-4 py-2 rounded-lg text-sm bg-gray-50 border-2 border-gray-300 focus:outline-primaryColor hover:bg-gray-200">
                        <option>Ngày đặt: Tất cả</option>
                        <option>Mới nhất</option>
                        <option>Cũ nhất</option>
                    </select>
                    <select
                        onChange={(e) => handleChangeStatus(e.target.value)}
                        className="px-4 py-2 rounded-lg text-sm bg-gray-50 border-2 border-gray-300 focus:outline-primaryColor hover:bg-gray-200">
                        <option value={0}>Trạng thái: Tất cả</option>
                        <option value={1}>Đang xử lý</option>
                        <option value={2}>Đã nhận</option>
                        <option value={3}>Đã từ chối</option>
                    </select>`
                    <button
                        className="px-5 py-2 rounded-lg text-sm border-2 border-gray-400 focus:outline-primaryColor hover:bg-gray-200">Xuất
                        file
                    </button>
                </div>
            </div>
            <ul className="grid grid-cols-12 gap-4 mt-6 py-2 border-b-2 bg-gray-50">
                <li className="col-span-3 font-bold">Họ tên</li>
                <li className="col-span-2 font-bold">Số điện thoại</li>
                <li className="col-span-2 font-bold">Ngày</li>
                <li className="col-span-2 font-bold">Thời gian</li>
                <li className="col-span-2 font-bold">Trạng thái</li>
                <li className="col-span-1 font-bold">Chi tiết</li>
            </ul>
            {loading ? (
                <div className="h-full">
                    <Spinner className="w-10 h-10 mx-auto mt-60" color="blue"/>
                </div>
            ) : (
                appointments.length > 0 ? (
                    appointments.map((item) => (
                        <ul key={item.id} data-id={item.id}
                            className="grid grid-cols-12 gap-4 py-2 border-b items-center even:bg-gray-50">
                            <li className="text-sm col-span-3">{item?.petOwner?.fullName}</li>
                            <li className="text-sm col-span-2">{item?.petOwner?.phone}</li>
                            <li className="text-sm col-span-2">{format(new Date(item.appointmentDate), 'dd/MM/yyyy')}</li>
                            <li className="text-sm col-span-2">{item.appointmentTime}</li>
                            {item.status === 1 ? (
                                <li className="text-sm col-span-2 py-1 px-6 bg-yellow-200 rounded-xl">Đang xử
                                    lý</li>) : item.status === 2 ? (
                                <li className="text-sm col-span-2 py-1 px-6 bg-green-400 rounded-xl">Đã nhận</li>) : (
                                <li className="text-sm col-span-2 py-1 px-6 bg-red-400 rounded-xl">Đã hủy</li>)}
                            <motion.li whileHover={{scale: 1.2}}
                                       className="text-xl text-gray-400 col-span-1 hover:text-primaryColor">
                                <FontAwesomeIcon icon={faCircleInfo} onClick={handleShowModal}/>
                            </motion.li>
                        </ul>))
                ) : (
                    <div className="w-full h-[75%] flex justify-center items-center flex-col">
                        <img src={noDataImg} alt="anh" className="w-52 h-52 text-primaryColor mr-8"></img>
                        <h2 className="text-xl font-medium mt-6 mb-2">Không có cuộc hẹn nào</h2>
                        <p className="text-gray-400">Hiện tại phòng khám của bạn chưa có lịch mới nào đuợc đặt</p>
                    </div>
                )
            )}
            {<Pagination pagination={pagination} onPageChange={handlePageChange}/>}
            {/*{listAppointmentExample.length >= 10 && <Pagination/>}*/}
        </div>

        {/*Modal view detail information*/}
        {showModal && (<div
            className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-900 bg-opacity-50">
            <div className="relative min-w-[40%] min-h-[57%] bg-white p-3">
                <div className="flex items-start justify-between">
                    <h2 className="w-full text-xl font-medium text-primaryColor text-start px-6">Chi tiết cuộc
                        hẹn</h2>
                    <button type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                            onClick={() => setShowModal(!showModal)}
                    >
                        <FontAwesomeIcon className="text-2xl" icon={faXmark}/>
                    </button>
                </div>
                <div>
                    <ul className="grid grid-cols-1 mt-4 px-6">
                        <li className="border-b-2 py-2 grid grid-cols-4 text-start">
                            <h2 className="font-bold">Họ tên</h2>
                            <span className="col-span-3">{appointment?.petOwner?.fullName}</span>
                        </li>
                        <li className="border-b-2 py-2 grid grid-cols-4 text-start">
                            <h2 className="font-bold">Số điện thoại</h2>
                            <span className="col-span-3">{appointment?.petOwner?.phone}</span>
                        </li>
                        <li className="border-b-2 py-2 grid grid-cols-4 text-start">
                            <h2 className="font-bold">Gói khám</h2>
                            <span className="col-span-3">{appointment.servicePackage}</span>
                        </li>
                        <li className="border-b-2 py-2 grid grid-cols-4 text-start">
                            <h2 className="font-bold">Ngày</h2>
                            <span
                                className="col-span-3">{format(new Date(appointment.appointmentDate), 'dd/MM/yyyy')}</span>
                        </li>
                        <li className="border-b-2 py-2 grid grid-cols-4 text-start">
                            <h2 className="font-bold">Thời gian</h2>
                            <span className="col-span-3">{appointment.appointmentTime}</span>
                        </li>
                        <li className="border-b-2 py-2 grid grid-cols-4 text-start">
                            <h2 className="font-bold">Trạng thái</h2>
                            <span
                                className="col-span-3">{appointment.status === 1 ? "Đang xử lý" : appointment.status === 2 ? "Đã nhận" : "Bị từ chối"}</span>
                        </li>
                    </ul>
                    <div className="mt-9 text-end px-6 space-x-3 flex items-center justify-end">
                        {appointment.status === 1 ? (
                            <>
                                <button className="py-2 px-4 text-white bg-primaryColor rounded hover:bg-blue-600"
                                        onClick={() => toggleStatus(1, appointment.id)}>
                                    {loadingBtn.isLoading && loadingBtn.action === 1 ? (
                                        <div className="flex justify-center items-center">
                                            <Spinner className="h-6 w-6 mr-2"/>
                                            <span>Đang xử lý...</span>
                                        </div>
                                    ) : (
                                        <span>Đồng ý cuộc hẹn</span>
                                    )}
                                </button>
                                <button className="py-2 px-4 text-white bg-red-600 rounded hover:bg-red-700"
                                        onClick={() => toggleStatus(2, appointment.id)}>
                                    {loadingBtn.isLoading && loadingBtn.action === 2 ? (
                                        <div className="flex justify-center items-center">
                                            <Spinner className="h-6 w-6 mr-2"/>
                                            <span>Đang xử lý...</span>
                                        </div>
                                    ) : (
                                        <span>Hủy cuộc hẹn</span>
                                    )}
                                </button>
                            </>
                        ) : appointment.status === 2 ? (
                            <button className="py-2 px-4 text-white bg-red-600 rounded hover:bg-red-700"
                                    onClick={() => toggleStatus(2, appointment.id)}
                            >
                                {loadingBtn.isLoading && loadingBtn.action === 2 ? (
                                    <div className="flex justify-center items-center">
                                        <Spinner className="h-6 w-6 mr-2"/>
                                        <span>Đang xử lý...</span>
                                    </div>
                                ) : (
                                    <span>Hủy cuộc hẹn</span>
                                )}
                            </button>
                        ) : (
                            <button className="py-2 px-4 text-white bg-primaryColor rounded hover:bg-red-700"
                                    onClick={() => toggleStatus(1, appointment.id)}>
                                {loadingBtn.isLoading && loadingBtn.action === 1 ? (
                                    <div className="flex justify-center items-center">
                                        <Spinner className="h-6 w-6 mr-2"/>
                                        <span>Đang xử lý...</span>
                                    </div>
                                ) : (
                                    <span>Đồng ý cuộc hẹn</span>
                                )}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>)}
    </>);
};

export default ManageAppointment;
