import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import * as authService from "../../services/authService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hiddenOldPass, setHiddenOldPass] = useState(true);
    const [hiddenNewPass, setHiddenNewPass] = useState(true);
    const [hiddenCfPass, setHiddenCfPass] = useState(true);
    const [changed, setChanged] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    const handleSaveChanges = async () => {
        if (newPassword !== confirmPassword) {
            toast.error("Mật khẩu xác nhận không khớp");
            return;
        }

        if (oldPassword === newPassword) {
            toast.error("Mật khẩu mới không được trùng với mật khẩu hiện tại", {
                onClose: () => {
                    // Do nothing or add additional logic when the toast is closed
                },
            });
            return;
        }

        if (!newPassword) {
            toast.error("Mật khẩu mới không được để trống");
            return;
        }

        try {
            setLoading(true);
            const result = await authService.changePassword(oldPassword, newPassword);

            if (result.success) {
                setChanged(true);
                toast.success("Đổi mật khẩu thành công!");
            } else if (result.errorCode === "CURRENT_PASSWORD_INCORRECT") {
                toast.error("Mật khẩu hiện tại không đúng");
            } else {
                toast.error("Đã xảy ra lỗi khi thực hiện đổi mật khẩu");
            }
        } catch (error) {
            console.error("Error changing password:", error);
            toast.error(
                "Đã xảy ra lỗi khi thực hiện đổi mật khẩu do mật khẩu hiện tại không đúng"
            );
        } finally {
            const id = setTimeout(() => {
                setLoading(false);
            }, 2000);
            setTimeoutId(id);
        }
    };
    // Clear the timeout when the component unmounts
    React.useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);

    return (
        <div className="w-[60%] h-fit bg-white py-9 px-8 shadow-2xl mr-36">
            <h1 className="text-2xl font-medium text-primaryColor text-start mb-4">Đổi mật khẩu</h1>
            <form className="grid grid-cols-1 gap-x-9 gap-y-4">
                <div className="flex flex-col relative px-6">
                    <label className="text-left text-lg font-normal mb-2 ">Mật khẩu hiện tại</label>
                    <input
                        type={hiddenOldPass ? "password" : "text"}
                        placeholder=""
                        autoComplete="current-password"
                        className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-primaryColor"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                    {oldPassword !== "" && (hiddenOldPass ? (
                        <FontAwesomeIcon
                            onClick={() => setHiddenOldPass(!hiddenOldPass)}
                            className="absolute top-12 right-10"
                            icon={faEyeSlash}
                        />
                    ) : (
                        <FontAwesomeIcon
                            onClick={() => setHiddenOldPass(!hiddenOldPass)}
                            className="absolute top-12 right-10"
                            icon={faEye}
                        />
                    ))}
                </div>
                <div className="flex flex-col relative px-6">
                    <label className="text-left text-lg font-normal mb-2 ">Mật khẩu mới</label>
                    <input
                        type={hiddenNewPass ? "password" : "text"}
                        placeholder=""
                        autoComplete="new-password"
                        className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-primaryColor"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    {newPassword !== "" && (hiddenNewPass ? (
                        <FontAwesomeIcon
                            onClick={() => setHiddenNewPass(!hiddenNewPass)}
                            className="absolute top-12 right-10"
                            icon={faEyeSlash}
                        />
                    ) : (
                        <FontAwesomeIcon
                            onClick={() => setHiddenNewPass(!hiddenNewPass)}
                            className="absolute top-12 right-10"
                            icon={faEye}
                        />
                    ))}
                </div>
                <div className="flex flex-col relative px-6">
                    <label className="text-left text-lg font-normal mb-2 ">Xác nhận mật khẩu</label>
                    <input
                        type={hiddenCfPass ? "password" : "text"}
                        placeholder=""
                        autoComplete="confirm-password"
                        className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-primaryColor"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {confirmPassword !== "" && (hiddenCfPass ? (
                        <FontAwesomeIcon
                            onClick={() => setHiddenCfPass(!hiddenCfPass)}
                            className="absolute top-12 right-10"
                            icon={faEyeSlash}
                        />
                    ) : (
                        <FontAwesomeIcon
                            onClick={() => setHiddenCfPass(!hiddenCfPass)}
                            className="absolute top-12 right-10"
                            icon={faEye}
                        />
                    ))}
                </div>
                <div className="flex flex-row mt-9 gap-4 justify-end">
                    <button
                        className="px-5 py-2 rounded-md bg-inputColor border border-gray-300 focus:outline-primaryColor hover:bg-gray-200"
                        disabled={loading}
                    >
                        Hủy
                    </button>
                    <button
                        onClick={handleSaveChanges}
                        className={`px-3 py-2 rounded-md text-white border border-gray-300 ${
                            changed ? "bg-primaryColor hover:bg-blue-600" : "bg-blue-400 cursor-not-allowed"
                        }`}
                        disabled={loading}
                    >
                        {loading ? "Đang lưu..." : "Lưu thay đổi"}
                    </button>
                </div>
            </form>
            {error && (
                <div className="text-red-500 mt-2">
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default ChangePassword;
