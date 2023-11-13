import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowRight, faUpload} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";
import * as petService from "../../services/petService"
import {useParams} from "react-router-dom";
import {toast} from "sonner";
import {Spinner} from "@material-tailwind/react";

const UpdatePetCondition = ({setViewUpdate, petInfo, setLoadingMain}) => {
    const formData = new FormData();
    const petId = useParams().id
    const accessToken = localStorage.getItem('access-token')
    const [submit, setSubmit] = useState(false)
    const [loading, setLoading] = useState(false)

    const [updatePetCon, setUpdatePetCon] = useState({
        portion: "",
        weight: "",
        meal: "",
        manifestation: "",
        conditionOfDefecation: "",
        actualImg: null,
    })

    const validate = () => {
        if (updatePetCon.actualImg === null) {
            toast.warning("Vui lòng đính kèm ảnh thực tế")
            return;
        }
        setLoading(true)
        setSubmit(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validate()
    }

    useEffect(() => {
        if (submit) {
            (async () => {
                Object.keys(updatePetCon).forEach((key) => {
                    formData.append(key, updatePetCon[key]);
                });
                for (let pair of formData.entries()) {
                    console.log(pair[0] + ': ' + pair[1]);
                }
                const res = await petService.updateCondition(accessToken, formData, petId)
                if (res.statusCode === 200) {
                    setLoading(false)
                    setViewUpdate(false)
                    setLoadingMain(true)
                    toast.success("Cập nhật thành công")
                } else {
                    toast.error("Có lỗi khi cập nhật")
                    console.log(res.error)
                }
            })()
        }
    }, [submit]);

    return (
        <div className="w-[78%] bg-white py-4 px-8 shadow-2xl">
            <div className="flex justify-between">
                <h1 className="text-xl font-medium text-primaryColor text-start mb-4">Tình trạng của {petInfo.name}</h1>
                <motion.button whileHover={{scale: 1.1}} className="text-primaryColor hover:text-blue-700"
                               onClick={() => setViewUpdate(false)}
                >
                    <FontAwesomeIcon icon={faCircleArrowRight} className="mx-2"/>
                    <span>Xem tổng quan</span>
                </motion.button>
            </div>
            <div className="flex flex-col items-center justify-center">
                <img className="w-40 h-40 object-cover rounded-full"
                     src={petInfo.avatar || "https://ph-files.imgix.net/75c2cda9-e2c3-4bcd-a0b1-0595daba1844.png?auto=format&fit=crop"}
                     alt="anh thu cung"/>
                <h2 className="text-xl font-medium text-primaryColor p-4">{petInfo.name}</h2>
            </div>
            <form onSubmit={(e) => handleSubmit(e)} className="grid lg:grid-cols-2 grid-cols-1 px-28 gap-x-9 gap-y-2">
                <div className="col-span-2 lg:col-span-1 md:col-span-2">
                    <h2 className="font-medium py-2">Khẩu phần ăn (g)</h2>
                    <input
                        type="number"
                        required
                        value={updatePetCon.portion}
                        onChange={(e) => setUpdatePetCon({...updatePetCon, portion: e.target.value})}
                        placeholder=""
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 focus:outline-primaryColor"
                    />
                </div>
                <div className="col-span-2 lg:col-span-1 md:col-span-2">
                    <h2 className="font-medium py-2">Cân nặng (kg)</h2>
                    <input
                        type="number"
                        required
                        value={updatePetCon.weight}
                        onChange={(e) => setUpdatePetCon({...updatePetCon, weight: e.target.value})}
                        placeholder=""
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 focus:outline-primaryColor"
                    />
                </div>
                <div className="col-span-2">
                    <h2 className="font-medium py-2 text-start">Thức ăn</h2>
                    <textarea
                        required
                        value={updatePetCon.meal}
                        onChange={(e) => setUpdatePetCon({...updatePetCon, meal: e.target.value})}
                        placeholder=""
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 focus:outline-primaryColor"
                    />
                </div>
                <div className="col-span-2 lg:col-span-1 md:col-span-2">
                    <h2 className="font-medium py-2 text-start">Biểu hiện hằng ngày</h2>
                    <textarea
                        required
                        value={updatePetCon.manifestation}
                        onChange={(e) => setUpdatePetCon({...updatePetCon, manifestation: e.target.value})}
                        placeholder=""
                        className="w-full p-2.5 h-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-primaryColor"
                    />
                </div>
                <div className="col-span-2 lg:col-span-1 md:col-span-2">
                    <h2 className="font-medium py-2 text-start">Tình trạng đi ngoài</h2>
                    <textarea
                        required
                        value={updatePetCon.conditionOfDefecation}
                        onChange={(e) => setUpdatePetCon({...updatePetCon, conditionOfDefecation: e.target.value})}
                        placeholder=""
                        className="w-full p-2.5 h-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-primaryColor"
                    />
                </div>
                <div className="col-span-2">
                    <h2 className="font-medium py-2 text-start">Hình ảnh thực tế</h2>
                    <div className="flex items-center justify-center w-full">
                        {updatePetCon.actualImg === null ? (
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
                                <input id="dropzone-file" type="file" className="hidden" accept=".png, .jpg, .jpeg"
                                       files={updatePetCon.actualImg}
                                       onChange={(e) => setUpdatePetCon({
                                           ...updatePetCon,
                                           actualImg: e.target.files[0]
                                       })}
                                />
                            </label>
                        ) : (
                            <label
                                className="border-4 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:opacity-95">
                                <img src={URL.createObjectURL(updatePetCon.actualImg)} className="object-cover rounded-xl" alt=""/>
                                <input id="dropzone-file" type="file" className="hidden" accept=".png, .jpg, .jpeg"
                                       files={updatePetCon.actualImg}
                                       onChange={(e) => setUpdatePetCon({
                                           ...updatePetCon,
                                           actualImg: e.target.files[0]
                                       })}
                                />
                                <h2 className="font-bold text-primaryColor">Click để thay đổi</h2>
                            </label>
                        )}
                    </div>
                </div>
                <div className="flex flex-row col-span-2 my-4 gap-4 justify-end">
                    <motion.button whileHover={{scale: 1.1}}
                        onClick={() => setViewUpdate(false)}
                        className="px-5 py-2 rounded-md bg-inputColor focus:outline-primaryColor hover:bg-gray-200">Hủy
                    </motion.button>
                    <motion.button whileHover={{scale: 1.1}}
                        className="px-3 py-2 rounded-md text-white bg-primaryColor hover:bg-blue-600">
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <Spinner className="h-6 w-6 mr-4"/>{" "}
                                <span>Đang cập nhật....</span>
                            </div>
                        ) : (
                            <span>Lưu thay đổi</span>
                        )}
                    </motion.button>
                </div>
            </form>
        </div>

    );
};

export default UpdatePetCondition;