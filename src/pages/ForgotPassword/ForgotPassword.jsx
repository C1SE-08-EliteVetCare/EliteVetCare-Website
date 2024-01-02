import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import banner from "../../assets/images/login-banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamondTurnRight } from "@fortawesome/free-solid-svg-icons";
import * as authService from "../../services/authService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "@material-tailwind/react";
import {Helmet} from "react-helmet";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState("");
    const navigate = useNavigate();

    const handleForgotPassword = async (e) => {
        e.preventDefault();

        if (!email.trim()) {
            toast.error("Vui lòng nhập địa chỉ email");
            return;
        } else {
            setEmailError("");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Địa chỉ email không hợp lệ");

            return;
        } else {
            setEmailError("");
        }

        try {
            setLoading(true);
            const response = await authService.forgotPassword(email);

            if (response.statusCode === 200) {

                if (response.data && response.data.email) {
                    localStorage.setItem("reset-password", email);
                    toast.error("Email không tồn tại");
                } else {
                    console.error("Email does not exist");
                    navigate("/reset-password");
                    toast.success("Đã gửi thành công đến email vui lòng kiểm tra!");
                }
            } else {
                console.error("Error during forgot password:", response);
                toast.error("Error during forgot password");
            }
        } catch (error) {
            console.error("Error during forgot password:", error);
            toast.error("Error during forgot password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen flex items-center bg-[#E6EBFB]">
            <Helmet><title>Quên mật khẩu | EliteVetCare</title></Helmet>
            <div className="w-full bg-white sm:w-[80%] lg:w-[75%] lg:grid lg:grid-cols-10 shadow-xl m-auto my-auto rounded-[20px] pb-4 lg:pb-0">
                <div className="text-center lg:col-span-4">
                    <div className="w-[70%] m-auto">
                        <h1 className="text-primaryColor text-3xl font-bold pt-10 pb-3">
                            Quên Mật khẩu
                        </h1>
                        <h1 className="text-base font-normal">
                            Vui lòng nhập địa chỉ email đã đăng ký của bạn. Bạn sẽ nhận được
                            mã OTP để tạo mật khẩu mới
                        </h1>
                        <form onSubmit={handleForgotPassword} className="mt-9">
                            <div className="relative mb-6">
                                <input
                                    type="text"
                                    id="floating_outlined_email"
                                    className="block w-full mb-6 px-4 py-3 border-2 rounded-lg text-gray-900 shadow-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setEmailError(""); // Clear email error when typing
                                    }}
                                    value={email}
                                />
                                <label
                                    htmlFor="floating_outlined_email"
                                    className="absolute text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
                                >
                                    Địa chỉ Email
                                </label>
                                {emailError && (
                                    <p className="text-red-500 text-sm mt-1">{emailError}</p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="bg-primaryColor text-white w-full py-3 mb-4 rounded-3xl hover:bg-blue-600"
                                disabled={loading}
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center">
                                        <Spinner className="h-6 w-6 mr-4" />
                                        <span>Đang tải....</span>
                                    </div>
                                ) : (
                                    <span>Gửi</span>
                                )}
                            </button>
                        </form>
                        <div className="mb-10">
                            <p>
                                Quay lại trang{" "}
                                <FontAwesomeIcon icon={faDiamondTurnRight} />
                                <Link to="/login" className="text-primaryColor font-bold">
                                    {" "}
                                    Đăng nhập
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block h-full w-full col-span-6 ">
                    <img
                        className="h-full w-full object-cover lg:rounded-r-[20px]"
                        src={banner}
                        alt="img"
                    />
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
