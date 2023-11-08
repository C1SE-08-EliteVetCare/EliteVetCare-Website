import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faPaw,
    faSignOutAlt,
    faComment,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    const [dropdownStates, setDropdownStates] = useState({
        userDropdown: false,
        reviewDropdown: false,
    });

    const toggleDropdown = (dropdownName) => {
        setDropdownStates({
            ...dropdownStates,
            [dropdownName]: !dropdownStates[dropdownName],
        });
    };

    return (
        <aside
            id="sidebar-multi-level-sidebar"
            className="w-64 fixed top-0  bottom-0 col-span-4  my-16 "
            aria-label="Sidebar"
        >
            <div className="h-full px-4 py-4 overflow-y-auto bg-white border-r-2 border-r-gray-200 rounded-2xl">
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link
                            to="/admin/manage-account"
                            className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
                            // onClick={() => toggleDropdown("userDropdown")}
                        >
                            <FontAwesomeIcon
                                icon={faUser}
                                className="text-gray-700"
                            />
                            <span className="flex-1 ml-3 text-left whitespace-nowrap text-gray-600">
                                Tài khoản
                            </span>
                        </Link>
                        <ul
                            className={`${
                                dropdownStates.userDropdown ? "block" : "hidden"
                            }`}
                        >
                            <li>
                                <Link
                                    to="/admin/manage-account"
                                    className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                                >
                                    Danh sách
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link
                            to="/admin/reviews"
                            className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
                            onClick={() => toggleDropdown("reviewDropdown")}
                        >
                            <FontAwesomeIcon
                                icon={faComment}
                                className="text-gray-400"
                            />
                            <span className="flex-1 ml-3 text-left whitespace-nowrap text-gray-700">
                                Đánh giá
                            </span>
                        </Link>
                        <ul
                            className={`${
                                dropdownStates.reviewDropdown
                                    ? "block"
                                    : "hidden"
                            }`}
                        >
                            <li>
                                <Link
                                    to="/admin/revice"
                                    className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                                >
                                    Xem đánh giá
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100">
                            <FontAwesomeIcon
                                icon={faSignOutAlt}
                                className="text-red-600"
                            />

                            <Link
                                to="/login"
                                className="flex items-center w-full transition duration-75 rounded-lg group hover:bg-gray-100"
                            >
                                <span className="flex-1 ml-3 text-left whitespace-nowrap text-red-600">
                                    Đăng xuất
                                </span>
                            </Link>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
