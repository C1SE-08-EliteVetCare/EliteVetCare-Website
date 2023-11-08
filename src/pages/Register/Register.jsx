import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate, useNavigate } from "react-router-dom";
import banner from "../../assets/images/login-banner.png";
import AuthContext from "../../context/authProvider";
import * as registerServices from "../../services/registerService";
import { toast } from "react-toastify";
import * as authServices from "../../services/authService";

const Register = () => {
    const { setAuth } = useContext(AuthContext);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cfPassword, setCfPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [hiddenPass, setHiddenPass] = useState(true);
    const [hiddenCfPass, setHiddenCfPass] = useState(true);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [submit, setSubmit] = useState(false);

    const isValidEmail = (email) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const isValid = emailRegex.test(email) && email.endsWith("@gmail.com");
        console.log("Email is valid: ", isValid);
        return isValid;
    };
    const notify = (message, type) => {
        const toastType = type === "success" ? toast.success : toast.error;
        return toastType(message, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    const replaceEmail = (email) => {
        const username = email
            .split("@")[0]
            .toLowerCase()
            .replace(/[^a-z0-9]/gi, "");
        return email.replace(/^[^@]+/, username);
    };

    useEffect(() => {
        console.log(submit);
        if (submit) {
            const fetchRegister = async () => {
                try {
                    const register = await registerServices.register(
                        fullName,
                        email,
                        password,
                        phone
                    );
                    if (register.statusCode === 201) {
                        setLoading(false);
                        navigate("/verify-email");
                    }
                } catch (error) {
                    notify("An error occurred during registration.");
                }
            };
            fetchRegister();
        }
    }, [fullName, email, navigate, password, phone, setAuth, submit]);

    const handleCheckInput = () => {
        const emailRegex = /\S+@\S+\.\S+/;
        const isEmailValid = emailRegex.test(email);
        const isPasswordValid = password.length >= 8;

        if (isEmailValid && email.endsWith("@gmail.com")) {
            // email is valid and ends with "@gmail.com"
            if (cfPassword === password) {
                setLoading(true);
                setSubmit(true);
            } else {
                notify("Mật khẩu nhập lại không khớp");
                setSubmit(false);
            }
        } else {
            let errorMessage = "";

            if (!isEmailValid) {
                errorMessage = 'Email phải bao gồm đuôi "@gmail.com"';
            } else if (!isPasswordValid) {
                errorMessage = "Mật khẩu phải chứa ít nhất 8 ký tự";
            }

            notify(errorMessage);
            setSubmit(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCheckInput();
    };
    const handleRegistration = () => {
        // Simulate a registration process (replace with your actual logic)
        setLoading(true);
        setTimeout(() => {
            setLoading(false);

            // Điều hướng người dùng đến trang "verify-email" sau khi xử lý xong
            navigate("/verify-email");
        }, 2000);
    };

    return (
        <div className="h-screen flex items-center bg-[#E6EBFB]">
            <div className="w-full bg-white sm:w-[80%] lg:w-[75%] lg:grid lg:grid-cols-10 shadow-xl m-auto my-auto rounded-[20px] pb-4 lg:pb-0">
                <div className="text-center lg:col-span-4">
                    <div className="w-[70%] m-auto">
                        <h1 className="text-primaryColor text-3xl font-bold pt-10 pb-3">
                            Đăng Ký
                        </h1>
                        <h1 className="text-base font-normal">
                            Chào mừng đến với EliteVetCare dịch vụ phòng khám
                            thú y tại Đà Nẵng
                        </h1>
                        <form
                            action=""
                            onSubmit={(e) => handleSubmit(e)}
                            className="mt-9"
                        >
                            <div className="relative mb-6">
                                <input
                                    type="text"
                                    id="floating_outlined_username"
                                    className="block w-full mb-6 px-4 py-3 border-2 rounded-lg text-gray-900 shadow-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    onChange={(e) =>
                                        setFullName(e.target.value)
                                    }
                                    value={fullName}
                                />
                                <label
                                    htmlFor="floating_outlined_username"
                                    className="absolute text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
                                >
                                    Họ và tên
                                </label>
                            </div>
                            <div className="relative mb-6">
                                <input
                                    type="text"
                                    id="floating_outlined_email"
                                    className="block w-full mb-6 px-4 py-3 border-2 rounded-lg text-gray-900 shadow-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                                <label
                                    htmlFor="floating_outlined_email"
                                    className="absolute text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
                                >
                                    Địa chỉ Email
                                </label>
                            </div>
                            <div className="relative mb-6">
                                <input
                                    type={hiddenPass ? "password" : "text"}
                                    id="floating_outlined_password"
                                    className="block w-full px-4 py-3 border-2 rounded-lg text-gray-900 shadow-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    value={password}
                                />
                                <label
                                    htmlFor="floating_outlined_password"
                                    className="absolute text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
                                >
                                    Mật khẩu
                                </label>
                                {password !== "" &&
                                    (hiddenPass ? (
                                        <FontAwesomeIcon
                                            onClick={() =>
                                                setHiddenPass(!hiddenPass)
                                            }
                                            className="absolute top-5 right-6"
                                            icon={faEyeSlash}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            onClick={() =>
                                                setHiddenPass(!hiddenPass)
                                            }
                                            className="absolute top-5 right-6"
                                            icon={faEye}
                                        />
                                    ))}
                            </div>
                            <div className="relative mb-6">
                                <input
                                    type={hiddenCfPass ? "password" : "text"}
                                    id="floating_outlined_cfPassword"
                                    className="block w-full px-4 py-3 border-2 rounded-lg text-gray-900 shadow-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    onChange={(e) =>
                                        setCfPassword(e.target.value)
                                    }
                                    value={cfPassword}
                                />
                                <label
                                    htmlFor="floating_outlined_cfPassword"
                                    className="absolute text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
                                >
                                    Xác nhận mật khẩu
                                </label>
                                {cfPassword !== "" &&
                                    (hiddenCfPass ? (
                                        <FontAwesomeIcon
                                            onClick={() =>
                                                setHiddenCfPass(!hiddenCfPass)
                                            }
                                            className="absolute top-5 right-6"
                                            icon={faEyeSlash}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            onClick={() =>
                                                setHiddenCfPass(!hiddenCfPass)
                                            }
                                            className="absolute top-5 right-6"
                                            icon={faEye}
                                        />
                                    ))}
                            </div>
                            <div className="relative mb-6">
                                <input
                                    type="text"
                                    id="floating_outlined_phone"
                                    className="block w-full mb-6 px-4 py-3 border-2 rounded-lg text-gray-900 shadow-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                />
                                <label
                                    htmlFor="floating_outlined_phone"
                                    className="absolute text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
                                >
                                    Số điện thoại
                                </label>
                            </div>
                            <button
                                className="bg-primaryColor text-white w-full py-3 mb-3 rounded-3xl hover:bg-blue-600"
                                disabled={loading}
                                onChange={handleRegistration}
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center">
                                        <span>Đang tải....</span>
                                    </div>
                                ) : (
                                    <span>Đăng Ký</span>
                                )}
                            </button>
                        </form>
                        <div className="text-right mb-10">
                            <p>
                                Bạn đã có tài khoản?
                                <Link to="/login" className="text-primaryColor">
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

export default Register;
