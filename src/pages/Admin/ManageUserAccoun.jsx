import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import * as adminService from "../../services/adminService";
import PaginationAdmin from "../../components/Admin/PaginationAdmin";
import { Spinner } from "@material-tailwind/react";

function formatDate(dateString) {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
}

const ManageUserAccount = () => {
    const [userList, setUserList] = useState([]);
    const [sortedUserList, setSortedUserList] = useState([]);
    const accessToken = localStorage.getItem('access-token');

    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState("option1");
    const [searchValue, setSearchValue] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [filters, setFilters] = useState({ limit: 7, page: 1, status: null });
    const [paginationAdmin, setPaginationAdmin] = useState({
        page: 1,
        totalPages: null,
    });

    const { id, page, limit } = useParams();

    const handlePageChange = async (newPage) => {
        if (newPage < 1 || newPage > paginationAdmin.totalPages) {
            return;
        }

        setFilters({ ...filters, page: newPage });
        setLoading(true);

        try {
            const accountList = await adminService.getUsers(accessToken, {
                ...filters,
                page: newPage,
            });

            if (accountList.statusCode === 200) {
                setSortedUserList(accountList.response.data);
                setPaginationAdmin({
                    page: newPage,
                    totalPages: accountList.response.lastPage,
                });
                setShowResults(true);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSortChange = (event) => {
        const selectedValue = event.target.value;
        setSortBy(selectedValue);

        let sortedList = [...sortedUserList];
        if (selectedValue === "option1") {
            sortedList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } else {
            sortedList.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        }
        setSortedUserList(sortedList);
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setLoading(true);

                const accountList = await adminService.getUsers(accessToken, filters);
                if (accountList.statusCode === 200) {
                    setSortedUserList(accountList.response.data);
                    setPaginationAdmin({
                        page: accountList.response.currentPage,
                        totalPages: accountList.response.lastPage,
                    });
                    setShowResults(true);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [accessToken, filters]);

    const handleSearchButton = async () => {
        try {
            setLoading(true);

            const accountList = await adminService.getUsers(accessToken, {
                ...filters,
                page: 1, // Reset page to 1 when searching
                search: searchValue, // Include search value
            });

            if (accountList.statusCode === 200) {
                setSortedUserList(accountList.response.data);
                setPaginationAdmin({
                    page: accountList.response.currentPage,
                    totalPages: accountList.response.lastPage,
                });
                setShowResults(true);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleHideResults = () => {
        setShowResults(false);
    };

    const handleSearchOnChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
    };

    return (
        <div className="bg-[#F3F7FA] w-full h-full  p-8">
            <div className="bg-[#ffff]  mx-auto  border border-white p-2">
                <div className="bg-[#ffff] mx-auto border border-white p-2">
                    <div className="App p-2 flex items-center justify-between">
                        <div style={{ textAlign: "left" }}>
                            <h1>Danh sách người dùng</h1>
                            <i className="text-green-700" style={{ width: "20%" }}>
                                Active Members
                            </i>
                        </div>
                        <div className="search-box flex items-center bg-[#F9FAFB] w-[550px] h-[35px] border border-black rounded-full px-4"
                        >
                            <button
                                className="search-button w-1/12 p-1 text-blue-600"
                                onClick={handleSearchButton}
                            >
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                            <input
                                className="search-input w-9/12 outline-none bg-transparent pl-2"
                                type="text"
                                placeholder="Tìm kiếm theo họ và tên hoặc tên người dùng..."
                                value={searchValue}
                                onChange={handleSearchOnChange}
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
                                value={sortBy}
                                onChange={handleSortChange}
                                className="bg-[#F9FAFB]"
                            >
                                <option value="option1">Mới nhất</option>
                                <option value="option2">Cũ nhất </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="w-auto  mx-4 h-full text-left bg-white rounded-lg shadow-lg ">
                    {loading ? (
                        <div className=" text-center flex items-end gap-8">
                            <Spinner className="h-16 w-16  " color="blue" />
                        </div>
                    ) : (
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
                            {sortedUserList.map((user) => (
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
                                        {user.createdAt
                                            ? formatDate(user.createdAt.split("T")[0])
                                            : null}
                                    </td>
                                    <td className="py-2 px-4">
                                        <Link
                                            to={`/admin/detailuseraccount/${user.id}`}
                                            className="flex items-center w-full  transition duration-75 "
                                        >
                                            <FontAwesomeIcon icon={faCircleInfo} />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    )}
                </div>
                <div className="border border-white py-6">
                    <PaginationAdmin
                        paginationAdmin={paginationAdmin}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default ManageUserAccount;
