import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo, faXmark} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";
import Pagination from "../../components/Pagination/Pagination";

const ManageAppointment = () => {
    const [appointment, setAppointment] = useState({})
    const listAppointmentExample = [
        {
            id: 1,
            name: "Duơng Quang Quốc",
            phone: "0764891440",
            address: "Đà Nẵng",
            date: "15/10/2020",
            time: "9:00 AM",
            status: 1,
            servicePackage: "Vaccination"
        }, {
            id: 2,
            name: "Duơng Quang Quốc",
            phone: "0764891440",
            address: "Đà Nẵng",
            date: "15/10/2020",
            time: "9:00 AM",
            status: 2,
            servicePackage: "Vaccination"
        }, {
            id: 3,
            name: "Duơng Quang Quốc",
            phone: "0764891440",
            address: "Đà Nẵng",
            date: "15/10/2020",
            time: "9:00 AM",
            status: 3,
            servicePackage: "Vaccination"
        }, {
            id: 4,
            name: "Duơng Quang Quốc",
            phone: "0764891440",
            address: "Đà Nẵng",
            date: "15/10/2020",
            time: "9:00 AM",
            status: 1,
            servicePackage: "Vaccination"
        }, {
            id: 5,
            name: "Duơng Quang Quốc",
            phone: "0764891440",
            address: "Đà Nẵng",
            date: "15/10/2020",
            time: "9:00 AM",
            status: 2,
            servicePackage: "Vaccination"
        }, {
            id: 6,
            name: "Duơng Quang Quốc",
            phone: "0764891440",
            address: "Đà Nẵng",
            date: "15/10/2020",
            time: "9:00 AM",
            status: 3,
            servicePackage: "Vaccination"
        }, {
            id: 7,
            name: "Duơng Quang Quốc",
            phone: "0764891440",
            address: "Đà Nẵng",
            date: "15/10/2020",
            time: "9:00 AM",
            status: 3,
            servicePackage: "Vaccination"
        }, {
            id: 8,
            name: "Duơng Quang Quốc",
            phone: "0764891440",
            address: "Đà Nẵng",
            date: "15/10/2020",
            time: "9:00 AM",
            status: 3,
            servicePackage: "Vaccination"
        }, {
            id: 9,
            name: "Duơng Quang Quốc",
            phone: "0764891440",
            address: "Đà Nẵng",
            date: "15/10/2020",
            time: "9:00 AM",
            status: 3,
            servicePackage: "Vaccination"
        }, {
            id: 10,
            name: "Duơng Quang Quốc",
            phone: "0764891440",
            address: "Đà Nẵng",
            date: "15/10/2020",
            time: "9:00 AM",
            status: 3,
            servicePackage: "Vaccination"
        },];
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = (e) => {
        const id = parseInt(e.target.closest('ul').getAttribute("data-id"))
        console.log(id);
        setShowModal(!showModal);
        setAppointment(listAppointmentExample.filter(item => item.id === id)[0])
    }
    return (<>
        <div className="w-[78%] bg-white py-4 px-8 shadow-2xl">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-medium text-primaryColor text-start mb-4">Danh sách cuộc hẹn</h1>
                <div className="space-x-3">
                    <select
                        className="px-5 py-2 rounded-lg border-2 border-gray-400 bg-bgColor focus:outline-primaryColor hover:bg-gray-200">
                        <option>Ngày: Tất cả</option>
                        <option>Mới nhất</option>
                        <option>Cũ nhất</option>
                    </select>
                    <select
                        className="px-5 py-2 rounded-lg border-2 border-gray-400 bg-bgColor focus:outline-primaryColor hover:bg-gray-200">
                        <option>Trạng thái: Tất cả</option>
                        <option>Đã nhận</option>
                        <option>Đang xử lý</option>
                        4
                        <option>Đã từ chối</option>
                    </select>
                    <button
                        className="px-5 py-2 rounded-lg border-2 border-gray-400 focus:outline-primaryColor hover:bg-gray-200">Xuất
                        file
                    </button>
                </div>
            </div>
            <ul className="grid grid-cols-12 gap-4 mt-6 py-2 border-b-2">
                <li className="col-span-3 font-bold">Họ tên</li>
                <li className="col-span-2 font-bold">Số điện thoại</li>
                <li className="col-span-2 font-bold">Ngày</li>
                <li className="col-span-2 font-bold">Thời gian</li>
                <li className="col-span-2 font-bold">Trạng thái</li>
                <li className="col-span-1 font-bold">Chi tiết</li>
            </ul>
            {listAppointmentExample.map((item) => (<ul key={item.id} data-id={item.id}
                                                       className="grid grid-cols-12 gap-4 py-2 border-b-2 items-center">
                <li className="col-span-3">{item.name}</li>
                <li className="col-span-2">{item.phone}</li>
                <li className="col-span-2">{item.date}</li>
                <li className="col-span-2">{item.time}</li>
                {item.status === 1 ? (<li className="col-span-2 py-1 px-6 bg-green-400 rounded-xl">Đã
                    nhận</li>) : item.status === 2 ? (
                    <li className="col-span-2 py-1 px-6 bg-yellow-200 rounded-xl">Đang xử lý</li>) : (
                    <li className="col-span-2 py-1 px-6 bg-red-400 rounded-xl">Đã hủy</li>)}
                <motion.li whileHover={{scale: 1.2}} className="text-xl text-gray-400 col-span-1 hover:text-primaryColor">
                    <FontAwesomeIcon icon={faCircleInfo} onClick={handleShowModal}/></motion.li>
            </ul>))}
            {listAppointmentExample.length >= 10 && <Pagination/>}
        </div>

        {/*Modal view detail information*/}
        {showModal && (<div
            className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-900 bg-opacity-50">
            <div className="relative min-w-[40%] min-h-[70%] bg-white p-3">
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
                            <span className="col-span-3">{appointment.name}</span>
                        </li>
                        <li className="border-b-2 py-2 grid grid-cols-4 text-start">
                            <h2 className="font-bold">Số điện thoại</h2>
                            <span className="col-span-3">{appointment.phone}</span>
                        </li>
                        <li className="border-b-2 py-2 grid grid-cols-4 text-start">
                            <h2 className="font-bold">Địa chỉ</h2>
                            <span className="col-span-3">{appointment.address}</span>
                        </li>
                        <li className="border-b-2 py-2 grid grid-cols-4 text-start">
                            <h2 className="font-bold">Gói khám</h2>
                            <span className="col-span-3">{appointment.servicePackage}</span>
                        </li>
                        <li className="border-b-2 py-2 grid grid-cols-4 text-start">
                            <h2 className="font-bold">Ngày</h2>
                            <span className="col-span-3">{appointment.date}</span>
                        </li>
                        <li className="border-b-2 py-2 grid grid-cols-4 text-start">
                            <h2 className="font-bold">Thời gian</h2>
                            <span className="col-span-3">{appointment.time}</span>
                        </li>
                        <li className="border-b-2 py-2 grid grid-cols-4 text-start">
                            <h2 className="font-bold">Trạng thái</h2>
                            <span
                                className="col-span-3">{appointment.status === 1 ? "Đã nhận" : appointment.status === 2 ? "Đang xử lý" : "Đang xuất"}</span>
                        </li>
                    </ul>
                    <div className="mt-9 text-end px-6 space-x-3">
                        <button className="py-2 px-4 text-white bg-primaryColor rounded hover:bg-blue-600">Đồng
                            ý cuộc hẹn
                        </button>
                        <button className="py-2 px-4 text-white bg-red-600 rounded hover:bg-red-700">Hủy cuộc
                            hẹn
                        </button>
                    </div>
                </div>
            </div>
        </div>)}
    </>);
};

export default ManageAppointment;
