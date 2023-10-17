import React, { useRef, useState } from "react";
import Sidebar from "../../components/Admin/Siderbar";
import Address from "../../components/Address/Address";

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
        <div className="max-w-screen-xl container mx-auto my-9 grid grid-flow-col">
            <div className="bg-white py-1 px-1 col-span-4 shadow-2xl">
                <h1 className="text-2xl font-medium text-black text-start mb-4">
                    Thông tin chi tiết
                </h1>
                <form className="grid grid-cols-2 gap-x-9 gap-y-4">
                    <div className="flex flex-col">
                        <label
                            htmlFor="username"
                            className="text-left text-lg font-normal mb-2"
                        >
                            Tên đăng nhập
                            <p> Nam</p>
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder=""
                            className="w-full px-5 py-2 rounded-sm bg-inputColor focus:outline-primaryColor"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="fullName"
                            className="text-left text-lg font-normal mb-2"
                        >
                            Họ và tên
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder=""
                            className="w-full px-5 py-2 rounded-sm bg-inputColor focus:outline-primaryColor"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="birthYear"
                            className="text-left text-lg font-normal mb-2"
                        >
                            Năm sinh
                        </label>
                        <input
                            type="text"
                            id="birthYear"
                            placeholder=""
                            className="w-full px-5 py-2 rounded-sm bg-inputColor focus:outline-primaryColor"
                            value={birthYear}
                            onChange={(e) => setBirthYear(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="gender"
                            className="text-left text-lg font-normal mb-2"
                        >
                            Giới tính
                        </label>
                        <select
                            id="gender"
                            className="w-full px-5 py-2 rounded-sm bg-inputColor focus:outline-primaryColor"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option>--- Chọn giới tính ---</option>
                            <option value="1">Nam</option>
                            <option value="2">Nữ</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="text-left text-lg font-normal mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder=""
                            className="w-full px-5 py-2 rounded-sm bg-inputColor focus:outline-primaryColor"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="phone"
                            className="text-left text-lg font-normal mb-2"
                        >
                            Số điện thoại
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder=""
                            className="w-full px-5 py-2 rounded-sm bg-inputColor focus:outline-primaryColor"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <Address
                        province={province}
                        setProvince={setProvince}
                        district={district}
                        setDistrict={setDistrict}
                        ward={ward}
                        setWard={setWard}
                    />
                    <div className="flex flex-col">
                        <label
                            htmlFor="detailAddress"
                            className="text-left text-lg font-normal mb-2"
                        >
                            Số nhà, tên đường
                        </label>
                        <input
                            type="text"
                            id="detailAddress"
                            placeholder=""
                            className="w-full px-5 py-2 rounded-sm bg-inputColor focus:outline-primaryColor"
                            value={detailAddress}
                            onChange={(e) => setDetailAddress(e.target.value)}
                        />
                    </div>
                </form>
            </div>
            <div className="col-span-2">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-medium text-primaryColor p-4">
                        Ảnh đại điện
                    </h1>
                    <img
                        src="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"
                        alt="avatar"
                        className="w-40 h-40 object-cover border-2 rounded-full"
                    />
                    <input type="file" ref={fileRef} hidden />
                    <button
                        className="py-2 px-5 my-4 bg-primaryColor hover:bg-blue-600 text-white rounded-sm"
                        onClick={() => fileRef.current.click()}
                    >
                        Chọn ảnh
                    </button>
                    <span className="text-normal text-gray-400">
                        Dung lương tối đa 1 MB
                    </span>
                    <span className="text-normal text-gray-400">
                        Định dạng: .JPG, .PNG
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DetailUserAccount;
