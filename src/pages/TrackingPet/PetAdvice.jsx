import React, {useState} from 'react';
import Chart from "react-apexcharts";
import {motion} from "framer-motion";
import Slide from "../../components/Slide/Slide";

const PetAdvice = () => {
    const images = [
        {
            id: 1,
            url: "https://thietbithuyvietnam.com/wp-content/uploads/2020/01/10-e1577931867792.jpg",
            name: "pet condition"
        }, {
            id: 2,
            url: "https://thuythithi.com/wp-content/uploads/2021/07/cua-hang-thu-y-chuyen-thuc-pham-do-dung-cho-cho-meo-chinh-hang.jpeg",
            name: "pet condition"
        },
        {
            id: 3,
            url: "https://cms.lichngaytot.com/medias/standard/2016/4/15/giai-ma-giac-mo-hinh-anh-2.jpg",
            name: "pet condition"
        },
        {
            id: 4,
            url: "https://thuythithi.com/wp-content/uploads/2020/03/8-phuong-phap-giu-gin-suc-khoe-cho-meo.jpg",
            name: "pet condition"
        },
        {
            id: 5,
            url: "https://thuyprocare.com/upload/baiviet/chomechuacokinhnghiemnuoichocon-8026.jpeg",
            name: "pet condition"
        }, {
            id: 6,
            url: "https://petnhatrang.com/wp-content/uploads/2020/10/1112.jpg",
            name: "pet condition"
        }
    ]
    // eslint-disable-next-line no-unused-vars
    const [state, setState] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: ["17/10", "22/10", "27/10", "01/11", "06/11", "11/11", "16/11"]
            },
            markers: {
                size: 5,
            },
            colors: ['#38C976']
        },
        series: [
            {
                name: "Cân nặng (Kg)",
                data: [15.6, 15.9, 17, 19, 19, 19.05, 20]
            },

        ]
    })
    // eslint-disable-next-line no-unused-vars
    const [state2, setState2] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: ["17/10", "22/10", "27/10", "01/11", "06/11", "11/11", "16/11"]
            },
            markers: {
                size: 5,
            },
            colors: ['#FF5E5E']
        },
        series: [
            {
                name: "Khẩu phần ăn (g)",
                data: [100, 300, 450, 200, 100, 300, 350]
            }
        ]
    })
    return (
        <div className="w-[78%] bg-white py-4 px-8 shadow-2xl">
            <h1 className="text-xl font-medium text-primaryColor text-start mb-4">Tình trạng của Titi</h1>
            <h3 className="font-medium">Thông số chi tiết: (25/09/2023)</h3>
            <div className="grid grid-cols-2 gap-4 mt-4 p-4 shadow-2xl">
                <p className="">
                    <span className="font-medium">Thức ăn: </span>
                    Ăn 200g hạt Royal Canin Chihuahua , kèm 20g cà rốt.
                </p>
                <p className="">
                    <span className="font-medium">Biểu hiện: </span>
                    Lười vận động , uống nước ít, hay đi ngoài
                </p>
                <p className="col-span-2">
                    <span className="font-medium">Tình trạng đi vệ sinh hôm nay: </span>
                    Đi ngoài không bị tiêu chảy.
                </p>
            </div>
            <div className="mt-16">
                {/*<h3 className="font-medium mb-4">Biểu đồ trực quan</h3>*/}
                <div className="grid grid-cols-2 justify-items-center">
                    <div className="flex flex-col justify-center">
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="line"
                            width="400"
                        />
                        <h3>Biểu đồ cân nặng (kg)</h3>
                    </div>
                    <div className="flex flex-col justify-center">
                        <Chart
                            options={state2.options}
                            series={state2.series}
                            type="line"
                            width="400"
                        />
                        <h3>Biểu đồ khẩu phần ăn (g)</h3>
                    </div>
                </div>
            </div>
            <div className="w-[70%] mx-auto mt-8 mb-4 gap-x-7 gap-y-4">
                <h3 className="font-medium mb-2">Hình ảnh thực tế</h3>
                {/*<img*/}
                {/*    src="https://thietbithuyvietnam.com/wp-content/uploads/2020/01/10-e1577931867792.jpg"*/}
                {/*    alt="anh thuc te" className="w-full rounded-lg object-cover"/>*/}
                <Slide images={images}/>
            </div>
            <div className="w-[70%] mx-auto mt-8 mb-4 grid grid-cols-2 gap-x-7 gap-y-4">
                <div className="">
                    <h3 className="font-medium text-start p-2">Thức ăn khuyến cáo</h3>
                    <textarea
                        className="w-full h-24 rounded-2xl outline-none p-2 shadow-lg border-2 focus:outline-primaryColor"/>
                </div>
                <div>
                    <h3 className="font-medium text-start p-2">Thuốc Khuyến Cáo:</h3>
                    <textarea
                        className="w-full h-24 rounded-2xl outline-none p-2 shadow-lg border-2 focus:outline-primaryColor"/>
                </div>
                <div className="col-span-2">
                    <h3 className="font-medium text-start p-2">Lời khuyên:</h3>
                    <textarea
                        className="w-full h-24 rounded-2xl outline-none p-2 shadow-lg border-2 focus:outline-primaryColor"/>
                </div>
                <motion.div whileHover={{scale: 1.1}} className="col-span-2 justify-self-end">
                    <button
                        className="py-2 px-4 bg-primaryColor rounded text-white hover:bg-blue-600 justify-self-end">Thêm
                        lời khuyên
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default PetAdvice;