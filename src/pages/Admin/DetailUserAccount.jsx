import React, { useRef, useState } from "react";
import Sidebar from "../../components/Admin/Siderbar";
import Address from "../../components/Address/Address";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const DetailUserAccount = () => {
    const changed = false;
    const [username, setUsername] = useState("");
    const [fullName, setFullName] = useState("");
    const [birthYear, setBirthYear] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [detailAddress, setDetailAddress] = useState("");
    const [province, setProvince] = useState({});
    const [district, setDistrict] = useState({});
    const [ward, setWard] = useState({});
    // const [avatar, setAvatar] = useState( null);
    const fileRef = useRef();

    return (
        <div className=" bg-[#bdcdda] w-full h-full  border border-white p-8">
            <div>
                <div className=" bg-[#ffffff] w-full h-ful  p-4">
                    <div className="button rounded-full bg-white  bg-[#F9FBFF] items-center justify-center w-[60px] h-[35px] p-1">
                        <button>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                    </div>
                </div>
                <div className=" bg-[#ffffff] w-full h-full  p-4 ">
                    <div className="  max-w-screen-xl container mx-auto my-9 grid grid-flow-col">
                        <div
                            className="  mx-10 py-1 px-1 col-span-4 shadow-2xl p-8"
                            style={{ borderRadius: "20px" }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white mx-4  p-6 ">
                                <h1 className="text-2xl font-medium text-black text-start mb-6">
                                    Thông tin chi tiết
                                </h1>
                                <div class="text-right">
                                    <select
                                        class=" py-1 px-4 border-t border-gray-600 bg-white w-2/3 h-3/4 text-center"
                                        style={{ borderRadius: "40px" }}
                                    >
                                        <option value="option1">Bác sĩ</option>
                                        <option value="option2">
                                            Chủ phòng khám
                                        </option>
                                        <option value="option3">
                                            Chủ thú cưng
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="grid grid-cols-6 bg-white-200  p-1 mx-8">
                                <label className="text-gray-700 text-sm font-bold text-left">
                                    Tên đăng nhập:
                                </label>
                                <label className="text-gray-700 text-sm font-bold text-left">
                                    Phi Hien
                                </label>
                            </div>
                            <div class="grid grid-cols-6 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                <label className="text-gray-700 text-sm font-bold text-left">
                                    Họ và tên:
                                </label>
                                <label className="text-gray-700 text-sm font-bold text-left">
                                    Nguyễn Phi Hiền
                                </label>
                            </div>
                            <div class="grid grid-cols-6 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                <label className="text-gray-700 text-sm font-bold text-left">
                                    Năm sinh:
                                </label>
                                <label className="text-gray-700 text-sm font-bold text-left">
                                    2002
                                </label>
                            </div>
                            <div class="grid grid-cols-6 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                <label className="text-gray-700 text-sm font-bold text-left">
                                    Giới tính:
                                </label>
                                <label className="text-gray-700 text-sm font-bold text-left">
                                    Nam
                                </label>
                            </div>
                            <div class="grid grid-cols-6 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                <label className="text-gray-700 text-sm font-bold text-left">
                                    Số điện thoại:
                                </label>
                                <label className="text-gray-700 text-sm font-bold text-left">
                                    0971010073
                                </label>
                            </div>
                            <div class="grid grid-cols-6 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                <label className="text-gray-700 text-sm font-bold text-left">
                                    Địa chỉ:
                                </label>
                                <label className="text-gray-700 text-sm font-bold text-left ">
                                    245/14 Bế Văn Đàn
                                </label>
                            </div>
                            <div class="grid grid-cols-6 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                <label className="text-gray-700 text-sm font-bold text-left">
                                    Ngày đăng ký:
                                </label>
                                <label className="text-gray-700 text-sm font-bold text-left">
                                    18/10/2023
                                </label>
                            </div>
                            <div class="mx-8 text-right">
                                <button
                                    className="py-2 px-5 my-6 bg-red-600 hover:bg-gray-500 text-white rounded-sm "
                                    onClick={() => fileRef.current.click()}
                                >
                                    Khóa tài khoản
                                </button>
                            </div>
                        </div>

                        <div className="col-span-2">
                            <div className="flex flex-col items-center">
                                <h1 className="text-2xl font-medium text-gray-800 p-4">
                                    Ảnh đại điện
                                </h1>
                                <img
                                    src="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"
                                    alt="avatar"
                                    className="w-40 h-40 object-cover border-2 rounded-full"
                                />
                                <input type="file" ref={fileRef} hidden />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailUserAccount;
