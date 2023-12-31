import React, {useEffect} from "react";
import noDataImg from "../../assets/vectors/no data.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import Appointments from "../../components/Appointments/Appointments";
import * as appointmentService from "../../services/appointmentService"
import Search from "../../components/Search/Search";
import {useDispatch, useSelector} from "react-redux";
import appointmentSlice from "../../redux/slices/appointments";
import {Helmet} from "react-helmet";

const AppointmentList = () => {
    const accessToken = localStorage.getItem('access-token')
    const dispatch = useDispatch()
    const {appointments, loading, activeTab, pagination, filters} = useSelector(
        (state) => state.appointment
    );
    const {setAppointments, setFilters, setLoading, setActiveTab, setPagination} = appointmentSlice.actions

    useEffect(() => {
        (async () => {
            const appointList = await appointmentService.getAppointment(accessToken, {...filters})
            if (appointList.statusCode === 200) {
                dispatch(setAppointments(appointList.response.data))
                const {currentPage, lastPage} = appointList.response
                dispatch(setPagination({
                    page: currentPage,
                    totalPages: lastPage
                }))
                dispatch(setLoading(false))
            }
        })()
    }, [accessToken, dispatch, filters]);

    const handleTabClick = (tab) => {
        dispatch(setActiveTab(tab));
        const newFilters = tab > 0 ? {...filters, page: 1, status: tab} : {...filters, page: 1, status: null};
        dispatch(setLoading(true));
        dispatch(setFilters(newFilters));
    }

    const handlePageChange = (newPage) => {
        console.log("New page: ", newPage)
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

    return (
        <div className="w-[78%] bg-white py-4 px-8 shadow-2xl">
            <Helmet><title>Danh sách cuộc hẹn | EliteVetCare</title></Helmet>
            <div className="flex items-center mb-4 justify-between">
                <h1 className="text-2xl font-medium text-primaryColor text-start mb-4">Danh sách cuộc hẹn</h1>
                <Search title="Tìm theo gói tên khám" handleSearchChange={handleSearchChange}/>
            </div>
            <ul className="flex justify-center">
                <li
                    onClick={() => handleTabClick(0)}
                    className={`${activeTab === 0 && 'border-b-primaryColor'} py-1.5 mr-10 w-40 border-b-4 cursor-pointer hover:border-b-primaryColor hover:transition-all hover:duration-300`}>Tất
                    cả
                </li>
                <li
                    onClick={() => handleTabClick(1)}
                    className={`${activeTab === 1 && 'border-b-primaryColor'} py-1.5 mr-10 w-40 border-b-4 cursor-pointer hover:border-b-primaryColor hover:transition-all hover:duration-300`}>Đang
                    xử lý
                </li>
                <li
                    onClick={() => handleTabClick(2)}
                    className={`${activeTab === 2 && 'border-b-primaryColor'} py-1.5 mr-10 w-40 border-b-4 cursor-pointer hover:border-b-primaryColor hover:transition-all hover:duration-300`}>Đã
                    nhận
                </li>
                <li
                    onClick={() => handleTabClick(3)}
                    className={`${activeTab === 3 && 'border-b-primaryColor'} py-1.5 mr-10 w-40 border-b-4 cursor-pointer hover:border-b-primaryColor hover:transition-all hover:duration-300`}>Đã
                    từ chối
                </li>
            </ul>
            {loading ? (
                <>
                    <Appointments.Loading/>
                    <Appointments.Loading/>
                    <Appointments.Loading/>
                </>
            ) : (
                appointments.length > 0 ? (
                    <div>
                        <Appointments appointments={appointments}/>
                        <Pagination pagination={pagination} onPageChange={handlePageChange}/>
                    </div>
                ) : (
                    <div className="w-full h-[75%] flex justify-center items-center flex-col">
                        <img src={noDataImg} alt="anh" className="w-52 h-52 text-primaryColor mr-8"></img>
                        <h2 className="text-xl font-medium mt-6 mb-2">Bạn chưa có một cuộc hẹn nào</h2>
                        <p className="text-gray-400">Hiện tại bạn chưa có lịch nào với bác sĩ, hãy đặt lịch ngay vì
                            sức
                            khỏe của
                            thú cưng</p>
                        <Link to="/make-appointment"
                              className="py-1.5 px-3 rounded-full bg-primaryColor text-white mt-4 hover:bg-blue-600">
                            <FontAwesomeIcon icon={faPlus}/>
                        </Link>
                    </div>
                )
            )}
        </div>
    );
};

export default AppointmentList;
