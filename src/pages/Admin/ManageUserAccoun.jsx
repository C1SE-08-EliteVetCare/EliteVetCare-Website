import React, {  useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import PaginationAdmin from "../../components/Admin/PaginationAdmin";
import { Link } from "react-router-dom";
import * as adminService from "../../services/adminService";


function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
}
const ManageUserAccount = () => {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(0);
    const accessToken = localStorage.getItem('access-token')
    const [paginationAdmin, setPaginationAdmin] = useState({
        page: 1,
        totalPages: 1
    })





    const [filters, setFilters] = useState({
        limit: 3,
        page: 1,
        status: null,
        search: ''
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setLoading(true);
                const accountList = await adminService.getUsers(accessToken);
                if (accountList.statusCode === 200) {
                    console.log(accountList.response)
                    setUserList(accountList.response.data);
                    const {currentPage, lastPage} = accountList.response

                    setPaginationAdmin({
                        page: currentPage,
                        totalPages: lastPage
                    })
                    setLoading(false)
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);



    const handleTabClick = (tab) => {
        setActiveTab(tab)
        if (tab > 0) {
            setLoading(true)
            setFilters({
                ...filters,
                status: tab
            })
        } else {
            setLoading(true)
            setFilters({
                ...filters,
                status: null
            })
        }
    }

    const handlePageChange = (newPage) => {
        console.log("New page: ", newPage)
        setLoading(true)
        setFilters({
            ...filters,
            page: newPage
        })
    }

    const ActiveMembers = ["search", "arrange", "export"];

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
                                <option  onClick={() => handleTabClick(0)}
                                         value="option1">Mới nhất</option>
                                <option  onClick={() => handleTabClick(0)} value="option2">Cũ nhất </option>
                            </select>
                        </div>
                        <div
                            className="button bg-[#F9FBFF] items-center justify-center w-[60px] h-[35px] border border-gray-700 p-1"
                            style={{ borderRadius: "16px" }}
                        >
                            <button>
                                Xuất
                                <FontAwesomeIcon icon={faArrowUp} />{" "}

                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full  mx-4 h-full text-left bg-white rounded-lg shadow-lg">
                    <table className="min-w-full border-collapse w-full">
                        <thead>
                            <tr className="text-gray-500">
                                <th className="py-2 px-3 border-t border-gray-300 bg-white">
                                    Họ và tên
                                </th>

                                <th className="py-2 px-3  border-t border-gray-300 bg-white">
                                    Email
                                </th>
                                <th className="py-2 px-3  border-t border-gray-300 bg-white">
                                    Vai trò
                                </th>
                                <th className="py-2 px-3  border-t border-gray-300 bg-white">
                                    Trạng thái
                                </th>
                                <th className="py-2 px-3  border-t border-gray-300 bg-white">
                                    Ngày đăng ký
                                </th>
                                <th className="py-2 px-3  border-t border-gray-300 bg-white">
                                    Chi tiết
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {userList.map((user,) => (
                                <tr key={user.id}>

                                    <td className="py-2 px-5 border-t border-gray-300">
                                        {user.fullName}
                                    </td>
                                    <td className="py-2 px-4 border-t border-gray-300">
                                        {user.email}
                                    </td>

                                    <td className="py-2 px-4 border-t border-gray-300">
                                        <select
                                            className="py-2 px-4 border-t border-gray-300 bg-gray-100 w-full"
                                            style={{ borderRadius: "10px" }}
                                        >

                                                <>
                                                    <option value="option1" selected={user.role.id === 3}>
                                                        Bác sĩ
                                                    </option>
                                                    <option value="option2" selected={user.role.id === 1}>
                                                        Admin
                                                    </option>
                                                    <option value="option3" selected={user.role.id === 2}>
                                                        Chủ thú cưng
                                                    </option>
                                                </>

                                        </select>
                                    </td>
                                    <td className="py-2 px-4 border-t border-gray-300">
                                            {user.operatingStatus === true ? (
                                                <span className="text-green-600">Đã kích hoạt</span>
                                            ) : (
                                                <span className="text-red-600">Đã bị khóa</span>
                                            )}
                                    </td>
                                    <td className="py-2 px-4 border-t border-gray-300">
                                        {user.createdAt ?formatDate (user.createdAt.split('T')[0]) : null}
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
                    <PaginationAdmin paginationAdmin={paginationAdmin} onPageChange={handlePageChange}/>
                </div>
            </div>
        </div>
    );
};

export default ManageUserAccount;
