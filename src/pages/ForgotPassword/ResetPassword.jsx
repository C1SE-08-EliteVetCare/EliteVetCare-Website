import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamondTurnRight } from "@fortawesome/free-solid-svg-icons";
import * as authService from "../../services/authService";
import { toast } from "sonner";
import { Spinner } from "@material-tailwind/react";
import banner from "../../assets/images/login-banner.png";
import {Helmet} from "react-helmet";

const ResetPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [email, setEmail] = useState(location?.state?.email || "");
    const [password, setPassword] = useState("");
    const [cfPassword, setCfPassword] = useState("");
    const [hiddenPass, setHiddenPass] = useState(true);
    const [hiddenCfPass, setHiddenCfPass] = useState(true);
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const [countdown, setCountdown] = useState(300);

    useEffect(() => {
        const timer = setInterval(() => {
            if (countdown > 0) {
                setCountdown(countdown - 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [countdown]);

    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;

    const handleResetPassword = async (e) => {
        e.preventDefault();

        const combinedOtp = otp.join("");

        if (!combinedOtp.trim() || !password.trim() || !cfPassword.trim()) {
            toast.error("Vui lòng nhập đầy đủ thông tin");
            return;
        }

        if (combinedOtp.length !== 6 || !/^\d+$/.test(combinedOtp)) {
            toast.error("Mã OTP không hợp lệ");
            return;
        }

        if (password !== cfPassword) {
            toast.error("Mật khẩu và xác nhận mật khẩu không khớp");
            return;
        }

        try {
            setLoading(true);
            const verifyResponse = await authService.verifyEmail(localStorage.getItem("verify-email"), combinedOtp);

            console.log("Verify Response:", verifyResponse);
            console.log("OTP .,", combinedOtp);

            if (verifyResponse.statusCode === 200 && verifyResponse.data.isValid) {
                localStorage.removeItem("verify-email");
                setPassword("");
                setCfPassword("");

                toast.success("Đặt lại mật khẩu thành công!");
            } else {
                console.error("OTP verification failed:", verifyResponse.error);

                if (verifyResponse.error === "Bad Request") {
                    const errorMessage = Array.isArray(verifyResponse.message)
                        ? verifyResponse.message[0]
                        : verifyResponse.message;

                    if (errorMessage === "OTP has expired") {
                        toast.error("Mã OTP đã hết hạn. Vui lòng yêu cầu mã mới.");

                    } else {
                        toast.error(errorMessage);
                    }
                } else {
                    toast.error("Mã OTP không hợp lệ hoặc đã hết hạn");
                }
            }
        } catch (error) {
            console.error("Error resetting password:", error);
            toast.error("Error resetting password. Vui lòng thử lại sau.");
        } finally {
            setLoading(false);
        }
    };


    const handleOtpChange = (index, value) => {
        if (/^\d*$/.test(value) || value === "") {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
        }
    };
    return (
        <div className="h-screen flex items-center bg-[#E6EBFB]">
            <Helmet><title>Đặt lại mật khẩu | EliteVetCare</title></Helmet>
            <div className="w-full bg-white sm:w-[80%] lg:w-[75%] lg:grid lg:grid-cols-10 shadow-xl m-auto my-auto rounded-[20px] pb-4 lg:pb-0">
                <div className="text-center lg:col-span-4">
                    <div className="w-[70%] m-auto">
                        <h1 className="text-primaryColor text-3xl font-bold pt-10 pb-3">Đặt Lại Mật Khẩu</h1>
                        <form className="mt-9">
                            <div className="relative mb-6">
                                <input
                                    type="text"
                                    className="block w-full mb-6 px-4 py-3 border-2 rounded-lg text-gray-900 shadow-lg bg-gray-200 appearance-none focus:outline-none peer"
                                    placeholder=" "
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                                <label className="absolute text-base bg-gray-200 top-2 z-10 px-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 left-3">
                                    {email}
                                </label>
                            </div>
                            <div className="grid grid-cols-6 gap-3 mb-6">
                                {otp.map((digit, index) => (
                                    <div key={index} className="relative">
                                        <input
                                            type="text"
                                            id={`otp${index + 1}`}
                                            className="text-center font-bold block w-full px-4 py-4 border-2 rounded-lg text-gray-900 shadow-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder="0"
                                            maxLength="1"
                                            onChange={(e) => handleOtpChange(index, e.target.value)}
                                            value={digit}
                                            required
                                        />
                                        <label htmlFor={`otp${index + 1}`} className="sr-only">
                                            Nhập số thứ {index + 1} của mã OTP
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <div className="relative mb-6">
                                <input
                                    type={hiddenPass ? "password" : "text"}
                                    id="floating_outlined_password"
                                    className="block w-full px-4 py-3 border-2 rounded-lg text-gray-900 shadow-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                                <label
                                    htmlFor="floating_outlined_password"
                                    className="absolute text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
                                >
                                    Mật khẩu mới
                                </label>
                                {password !== "" && (
                                    <FontAwesomeIcon
                                        onClick={() => setHiddenPass(!hiddenPass)}
                                        className="absolute top-5 right-6"
                                        icon={hiddenPass }
                                    />
                                )}
                            </div>
                            <div className="relative mb-6 ">
                                <input
                                    type={hiddenCfPass ? "password" : "text"}
                                    id="floating_outlined_cfPassword"
                                    className="block w-full px-4 py-3 border-2 rounded-lg text-gray-900 shadow-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    onChange={(e) => setCfPassword(e.target.value)}
                                    value={cfPassword}
                                />
                                <label
                                    htmlFor="floating_outlined_cfPassword"
                                    className="absolute text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
                                >
                                    Xác nhận mật khẩu
                                </label>
                                {cfPassword !== "" && (
                                    <FontAwesomeIcon
                                        onClick={() => setHiddenCfPass(!hiddenCfPass)}
                                        className="absolute top-5 right-6"
                                        icon={hiddenCfPass }
                                    />
                                )}
                            </div>
                            <div className=" text-center text-gray-600 rounded-lg my-4 ">
                                Mã
                                <i className="text-blue-800 font-bold"> OTP </i>
                                thời gian hết hạn sau{" "}
                                <i className="text-red-600 font-bold">
                                    {minutes} : {seconds}
                                </i>
                                <i> giây</i>
                            </div>
                            <button
                                className="bg-primaryColor text-white w-full py-3 mb-3 rounded-3xl hover:bg-blue-600"
                                onClick={handleResetPassword}
                                disabled={loading}
                            >
                                {loading ? <Spinner color="white" size="sm" /> : "Xác nhận"}
                            </button>
                        </form>
                        <div className="mb-10">
                            <p>
                                Quay lại trang <FontAwesomeIcon icon={faDiamondTurnRight} />
                                <Link to="/login" className="text-primaryColor font-bold">
                                    {" "}
                                    Đăng nhập
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block h-full w-full col-span-6 ">
                    <img className="h-full w-full object-cover lg:rounded-r-[20px]" src={banner} alt="img" />
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
