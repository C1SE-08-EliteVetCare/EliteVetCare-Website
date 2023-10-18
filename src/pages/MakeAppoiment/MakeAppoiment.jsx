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
        <div className="wrapper bg-[#bdcdda] text-white font-bold py-36 px-36 rounded">
            <div className="make bg-white border border-white rounded-lg px-2 h-[calc(100% - 50px)] w-125 h-3/4 flex flex-col justify-center mx-auto">
                <h1 className="flex w-638 h-101 flex-col justify-center flex-shrink-0 text-black text-center font-Kiwi-Maru text-2xl font-bold leading-normal">
                    ĐẶT LỊCH KHÁM BỆNH
                </h1>
                <form onSubmit={handleAppointmentSubmit}>
                    <div className="w-324 flex items-center justify-center">
                        <table className="w-1/2 border-2 border-#F2E2E2 rounded-lg">
                            <tbody className="bg-gray-200">
                                <tr>
                                    <td>
                                        <div className="flex flex-col w-513">
                                            <label
                                                className="w-324 h-37 pl-4 pt-2 pb-2 leading-normal text-left  text-black font-Poppins text-16 font-normal leading-normal bg-gray-100 rounded-t-10"
                                                htmlFor="name"
                                            >
                                                Họ và Tên:
                                            </label>
                                            <input
                                                className="w-60 h-8 border  text-black border-gray-300 bg-white rounded-b-2"
                                                type="text"
                                                id="name"
                                                value={name}
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                                required
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-col w-513">
                                            <label
                                                className="w-324 h-37 pl-4 pt-2 pb-2 leading-normal text-left  text-black font-Poppins text-16 font-normal leading-normal bg-gray-100 rounded-t-10"
                                                htmlFor="address"
                                            >
                                                Địa chỉ:
                                            </label>
                                            <input
                                                className="w-60 h-8 border  text-black border-gray-300 bg-white rounded-b-2"
                                                type="address"
                                                id="address"
                                                value={address}
                                                onChange={(e) =>
                                                    setAddress(e.target.value)
                                                }
                                                required
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <br />
                                <tr>
                                    <td>
                                        <div className="flex flex-col w-513">
                                            <label
                                                className="w-324 h-37 pl-4 pt-2 pb-2 leading-normal text-left  text-black font-Poppins text-16 font-normal leading-normal bg-gray-100 rounded-t-10"
                                                htmlFor="phone"
                                            >
                                                Số điện thoại:
                                            </label>
                                            <input
                                                className="w-60 h-8 border border-gray-300  text-black bg-white rounded-b-2"
                                                type="phone"
                                                id="phone"
                                                value={phoneNumber}
                                                onChange={(e) =>
                                                    setPhoneNumber(
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-col w-513">
                                            <label
                                                className="w-324 h-37 pl-4 pt-2 pb-2  leading-normal text-left  text-black font-Poppins text-16 font-normal leading-normal bg-gray-100 rounded-t-10"
                                                htmlFor="clinic_address"
                                            >
                                                Địa chỉ phòng khám:
                                            </label>
                                            <select
                                                className="w-60 h-8 border border-gray-300 bg-white text-black rounded-b-2"
                                                id="clinic_address"
                                                value={selectedClinic_address}
                                                onChange={(e) =>
                                                    setSelectedClinic_address(
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            >
                                                <option value="Song_Han">
                                                    386/1 Núi Thành,Q.Hải Châu
                                                </option>
                                                <option value="Love_Pet">
                                                    22 Phạm Như Xương
                                                </option>
                                                <option value="Da_Nang_City_Pet">
                                                    23 Đặng Dung, Hòa Khánh Bắc,
                                                    Quận Liên Chiểu, Vietnam
                                                </option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <br />
                                <tr>
                                    <td>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div className="flex flex-col w-513">
                                                        <label
                                                            className="w-324 h-37 pl-4 pt-2 pb-2 leading-normal text-left  text-black font-Poppins text-16 font-normal leading-normal bg-gray-100 rounded-t-10"
                                                            htmlFor="date"
                                                        >
                                                            Ngày hẹn:
                                                        </label>
                                                        <input
                                                            className="w-296 h-47 flex-shrink-0 ml-2 rounded-10 border  text-black border-gray-300 bg-white"
                                                            type="date"
                                                            id="date"
                                                            value={selectedDate
                                                                .toISOString()
                                                                .substring(
                                                                    0,
                                                                    10
                                                                )}
                                                            onChange={(e) =>
                                                                setSelectedDate(
                                                                    new Date(
                                                                        e.target.value
                                                                    )
                                                                )
                                                            }
                                                            required
                                                        />
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="flex flex-col w-513">
                                                        <label
                                                            className="w-324 h-37 pl-4 pt-2 pb-2 leading-normal text-left  text-black font-Poppins text-16 font-normal leading-normal bg-gray-100 rounded-t-10"
                                                            htmlFor="time"
                                                        >
                                                            Thời gian đặt hẹn:
                                                        </label>
                                                        <input
                                                            className="w-296 h-47 border border-gray-300 bg-white text-black rounded-b-10 text-left"
                                                            type="time"
                                                            id="time"
                                                            value={time}
                                                            onChange={(e) =>
                                                                setTime(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            required
                                                        />
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                    </td>
                                    <td>
                                        <div className="flex flex-col w-513">
                                            <label
                                                className="w-324 h-37 pl-4 pt-2 pb-2 leading-normal text-left  text-black font-Poppins text-16 font-normal leading-normal bg-gray-100 rounded-t-10"
                                                htmlFor="service"
                                            >
                                                Gói khám:
                                            </label>
                                            <select
                                                className="w-60 h-8 border border-gray-300 bg-white text-black rounded-b-2"
                                                id="service"
                                                value={selectedService}
                                                onChange={(e) =>
                                                    setSelectedService(
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            >
                                                <option value="">
                                                    Gói khám{" "}
                                                </option>
                                                <option value="Service1">
                                                    Khám dịnh kỳ
                                                </option>
                                                <option value="Service2">
                                                    Xét nghiệm máu
                                                </option>
                                                <option value="Service3">
                                                    Xét nghiệm phân
                                                </option>
                                                <option value="Service4">
                                                    Chụp X-quang
                                                </option>
                                                <option value="Service5">
                                                    Siêu âm
                                                </option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button
                        className="inline-flex w-22 p-4 md:p-4 justify-center items-center space-x-2 text-white rounded-full bg-blue-500 border border-white"
                        type="submit"
                    >
                        Đặt lịch{" "}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default MakeAppoiment;
