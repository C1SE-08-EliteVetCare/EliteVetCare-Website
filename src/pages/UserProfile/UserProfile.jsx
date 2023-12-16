import React, {useContext, useEffect, useRef, useState} from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Address from "../../components/Address/Address";
import AuthContext from "../../context/authContext";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";
import * as userService from "../../services/userService"
import {toast} from "sonner";

const UserProfile = () => {
    const formData = new FormData()
    const {auth, setAuth} = useContext(AuthContext)
    const accessToken = localStorage.getItem('access-token')
    const [loading, setLoading] = useState(true)
    const [loadingAva, setLoadingAva] = useState(true)
    const [address, setAddress] = useState({})
    const [userInfo, setUserInfo] = useState({
        fullName: "",
        email: "",
        birthYear: "",
        gender: "",
        phone: "",
        streetAddress: "",
        avatar: "",
        city: "",
        district: "",
        ward: "",
        clinic: {}
    });
    const [updateUser, setUpdateUser] = useState({
        fullName: "",
        email: "",
        birthYear: "",
        gender: "",
        phone: "",
        streetAddress: "",
        avatar: "",
        clinic: {}
    });
    const fileRef = useRef();

    useEffect(() => {
            (async () => {
                const getUser = await userService.getCurrentUser(accessToken)
                setUserInfo(getUser.response)
                setUpdateUser(getUser.response)
                setLoading(false)
                setLoadingAva(false)
                console.log(getUser.response)
            })()
    }, [accessToken]);

    const handleUpdateAvatar = async () => {
        setLoadingAva(true)
        const newAvatar = fileRef.current.files[0]
        console.log(newAvatar)
        formData.append("avatar", newAvatar)

        const upload = await userService.updateAvatar(accessToken, formData)
        console.log(upload)
        if (upload.statusCode === 200) {
            toast.success("Thay đổi thành công")
            setUserInfo({...userInfo, avatar: upload.response.url})

            setAuth({...auth, avatar: upload.response.url})
            const info = JSON.parse(localStorage.getItem("auth"))
            const newInfo = ({...info, avatar: upload.response.url})
            localStorage.setItem("auth", JSON.stringify(newInfo))
            setLoadingAva(false)
        } else {
            console.log(upload.error)
            toast.error("Thay đổi không thành công")
            setLoadingAva(false)
        }
    }

    const fieldsUpdate = [
        { key: 'fullName', value: updateUser.fullName, condition: userInfo.fullName !== updateUser.fullName },
        { key: 'email', value: updateUser.email, condition: userInfo.email !== updateUser.email },
        { key: 'gender', value: updateUser.gender, condition: userInfo.gender !== updateUser.gender },
        { key: 'birthYear', value: updateUser.birthYear, condition: userInfo.birthYear !== updateUser.birthYear },
        { key: 'phone', value: updateUser.phone, condition: userInfo.phone !== updateUser.phone },
        { key: 'city', value: address.province, condition: userInfo.city !== address.province },
        { key: 'district', value: address.district, condition: userInfo.district !== address.district },
        { key: 'ward', value: address.ward, condition: userInfo.ward !== address.ward },
        { key: 'streetAddress', value: updateUser.streetAddress, condition: userInfo.streetAddress !== updateUser.streetAddress },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {}
        fieldsUpdate.forEach(field => {
            if (field.condition) {
                body[field.key] = field.value;
            }
        });
        if (Object.keys(body).length !== 0) {
            toast.loading("Đang cập nhật...")
            const res = await userService.updateProfile(accessToken, body)
            if (res.statusCode === 200) {
                setAuth({...auth, ...body})
                const info = JSON.parse(localStorage.getItem("auth"))
                const newInfo = ({...info, ...body})
                localStorage.setItem("auth", JSON.stringify(newInfo))
                toast.success("Cập nhật thành công")
            } else {
                console.log(res.error)
                toast.error("Có lỗi. Vui lòng kiểm tra lại")
            }
        } else {
            toast.info("Không có gì để thay đổi")
        }
    }

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
                {loading ? (
                    <Loading/>
                ) : (
                    <form className="grid grid-cols-2 gap-x-9 gap-y-8" onSubmit={(e) => handleSubmit(e)}>
                        <div className="flex flex-col">
                            <label className="text-left text-lg font-normal mb-2 ">
                                Họ và tên
                            </label>
                            <input
                                required
                                type="text"
                                placeholder=""
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-primaryColor"
                                // className="w-full px-5 py-2 rounded-sm bg-inputColor focus:outline-primaryColor"
                                value={updateUser.fullName}
                                onChange={(e) => setUpdateUser({...updateUser, fullName: e.target.value})}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-left text-lg font-normal mb-2 ">
                                Email
                            </label>
                            <input
                                required
                                type="email"
                                placeholder=""
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-primaryColor"
                                value={updateUser.email}
                                onChange={(e) => setUpdateUser({...updateUser, email: e.target.value})}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-left text-lg font-normal mb-2 ">
                                Giới tính
                            </label>
                            <select
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-primaryColor"
                                value={updateUser.gender}
                                onChange={(e) => setUpdateUser({...updateUser, gender: e.target.value})}
                            >
                                <option>--- Chọn giới tính ---</option>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-left text-lg font-normal mb-2 ">
                                Năm sinh
                            </label>
                            <input
                                required
                                type="number"
                                placeholder=""
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-primaryColor"
                                value={updateUser.birthYear}
                                onChange={(e) => setUpdateUser({...updateUser, birthYear: e.target.value})}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-left text-lg font-normal mb-2 ">
                                Số điện thoại
                            </label>
                            <input
                                required
                                type="number"
                                placeholder=""
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-primaryColor"
                                value={updateUser.phone}
                                onChange={(e) => setUpdateUser({...updateUser, phone: e.target.value})}
                            />
                        </div>
                        <Address
                            address={{province: userInfo.city, district: userInfo.district, ward: userInfo.ward}}
                            setAddress={setAddress}
                        />
                        <div className="flex flex-col col-span-2">
                            <label className="text-left text-lg font-normal mb-2 ">
                                Số nhà, tên đường
                            </label>
                            <input
                                placeholder=""
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-primaryColor"
                                value={updateUser.streetAddress}
                                onChange={(e) => setUpdateUser({...updateUser, streetAddress: e.target.value})}
                            />
                        </div>
                        {auth.role?.id === 3 && (
                            <>
                                <div className="flex flex-col col-span-1">
                                    <label className="text-left text-lg font-normal mb-2 ">Phòng khám công tác</label>
                                    <input placeholder="" value={updateUser.clinic?.name}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed"
                                           disabled/>
                                </div>
                                <div className="flex flex-col col-span-1">
                                    <label className="text-left text-lg font-normal mb-2 ">Địa chỉ phòng khám</label>
                                    <input placeholder=""
                                           value={`${updateUser.clinic?.streetAddress}, ${updateUser.clinic?.ward}, ${updateUser.clinic?.district}, ${userInfo.clinic?.city}`}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed"
                                           disabled/>
                                </div>
                            </>
                        )}
                        <div className="flex flex-row col-span-2 mt-4 gap-4 justify-self-end">
                            <button
                                name="btn-cancel"
                                onClick={() => setUpdateUser(userInfo)}
                                className="px-5 py-2 rounded-md bg-inputColor border border-gray-300 focus:outline-primaryColor hover:bg-gray-200">
                                Hủy
                            </button>
                            <button
                                className="px-3 py-2 rounded-md text-white border border-gray-300 bg-primaryColor hover:bg-blue-600"
                            >
                                Lưu thay đổi
                            </button>
                        </div>
                    </form>
                )}
            </div>
            <div className="col-span-2">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-medium text-primaryColor p-4">
                        Ảnh đại điện
                    </h1>
                    {loadingAva ? (
                        <LoadingSkeleton className="w-40 h-40 object-cover border-2 rounded-full"/>
                    ) : (
                        <img
                            src={userInfo.avatar || "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"}
                            alt="avatar"
                            className="w-40 h-40 object-cover border-2 rounded-full"
                        />
                    )}
                    <input type="file" ref={fileRef} hidden accept=".png, .jpg, .jpeg"
                           onChange={handleUpdateAvatar}/>
                    <button
                        className="py-2 px-5 my-4 bg-primaryColor hover:bg-blue-600 text-white rounded-md border border-gray-300"
                        onClick={() => fileRef.current.click()}
                    >
                        Thay đổi
                    </button>
                    <span className="text-sm text-gray-400">
                        Dung lương tối đa 1 MB
                    </span>
                    <span className="text-sm text-gray-400">
                        Định dạng: .JPG, .PNG, .JPEG
                    </span>
                </div>
            </div>
        </div>
    );
};

