import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import DropDownUser from "../DropDownUser/DropDownUser";

const Header = () => {
  // const [isLogin, setIsLogin] = useState(true);
  const isLogin = true;
  const [isDropDown, setIsDropDown] = useState(false);
  const router = useLocation();

  return (
    <header className="sticky top-0 left-0 right-0 w-full bg-[#f9f9f9] z-50 shadow-md">
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
                  ${router.pathname === "/service" ? "text-primaryColor" : "text-black"}`}>Đặt lịch
              </p>
            </Link>
          </li>
          <li className="block">
            <Link to="/">
              <p
                className={`mr-14 text-lg font-medium hover:text-primaryColor transition-all duration-300 linear 
                  ${router.pathname === "/feedback" ? "text-primaryColor" : "text-black"}`}>Liên hệ
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
          {
            isLogin ? (
              <div>
                <button
                  id="dropdownAvatarNameButton"
                  onClick={() => setIsDropDown(!isDropDown)}
                  className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 md:mr-0"
                >
                  <span className="sr-only">Open user menu</span>
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                  <img
                    className="w-10 h-10 mr-2 rounded-full object-cover"
                    src="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"
                    alt="user photo"
                  />
                  quangquoc154
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
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <button className="text-lg font-bold mr-3 hover:text-primaryColor">Đăng Nhập</button>
                </Link>
                <Link to="/signup">
                  <button
                    className="text-lg font-bold px-7 py-2 text-white bg-primaryColor active:opacity-80 rounded-3xl">Đăng
                    Ký
                  </button>
                </Link>
              </div>
            )
          }
        </div>
      </div>
    </header>
  );
};

export default Header;