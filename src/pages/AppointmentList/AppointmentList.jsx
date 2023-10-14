import React from "react";
import noDataImg from "../../assets/vectors/no data.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import AppointmentItem from "../../components/AppointmentItem/AppointmentItem";

const AppointmentList = () => {
    const haveAppointment = true;
    return (
        <div className="w-[78%] bg-white py-4 px-8 shadow-2xl">
            <h1 className="text-2xl font-medium text-primaryColor text-start mb-4">Danh sách cuộc hẹn</h1>

            {haveAppointment ? (
                <div>
                    <ul className="flex justify-center">
                        <li
                            className="border-b-primaryColor py-1.5 mr-10 w-40 border-b-4 cursor-pointer hover:border-b-primaryColor hover:transition-all hover:duration-300">Tất
                            cả
                        </li>
                        <li
                            className="py-1.5 mr-10 w-40 border-b-4 cursor-pointer hover:border-b-primaryColor hover:transition-all hover:duration-300">Đang
                            xử lý
                        </li>
                        <li
                            className="py-1.5 mr-10 w-40 border-b-4 cursor-pointer hover:border-b-primaryColor hover:transition-all hover:duration-300">Đã
                            nhận
                        </li>
                        <li
                            className="py-1.5 mr-10 w-40 border-b-4 cursor-pointer hover:border-b-primaryColor hover:transition-all hover:duration-300">Đã
                            từ chối
                        </li>
                    </ul>
                    <AppointmentItem svPackage="Khám định kỳ cho Chó Aslaska" status="Đã nhận" name="Dương Quang Quốc"
                                     phone="0764891440" address="254 Nguyễn Văn Linh, Q. Thanh
            Khuê, Đà Nẵng Q. Thanh Khuê, Đà Nẵng Q. Thanh Khuê, Đà Nẵng" appointmentDate="25/09/2023"
                                     appointmentTime="9:30 AM" clinicAddress="Thú y sông Hàn - CS1:
            386/1 Núi Thành, Q. Hải Châu"/>
                    <Pagination/>
                </div>
            ) : (
                <div className="w-full h-[75%] flex justify-center items-center flex-col">
                    <img src={noDataImg} alt="anh" className="w-52 h-52 text-primaryColor mr-8"></img>
                    <h2 className="text-xl font-medium mt-6 mb-2">Bạn chưa có một cuộc hẹn nào</h2>
                    <p className="text-gray-400">Hiện tại bạn chưa có lịch nào nào với bác sĩ, hãy đặt lịch ngay vì sức
                        khỏe của
                        thú cưng</p>
                    <Link to="/make-appointment"
                          className="py-1.5 px-3 rounded-full bg-primaryColor text-white mt-4 hover:bg-blue-600">
                        <FontAwesomeIcon icon={faPlus}/>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default AppointmentList;
