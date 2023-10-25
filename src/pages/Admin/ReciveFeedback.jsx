import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PaginationAdmin from "../../components/Admin/PaginationAdmin";

const ReciveFeedback = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [content, setContent] = useState("");

    return (
        <div className=" bg-[#F3F7FA] w-full h-full   p-6">
            <div>
                <div className=" bg-[#ffff]  mx-auto  border border-white p-2">
                    <div className="App bg-[#ffff] p-2 flex items-center justify-between">
                        <div style={{ textAlign: "left" }}>
                            <h1>Danh sách người dùng</h1>
                            <i class="text-green-700" style={{ width: "20%" }}>
                                Active Members
                            </i>
                        </div>
                        <div
                            className="search-box  bg-[#F9FAFB]  w-[550px] h-[35px] border border-white"
                            style={{ borderRadius: "16px" }}
                        >
                            <button className="search-button w-1/12 p-1 text-blue-600">
                                <FontAwesomeIcon icon={faSearch} />{" "}
                            </button>
                            <input
                                className="search-input w-9/12 "
                                style={{ borderRadius: "16px" }}
                                type="text"
                                placeholder=" Tìm kiếm theo họ và tên hoặc tên người dùng..."
                            />
                        </div>
                        <div
                            className="label-select bg-[#F9FBFF] items-center justify-center w-[350] h-[35px] border border-gray-800 p-1"
                            style={{ borderRadius: "16px" }}
                        >
                            <label htmlFor="select-box">Sắp xếp bằng:</label>
                            <select
                                id="select-box"
                                style={{ borderRadius: "16px" }}
                            >
                                <option value="option1">Mới nhất</option>
                                <option value="option2">Cũ nhất</option>
                            </select>
                        </div>
                        <div
                            className="button bg-[#ffff] items-center justify-center w-[60px] h-[35px] border border-gray-400 p-1"
                            style={{ borderRadius: "16px" }}
                        >
                            <button>
                                {" "}
                                Xuất
                                <FontAwesomeIcon icon={faArrowUp} />{" "}
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className=" text-center mt-2 p-2 bg-white">
                            <div className="space-x-4">
                                <button className="p-2 text-2xl text-yellow-400 hover:text-yellow-500">
                                    ★
                                </button>
                                <button className="p-2 text-2xl text-yellow-400 hover:text-yellow-500">
                                    ★
                                </button>
                                <button className="p-2 text-2xl text-yellow-400 hover:text-yellow-500">
                                    ★
                                </button>
                                <button className="p-2 text-2xl text-yellow-400 hover:text-yellow-500">
                                    ★
                                </button>
                                <button className="p-2 text-2xl text-yellow-400 hover:text-yellow-500">
                                    ★
                                </button>
                            </div>
                            <h1 className="text-2xl text-gray-500 font-bold mb-4">
                                5 sao trung bình dựa trên 15 bài đánh giá
                            </h1>
                        </div>
                        <div className=" bg-[#ffffff] h-full  shadow-lg mx-4 p-1">
                            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 bg-white">
                                <div className="bg-white col-span-2 p-4 text-left">
                                    <i> Đánh giá chức năng đặt lịch </i>
                                </div>
                                <div className="flex bg-white justify-end items-center space-x-4 p-4">
                                    <div className="">
                                        <span className="text-yellow-500 text-xl">
                                            ★
                                        </span>
                                        <span className="text-yellow-500 text-xl">
                                            ★
                                        </span>
                                        <span className="text-yellow-500 text-xl">
                                            ★
                                        </span>
                                        <span className="text-yellow-500 text-xl">
                                            ★
                                        </span>
                                        <span className="text-yellow-500 text-xl">
                                            ★
                                        </span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium">
                                            10/10/2023 14:30
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="border-t border-black p-3">
                                <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 bg-white">
                                    <div className="flex flex-row items-center">
                                        <label className="text-gray-700 text-sm font-bold text-left mr-2">
                                            Họ và tên:
                                        </label>
                                        <label className="text-gray-700 text-sm font-bold text-left mr-2">
                                            Nguyễn Phi Hiền
                                        </label>
                                        <label className="text-gray-700 text-sm font-bold text-left mr-2 mx-2">
                                            Số điện thoại:
                                        </label>
                                        <label className="text-gray-700 text-sm font-bold text-left mr-2">
                                            0971010073
                                        </label>
                                        <label className="text-gray-700 text-sm font-bold text-left mr-2 mx-2">
                                            Email:
                                        </label>
                                        <label className="text-gray-700 text-sm font-bold text-left">
                                            nguyenphihien1011@gmail.com
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <label className="text-gray-700 text-sm font-bold text-left mr-2">
                                            Nội dung:
                                        </label>
                                        <label className="text-gray-700 text-sm font-bold text-left">
                                            Tôi muốn hệ thống xem xét lại chức
                                            năng đặt lịch, nó có vẻ không được
                                            thuận tiện cho lắm
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PaginationAdmin isPagination={PaginationAdmin} />
                </div>
            </div>
        </div>
    );
};
export default ReciveFeedback;
