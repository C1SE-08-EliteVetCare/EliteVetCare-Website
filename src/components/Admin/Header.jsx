import React, {useContext, useState} from "react";
import logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import DropDownAdmin from "./DropDownAdmin";
import AuthContext from "../../context/authContext";

const HeaderAD = () => {
    const isLogin = true;
    const [isDropDown, setIsDropDown] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const router = useLocation();
    const {auth} = useContext(AuthContext)

    return (
        <header className="sticky top-0 left-0 mx-auto co right-0 w-full bg-[#f9f9f9] z-50 shadow-md px-4">
            <div className="h-[76px] flex justify-between items-center sm:px-10 md:px-10 lg:px-0 lg:grid lg:grid-flow-col">
                <div className=" flex items-center">
                    <img src={logo} alt="logo" className="w-[15%]" />
                    <h1 className=" text-xl font-medium pl-2  text-black p-5">
                        Administrator
                    </h1>
                    <div className=" mx-4 text-xl font-medium pl-2  text-black">
                        <p> Dashboard</p>
                    </div>
                </div>

                <div className="Sider mr-1 h-full flex items-center justify-end">
                    <button
                        className="mr-4 text-2xl text-  text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-100 dark:border-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={() => setShowNotifications(!showNotifications)}
                    >

                    </button>
                    {isLogin ? (
                        <div>
                            <button
                                id="dropdownAvatarNameButton"
                                onClick={() => setIsDropDown(!isDropDown)}
                                className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 md:mr-0"
                            >
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="w-10 h-10 mr-2 rounded-full object-cover"
                                    src={`${auth?.avatar || "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"}`}
                                    alt="user photo"
                                />
                                <span
                                    className="block max-w-[128px] truncate">{auth?.email?.split('@')[0] || null}</span>
                                <svg
                                    className="w-2.5 h-2.5 ml-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>

                            <DropDownAdmin isDropDown={isDropDown} />
                        </div>
                    ) : (
                        <div>
                            <Link to="/login">
                                <button className="text-lg font-bold mr-3 hover:text-primaryColor">
                                    Đăng Nhập
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className="text-lg font-bold px-7 py-2 text-white bg-primaryColor active:opacity-80 rounded-3xl">
                                    Đăng Ký
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>

        </header>
    );
};

export default HeaderAD;
