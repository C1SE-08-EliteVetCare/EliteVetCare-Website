import React, { useRef, useState } from "react";
import Address from "../../components/Address/Address";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ReciveFeedback = () => {
    return (
        <div className=" bg-[#bdcdda] w-full h-full  border border-white p-6">
            <div>
                <div className=" bg-[#F9FBFF]  mx-auto  border border-white p-2">
                    <div className="App p-2 flex items-center justify-between">
                        <div style={{ textAlign: "left" }}>
                            <h1>Danh sách người dùng</h1>
                            <i class="text-green-700" style={{ width: "20%" }}>
                                Active Members
                            </i>
                        </div>
                        <div
                            className="search-box  bg-[#F9FBFF]  w-[550px] h-[35px] border border-gray-700"
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
                            className="label-select bg-[#F9FBFF] items-center justify-center w-[350] h-[35px] border border-gray-700 p-1"
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
                            className="button bg-[#F9FBFF] items-center justify-center w-[60px] h-[35px] border border-gray-700 p-1"
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
                        <div class=" bg-[#ffffff] w-full h-full  border border-white p-1">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-white">
                                <div className="bg-white p-4 text-left">
                                    <i> Đánh giá chức năng đặt lịch </i>
                                </div>
                                <div className="bg-white p-4"></div>
                                <div className="bg-white p-4">
                                    <div className="flex items-center space-x-2">
                                        {/* Thêm các sao đánh giá tại đây */}
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
                        <div class=" bg-[#ffffff] w-full h-full  border border-white p-1">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-white">
                                <div className="bg-white p-4 text-left">
                                    <i> Đánh giá chức năng đặt lịch </i>
                                </div>
                                <div className="bg-white p-4"></div>
                                <div className="bg-white p-4">
                                    <div className="flex items-center space-x-2">
                                        {/* Thêm các sao đánh giá tại đây */}
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
                        <div class=" bg-[#ffffff] w-full h-full  border border-white p-1">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-white">
                                <div className="bg-white p-4 text-left">
                                    <i> Đánh giá chức năng đặt lịch </i>
                                </div>
                                <div className="bg-white p-4"></div>
                                <div className="bg-white p-4">
                                    <div className="flex items-center space-x-2">
                                        {/* Thêm các sao đánh giá tại đây */}
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
                        <div class=" bg-[#ffffff] w-full h-full  border border-white p-1">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-white">
                                <div className="bg-white p-4 text-left">
                                    <i> Đánh giá chức năng đặt lịch </i>
                                </div>
                                <div className="bg-white p-4"></div>
                                <div className="bg-white p-4">
                                    <div className="flex items-center space-x-2">
                                        {/* Thêm các sao đánh giá tại đây */}
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

                    <div>
                        <div className=" text-right mt-2 p-6 bg-gray-200">
                            <nav aria-label="Page navigation example">
                                <ul className="inline-flex  text-base h-10 mx-2">
                                    <li>
                                        <a
                                            href="/"
                                            className="flex items-center justify-center px-4 h-10 mr-3 text-base font-medium text-gray-100 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-200 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            <FontAwesomeIcon
                                                className="w-3.5 h-3.5 mr-2"
                                                icon={faArrowLeft}
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="flex items-center justify-center rounded-lg px-4 h-10 mx-2  text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-blue-900 dark:text-white"
                                        >
                                            1
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="flex items-center justify-center rounded-lg px-4 h-10 mx-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            2
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="flex items-center justify-center rounded-lg px-4 h-10 mx-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            3
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="flex items-center justify-center rounded-lg px-4 h-10 mx-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            4
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="flex items-center justify-center rounded-lg px-4 h-10 mx-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            5
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="flex items-center justify-center px-4 h-10 ml-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        >
                                            <FontAwesomeIcon
                                                className="w-3.5 h-3.5 ml-2"
                                                icon={faArrowRight}
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ReciveFeedback;
