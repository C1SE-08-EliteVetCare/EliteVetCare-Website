import React from "react";
import logo from "../../assets/images/logo.png";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-[#f9f9f9] bottom-0">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6">
                <div className="flex justify-between">
                    <div className="flex items-start text-primaryColor">
                        <img src={logo} className="h-11 mr-3" alt="logo"/>
                        <span className="font-chewy text-xl font-medium">EliteVetCare</span>
                    </div>
                    <div className="grid grid-cols-4 gap-12 max-sm:grid-cols-3">
                        <div>
                            <h3 className="mb-2 text-xl font-bold text-primaryColor">Giờ làm việc</h3>
                            <span className="block text-sm font-normal mb-4">Thứ Hai - Chủ Nhật <br/> 10 giờ sáng - 9 giờ tối <br/> Không làm tất cả các ngày nghỉ lễ  </span>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-bold text-primaryColor">Vị trí</h3>
                            <span
                                className="block text-sm font-normal mb-4">254 Nguyễn Văn Linh, <br/> Quận Thanh Khê - Tp. Đà Nẵng</span>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-bold text-primaryColor">Liên hệ</h3>
                            <span className="block text-sm font-normal">Email : quochuy@gmail.com</span>
                            <span className="block text-sm font-normal mb-4">SDT: 0978123456</span>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-bold text-primaryColor">Follow</h3>
                            <ul>
                                <li className="mb-2">
                                    <Link to="/">
                                        <FontAwesomeIcon icon={faFacebook} className="text-primaryColor mr-1.5"/>
                                        <span className="hover:underline">Facebook</span>
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/">
                                        <FontAwesomeIcon icon={faInstagram} className="text-primaryColor mr-1.5"/>
                                        <span className="hover:underline">Instagram</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;