import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faChevronDown, faPaw, faUser} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    const isPetOwner = true;
    const [dropdownStates, setDropdownStates] = useState({
        userDropdown: false,
        petDropdown: false,
        apDropdown: false
    });

    const toggleDropdown = (dropdownName) => {
        setDropdownStates({
            ...dropdownStates,
            [dropdownName]: !dropdownStates[dropdownName]
        });
    };
    const router = useLocation();
    // const toggleDropdown = () => {
    //   setIsDropdownOpen(!dropdownStates);
    // };
    return (
        <aside id="sidebar-multi-level-sidebar"
               className="top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full drop-shadow-lg sm:translate-x-0"
               aria-label="Sidebar">
            <div className="h-full px-4 py-4 overflow-y-auto bg-white border-r-2 border-r-gray-200 rounded-2xl">
                <ul className="space-y-2 font-medium">
                    <li>
                        <button
                            className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
                            onClick={() => toggleDropdown("userDropdown")}>
                            <FontAwesomeIcon icon={faUser} className="text-primaryColor"/>
                            <span className="flex-1 ml-3 text-left whitespace-nowrap">Tài khoản của tôi</span>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </button>
                        <ul className={`${dropdownStates.userDropdown || router.pathname.includes("/profile") ? "block" : "hidden"}`}>
                            <li>
                                <Link to="/profile"
                                      className={`${router.pathname === "/profile" ? "text-primaryColor" : "text-gray-500"} flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100`}>Hồ
                                    sơ</Link>
                            </li>
                            <li>
                                <Link to="/profile/change-password"
                                      className={`${router.pathname === "/profile/change-password" ? "text-primaryColor" : "text-gray-500"} flex items-center w-full p-2 text-gray-500 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100`}>Đổi
                                    mật khẩu</Link>
                            </li>
                        </ul>
                    </li>
                    {isPetOwner ? (
                        <>
                            <li>
                                <button
                                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
                                    onClick={() => toggleDropdown("petDropdown")}>
                                    <FontAwesomeIcon icon={faPaw} className="text-primaryColor"/>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap">Thú cưng của tôi</span>
                                    <FontAwesomeIcon icon={faChevronDown}/>
                                </button>
                                <ul
                                    className={`${dropdownStates.petDropdown || router.pathname.includes("/pets") ? "block" : "hidden"}`}>
                                    <li>
                                        <Link to="/pet-owner/pets"
                                              className={`${router.pathname.includes("/pet-owner/pet") ? "text-primaryColor" : "text-gray-500"} flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100`}>Hồ
                                            sơ thú cưng</Link>
                                    </li>
                                    <li>
                                        <Link to="/pet-owner/pets/condition"
                                              className={`${router.pathname.includes("/pet-owner/pet-condition") ? "text-primaryColor" : "text-gray-500"} flex items-center w-full p-2 text-gray-500 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100`}>Tình
                                            trạng thú cưng</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <button
                                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
                                    onClick={() => toggleDropdown("apDropdown")}>
                                    <FontAwesomeIcon icon={faCalendarAlt} className="text-primaryColor"/>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap">Cuộc hẹn</span>
                                    <FontAwesomeIcon icon={faChevronDown}/>
                                </button>
                                <ul
                                    className={`${dropdownStates.apDropdown || router.pathname.includes("/appointment") ? "block" : "hidden"}`}>
                                    <li>
                                        <Link to="/pet-owner/appointments"
                                              className={`${router.pathname.includes("/pet-owner/appointment") ? "text-primaryColor" : "text-gray-500"} flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100`}>Danh
                                            sách cuộc hẹn</Link>
                                    </li>
                                </ul>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <button
                                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
                                    onClick={() => toggleDropdown("apDropdown")}>
                                    <FontAwesomeIcon icon={faCalendarAlt} className="text-primaryColor"/>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap">Quản lý lịch khám</span>
                                    <FontAwesomeIcon icon={faChevronDown}/>
                                </button>
                                <ul
                                    className={`${dropdownStates.apDropdown || router.pathname.includes("/vet/appointment") ? "block" : "hidden"}`}>
                                    <li>
                                        <Link to="/vet/appointment"
                                              className={`${router.pathname.includes("/vet/appointment") ? "text-primaryColor" : "text-gray-500"} flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100`}>Danh
                                            sách cuộc hẹn</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <button
                                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
                                    onClick={() => toggleDropdown("petDropdown")}>
                                    <FontAwesomeIcon icon={faPaw} className="text-primaryColor"/>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap">Quản lý thú cưng</span>
                                    <FontAwesomeIcon icon={faChevronDown}/>
                                </button>
                                <ul
                                    className={`${dropdownStates.petDropdown || router.pathname.includes("/pets") ? "block" : "hidden"}`}>
                                    <li>
                                        <Link to="/vet/pets"
                                              className={`${router.pathname.includes("/vet/pets") ? "text-primaryColor" : "text-gray-500"} flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100`}>Danh
                                            sách thú cưng</Link>
                                    </li>
                                    <li>
                                        <Link to="/vet/pets/advide"
                                              className={`${router.pathname.includes("/vet/pets/advide") ? "text-primaryColor" : "text-gray-500"} flex items-center w-full p-2 text-gray-500 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100`}>Đánh
                                            giá & lời khuyên</Link>
                                    </li>
                                </ul>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
