import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hiddenOldPass, setHiddenOldPass] = useState(true);
    const [hiddenNewPass, setHiddenNewPass] = useState(true);
    const [hiddenCfPass, setHiddenCfPass] = useState(true);
    const changed = false;
    return (
        <div className="w-[60%] h-fit bg-white py-9 px-8 shadow-2xl mr-36">
            <h1 className="text-2xl font-medium text-primaryColor text-start mb-4">Đổi mật khẩu</h1>
            <form className="grid grid-cols-1 gap-x-9 gap-y-4">
                <div className="flex flex-col relative px-6">
                    <label className="text-left text-lg font-normal mb-2 ">Mật khẩu hiện tại</label>
                    <input type={hiddenOldPass ? "password" : "text"} placeholder=""
                           className="w-full px-5 py-2 rounded-sm bg-inputColor focus:outline-primaryColor hover:bg-gray-200"
                           value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}/>
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
                    <input type={hiddenNewPass ? "password" : "text"} placeholder=""
                           className="w-full px-5 py-2 rounded-sm bg-inputColor focus:outline-primaryColor hover:bg-gray-200"
                           value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
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
                    <label className="text-left text-lg font-normal mb-2 ">Xác nhận mật kkẩu</label>
                    <input type={hiddenCfPass ? "password" : "text"} placeholder=""
                           className="w-full px-5 py-2 rounded-sm bg-inputColor focus:outline-primaryColor hover:bg-gray-200"
                           value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
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
                    <div className="flex flex-row mt-9 gap-4 justify-end">
                        <button
                            className="px-5 py-2 rounded-sm bg-inputColor focus:outline-primaryColor hover:bg-gray-200">Hủy
                        </button>
                        <button
                            className={`px-3 py-2 rounded-sm text-white ${changed ? "bg-primaryColor hover:bg-blue-600" : "bg-blue-400 cursor-not-allowed"}`}>Lưu
                            thay đổi
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ChangePassword;
