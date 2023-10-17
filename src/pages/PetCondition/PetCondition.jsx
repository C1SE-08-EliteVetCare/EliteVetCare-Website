import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowRight, faUpload} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const PetCondition = () => {
    return (
        <div className="w-[78%] bg-white py-4 px-8 shadow-2xl">
            <div className="flex justify-between">
                <h1 className="text-xl font-medium text-primaryColor text-start mb-4">Tình trạng thú cưng</h1>
                <Link to="/pet-owner/pets/12345" className="text-primaryColor hover:text-blue-700">
                    <FontAwesomeIcon icon={faCircleArrowRight} className="mx-2"/>
                    <span>Hồ sơ thú cưng</span>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center">
                <img className="w-40 h-40 object-cover rounded-full"
                     src="https://ph-files.imgix.net/75c2cda9-e2c3-4bcd-a0b1-0595daba1844.png?auto=format&fit=crop"
                     alt="anh thu cung"/>
                <h2 className="text-xl font-medium text-primaryColor p-4">Titi</h2>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 px-28 gap-x-9 gap-y-2">
                <div className="col-span-2 lg:col-span-1 md:col-span-2">
                    <h2 className="font-medium py-2">Khẩu phần ăn (g)</h2>
                    <input type="text" placeholder="" className="p-2 bg-gray-100 focus:outline-primaryColor"/>
                </div>
                <div className="col-span-2 lg:col-span-1 md:col-span-2">
                    <h2 className="font-medium py-2">Cân nặng (kg)</h2>
                    <input type="text" placeholder="" className="p-2 bg-gray-100 focus:outline-primaryColor"/>
                </div>
                <div className="col-span-2">
                    <h2 className="font-medium py-2 text-start">Thức ăn</h2>
                    <textarea placeholder="" className="w-full p-2 bg-gray-100 focus:outline-primaryColor"/>
                </div>
                <div className="col-span-2 lg:col-span-1 md:col-span-2">
                    <h2 className="font-medium py-2 text-start">Biểu hiện hằng ngày</h2>
                    <textarea placeholder="" className="w-full h-32 p-2 bg-gray-100 focus:outline-primaryColor"/>
                </div>
                <div className="col-span-2 lg:col-span-1 md:col-span-2">
                    <h2 className="font-medium py-2 text-start">Tình trạng đi ngoài</h2>
                    <textarea placeholder="" className="w-full h-32 p-2 bg-gray-100 focus:outline-primaryColor"/>
                </div>
                <div className="col-span-2">
                    <h2 className="font-medium py-2 text-start">Hình ảnh thực tế</h2>
                    <div className="flex items-center justify-center w-full">
                        <label
                            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <FontAwesomeIcon className="w-8 h-8 mb-4 text-gray-500" icon={faUpload}/>
                                <p className="mb-2 text-sm text-gray-500">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-500">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden"/>
                        </label>
                    </div>
                </div>
                <div className="flex flex-row col-span-2 my-4 gap-4 justify-end">
                    <button
                        className="px-5 py-2 rounded-sm bg-inputColor focus:outline-primaryColor hover:bg-gray-200">Hủy
                    </button>
                    <button
                        className="px-3 py-2 rounded-sm text-white bg-primaryColor hover:bg-blue-600">Lưu
                        thay đổi
                    </button>
                </div>
            </div>
        </div>

    );
};

export default PetCondition;