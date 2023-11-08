import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PaginationAdmin from "../../components/Admin/PaginationAdmin";
import { Link } from "react-router-dom";

const ManageUserAccount = () => {
    const userList = [
        {
            name: "Jane Cooper",
            username: "quangquoc154",
            email: "quangquoc1542002@gmail.com",
            role: "Bác sĩ",
            status: "Đã kích hoạt",
            registrationDate: "20/09/2023",
        },
        {
            name: "John Doe",
            username: "johndoe123",
            email: "johndoe123@gmail.com",
            role: "Chủ phòng khám",
            status: "Đã bị khóa",
            registrationDate: "20/09/2023",
        },
    ];

    const ActiveMembers = ["search", "arrange", "esxport"];

    return (
        <div className="bg-[#F3F7FA] w-full h-full  p-8">
            <div
                className="bg-[#fff] border border-white p-6"
                style={{ borderRadius: "10px" }}
            >
                <div className="bg-[#ffff] mx-auto border border-white p-2">
                    <div className="App p-2 flex items-center justify-between">
                        <div style={{ textAlign: "left" }}>
                            <h1>Danh sách người dùng</h1>
                            <i
                                className="text-green-700"
                                style={{ width: "20%" }}
                            >
                                Active Members
                            </i>
                        </div>
                        <div
                            className="search-box bg-[#F9FAFB] w-[550px] h-[35px] border border-gray-700"
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
                            className="label-select bg-[#F9FAFB] items-center justify-center w-[350] h-[35px] border border-gray-700 p-1"
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
                                Xuất <FontAwesomeIcon icon={faArrowUp} />{" "}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full bg-white rounded-lg shadow-lg">
                    <table className="min-w-full border-collapse w-full">
                        <thead>
                            <tr className="text-gray-500">
                                <th className="py-2 px-4 border-t border-gray-300 bg-white">
                                    Họ và tên
                                </th>
                                <th className="py-2 px-4 border-t border-gray-300 bg-white">
                                    Tên người dùng
                                </th>
                                <th className="py-2 px-4 border-t border-gray-300 bg-white">
                                    Email
                                </th>
                                <th className="py-2 px-4 border-t border-gray-300 bg-white">
                                    Vai trò
                                </th>
                                <th className="py-2 px-4 border-t border-gray-300 bg-white">
                                    Trạng thái
                                </th>
                                <th className="py-2 px-4 border-t border-gray-300 bg-white">
                                    Ngày đăng ký
                                </th>
                                <th className="py-2 px-4 border-t border-gray-300 bg-white">
                                    Chi tiết
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {userList.map((user, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border-t border-gray-300">
                                        {user.name}
                                    </td>
                                    <td className="py-2 px-4 border-t border-gray-300">
                                        {user.username}
                                    </td>
                                    <td className="py-2 px-4 border-t border-gray-300">
                                        {user.email}
                                    </td>
                                    <td className="py-2 px-4 border-t border-gray-300">
                                        <select
                                            className="py-2 px-4 border-t border-gray-300 bg-gray-100 w-full"
                                            style={{ borderRadius: "10px" }}
                                        >
                                            <option value="option1">
                                                Bác sĩ
                                            </option>
                                            <option value="option2">
                                                Chủ phòng khám
                                            </option>
                                            <option value="option3">
                                                Quản lý
                                            </option>
                                        </select>
                                    </td>
                                    <td className="py-2 px-4 border-t border-gray-300">
                                        {user.status === "Đã kích hoạt" ? (
                                            <span className="text-green-600">
                                                {user.status}
                                            </span>
                                        ) : (
                                            <span className="text-red-600">
                                                {user.status}
                                            </span>
                                        )}
                                    </td>
                                    <td className="py-2 px-4 border-t border-gray-300">
                                        {user.registrationDate}
                                    </td>
                                    <td className="py-2 px-4 border-t border-gray-300">
                                        <Link
                                            to="/admin/detailuseraccount"
                                            className="flex items-center w-full  transition duration-75 rounded-lg pl-5 group hover:bg-gray-100"
                                        >
                                            <FontAwesomeIcon
                                                icon={faCircleInfo}
                                            />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="border border-white py-6">
                    <PaginationAdmin isPagination={PaginationAdmin} />
                </div>
            </div>
        </div>
    );
};

export default ManageUserAccount;
