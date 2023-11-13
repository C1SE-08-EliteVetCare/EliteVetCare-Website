import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ban from "../../assets/images/undraw_envelope_re_f5j4.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamondTurnRight } from "@fortawesome/free-solid-svg-icons";
import * as authServices from "../../services/authService";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
    const [otp1, setOtp1] = useState("");
    const [otp2, setOtp2] = useState("");
    const [otp3, setOtp3] = useState("");
    const [otp4, setOtp4] = useState("");
    const [otp5, setOtp5] = useState("");
    const [otp6, setOtp6] = useState("");

    const navigate = useNavigate();

    const [countdown, setCountdown] = useState(300); // Thời gian đếm ngược 5 phút

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

    const handleVerify = async () => {
        const otp = `${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`;

        try {
            const verifyResponse = await authServices.verify(
                localStorage.getItem("verify-email"),
                otp
            );
            if (verifyResponse.statusCode === 200) {
                localStorage.removeItem("verify-email");
                navigate("/login");
            } else {
                console.log("Xác minh không thành công:", verifyResponse.error);
            }
        } catch (error) {
            console.log("Lỗi khi gửi yêu cầu xác minh:", error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleVerify();
    };

    return (
        <div className="h-screen flex items-center bg-[#E6EBFB]">
            <div className="w-full bg-white sm:w-[50%] lg:w-[50%]  shadow-xl m-auto my-auto rounded-[20px] pb-4 lg:pb-0">
                <div
                    className="text-center"
                    action=""
                    onSubmit={(e) => handleVerify(e)}
                >
                    <div className="w-[70%] m-auto">
                        <div className="flex items-center justify-center p-4">
                            <img
                                className="max-w-[50%] h-auto"
                                src={ban}
                                alt="img"
                            />
                        </div>

                        <h1 className="text-primaryColor text-3xl font-bold pt-5 pb-3 border-b border-black">
                            Xác minh địa chỉ email của bạn
                        </h1>
                        <h1 className="my-3">
                            Vui lòng kiểm tra hộp thư đến của bạn và nhập mã xác
                            minh bên dưới để xác minh địa chỉ email của bạn.
                        </h1>

                        <form action="" className="mt-9  ">
                            <div className="grid grid-cols-6 gap-3 ">
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="otp1"
                                        className="text-center font-bold block w-full px-4 py-4 border-2 rounded-lg text-gray-900 shadow-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="0 "
                                        onChange={(e) =>
                                            setOtp1(e.target.value)
                                        }
                                        value={otp1}
                                        required
                                        pattern="[0-9]"
                                    />
                                </div>

                                <div className="relative">
                                    <input
                                        type="text"
                                        id="otp2"
                                        className="text-center font-bold block w-full px-4 py-4 border-2 rounded-lg text-gray-900 shadow-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="0 "
                                        onChange={(e) =>
                                            setOtp2(e.target.value)
                                        }
                                        value={otp2}
                                        required
                                        pattern="[0-9]"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="otp3"
                                        className="text-center font-bold block w-full px-4 py-4 border-2 rounded-lg text-gray-900 shadow-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="0 "
                                        onChange={(e) =>
                                            setOtp3(e.target.value)
                                        }
                                        value={otp3}
                                        required
                                        pattern="[0-9]"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="otp4"
                                        className="text-center font-bold block w-full px-4 py-4 border-2 rounded-lg text-gray-900 shadow-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="0 "
                                        onChange={(e) =>
                                            setOtp4(e.target.value)
                                        }
                                        value={otp4}
                                        required
                                        pattern="[0-9]"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="otp5"
                                        className="text-center font-bold block w-full px-4 py-4 border-2 rounded-lg text-gray-900 shadow-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="0 "
                                        onChange={(e) =>
                                            setOtp5(e.target.value)
                                        }
                                        value={otp5}
                                        required
                                        pattern="[0-9]"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="otp6"
                                        className="text-center font-bold block w-full px-4 py-4 border-2 rounded-lg text-gray-900 shadow-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="0 "
                                        onChange={(e) =>
                                            setOtp6(e.target.value)
                                        }
                                        value={otp6}
                                        required
                                        pattern="[0-9]"
                                    />
                                </div>
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
                                className="bg-primaryColor text-white w-full py-2 mb-2 rounded-3xl hover:bg-blue-600"
                                onClick={(e) => handleSubmit(e)}
                            >
                                Xác nhận
                            </button>
                        </form>
                        <div className="mb-10">
                            <p>
                                Quay lại trang{" "}
                                <FontAwesomeIcon icon={faDiamondTurnRight} />
                                <Link
                                    to="/reset-password"
                                    className="text-primaryColor font-bold"
                                >
                                    {" "}
                                    Quên mật khẩu
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;
