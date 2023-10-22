import React, { useState } from "react";
import AppointmentItem from "../../components/AppointmentItem/AppointmentItem";
function MakeAppoiment() {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [time, setTime] = useState("");
    const [address, setAddress] = useState("");
    const [selectedClinic_address, setSelectedClinic_address] = useState("");
    const [selectedService, setSelectedService] = useState("");

    const handleAppointmentSubmit = (e) => {
        e.preventDefault();
        console.log("Name:", name);
        console.log("Address:", address);
        console.log("Phone Number:", phoneNumber);
        console.log("Selected Date:", selectedDate);
        console.log("Selected Time:", time);
        console.log("Selected Service:", selectedService);
        console.log("Selected Clinic_address:", selectedClinic_address);
    };

    return (
        <div className="wrapper bg-[#E6EBFB] text-white font-bold py-16 px-36 rounded">
            <div className="make bg-white border border-white rounded-lg px-24 h-[calc(100% - 50px)] w-125 h-3/4 flex flex-col justify-center mx-auto">
                <h1 className="flex w-1256 h-101 flex-col justify-center flex-shrink-0 text-black text-center font-Kiwi-Maru text-2xl  leading-normal">
                    ĐẶT LỊCH KHÁM BỆNH
                </h1>
                <div className=" grid grid-cols-1 lg:grid-cols-4 gap-4 bg-white p-4">
                    <div className="bg-white col-span-2 p-4 text-left">
                        <div className="w-full bg-white p-3">
                            <label className="text-gray-700 text-sm font-bold text-right">
                                Họ và tên:
                            </label>{" "}
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="input-field w-full bg-[#FFF] text-black rounded-lg border border-solid border-[#yourColor] border-[yourWidth] px-4 py-2"
                            />
                        </div>
                        <div className="w-full bg-white p-3">
                            <label className="text-gray-700 text-sm font-bold text-right">
                                Số điện thoại:
                            </label>{" "}
                            <input
                                type="text"
                                id="phone"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                                className="input-field w-full bg-[#FFF] text-black rounded-lg border border-solid border-[#yourColor] border-[yourWidth] px-4 py-2"
                            />
                        </div>
                        <div className="w-full bg-white p-0 grid grid-cols-1 lg:grid-cols-3">
                            <div className="bg-white col-span-2 p-3 text-left">
                                <label className="text-gray-700 text-sm font-bold text-right">
                                    Ngày khám:
                                </label>{" "}
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
                                    className="input-field w-full bg-[#FFF] text-black rounded-lg border border-solid border-[#yourColor] border-[yourWidth] px-4 py-2"
                                />
                            </div>
                            <div className="w-full bg-white p-3">
                                <label className="text-gray-700 p-1 text-sm font-bold text-right">
                                    Thời gian:
                                </label>{" "}
                                <input
                                    type="time"
                                    id="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    required
                                    className="input-field w-full bg-[#FFF] text-black rounded-lg border border-solid border-[#yourColor] border-[yourWidth] px-4 py-2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white col-span-2 p-4 text-left">
                        <div className="w-full bg-white p-3">
                            <label className="text-gray-700 text-sm font-bold text-right">
                                Địa chỉ:
                            </label>{" "}
                            <input
                                type="text"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                                className="input-field w-full bg-[#FFF] text-black rounded-lg border border-solid border-[#yourColor] border-[yourWidth] px-4 py-2"
                            />
                        </div>
                        <div className="w-full bg-white p-3">
                            <label className="text-gray-700 text-sm font-bold text-right">
                                Địa chỉ phòng khám:
                            </label>{" "}
                            <select
                                id="selectOption"
                                value={setSelectedClinic_address}
                                className="input-field w-full bg-[#FFF] text-black rounded-lg border border-solid border-[#yourColor] border-[yourWidth] px-4 py-2"
                            >
                                <option value="option1">
                                    386/1 Núi Thành, Q.Hải Châu
                                </option>
                                <option value="option2">
                                    22 Phạm Như Xương
                                </option>
                                <option value="option3">
                                    {" "}
                                    23 Đặng Dung, Hòa Khánh Bắc, Quận Liên
                                    Chiểu, Vietnam
                                </option>
                            </select>
                        </div>
                        <div className="w-full bg-white p-3">
                            <label className="text-gray-700 text-sm font-bold text-right">
                                Gói khám:
                            </label>{" "}
                            <select
                                id="selectOption"
                                value={setSelectedService}
                                className="input-field w-full bg-[#FFF] text-black rounded-lg border border-solid border-[#yourColor] border-[yourWidth] px-4 py-2"
                            >
                                <option value="Service1">Khám dịnh kỳ</option>
                                <option value="Service2">Xét nghiệm máu</option>
                                <option value="Service3">
                                    Xét nghiệm phân
                                </option>
                                <option value="Service4">Chụp X-quang</option>
                                <option value="Service5">Siêu âm</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="w-22 p-4 bg-[#007AFE] my-10 mx-96 rounded-full">
                    <button
                        className=" items-center border-white "
                        type="submit"
                    >
                        Đặt lịch
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MakeAppoiment;