const Loading = () => {
    return (
        <form className="grid grid-cols-2 gap-x-9 gap-y-8">
            <div className="flex flex-col w-[220px]">
                <label className="text-left text-lg font-normal mb-2 ">
                    Họ và tên
                </label>
                <LoadingSkeleton className="rounded-lg w-[320px] h-[41px]"/>
            </div>
            <div className="flex flex-col">
                <label className="text-left text-lg font-normal mb-2 ">
                    Năm sinh
                </label>
                <LoadingSkeleton className="rounded-lg w-full h-[41px]"/>
            </div>
            <div className="flex flex-col">
                <label className="text-left text-lg font-normal mb-2 ">
                    Giới tính
                </label>
                <LoadingSkeleton className="rounded-lg w-full h-[41px]"/>
            </div>
            <div className="flex flex-col">
                <label className="text-left text-lg font-normal mb-2 ">
                    Email
                </label>
                <LoadingSkeleton className="rounded-lg w-full h-[41px]"/>
            </div>
            <div className="flex flex-col">
                <label className="text-left text-lg font-normal mb-2 ">
                    Số điện thoại
                </label>
                <LoadingSkeleton className="rounded-lg w-full h-[41px]"/>
            </div>
            <div className="flex flex-col">
                <label className="text-left text-lg font-normal mb-2 ">
                    Tỉnh/Thành phố
                </label>
                <LoadingSkeleton className="rounded-lg w-full h-[41px]"/>
            </div>
            <div className="flex flex-col">
                <label className="text-left text-lg font-normal mb-2 ">
                    Quận/Huyện
                </label>
                <LoadingSkeleton className="rounded-lg w-full h-[41px]"/>
            </div>
            <div className="flex flex-col">
                <label className="text-left text-lg font-normal mb-2 ">
                    Xã Phường
                </label>
                <LoadingSkeleton className="rounded-lg w-full h-[41px]"/>
            </div>
            <div className="flex flex-col col-span-2">
                <label className="text-left text-lg font-normal mb-2 ">
                    Số nhà, tên đường
                </label>
                <LoadingSkeleton className="rounded-lg w-full h-[41px]"/>
            </div>
        </form>
    )
}


export default UserProfile;
