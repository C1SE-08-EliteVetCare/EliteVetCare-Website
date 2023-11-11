import React, {useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faDoorOpen, faPaw, faUserAlt} from "@fortawesome/free-solid-svg-icons";
import {motion} from 'framer-motion'
import {useNavigate} from "react-router-dom";
import {toast} from "sonner";
import AuthContext from "../../context/authContext";

const DropDownUser = ({isDropDown}) => {
    const navigate = useNavigate()
    const {auth, setAuth} = useContext(AuthContext)
    const handleLogout = () => {
        setAuth({})
        localStorage.removeItem('auth')
        localStorage.removeItem('access-token')
        localStorage.removeItem('refresh-token')
        navigate('/login')
        toast.success("Đăng xuất thành công")
    }

    return (
        <motion.div
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top" }}
            id="dropdownAvatarName"
            className={`${isDropDown ? 'block' : 'hidden'} bg-white absolute top-[65px] divide-y divide-gray-100 rounded-lg shadow w-[190px]`}
        >
            <div className="px-4 py-3 text-sm text-gray-900">
                <div className="font-medium text-primaryColor">{auth.role && auth.role.id === 2 ? "Chủ thú cưng" : "Bác sĩ"}</div>
                <div className="truncate" data-toggle="dropdown">{auth.fullName}</div>
                <div id="tooltip-default" role="tooltip"
                     className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Tooltip content
                </div>
            </div>
            <ul
                className="py-2 text-sm text-gray-700"
                       aria-labelledby="dropdownAvatarNameButton">
                <li
                    className="flex items-center hover:bg-primaryColor hover:text-white rounded transition-all duration-300 linear">
                    <FontAwesomeIcon className="mx-4" icon={faUserAlt}/>
                    <a href="/profile"
                       className="block px-1 py-2">Hồ sơ cá
                        nhân</a>
                </li>
                {
                    auth.role && auth.role.id === 2 ? (
                        <>
                            <li
                                className="flex items-center hover:bg-primaryColor hover:text-white rounded transition-all duration-300 linear">
                                <FontAwesomeIcon className="mx-4" icon={faPaw}/>
                                <a href="/pet-owner/pets"
                                   className="block px-1 py-2">Thú cưng của
                                    bạn
                                </a>
                            </li>
                            <li
                                className="flex items-center hover:bg-primaryColor hover:text-white rounded transition-all duration-300 linear">
                                <FontAwesomeIcon className="mx-4" icon={faCalendarAlt}/>
                                <a href="/pet-owner/appointments"
                                   className="block px-1 py-2">Danh sách cuộc hẹn
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li
                                className="flex items-center hover:bg-primaryColor hover:text-white rounded transition-all duration-300 linear">
                                <FontAwesomeIcon className="mx-4" icon={faCalendarAlt}/>
                                <a href="/vet/manage-appointments"
                                   className="block px-1 py-2">Quản lý lịch khám</a>
                            </li>
                            <li
                                className="flex items-center hover:bg-primaryColor hover:text-white rounded transition-all duration-300 linear">
                                <FontAwesomeIcon className="mx-4" icon={faPaw}/>
                                <a href="/vet/pets"
                                   className="block px-1 py-2">Quản lý thú cưng</a>
                            </li>
                        </>
                    )
                }
            </ul>
            <div onClick={handleLogout}
                className="flex items-center py-2 hover:border-y-rose-700 hover:bg-red-500 hover:text-white rounded transition-all duration-300 linear">
                <FontAwesomeIcon className="mx-4" icon={faDoorOpen}/>
                <button className="block px-1 py-1.5 text-sm">
                    Đăng xuất
                </button>
            </div>
        </motion.div>
    );
};

const wrapperVariants = {
    open: {
        opacity: 1,
        y: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0,
        },
    },
    closed: {
        opacity: 0,
        y: -15,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
        },
    },
};

export default DropDownUser;
