import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import banner from "../../assets/images/login-banner.png"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hiddenPass, setHiddenPass] = useState(true);

  return (
    <div className="h-screen flex items-center bg-[#E6EBFB]">
      <div
        className="w-full bg-white sm:w-[80%] lg:w-[75%] lg:grid lg:grid-cols-10 shadow-xl m-auto my-auto rounded-[20px] pb-4 lg:pb-0">
        <div className="text-center lg:col-span-4">
          <div className="w-[70%] m-auto">
            <h1 className="text-primaryColor text-3xl font-bold pt-10 pb-3">Đăng Nhập</h1>
            <h1 className="text-base font-normal">Chào mừng đến với EliteVetCare dịch vụ phòng khám thú y tại Đà
              Nẵng</h1>
            <form action="" className="mt-9">
              {/*<input type="text"*/}
              {/*       className="w-full mb-6 px-4 py-3 border-2 border-b-gray-400 rounded-lg shadow-lg outline-none"*/}
              {/*       placeholder="Email hoặc số điện thoại" value={email}*/}
              {/*       onChange={(e) => setEmail(e.target.value)} />*/}
              <button
                className="w-full mb-3 px-4 py-3 flex justify-center gap-2 border-2 rounded-lg hover:border-blue-600 transition duration-150">
                <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy"
                     alt="google logo"/>
                  <span>Đăng nhập với Google</span>
              </button>
              <div className="mb-3 flex items-center justify-around">
                <div className="w-[125px] h-0.5 bg-gray-300 bg-opacity-60 rounded-[100px]" />
                <span className="">Hoặc</span>
                <div className="w-[125px] h-0.5 bg-gray-300 bg-opacity-60 rounded-[100px]" />
              </div>
              <div className="relative mb-6">
                <input type="text" id="floating_outlined_email"
                       className="block w-full mb-6 px-4 py-3 border-2 rounded-lg text-gray-900 shadow-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder=" " onChange={(e) => setEmail(e.target.value)} value={email} />
                <label htmlFor="floating_outlined_email"
                       className="absolute text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Email
                  hoặc số điện thoại</label>
              </div>
              <div className="relative mb-6">
                <input type={hiddenPass ? "password" : "text"} id="floating_outlined_password"
                       className="block w-full px-4 py-3 border-2 rounded-lg text-gray-900 shadow-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder=" " onChange={(e) => setPassword(e.target.value)} value={password} />
                <label htmlFor="floating_outlined_password"
                       className="absolute text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Mật
                  khẩu
                </label>
                {password !== "" && (hiddenPass ? (
                  <FontAwesomeIcon
                    onClick={() => setHiddenPass(!hiddenPass)}
                    className="absolute top-5 right-6"
                    icon={faEyeSlash}
                  />
                ) : (
                  <FontAwesomeIcon
                    onClick={() => setHiddenPass(!hiddenPass)}
                    className="absolute top-5 right-6"
                    icon={faEye}
                  />
                ))}
              </div>
              <div className="text-right mb-5">
                <Link to="/forgot-password" className="text-primaryColor">Quên mật khẩu ?</Link>
              </div>
              <button className="bg-primaryColor text-white w-full py-3 mb-3 rounded-3xl">Đăng Nhập</button>
            </form>
            <div className="text-right mb-10">
              <p>Bạn chưa có tài khoản?
                <Link to="/register" className="text-primaryColor"> Đăng ký</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block h-full w-full col-span-6 ">
          <img className="h-full w-full object-cover lg:rounded-r-[20px]" src={banner} alt="img"/>
        </div>
      </div>
    </div>
);
};

export default Login;
