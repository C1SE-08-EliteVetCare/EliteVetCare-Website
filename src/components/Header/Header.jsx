import React, {useContext, useState} from "react";
import logo from "../../assets/images/logo.png";
import {Link, useLocation, useNavigate} from "react-router-dom";
import DropDownUser from "../DropDownUser/DropDownUser";
import {motion} from "framer-motion";
import AuthContext from "../../context/authContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDoorOpen, faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import {toast} from "sonner";

const Header = () => {
    const {auth} = useContext(AuthContext)
    const accessToken = localStorage.getItem('access-token')
    const [isDropDown, setIsDropDown] = useState(false);
    const router = useLocation();
    const [isCollapsed, setIsCollapsed] = useState(true)

    return (
        <header className="sticky top-0 left-0 right-0 w-full bg-[#f9f9f9] z-50 shadow-md">
            <div
                className="container mx-auto h-[60px] flex justify-between sm:px-3 md:px-10 lg:px-10 lg:grid lg:grid-flow-col">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="logo" className="h-11"/>
                    <h1 className="hidden lg:block md:block font-chewy text-xl font-medium pl-2 text-primaryColor">EliteVetCare</h1>
                </Link>
                <ul className="hidden px-3 lg:flex lg:items-center lg:justify-items-center">
                    <li className="block">
                        <Link to="/">
                            <p
                                className={`px-6 text-lg font-medium hover:text-primaryColor transition-all duration-300 linear 
                                ${router.pathname === "/" ? "text-primaryColor" : "text-black"}`}>Trang chủ
                            </p>
                        </Link>
                    </li>
                    <li className="block">
                        <Link to="/make-appointment">
                            <p
                                className={`px-6 text-lg font-medium hover:text-primaryColor transition-all duration-300 linear 
                                ${router.pathname === "/make-appointment" ? "text-primaryColor" : "text-black"}`}>Đặt lịch
                            </p>
                        </Link>
                    </li>
                    <li className="block">
                        <Link to="/contact">
                            <p
                                className={`px-6 text-lg font-medium hover:text-primaryColor transition-all duration-300 linear 
                                ${router.pathname === "/contact" ? "text-primaryColor" : "text-black"}`}>Liên hệ
                            </p>
                        </Link>
                    </li>
                    <li className="block">
                        <Link to="/feedback">
                            <p
                                className={`px-6 text-lg font-medium hover:text-primaryColor transition-all duration-300 linear 
                                ${router.pathname === "/feedback" ? "text-primaryColor" : "text-black"}`}>Đánh giá
                            </p>
                        </Link>
                    </li>
                </ul>

                <div className="h-full flex items-center">
                    {
                        accessToken ? (
                            <div className="flex flex-row">
                                <MenuMobile isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
                                <motion.div animate={isDropDown ? "open" : "closed"}>
                                    <button
                                        onClick={() => setIsDropDown(!isDropDown)}
                                        id="dropdownAvatarNameButton"
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
                                    {/*  Drop down list*/}
                                    <DropDownUser isDropDown={isDropDown}/>
                                </motion.div>
                            </div>
                        ) : (
                            <>
                                <div className="hidden lg:block">
                                    <Link to="/login">
                                        <button className="text-lg font-bold mr-3 hover:text-primaryColor">Đăng Nhập
                                        </button>
                                    </Link>
                                    <Link to="/register">
                                        <button
                                            className="text-lg font-bold px-7 py-2 text-white bg-primaryColor active:opacity-80 rounded-3xl transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">Đăng
                                            Ký
                                        </button>
                                    </Link>
                                </div>
                                <MenuMobile isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
                            </>
                        )
                    }
                </div>
            </div>
        </header>
    );
};

const MenuMobile = ({isCollapsed, setIsCollapsed}) => {
    const {auth, setAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    const accessToken = localStorage.getItem('access-token')

    const handleLogout = () => {
        setAuth({})
        localStorage.removeItem('auth')
        localStorage.removeItem('access-token')
        localStorage.removeItem('refresh-token')
        navigate('/login')
        toast.success("Đăng xuất thành công")
    }

    return (
        <div>
            <button data-collapse-toggle="mobile-menu-2" className="relative inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none" onClick={() => setIsCollapsed(!isCollapsed)}>
                <span className="sr-only">Open main menu</span>
                <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </button>
            <div id="mobile-menu-2" className={`${isCollapsed ? "hidden" : "block"} absolute lg:hidden right-0 top-[55px] bottom-0 w-[30%] bg-white shadow h-fit `}
                 onMouseLeave={() => setIsCollapsed(!isCollapsed)}
            >
                {!accessToken && (
                    <ul>
                        <li className="flex justify-center items-center hover:bg-primaryColor hover:text-white transition-all border-b">
                            <FontAwesomeIcon icon={faRightToBracket}/>
                            <Link
                                to="/login"
                                className="block rounded-lg py-2 pr-4 pl-3 text-gray-700 border-gray-100 "
                            >
                                Đăng nhập
                            </Link>
                        </li>
                        <li className="flex justify-center items-center hover:bg-primaryColor hover:text-white transition-all border-b">
                            <FontAwesomeIcon icon={faRightToBracket}/>
                            <Link
                                to="/feedback"
                                className="block rounded-lg py-2 pr-4 pl-3 text-gray-700 border-gray-100"
                            >
                                Đăng ký
                            </Link>
                        </li>
                    </ul>
                )}
                <ul className="flex flex-col font-medium">
                    <li>
                        <Link
                            to="/"
                            className="block rounded-lg py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-primaryColor hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primaryColor lg:p-0 transition-all"
                        >
                            Trang Chủ
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/make-appointment"
                            className="block rounded-lg py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-primaryColor hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primaryColor lg:p-0 transition-all"
                        >
                            Đặt lịch
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="block rounded-lg py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-primaryColor hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primaryColor lg:p-0 transition-all"
                        >
                            Liên Hệ
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/feedback"
                            className="block rounded-lg py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-primaryColor hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primaryColor lg:p-0 transition-all"
                        >
                            Đánh giá
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;