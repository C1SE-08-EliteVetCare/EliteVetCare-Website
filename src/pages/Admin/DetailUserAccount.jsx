import React, {useEffect, useRef, useState,} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, useParams} from 'react-router-dom';
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import * as adminService from "../../services/adminService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from "@material-tailwind/react";
function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
}

const DetailUserAccount = () => {
    const [listUser, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);
    const accessToken = localStorage.getItem('access-token')
    const {id} = useParams()
    const detail = listUser[0];
    const [detailUser, setDetailUser] = useState({});
    const [selectedRole, setSelectedRole] = useState("");

    useEffect(() => {
        if (listUser.length > 0) {
            const result = listUser.filter((item) => item.id === Number(id))[0]
            console.log(result)
            setDetailUser(result)
        }
    }, [listUser])

    const fileRef = useRef();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setLoading(true);
                const listUser = await adminService.getDetail(accessToken, id);
                if (listUser.statusCode === 200) {
                    setUserList(listUser.response.data);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
        if (listUser.length > 0) {
            const result = listUser.filter((item) => item.id === Number(id))[0];
            setDetailUser(result);
            setSelectedRole(result.role);
        }
    }, [accessToken, id]);

    if (loading) {
        return <div className="flex items-end gap-8">
            <Spinner className={"h-16 w-16"} color="blue" />
        </div>; // You can replace this with a loading spinner or component
    }

    if (listUser.length === 0) {
        return <p>No data found for this user.</p>; // Handle the case where no data is available
    }
    const handleToggleAccountStatus = async () => {
        try {
            const action = detailUser.operatingStatus ? 'deactivate' : 'activate';
            const response = await adminService.toggleAccountStatus(id, action);

            if (response.statusCode === 200) {
                // Update the state with the new user details
                setDetailUser(response.response.data);

                // Show a success notification
                const actionText = detailUser.operatingStatus ? 'mở khóa' : 'kích hoạt';
                toast.success(`Tài khoản đã được ${actionText} thành công!`, {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        } catch (error) {
            console.error('Error toggling account status:', error);

            // Show an error notification
            toast.error('Đã có lỗi xảy ra. Vui lòng thử lại sau!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    const handleRoleChange = async () => {
        try {
            const response = await adminService.updateUserRole(id, selectedRole);

            if (response.statusCode === 200) {
                // Update the state with the new user details
                setDetailUser(response.response.data);

                // Show a success notification
                toast.success(`Vai trò của tài khoản đã được cập nhật thành công!`, {
                    // ... (notification options)
                });
            }
        } catch (error) {
            console.error('Error updating user role:', error);

            // Show an error notification
            toast.error('Đã có lỗi xảy ra. Vui lòng thử lại sau!', {
                // ... (notification options)
            });
        }
    };


    return (
        <div className=" bg-[#F3F7FA] w-full h-full  border border-white p-8">

            <div>
                <div className=" bg-[#ffffff] w-full h-ful  p-4">
                    <div
                        className="button rounded-full   bg-[#F9FBFF] items-center justify-center w-[60px] h-[35px] p-1">
                        <button>
                            <Link to={'/admin/manage-account'}>
                                <FontAwesomeIcon icon={faArrowLeft}/>
                            </Link>
                        </button>
                    </div>
                </div>
                <div className=" bg-[#ffffff] w-full h-full  p-4 ">

                    <div className="  max-w-screen-xl container mx-auto my-9 grid grid-flow-col">
                        <div
                            className="  mx-10 py-1 px-1 col-span-4 shadow-2xl p-8"
                            style={{borderRadius: "20px"}}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white mx-4  p-6 ">
                                <h1 className="text-2xl font-medium text-black text-start mb-6">
                                    Thông tin chi tiết
                                </h1>
                                <div className="text-right">
                                    <select
                                        value={selectedRole}
                                        onChange={(e) => setSelectedRole(e.target.value)}
                                        className="py-1 px-4 border-t border-gray-600 bg-white w-2/3 h-2/4 text-center border "
                                        style={{ borderRadius: "16px" }}
                                    >
                                        <option value="doctor">Bác sĩ</option>
                                        <option value="clinicOwner">Admin</option>
                                        <option value="petOwner">Chủ thú cưng</option>
                                    </select>
                                    <button
                                        className="py-2 px-5 my-6 bg-blue-500 hover:bg-blue-700 text-white rounded-sm"
                                        onClick={handleRoleChange}
                                    >
                                        Cập nhật vai trò
                                    </button>
                                </div>
                            </div>
                            <div key={detailUser.id}>
                                <div className="grid grid-cols-11 bg-white-200 p-1 mx-8">
                                    <label className="text-gray-700 text-sm font-bold text-left col-span-2">
                                        Email:
                                    </label>
                                    <label className="text-gray-700  text-sm font-bold  col-span-9 text-left ">
                                        {detailUser.email}
                                    </label>
                                </div>
                                 <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                    <label className="text-gray-700 text-sm font-bold text-left col-span-2">
                                        Họ và tên:
                                    </label>
                                    <label className="text-gray-700 text-sm font-bold text-left col-span-2">
                                        {detailUser.fullName}
                                    </label>
                                </div>
                                 <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                    <label className="text-gray-700 text-sm font-bold text-left col-span-2">
                                        Năm sinh:
                                    </label>
                                    <label className="text-gray-700 text-sm font-bold text-left col-span-2">
                                        {detailUser.birthYear}
                                    </label>
                                </div>
                                 <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                    <label className="text-gray-700 text-sm font-bold text-left col-span-2">
                                        Giới tính:
                                    </label>
                                    <label className="text-gray-700 text-sm font-bold text-left col-span-2">
                                        {detailUser.gender}
                                    </label>
                                </div>
                                 <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                    <label className="text-gray-700 text-sm font-bold text-left col-span-2">
                                        Số điện thoại:
                                    </label>
                                    <label className="text-gray-700 text-sm font-bold text-left col-span-2">
                                        {detailUser.phone}
                                    </label>
                                </div>
                                <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                    <label className="text-gray-700 text-sm font-bold text-left col-span-2">
                                        Địa chỉ:
                                    </label>
                                    <label className="text-gray-700  text-sm font-bold  col-span-9 text-left ">
                                        {`${detailUser?.streetAddress} ${detailUser.ward} ${detailUser.district} ${detailUser.city}`}
                                    </label>
                                </div>
                                 <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                    <label className="text-gray-700 text-sm font-bold text-left col-span-2">
                                        Ngày đăng ký:
                                    </label>
                                     <label className="text-gray-700  text-sm font-bold  col-span-9 text-left ">
                                        {detailUser.createdAt ? formatDate(detail.createdAt.split('T')[0]) : null}
                                    </label>
                                </div>
                            </div>


                            <div className="mx-8 text-right">
                                <button
                                    className={`py-2 px-5 my-6 ${detailUser.operatingStatus ? 'bg-red-600 hover:bg-gray-500' : 'bg-green-500 hover:bg-green-700'} text-white rounded-sm`}
                                    onClick={handleToggleAccountStatus}
                                >
                                    {detailUser.operatingStatus ? ' Khóa tài khoản' : 'Mở khóa tài khoản'}
                                </button>
                            </div>

                        </div>

                        <div className="col-span-2">
                            <div className="flex flex-col items-center">
                                <h1 className="text-2xl font-medium text-gray-800 p-4">
                                    Ảnh đại điện
                                </h1>
                                <img
                                    src= {detailUser.avatar || "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"}
                                    alt="avatar"
                                    className="w-40 h-40 object-cover border-2 rounded-full"
                                />
                                <input type="file" ref={fileRef} hidden/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default DetailUserAccount;
