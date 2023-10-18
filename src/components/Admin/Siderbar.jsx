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
            className="w-64 col-span-2"
            aria-label="Sidebar"
        >
            <div className="px-4 py-4">
                <ul className="space-y-2 font-medium">
                    <li>
                        <button
                            className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
                            onClick={() => toggleDropdown("userDropdown")}
                        >
                            <FontAwesomeIcon
                                icon={faUser}
                                className="text-gray-700"
                            />
                            <span className="flex-1 ml-3 text-left whitespace-nowrap text-gray-400">
                                Tài khoản
                            </span>
                        </button>
                        <ul
                            className={`${
                                dropdownStates.userDropdown ? "block" : "hidden"
                            }`}
                        >
                            <li>
                                <Link
                                    to="/profile"
                                    className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                                >
                                    Hồ sơ
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button
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
                        </button>
                        <ul
                            className={`${
                                dropdownStates.reviewDropdown
                                    ? "block"
                                    : "hidden"
                            }`}
                        >
                            <li>
                                <Link
                                    to="/reviews"
                                    className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                                >
                                    Xem đánh giá
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/write-review"
                                    className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover-bg-gray-100"
                                >
                                    Viết đánh giá
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
                            <span className="flex-1 ml-3 text-left whitespace-nowrap text-red-600">
                                Đăng xuất
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
