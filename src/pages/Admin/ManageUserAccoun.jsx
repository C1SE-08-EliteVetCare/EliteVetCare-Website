import React, { useRef, useState } from "react";
import Address from "../../components/Address/Address";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ManageUserAccount = () => {
    return (
        <div className=" bg-[#bdcdda] w-full h-full  border border-white p-8">
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
                </div>
                <div class="w-full h-full bg-white rounded-lg shadow-lg">
                    <table class="min-w-full border-collapse w-full">
                        <thead>
                            <tr class=" text-gray-500">
                                <th class=" py-2 px-4 border-t border-gray-300 bg-white">
                                    Họ và tên
                                </th>
                                <th class=" py-2 px-4 border-t border-gray-300 bg-white">
                                    Tên người dùng
                                </th>
                                <th class=" py-2 px-4 border-t border-gray-300 bg-white">
                                    Email
                                </th>
                                <th class=" py-2 px-4 border-t border-gray-300 bg-white">
                                    Vai trò
                                </th>
                                <th class=" py-2 px-4 border-t border-gray-300 bg-white">
                                    Trạng thái
                                </th>
                                <th class=" py-2 px-4 border-t border-gray-300 bg-white">
                                    Ngày đăng ký
                                </th>
                                <th class=" py-2 px-4 border-t border-gray-300 bg-white">
                                    Chi tiết
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    Jane Cooper
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    quangquoc154
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    quangquoc1542002@gmail.com
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300 ">
                                    <select
                                        class=" py-2 px-4 border-t border-gray-300 bg-gray-100 w-full"
                                        style={{ borderRadius: "10px" }}
                                    >
                                        <option value="option1">Bác sĩ</option>
                                        <option value="option2">
                                            Chủ phòng khám
                                        </option>
                                        <option value="option3">Quản lý</option>
                                    </select>
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300 text-green-600">
                                    Đã kích hoạt
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    20/09/2023
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                </td>
                            </tr>
                            <tr>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    Jane Cooper
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    quangquoc154
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    quangquoc1542002@gmail.com
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    <select
                                        class=" py-2 px-4 border-t border-gray-300 bg-gray-100 w-full"
                                        style={{ borderRadius: "10px" }}
                                    >
                                        <option value="option1">Bác sĩ</option>
                                        <option value="option2">
                                            Chủ phòng khám
                                        </option>
                                        <option value="option3">Quản lý</option>
                                    </select>
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300 text-green-600">
                                    Đã kích hoạt
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    20/09/2023
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                </td>
                            </tr>
                            <tr>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    Jane Cooper
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    quangquoc154
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    quangquoc1542002@gmail.com
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    <select
                                        class=" py-2 px-4 border-t border-gray-300 bg-gray-100 w-full"
                                        style={{ borderRadius: "10px" }}
                                    >
                                        <option value="option1">Bác sĩ</option>
                                        <option value="option2">
                                            Chủ phòng khám
                                        </option>
                                        <option value="option3">Quản lý</option>
                                    </select>
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300 text-red-600">
                                    Đã bị khóa
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    20/09/2023
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                </td>
                            </tr>
                            <tr>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    Jane Cooper
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    quangquoc154
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    quangquoc1542002@gmail.com
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    <select
                                        class=" py-2 px-4 border-t border-gray-300 bg-gray-100 w-full"
                                        style={{ borderRadius: "10px" }}
                                    >
                                        <option value="option1">Bác sĩ</option>
                                        <option value="option2">
                                            Chủ phòng khám
                                        </option>
                                        <option value="option3">Quản lý</option>
                                    </select>
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300 text-green-600">
                                    Đã kích hoạt
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    20/09/2023
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                </td>
                            </tr>
                            <tr>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    Jane Cooper
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    quangquoc154
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    quangquoc1542002@gmail.com
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    <select
                                        class=" py-2 px-4 border-t border-gray-300 bg-gray-100 w-full"
                                        style={{ borderRadius: "10px" }}
                                    >
                                        <option value="option1">Bác sĩ</option>
                                        <option value="option2">
                                            Chủ phòng khám
                                        </option>
                                        <option value="option3">Quản lý</option>
                                    </select>
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300 text-red-600">
                                    Đã bị khóa
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    20/09/2023
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                </td>
                            </tr>
                            <tr>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    Jane Cooper
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    quangquoc154
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    quangquoc1542002@gmail.com
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    <select
                                        class=" py-2 px-4 border-t border-gray-300 bg-gray-100 w-full"
                                        style={{ borderRadius: "10px" }}
                                    >
                                        <option value="option1">Bác sĩ</option>
                                        <option value="option2">
                                            Chủ phòng khám
                                        </option>
                                        <option value="option3">Quản lý</option>
                                    </select>
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300 text-green-600">
                                    Đã kích hoạt
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    20/09/2023
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                </td>
                            </tr>
                            <tr>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    Jane Cooper
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    quangquoc154
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    quangquoc1542002@gmail.com
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    <select
                                        class=" py-2 px-4 border-t border-gray-300 bg-gray-100 w-full"
                                        style={{ borderRadius: "10px" }}
                                    >
                                        <option value="option1">Bác sĩ</option>
                                        <option value="option2">
                                            Chủ phòng khám
                                        </option>
                                        <option value="option3">Quản lý</option>
                                    </select>
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300 text-red-600">
                                    Đã bị khóa
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    20/09/2023
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                </td>
                            </tr>
                            <tr>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    Jane Cooper
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    quangquoc154
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    quangquoc1542002@gmail.com
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    <select
                                        class=" py-2 px-4 border-t border-gray-300 bg-gray-100 w-full"
                                        style={{ borderRadius: "10px" }}
                                    >
                                        <option value="option1">Bác sĩ</option>
                                        <option value="option2">
                                            Chủ phòng khám
                                        </option>
                                        <option value="option3">Quản lý</option>
                                    </select>
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300 text-green-600">
                                    Đã kích hoạt
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    20/09/2023
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                </td>
                            </tr>
                            <tr>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    Jane Cooper
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    quangquoc154
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    quangquoc1542002@gmail.com
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    <select
                                        class=" py-2 px-4 border-t border-gray-300 bg-gray-100 w-full"
                                        style={{ borderRadius: "10px" }}
                                    >
                                        <option value="option1">Bác sĩ</option>
                                        <option value="option2">
                                            Chủ phòng khám
                                        </option>
                                        <option value="option3">Quản lý</option>
                                    </select>
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300 text-green-600">
                                    Đã kích hoạt
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    20/09/2023
                                </td>
                                <td class=" py-2 px-4 border-t border-gray-300">
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
    );
};
export default ManageUserAccount;
