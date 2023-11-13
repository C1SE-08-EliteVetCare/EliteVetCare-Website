import React, {useContext, useEffect, useRef, useState} from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Address from "../../components/Address/Address";
import * as userService from '../../services/userService'
import AuthContext from "../../context/authContext";

const UserProfile = () => {
    const {auth} = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState({
        username: "",
        fullName: "",
        birthYear: "",
        gender: "",
        email: "",
        phone: "",
        streetAddress: "",
        avatar: "",
        clinic: {}
    });
    const changed = false;
    const [province, setProvince] = useState({});
    const [district, setDistrict] = useState({});
    const [ward, setWard] = useState({});
    // const [avatar, setAvatar] = useState(null);
    const fileRef = useRef();

    useEffect(() => {
        const accessToken = localStorage.getItem('access-token')
        if (accessToken) {
            (async () => {
                const accessToken = localStorage.getItem('access-token')
                const getUser = await userService.getCurrentUser(accessToken)
                setUserInfo(getUser.response)
            })()
        }
    }, []);

    return (
        <div className="max-w-screen-2xl mx-auto my-9 grid grid-flow-col">
            <Sidebar/>
            <div className="bg-white py-4 px-8 col-span-4 shadow-2xl">
                <h1 className="text-xl font-medium text-primaryColor text-start mb-4">Hồ sơ của tôi</h1>
                {/*<span className="text-red-500 block mb-4">Vui lòng cập nhật đầy đủ thông tin của bạn</span>*/}
                {/*<div className="flex flex-row col-span-2 mt-4 gap-4 justify-self-end">*/}
                {/*  <button*/}
                {/*    className="px-3 py-2 rounded-sm text-primaryColor"><FontAwesomeIcon icon={faEdit}/> Chỉnh sửa*/}
                {/*  </button>*/}
                {/*</div>*/}
                <form className="grid grid-cols-2 gap-x-9 gap-y-8">
                    <div className="flex flex-col">
                        <label className="text-left text-lg font-normal mb-2 ">
                            Họ và tên
                        </label>
                        <input
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-primaryColor"
                            // className="w-full px-5 py-2 rounded-sm bg-inputColor focus:outline-primaryColor"
                            value={userInfo.fullName}
                            onChange={(e) => setUserInfo({...userInfo, fullName: e.target.value})}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-left text-lg font-normal mb-2 ">
                            Năm sinh
                        </label>
                        <input
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-primaryColor"
                            value={userInfo.birthYear}
                            onChange={(e) => setUserInfo({...userInfo, birthYear: e.target.value})}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-left text-lg font-normal mb-2 ">
                            Giới tính
                        </label>
                        <select
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-primaryColor"
                            value={userInfo.gender}
                            onChange={(e) => setUserInfo({...userInfo, gender: e.target.value})}
                        >
                            <option>--- Chọn giới tính ---</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-left text-lg font-normal mb-2 ">
                            Email
                        </label>
                        <input
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-primaryColor"
                            value={userInfo.email}
                            onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-left text-lg font-normal mb-2 ">
                            Số điện thoại
                        </label>
                        <input
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-primaryColor"
                            value={userInfo.phone}
                            onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
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
                    <div className="flex flex-col col-span-2">
                        <label className="text-left text-lg font-normal mb-2 ">
                            Số nhà, tên đường
                        </label>
                        <input
                            placeholder=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-primaryColor"
                            value={userInfo.streetAddress}
                            onChange={(e) => setUserInfo({...userInfo, streetAddress: e.target.value})}
                        />
                    </div>
                    {auth.role?.id === 3 && (
                            <>
                                <div className="flex flex-col col-span-1">
                                    <label className="text-left text-lg font-normal mb-2 ">Phòng khám công tác</label>
                                    <input placeholder="" value={userInfo.clinic?.name}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed"
                                           disabled/>
                                </div>
                                <div className="flex flex-col col-span-1">
                                    <label className="text-left text-lg font-normal mb-2 ">Địa chỉ phòng khám</label>
                                    <input placeholder="" value={`${userInfo.clinic?.streetAddress}, ${userInfo.clinic?.ward}, ${userInfo.clinic?.district}, ${userInfo.clinic?.city}`}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed"
                                           disabled/>
                                </div>
                            </>
                    )}
                    <div className="flex flex-row col-span-2 mt-4 gap-4 justify-self-end">
                        <button
                            className="px-5 py-2 rounded-md bg-inputColor border border-gray-300 focus:outline-primaryColor hover:bg-gray-200">
                            Hủy
                        </button>
                        <button
                            className={`px-3 py-2 rounded-md text-white border border-gray-300 ${
                                changed
                                    ? "bg-primaryColor hover:bg-blue-600"
                                    : "bg-blue-400 cursor-not-allowed"
                            }`}
                        >
                            Lưu thay đổi
                        </button>
                    </div>
                </form>
            </div>
            <div className="col-span-2">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-medium text-primaryColor p-4">
                        Ảnh đại điện
                    </h1>
                    <img
                        src={userInfo.avatar || "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"}
                        alt="avatar"
                        className="w-40 h-40 object-cover border-2 rounded-full"
                    />
                    <input type="file" ref={fileRef} hidden/>
                    <button
                        className="py-2 px-5 my-4 bg-primaryColor hover:bg-blue-600 text-white rounded-md border border-gray-300"
                        onClick={() => fileRef.current.click()}
                    >
                        Thay đổi
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

export default UserProfile;
