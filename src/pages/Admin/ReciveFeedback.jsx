import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PaginationAdmin from "../../components/Admin/PaginationAdmin";
import * as adminService from "../../services/adminService";
import Rate from "../../components/Rate/Rate";
import { Spinner } from "@material-tailwind/react";

const ReciveFeedback = () => {
    const [feedbackList, setFeedbackList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [averageStars, setAverageStars] = useState(0);
    const [paginationAdmin, setPaginationAdmin] = useState({
        page: 1,
        totalPages: 1,
    });
    const [sortBy, setSortBy] = useState("option1");
    const [filters, setFilters] = useState({
        limit: 3,
        page: 1,
        status: null,
        search: "",
    });
    const [searchValue, setSearchValue] = useState(""); // Moved to the outer scope

    const formatDate = (dateString) => {
        // ... (unchanged)
    };

    useEffect(() => {
        const fetchFeedbackData = async () => {
            try {
                setLoading(true);
                const feedbackResponse = await adminService.getFeedBack(
                    localStorage.getItem("access-token"),
                    filters
                );

                if (feedbackResponse.statusCode === 200) {
                    const feedbackData = feedbackResponse.response.data;

                    if (feedbackData.length > 0) {
                        const totalStars = feedbackData.reduce(
                            (total, feedback) => total + feedback.rating,
                            0
                        );
                        const average = totalStars / feedbackData.length;
                        setAverageStars(average);
                    }
                    setFeedbackList(feedbackData);
                    const { currentPage, lastPage } = feedbackResponse.response;

                    setPaginationAdmin({
                        page: currentPage,
                        totalPages: lastPage,
                    });
                }
            } catch (error) {
                console.error("Error fetching feedback data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFeedbackData();
    }, [filters]);

    const handleSortChange = (event) => {
        const selectedValue = event.target.value;
        setSortBy(selectedValue);

        let sortedFeedback = [...feedbackList];
        if (selectedValue === "option1") {
            sortedFeedback.sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );
        } else {
            sortedFeedback.sort(
                (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
            );
        }
        setFeedbackList(sortedFeedback);
    };

    const handlePageChange = (newPage) => {
        if (newPage < 1 || newPage > paginationAdmin.totalPages) {
            return;
        }

        setFilters({ ...filters, page: newPage });
    };

    const handleSearchButton = async () => {
        try {
            setLoading(true);

            const feedbackList = await adminService.getFeedBack(
                localStorage.getItem("access-token"),
                {
                    ...filters,
                    page: 1,
                    search: searchValue,
                }
            );

            if (feedbackList.statusCode === 200) {
                setFeedbackList(feedbackList.response.data);
                const { currentPage, lastPage } = feedbackList.response;

                setPaginationAdmin({
                    page: currentPage,
                    totalPages: lastPage,
                });
            }
        } catch (error) {
            console.error("Error fetching feedback data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearchOnChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
    };

    return (
        <div className="bg-[#F3F7FA] w-full h-full p-6">
            <div>
                <div className="bg-[#ffff] mx-auto border border-white p-2">
                    <div className="App bg-[#ffff] p-2 flex items-center justify-between">
                        <div style={{ textAlign: "left" }}>
                            <h1>Danh sách người dùng</h1>
                            <i className="text-green-700" style={{ width: "20%" }}>
                                Active Members
                            </i>
                        </div>
                        <div className="search-box flex items-center bg-[#F9FAFB] w-[550px] h-[35px] border border-black rounded-full px-4">
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
                    <div>
                        {loading ? (
                            <div className="flex items-end gap-8 text-center">
                                <Spinner className={"h-16 w-16"} color="blue" />
                            </div>
                        ) : (
                            <div className="text-center mt-2 p-2 bg-white">
                                <div className="space-x-4">
                                    <span> <Rate rating={averageStars} /></span>
                                </div>
                                <h1 className="text-2xl text-gray-500 font-bold mb-4">
                                    5 sao trung bình dựa trên 15 bài đánh giá
                                </h1>
                            </div>
                        )}
                        {feedbackList.map((feedback, index) => (
                            <div key={index} className="bg-[#ffffff] h-full shadow-lg mx-4 p-1">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-white">
                                    <div className="bg-white col-span-2 p-4 text-left">
                                        <i> Đánh giá chức năng đặt lịch </i>
                                    </div>
                                    <div className="flex bg-white justify-end items-center space-x-4 p-4">
                                        <div className="">
                                            <Rate rating={feedback.rating} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium">
                                                {feedback.createdAt ? formatDate(feedback.createdAt) : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-black p-3">
                                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 bg-white">
                                        <div className="flex flex-row items-center">
                                            <label className="text-gray-700 text-sm font-bold text-left mr-2">
                                                Họ và tên:
                                            </label>
                                            <label className="text-gray-700 text-sm font-bold text-left mr-2">
                                                {feedback.user.fullName}
                                            </label>
                                            <label className="text-gray-700 text-sm font-bold text-left mr-2 mx-2">
                                                Số điện thoại:
                                            </label>
                                            <label className="text-gray-700 text-sm font-bold text-left mr-2">
                                                {feedback.user.phone}
                                            </label>
                                            <label className="text-gray-700 text-sm font-bold text-left mr-2 mx-2">
                                                Email:
                                            </label>
                                            <label className="text-gray-700 text-sm font-bold text-left">
                                                {feedback.user.email}
                                            </label>
                                        </div>
                                        <div className="flex flex-row items-center">
                                            <label className="text-gray-700 text-sm font-bold text-left mr-2">
                                                Nội dung:
                                            </label>
                                            <label className="text-gray-700 text-sm font-bold text-left">
                                                {feedback.content}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <PaginationAdmin
                        paginationAdmin={paginationAdmin}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default ReciveFeedback;
