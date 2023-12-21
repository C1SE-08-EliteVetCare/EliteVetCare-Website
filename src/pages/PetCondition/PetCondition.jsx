import React, {useEffect, useState} from 'react';
import ChartTable from "../../components/Chart/Chart";
import {Link, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowRight, faEdit, faPlus} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";
import UpdatePetCondition from "./UpdatePetCondition";
import * as petService from "../../services/petService"
import {format} from "date-fns";
import noCondition from "../../assets/images/undraw_envelope_re_f5j4.svg"
import {useSelector} from "react-redux";
import {Spinner} from "@material-tailwind/react";
import {toast} from "sonner";

const PetAdvice = () => {
    const accessToken = localStorage.getItem('access-token')
    const petId = useParams().id
    const [loading, setLoading] = useState(true)
    const [viewUpdate, setViewUpdate] = useState(false)
    const [petInfo, setPetInfo] = useState({})
    const [condition, setCondition] = useState(undefined)
    const [chartPortion, setChartPortion] = useState([])
    const [chartWeight, setChartWeight] = useState([])
    const [chartDate, setChartDate] = useState([])


    useEffect(() => {
        (async () => {
            const condition = await petService.getCondition(accessToken, petId)
            if (condition.statusCode === 200) {
                setCondition(condition.response.data[0])
                setPetInfo(condition.response.petInfo)
                setChartPortion(condition.response.data.map((item) =>
                        item.portion,
                    ).reverse()
                )
                setChartWeight(condition.response.data.map((item) =>
                        item.weight,
                    ).reverse()
                )
                setChartDate(condition.response.data.map((item) =>
                        format(new Date(item.dateUpdate), 'dd/MM'),
                    ).reverse()
                )
                setLoading(false)
            } else {
                console.log(condition.error.response)
                toast.error("Có lỗi khi load tình trạng thú cưng")
            }
        })()
    }, [accessToken, petId, viewUpdate])

    return (
        viewUpdate ? (
            <UpdatePetCondition setViewUpdate={setViewUpdate} petInfo={petInfo} setLoadingMain={setLoading}/>
        ) : (
            <div className="w-[78%] bg-white py-4 px-8 shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-medium text-primaryColor text-start mb-4">Tình trạng
                        của {petInfo.name}
                    </h1>
                    <motion.button whileHover={{scale: 1.1}} className="text-primaryColor hover:text-blue-700"
                                   onClick={() => setViewUpdate(true)}>
                        <FontAwesomeIcon icon={faEdit} className="mx-2"/>
                        <span>Cập nhật</span>
                    </motion.button>
                    <Link to={`/pet-owner/pets/${petInfo.id}`} className="text-primaryColor hover:text-blue-700">
                        <FontAwesomeIcon icon={faCircleArrowRight} className="mx-2"/>
                        <span>Hồ sơ thú cưng</span>
                    </Link>
                </div>

                {/*Content*/}
                {loading ? (
                    <Spinner className="h-12 w-12 mt-60 mx-auto" color="blue"/>
                ) : (
                    condition !== undefined ? (
                        <>
                            <h3 className="font-medium">Thông số chi tiết:
                                ({condition.dateUpdate && format(new Date(condition?.dateUpdate), 'dd/MM/yyyy')})</h3>
                            <div className="grid grid-cols-2 gap-4 mt-4 p-4 shadow-2xl">
                                <p className="">
                                    <span className="font-medium">Thức ăn: </span>
                                    {condition.meal}
                                </p>
                                <p className="">
                                    <span className="font-medium">Biểu hiện: </span>
                                    {condition.manifestation}
                                </p>
                                <p className="col-span-2">
                                    <span className="font-medium">Tình trạng đi vệ sinh hôm nay: </span>
                                    {condition.conditionOfDefecation}
                                </p>
                            </div>
                            <div className="mt-16">
                                {/*<h3 className="font-medium mb-4">Biểu đồ trực quan</h3>*/}
                                <div className="grid grid-cols-2 justify-items-center">
                                    <div className="flex flex-col justify-center">
                                        <ChartTable color="#38C976" chartValue={chartPortion} chartDate={chartDate}/>
                                        <h3>Biểu đồ khẩu phần ăn (g)</h3>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <ChartTable color="#FF5E5E" chartValue={chartWeight} chartDate={chartDate}/>
                                        <h3>Biểu đồ cân nặng (kg)</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[70%] mx-auto mt-8 mb-4 gap-x-7 gap-y-4">
                                <h3 className="font-medium mb-2">Hình ảnh thực tế</h3>
                                <img
                                    src={condition.actualImg || "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"}
                                    alt="anh thuc te" className="w-full rounded-lg object-cover"/>
                                {/*<SlideImage images={images}/>*/}
                            </div>
                            <div className="w-[70%] mx-auto my-8 grid grid-cols-2 gap-x-7 gap-y-4">
                                <h3 className="mt-4 font-bold col-span-2">Đánh giá từ bác sĩ</h3>
                                <div className="">
                                    <h3 className="font-medium text-start p-2">Thức ăn khuyến cáo:</h3>
                                    <div
                                        className="w-full h-24 rounded-2xl outline-none p-2 shadow-lg border-2 focus:outline-primaryColor overflow-auto"
                                    >
                                        {condition.recommendedMeal || "Đang chờ"}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium text-start p-2">Thuốc Khuyến Cáo:</h3>
                                    <div
                                        className="w-full h-24 rounded-2xl outline-none p-2 shadow-lg border-2 focus:outline-primaryColor overflow-auto"
                                    >
                                        {condition.recommendedMedicines || "Đang chờ"}
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <h3 className="font-medium text-start p-2">Lời khuyên:</h3>
                                    <div
                                        className="w-full h-24 rounded-2xl outline-none p-2 shadow-lg border-2 focus:outline-primaryColor overflow-auto">
                                        {condition.vetAdvice || "Đang chờ"}
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="w-full h-[75%] flex justify-center items-center flex-col">
                            <img src={noCondition} alt="anh" className="w-52 h-52 text-primaryColor mr-8"></img>
                            <h2 className="text-xl font-medium mt-6 mb-2">Thú cưng chưa được cập nhật tình trạng</h2>
                            <p className="text-gray-400">Vui lòng cập nhật tình trạng sức khỏe hiện tại của thú cưng</p>
                        </div>
                    )
                )}
            </div>
        )
    );
};

export default PetAdvice;