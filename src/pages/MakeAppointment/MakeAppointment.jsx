import React, {useContext, useEffect, useState} from "react";
import {motion} from 'framer-motion'
import * as appointmentService from "../../services/appointmentService"
import AuthContext from "../../context/authContext";
import {toast} from "sonner";
import {Spinner} from "@material-tailwind/react";
import {format} from "date-fns";

function MakeAppointment() {
    const currentTime = new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
    });
    const {auth} = useContext(AuthContext)
    const accessToken = localStorage.getItem('access-token')

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [time, setTime] = useState(currentTime);
    const [selectedClinic, setSelectedClinic] = useState(0);
    const [clinics, setClinics] = useState([]);
    const [selectedService, setSelectedService] = useState("");
    const [loading, setLoading] = useState(false)
    const [submit, setSubmit] = useState(false)

    useEffect(() => {
        (async () => {
            const clinicList = await appointmentService.getClinic()
            if (clinicList.statusCode === 200) {
                console.log(clinicList.response)
                setClinics(clinicList.response)
            }
        })()
    }, []);

    const handleBooking = (e) => {
        e.preventDefault();
        if (!selectedDate || !time || !selectedService || !selectedClinic) {
            toast.warning("Vui lòng nhập đầy đủ thông tin")
            return;
        }
        setLoading(true)
        setSubmit(true)
    };

    useEffect(() => {
        if (submit) {
            (async () => {
                const booking = await appointmentService.makeAppointment(accessToken, {
                    appointmentDate: format(new Date(selectedDate), 'yyyy-MM-dd'),
                    appointmentTime: time,
                    servicePackage: selectedService,
                    clinicId: selectedClinic
                })
                if (booking.statusCode === 201) {
                    setLoading(false)
                    setSubmit(false)
                    toast.success("Đặt lịch thành công. Vui lòng chờ phòng khám xử lý")
                } else {
                    setLoading(false)
                    setSubmit(false)
                    toast.error("Đặt lịch không thành công")
                }
            })()
        }
    }, [submit])

    return (
        <div className="wrapper bg-[#E6EBFB] text-white font-bold py-16 px-36 rounded">
            <div
                className="make bg-white border border-white rounded-lg px-16 h-[calc(100% - 50px)] w-[85%] h-3/4 flex flex-col justify-center mx-auto">
                <h1 className="flex w-638 h-101 flex-col justify-center flex-shrink-0 text-black text-center text-3xl font-normal font-Kiwi-Maru  leading-normal p-4">
                    ĐẶT LỊCH KHÁM BỆNH
                </h1>
                {/*<div className="grid grid-cols-1 lg:grid-cols-4 gap-4 bg-white p-4">*/}
                <div className="bg-white grid grid-cols-2 p-4 text-left">
                    <div className="w-full bg-white p-3">
                        <label className="text-gray-700 text-sm font-bold text-right">
                            Họ và Tên:
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={auth.fullName}
                            className="input-field w-full bg-[#FFF] text-black rounded-lg border border-solid px-4 py-2 cursor-not-allowed"
                            disabled
                        />
                    </div>
                    <div className="w-full bg-white p-3">
                        <label className="text-gray-700 text-sm font-bold text-right">
                            Số điện thoại:
                        </label>
                        <input
                            type="text"
                            id="phone"
                            value={auth.phone}
                            className="input-field w-full bg-[#FFF] text-black rounded-lg border border-solid px-4 py-2 cursor-not-allowed"
                            disabled
                        />
                    </div>
                    <div className="w-full bg-white p-0 grid grid-cols-1 lg:grid-cols-4">
                        <div className="bg-white col-span-2 p-3 text-left">
                            <label className="text-gray-700 text-sm font-bold text-right">
                                Ngày khám:
                            </label>
                            <input
                                type="date"
                                id="date"
                                value={selectedDate
                                    .toISOString()
                                    .substring(0, 10)}
                                onChange={(e) =>
                                    setSelectedDate(
                                        new Date(e.target.value)
                                    )
                                }
                                required
                                className="input-field w-full bg-[#FFF] text-black rounded-lg border border-solid px-4 py-2"
                            />
                        </div>
                        <div className="w-full bg-white p-3 col-span-2">
                            <label className="text-gray-700 p-1 text-sm font-bold text-right">
                                Thời gian:
                            </label>
                            <input
                                type="time"
                                id="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                                className="input-field w-full bg-[#FFF] text-black rounded-lg border border-solid px-4 py-2"
                            />
                        </div>
                    </div>
                    <div className="w-full bg-white p-3">
                        <label className="text-gray-700 text-sm font-bold text-right">
                            Gói khám:
                        </label>
                        <select
                            id="selectOption"
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                            className="input-field w-full bg-[#FFF] text-black rounded-lg border border-solid px-4 py-2"
                            required
                        >
                            <option value="">--- Chọn gói khám ---</option>
                            <option value="Khám định kỳ">Khám dịnh kỳ</option>
                            <option value="Xét nghiệm máu">Xét nghiệm máu</option>
                            <option value="Xét nghiệm phân">Xét nghiệm phân</option>
                            <option value="Chụp X-quang">Chụp X-quang</option>
                            <option value="Siêu âm">Siêu âm</option>
                        </select>
                    </div>
                    <div className="w-full bg-white p-3 col-span-2">
                        <label className="text-gray-700 text-sm font-bold text-right">
                            Địa chỉ phòng khám:
                        </label>
                        <select
                            id="selectOption"
                            value={selectedClinic}
                            className="input-field w-full bg-[#FFF] text-black rounded-lg border border-solid px-4 py-2"
                            onChange={(e) => setSelectedClinic(e.target.value)}
                        >
                            <option value="">--- Chọn địa chỉ phòng khám ---</option>
                            {clinics.map((item) => (
                                <option key={item.id} value={item.id}
                                        onChange={(e) => setSelectedClinic(e.target.value)}>
                                    {item.name} - {item.streetAddress}, {item.ward}, {item.district}, {item.city}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <motion.button whileHover={{scale: 1.1}}
                               className="py-4 px-12 bg-primaryColor my-10 mx-auto rounded-full"
                               type="submit"
                               onClick={handleBooking}
                >
                    {loading ? (
                        <div className="flex items-center justify-center">
                            <Spinner className="h-6 w-6 mr-4"/>{" "}
                            <span>Đang đặt....</span>
                        </div>
                    ) : (
                        <span>Đặt lịch</span>
                    )}
                </motion.button>
            </div>
        </div>
    );
}

export default MakeAppointment;
