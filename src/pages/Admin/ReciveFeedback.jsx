import React, {useEffect, useRef, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import PaginationAdmin from "../../components/Admin/PaginationAdmin";
import * as adminService from "../../services/adminService";
import Rate from "../../components/Rate/Rate";


const ReciveFeedback = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [content, setContent] = useState("");
    const accessToken = localStorage.getItem('access-token')
    const [feedbackList, setFeedBackList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [averageStars, setAverageStars] = useState(0);
    const [paginationAdmin, setPaginationAdmin] = useState({
        page: 1,
        totalPages: 1
    })
    const [activeTab, setActiveTab] = useState(0);

    const [filters, setFilters] = useState({
        limit: 3,
        page: 1,
        status: null,
        search: ''
    })
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        date.setHours(date.getHours() + 7); // Adjust for GMT+7

        const dateOptions = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        };

        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };

        const formattedDate = date.toLocaleDateString('en-US', dateOptions);
        const formattedTime = date.toLocaleTimeString('en-US', timeOptions);

        const [month, day, year] = formattedDate.split('/');
        const rearrangedDate = `${day}-${month}-${year}`;

        return `${rearrangedDate} ${formattedTime}`;
    };


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setLoading(true);
                const feedbackResponse = await adminService.getFeedBack(accessToken);

                if (feedbackResponse.statusCode === 200) {
                    const feedbackData = feedbackResponse.response.data;
                    console.log(feedbackData);

                    if (feedbackData.length > 0) {
                        const totalStars = feedbackData.reduce((total, feedback) => total + feedback.rating, 0);
                        const average = totalStars / feedbackData.length;
                        setAverageStars(average);
                    }
                    setFeedBackList(feedbackData);
                    const {currentPage, lastPage} = feedbackResponse.response

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


    const [sortBy, setSortBy] = useState("option1"); // Mặc định là "Mới nhất"

    const handleSortChange = (event) => {
        const selectedValue = event.target.value;
        setSortBy(selectedValue);
        let sortedUsers = [...feedbackList];
        if (selectedValue === "option1") {

            sortedUsers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } else {

            sortedUsers.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        }
        setFeedBackList(sortedUsers);
    };

    return (
        <div className=" bg-[#F3F7FA] w-full h-full   p-6">
            <div>
                <div className=" bg-[#ffff]  mx-auto  border border-white p-2">
                    <div className="App bg-[#ffff] p-2 flex items-center justify-between">
                        <div style={{ textAlign: "left" }}>
                            <h1>Danh sách người dùng</h1>
                            <i className="text-green-700" style={{ width: "20%" }}>
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
                                value={sortBy}
                                onChange={handleSortChange}
                            >
                                <option value="option1">Mới nhất</option>
                                <option  value="option2">Cũ nhất </option>
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
                                <span> <Rate rating={averageStars}/></span>

                            </div>
                            <h1 className="text-2xl text-gray-500 font-bold mb-4">
                                5 sao trung bình dựa trên 15 bài đánh giá
                            </h1>
                        </div>
                        {feedbackList.map((feedback, index) => (
                        <div className=" bg-[#ffffff] h-full shadow-lg mx-4 p-1">

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-white">
                                <div className="bg-white col-span-2 p-4 text-left">
                                    <i> Đánh giá chức năng đặt lịch </i>
                                </div>
                                <div className="flex bg-white justify-end items-center space-x-4 p-4">
                                    <div className="">
                                        <Rate rating={feedback.rating}/>
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
                    <PaginationAdmin isPagination={PaginationAdmin} />
                </div>
            </div>
        </div>
    );
};
export default ReciveFeedback;
