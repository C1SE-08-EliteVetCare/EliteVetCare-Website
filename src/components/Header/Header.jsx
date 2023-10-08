import React from "react";
import logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const router = useLocation();
  return (
    <header className="top-0 left-0 right-0 w-full bg-[#f9f9f9] z-50 shadow-sm">
      <div
        className="container mx-auto h-[76px] flex justify-around sm:px-3 md:px-10 lg:px-10 lg:grid lg:grid-flow-col">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-[15%]" />
          <h1 className="font-chewy text-xl font-medium pl-2 text-primaryColor">EliteVetCare</h1>
        </div>
        <ul className="px-3 lg:flex lg:items-center">
          <li className="block">
            <Link to="/">
              <p
                className={`mr-14 text-lg font-medium hover:text-primaryColor transition-all duration-300 linear 
                  ${router.pathname === "/" ? "text-primaryColor" : "text-black"}`}>Trang chủ
              </p>
            </Link>
          </li>
          <li className="block">
            <Link to="/">
              <p
                className={`mr-14 text-lg font-medium hover:text-primaryColor transition-all duration-300 linear 
                  ${router.pathname === "/service" ? "text-primaryColor" : "text-black"}`}>Dịch vụ
              </p>
            </Link>
          </li>
          <li className="block">
            <Link to="/">
              <p
                className={`mr-14 text-lg font-medium hover:text-primaryColor transition-all duration-300 linear 
                  ${router.pathname === "/feedback" ? "text-primaryColor" : "text-black"}`}>Đánh giá
              </p>
            </Link>
          </li>
        </ul>

        <div className="h-full flex items-center">
          <div>
            <Link to="/login">
              <button className="text-lg font-bold mr-3 hover:text-primaryColor">Đăng Nhập</button>
            </Link>
            <Link to="/login">
              <button
                className="text-lg font-bold px-7 py-2 text-white bg-primaryColor active:opacity-80 rounded-3xl">Đăng Ký
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>);
};

export default Header;