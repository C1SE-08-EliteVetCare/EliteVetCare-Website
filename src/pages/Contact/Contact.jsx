import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Spinner} from "@material-tailwind/react";
import bgContact from "../../assets/images/bg-contact.png"
import {motion} from "framer-motion"
import Map from "../../components/Map/Map";
import {Helmet} from "react-helmet";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    // const [submit, setSubmit] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading(!loading)
    }

    return (
        <div>
            <Helmet>
                <title>Liên hệ | EliteVetCare</title>
            </Helmet>
            <div className="w-full mb-14 mx-auto px-6 md:px-4 lg:px-0">
                <div className="relative">
                    <img
                        className="h-full w-full object-cover rounded-xl"
                        src={bgContact}
                        alt="San pham lam bang go"
                    />
                    <div className="absolute sm:left-[30%] top-[40%] w-[40%]">
                        <div className="mx-16 text-black text-center mb-8 sm:mx-auto ">
                            <div className="">
                                <div
                                    className="font-chewy text-primaryColor font-medium md:text-lg lg:text-5xl mb-6 whitespace-nowrap left-8 ">
                                    EliteVetCare
                                </div>
                                <div
                                    className=" sm:text-sm md:text-sm lg:text-[18px] font-semibold mb-6 whitespace-nowrap italic">
                                    Hãy liên hệ cho chúng tôi nếu gặp thắc mắc
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mx-auto w-[400px] lg:w-[800px] border-spacing-1"
            >
                <div className="mb-2">
                    <label className="block text-gray-700 font-bold py-1.5 text-start" htmlFor="name">
                        Họ và tên
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                        type="text"
                        placeholder="Nhập họ và tên của bạn"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 font-bold py-1.5 text-start" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                        required
                        type="email"
                        placeholder="Nhập email của bạn"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 font-bold py-1.5 text-start" htmlFor="phone">
                        Số điện thoại
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                        required
                        type="text"
                        placeholder="Nhập số điện thoại của bạn"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold py-1.5 text-start" htmlFor="message">
                        Nội dung
                    </label>
                    <textarea
                        className="h-20 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                        placeholder="Nội dung tin nhắn"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <div className=" flex items-center justify-center ">
                    <motion.button whileHover={{scale: 1.1}}
                                   className="bg-primaryColor hover:bg-blue-600 text-white text-[20px] font-bold py-2 px-9 rounded focus:outline-none focus:shadow-outline"
                                   type="submit"
                    >
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <Spinner className="h-6 w-6 mr-4"/> <span>Đang tải....</span>
                            </div>
                        ) : (
                            <span>Gửi thông tin</span>
                        )}
                    </motion.button>
                </div>
            </form>
            <div className="grid grid-cols-4 gap-5 rounded px-8 pt-6 pb-8 my-16 mx-auto lg:w-[1000px] shadow-2xl">
                <div className="">
                    <div className="text-[36px] text-primaryColor text-center">
                        <FontAwesomeIcon icon={faLocationDot}/>
                    </div>
                    <h4 className="text-center font-bold my-4 text-[24px]">Địa Chỉ</h4>
                    <p className="text-[#666666] text-[16px] font-medium text-center">
                        254 Nguyễn Văn Linh, Quận Thanh Khuê, Thành Phố Đà Nẵng
                    </p>
                </div>
                <div className="">
                    <div className="text-[36px] text-primaryColor text-center">
                        <FontAwesomeIcon icon={faPhone}/>
                    </div>
                    <h4 className="text-center font-bold my-4 text-[24px]">Số Điện Thoại</h4>
                    <p className="text-[#666666] text-[16px] font-medium text-center"> 0978123456</p>
                </div>
                <div className="">
                    <div className="text-[36px] text-primaryColor text-center">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </div>
                    <h4 className="text-center font-bold my-4 text-[24px]">Email</h4>
                    <p className="text-[#666666] text-[16px] font-medium text-center">elitevetcare@gmail.com</p>
                </div>
                <div className="">
                    <div className=" text-[36px] text-primaryColor text-center">
                        <FontAwesomeIcon icon={faClock}/>
                    </div>
                    <h4 className="text-center font-bold my-4 text-[24px]">Giờ làm việc</h4>
                    <p className="text-[#666666] text-[16px] font-medium text-center">10:00 am to 9:00 pm</p>
                </div>
            </div>
            <div className="w-full h-[450px] mb-16">
                <Map/>
            </div>
        </div>
    );
};

export default Contact;