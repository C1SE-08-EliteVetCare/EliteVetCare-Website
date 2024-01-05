import React, {useEffect, useRef, useState,} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, useParams} from 'react-router-dom';
import {faArrowLeft, faXmark} from "@fortawesome/free-solid-svg-icons";
import * as adminService from "../../services/adminService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from "@material-tailwind/react";
import * as feedbackService from "../../services/feedbackService";

function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
}

const DetailUserAccount = () => {
    const [listUser, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);
    const accessToken = localStorage.getItem('access-token')
    const [clinics, setClinics] = useState([]);

    const {id} = useParams()
    const detail = listUser[0];
    const [detailUser, setDetailUser] = useState({});
    const [selectedRole, setSelectedRole] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [userId, setUserId] = useState([]);
    const [action, setAction] = useState(true);

    const fileRef = useRef();
    useEffect(() => {
        if (listUser.length > 0) {
            const result = listUser.filter((item) => item.id === Number(id))[0];
            setDetailUser({
                ...result,
                clinicId: result.clinic ? result.clinic.id : "",
            });
            setSelectedRole(result.role.id);
        }
    }, [listUser]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setLoading(true);
                const listUserResponse = await adminService.getDetail(accessToken, id);
                if (listUserResponse.statusCode === 200) {
                    setUserList(listUserResponse.response.data);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };
        const fetchClinics = async () => {
            try {
                const clinicsResponse = await feedbackService.getClinic();
                console.log(clinicsResponse);
                if (clinicsResponse.statusCode === 200) {
                    setClinics(clinicsResponse.response);
                }
            } catch (error) {
                console.error('Error fetching clinics:', error);
            }
        };

        fetchUserData();
        fetchClinics();
    }, [accessToken, id]);

    if (loading) {
        return (
            <div className="flex items-end gap-8">
                <Spinner className={"h-16 w-16"} color="blue" />
            </div>
        );
    }
    if (listUser.length === 0) {
        return <p>No data found for this user.</p>;
    }
    const handleToggleAccountStatus = async () => {
        try {
            setLoading(true);
            const action = detailUser.operatingStatus ? 'deactivate' : 'activate';

            console.log("Action: ", action);
            console.log("User ID: ", detailUser?.id);
            console.log("Access Token: ", accessToken);

            const response = await adminService.Toggleactivateuser(accessToken, detailUser?.id, action);
            const updatedDetailUser = response.response;

            console.log("API Response: ", response);
            console.log("Updated User: ", updatedDetailUser);

            setDetailUser(updatedDetailUser);
            const actionText = action === 'activate' ? 'được mở khóa' : 'bị khóa tài khoá';
            toast.success(`Tài khoản đã  ${actionText} thành công!`);
        } catch (error) {
            console.error('Error toggling account status:', error);
            toast.error('Đã có lỗi xảy ra. Vui lòng thử lại sau!');
        } finally {
            setLoading(false);
        }
    };

    const handleRoleChange = async () => {
        try {
            setLoading(true);

            if (selectedRole === "1" || selectedRole === "2") {
                const response = await adminService.updateUserRole(id, selectedRole, detailUser.clinicId, accessToken);

                if (response.statusCode === 200) {
                    toast.success(`Vai trò của tài khoản đã được cập nhật thành công!`, {});
                } else {
                    console.log(response.response);
                    console.error('Error updating user role:', response);
                    toast.error('Đã có lỗi xảy ra. Vui lòng thử lại sau!', {});
                }
            }
            else if (selectedRole === "3") {
                const response = await adminService.updateUserRole(id, selectedRole, detailUser.clinicId, accessToken);
                if (response.statusCode === 200) {
                    toast.success(`Vai trò của tài khoản đã được cập nhật thành công!`, {});
                } else {
                    console.log(response.response);
                    console.error('Error updating user role:', response);
                    toast.error('Đã có lỗi xảy ra. Vui lòng thử lại sau!', {});
                }
            }else {
                setShowModal(true);
            }

            const clinicResponse = await adminService.updateClinic(id, detailUser.clinicId, accessToken);

            if (clinicResponse.statusCode === 200) {
                //toast.success(`Phòng khám của tài khoản đã được cập nhật thành công!`, {});
            } else {
                console.log(clinicResponse.response);
                console.error('Error updating clinic:', clinicResponse);
                toast.error('Đã có lỗi xảy ra khi cập nhật phòng khám. Vui lòng thử lại sau!', {});
            }
        } catch (error) {
            console.error('Error updating user role:', error);
            toast.error('Đã có lỗi xảy ra. Vui lòng thử lại sau!', {});

        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className=" bg-[#F3F7FA] w-full h-full   p-8">

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
                                <div key={detailUser.id} className="text-right">
                                    <select
                                        value={selectedRole}
                                        onChange={(e) => setSelectedRole(e.target.value)}
                                        className="py-1 px-4 border-t border-gray-600 bg-white w-60 h-2/4 text-center border "
                                        style={{ borderRadius: "16px" }}
                                    >
                                        <option value={1}>Admin</option>
                                        <option value={2}>Chủ thú cưng</option>
                                        <option value={3}>Bác sĩ</option>
                                    </select>


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
                                    <label className="text-gray-700  text-sm font-bold  col-span-9 text-left" >
                                        {detailUser && detailUser.birthYear ? detailUser.birthYear : "Chưa nhập năm sinh"}
                                    </label>
                                </div>
                                 <div className="grid grid-cols-11 border-t border-gray-600 bg-white-200 p-3 mx-6">
                                    <label className="text-gray-700 text-sm font-bold text-left col-span-2">
                                        Giới tính:
                                    </label>
                                     <label className="text-gray-700 text-sm font-bold text-left col-span-2">
                                         {detailUser && detailUser.gender
                                             ? detailUser.gender
                                             : "Chưa chọn giới tính"}
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
                                    <label className="text-gray-700 text-sm font-bold col-span-9 text-left">
                                        {detailUser && detailUser.streetAddress
                                            ? `${detailUser.streetAddress} ${detailUser.ward} ${detailUser.district} ${detailUser.city}`
                                            : "Chưa có địa chỉ"}
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

                                <button
                                    className={`py-2 px-5 mx-8 my-6 ${
                                        selectedRole === "3" ? "bg-blue-500 hover:bg-blue-700" : "bg-primaryColor hover:bg-primaryColorDark"
                                    } text-white rounded-sm`}
                                    onClick={() => {
                                        if (selectedRole === "3") {
                                            setShowModal(!showModal);
                                        } else {
                                            handleRoleChange();
                                        }
                                    }}
                                >
                                    {selectedRole === "3" ? "Cập nhật vai trò" : "Lưu thay đổi"}
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
            {showModal && (
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-900 bg-opacity-50">
                    <div className="relative min-w-[40%] max-h-full">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between py-4 px-6 border-b border-gray-300 rounded-t">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Chọn phòng khám</h3>
                                <button
                                    type="button"
                                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                                    onClick={() => setShowModal(!showModal)}
                                >
                                </button>
                            </div>
                            <div className="px-6 py-6 lg:px-8">
                                <form
                                    action="#"
                                    className="flex justify-between items-center flex-col space-y-6"
                                >
                                    <div className="flex flex-col w-full">
                                        <label className="font-medium text-start mb-1.5">Phòng khám:</label>
                                        <select
                                            value={detailUser.clinicId}
                                            onChange={(e) =>
                                                setDetailUser((preClinic) => ({ ...preClinic, clinicId: e.target.value }))
                                            }
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            style={{ borderRadius: "16px" }}
                                        >
                                            {clinics.length > 0 ? (
                                                clinics.map((clinic) => (
                                                    <option key={clinic.id} value={clinic.id}>
                                                        {clinic.name}
                                                    </option>
                                                ))
                                            ) : (
                                                <option value="" disabled>
                                                    No clinics available
                                                </option>
                                            )}

                                        </select>
                                    </div>

                                    <div className="flex space-x-2 w-full justify-end">
                                        <button
                                            className="bg-gray-200 py-1.5 px-4 rounded hover:bg-gray-300"
                                            onClick={() => setShowModal(!showModal)}
                                        >
                                            Hủy
                                        </button>
                                        <button
                                            className="bg-primaryColor text-white py-1.5 px-9 rounded hover:bg-blue-600"
                                            onClick={async (e) => {
                                                e.preventDefault();
                                                await handleRoleChange();
                                                setShowModal(false); // Tắt modal sau khi xác nhận
                                            }}
                                        >
                                            {loading ? (
                                                <>
                                                    <Spinner className="h-6 w-6 mr-2" />
                                                    Gửi
                                                </>
                                            ) : (
                                                'Xác nhận'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailUserAccount;
