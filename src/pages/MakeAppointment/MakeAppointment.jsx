import React, {useState} from "react";
import {motion} from 'framer-motion'
import {format} from 'date-fns';

function MakeAppointment() {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [time, setTime] = useState("");
    const [selectedClinicAddress, setSelectedClinicAddress] = useState("");
    const [selectedService, setSelectedService] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name:", name);
        console.log("Phone Number:", phoneNumber);
        console.log("Selected Date:", format(new Date(selectedDate), 'yyyy-MM-dd'));
        console.log("Selected Time:", time);
        console.log("Selected Service:", selectedService);
        console.log("Selected Clinic_address:", selectedClinicAddress);
    };

    return (
        <div className="wrapper bg-[#E6EBFB] text-white font-bold py-16 px-36 rounded">
            <div className="make bg-white border border-white rounded-lg px-16 h-[calc(100% - 50px)] w-[85%] h-3/4 flex flex-col justify-center mx-auto">
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="input-field w-full bg-[#FFF] text-black rounded-lg border border-solid px-4 py-2"
                        />
                    </div>
                    <div className="w-full bg-white p-3">
                        <label className="text-gray-700 text-sm font-bold text-right">
                            Số điện thoại:
                        </label>
                        <input
                            type="text"
                            id="phone"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            className="input-field w-full bg-[#FFF] text-black rounded-lg border border-solid px-4 py-2"
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
                            value={selectedClinicAddress}
                            className="input-field w-full bg-[#FFF] text-black rounded-lg border border-solid px-4 py-2"
                            onChange={(e) => setSelectedClinicAddress(e.target.value)}
                        >
                            <option value="">--- Chọn địa chỉ phòng khám ---</option>
                            <option value="386/1 Núi Thành, Q.Hải Châu">
                                386/1 Núi Thành, Q.Hải Châu
                            </option>
                            <option value="22 Phạm Như Xương">
                                22 Phạm Như Xương
                            </option>
                            <option value="23 Đặng Dung, Hòa Khánh Bắc, Quận Liên
                                    Chiểu, Vietnam">
                                23 Đặng Dung, Hòa Khánh Bắc, Quận Liên
                                Chiểu, Vietnam
                            </option>
                        </select>
                    </div>
                </div>
                <motion.button whileHover={{scale: 1.1}}
                               className="w-22 p-4 bg-primaryColor my-10 mx-96 rounded-full"
                               type="submit"
                               onClick={handleSubmit}
                >
                    Đặt lịch
                </motion.button>
            </div>
            {/*<div className="bg-white col-span-2 p-4 text-left">*/}
            {/*    /!*<div className="w-full bg-white p-3">*!/*/}
            {/*    /!*    <label className="text-gray-700 text-sm font-bold text-right">*!/*/}
            {/*    /!*        Địa chỉ:*!/*/}
            {/*    /!*    </label>*!/*/}
            {/*    /!*    <input*!/*/}
            {/*    /!*        type="text"*!/*/}
            {/*    /!*        id="address"*!/*/}
            {/*    /!*        value={address}*!/*/}
            {/*    /!*        onChange={(e) => setAddress(e.target.value)}*!/*/}
            {/*    /!*        required*!/*/}
            {/*    /!*        className="input-field w-full bg-[#FFF] text-black rounded-lg border border-solid px-4 py-2"*!/*/}
            {/*    /!*    />*!/*/}
            {/*    /!*</div>*!/*/}

            {/*</div>*/}

        </div>
        // </div>
    );
}

export default MakeAppointment;
