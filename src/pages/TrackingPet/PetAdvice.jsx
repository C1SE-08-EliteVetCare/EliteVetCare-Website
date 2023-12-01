import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import * as petService from "../../services/petService";
import {format} from "date-fns";
import {toast} from "sonner";
import {useNavigate, useParams} from "react-router-dom";
import ChartTable from "../../components/Chart/Chart";
import noCondition from "../../assets/vectors/undraw_pet_adoption_-2-qkw.svg";
import {Spinner} from "@material-tailwind/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRotateBack, faBackspace} from "@fortawesome/free-solid-svg-icons";

const PetAdvice = () => {
    const navigate = useNavigate()
    const accessToken = localStorage.getItem('access-token')
    const petId = useParams().id
    const [advice, setAdvice] = useState({
        recommendedMeal: "",
        recommendedMedicines: "",
        vetAdvice: ""
    })
    const [loading, setLoading] = useState(true)
    const [loadingBtn, setLoadingBtn] = useState(false)
    const [petInfo, setPetInfo] = useState({})
    const [condition, setCondition] = useState(undefined)
    const [chartPortion, setChartPortion] = useState([])
    const [chartWeight, setChartWeight] = useState([])
    const [chartDate, setChartDate] = useState([])

    useEffect(() => {
        (async () => {
            const res = await petService.getCondition(accessToken, petId)
            if (res.statusCode === 200) {
                console.log(res)
                setCondition(res.response.data[0])
                setPetInfo(res.response.petInfo)
                setChartPortion(res.response.data.map((item) =>
                        item.portion,
                    ).reverse()
                )
                setChartWeight(res.response.data.map((item) =>
                        item.weight,
                    ).reverse()
                )
                setChartDate(res.response.data.map((item) =>
                        format(new Date(item.dateUpdate), 'dd/MM'),
                    ).reverse()
                )
                setLoading(false)
            } else {
                console.log(res.error.response)
                toast.error("Có lỗi khi load tình trạng thú cưng")
            }
        })()
    }, [accessToken])

    const handleAddAdvice = async () => {
        setLoadingBtn(true)
        const res = await petService.updateVetAdvice(accessToken, advice, petId)
        if (res.statusCode === 200) {
            setLoadingBtn(false)
            const now = new Date()
            toast.message("Thành công", {
                description: `Lời khuyên của bạn đã được thêm vào lúc ${now}`
            })
        } else {
            setLoadingBtn(false)
            toast.error("Có lỗi. Vui lòng thử lại sau")
        }
    }

    return (
        <div className="w-[78%] bg-white py-4 px-8 shadow-2xl">
            <div className="flex items-center justify-between ">
                <motion.button whileHover={{scale: 1.1}} className="flex justify-center items-center px-4 rounded-full border-2"
                               onClick={() => navigate('/vet/pets')}
                >
                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2"/>
                    Quay Lại
                </motion.button>
                <h1 className="text-xl font-medium text-primaryColor text-start mb-4">Tình trạng thú cưng - {petInfo.name}</h1>
            </div>
            {loading ? (
                <Spinner className="h-12 w-12 mt-60 mx-auto" color="blue"/>
            ) : (
                condition !== undefined ? (
                    <>
                        <h3 className="text-lg font-medium">Thông số chi tiết:
                            (Mới nhất - {condition.dateUpdate && format(new Date(condition?.dateUpdate), 'dd/MM/yyyy')})</h3>
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
                                    <h3>Biểu đồ cân nặng (kg)</h3>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <ChartTable color="#FF5E5E" chartValue={chartWeight} chartDate={chartDate}/>
                                    <h3>Biểu đồ khẩu phần ăn (g)</h3>
                                </div>
                            </div>
                        </div>
                        <div className="w-[70%] mx-auto mt-8 mb-4 gap-x-7 gap-y-4">
                            <h3 className="text-lg font-medium mb-2">Hình ảnh thực tế</h3>
                            <img
                                src={condition.actualImg || "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"}
                                alt="anh thuc te" className="w-full rounded-lg object-cover"/>
                            {/*<SlideImage images={images}/>*/}
                        </div>
                        <div className="w-[70%] mx-auto my-8 grid grid-cols-2 gap-x-7 gap-y-4">
                            <h3 className="text-lg mt-4 font-bold col-span-2">Đánh giá cho {petInfo?.name}</h3>
                            <div className="">
                                <h3 className="font-medium text-start p-2">Thức ăn khuyến cáo</h3>
                                <textarea
                                    value={advice.recommendedMeal}
                                    onChange={(e) => setAdvice({...advice, recommendedMeal: e.target.value})}
                                    className="w-full h-24 rounded-2xl outline-none p-2 shadow-lg border-2 focus:outline-primaryColor"/>
                            </div>
                            <div>
                                <h3 className="font-medium text-start p-2">Thuốc Khuyến Cáo:</h3>
                                <textarea
                                    value={advice.recommendedMedicines}
                                    onChange={(e) => setAdvice({...advice, recommendedMedicines: e.target.value})}
                                    className="w-full h-24 rounded-2xl outline-none p-2 shadow-lg border-2 focus:outline-primaryColor"/>
                            </div>
                            <div className="col-span-2">
                                <h3 className="font-medium text-start p-2">Lời khuyên:</h3>
                                <textarea
                                    value={advice.vetAdvice}
                                    onChange={(e) => setAdvice({...advice, vetAdvice: e.target.value})}
                                    className="w-full h-24 rounded-2xl outline-none p-2 shadow-lg border-2 focus:outline-primaryColor"/>
                            </div>
                            <motion.div whileHover={{scale: 1.1}} className="col-span-2 justify-self-end">
                                <button
                                    onClick={handleAddAdvice}
                                    className="py-2 px-4 bg-primaryColor rounded text-white hover:bg-blue-600 justify-self-end">
                                    {loadingBtn ? (
                                        <div className="flex justify-center items-center">
                                            <Spinner className="w-6 h-6 mr-4"/>
                                            Đang xử lý
                                        </div>
                                    ) : (
                                        <span>Thêm lời khuyên</span>
                                    )}
                                </button>
                            </motion.div>
                        </div>
                    </>
                ) : (
                    <div className="w-full h-[75%] flex justify-center items-center flex-col">
                        <img src={noCondition} alt="anh" className="w-52 h-52 text-primaryColor mr-8"></img>
                        <h2 className="text-xl font-medium mt-6 mb-2">Thú cưng chưa được cập nhật tình trạng</h2>
                        <p className="text-gray-400">Vui lòng chờ đợi chủ thú cưng cập nhật</p>
                    </div>
                )
            )}
        </div>
    );
};

export default PetAdvice;