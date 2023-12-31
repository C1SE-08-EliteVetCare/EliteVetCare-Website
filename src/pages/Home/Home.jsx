import banner from "../../assets/images/banner-home.png";
import bgHome1 from "../../assets/images/bg-home-1.png";
import map from "../../assets/images/map.png";
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapPin,} from "@fortawesome/free-solid-svg-icons";
import CommitmentItem from "../../components/CommitmentItem/CommitmentItem";
import SlideFeedback from "../../components/SlideFeedback/SlideFeedback";
import React from "react";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <main className="container max-w-screen-2xl mx-auto mt-8">
            <Helmet>
                <title>EliteVetCare</title>
            </Helmet>
            <div className="relative h-[500px] mt-10 mb-16 p-4 bg-[#E8F0FA] rounded-xl">
                <img
                    className="h-full w-full object-cover rounded-xl"
                    src={banner}
                    alt="EliteVetCare banner"
                />
                <div className="absolute left-[28%] top-[30%] w-[40%]">
                    <h1 className="text-[#252525] text-4xl font-bold leading-[52px] mb-5">
                        Chào mừng bạn đến với <span
                        className="font-chewy text-5xl font-medium text-primaryColor">EliteVetCare</span>
                    </h1>
                    <p className="text-xl font-normal leading-snug mb-2">Dịch vụ phòng khám thú y tại Đà Nẵng - Nơi
                        chúng tôi yêu
                        và chăm sóc cho thú cưng của bạn như là thành viên gia đình thứ tư. </p>
                </div>
            </div>

            <CommitmentItem/>

            <div className="relative h-[350px] mt-10 mb-16 drop-shadow-2xl bg-[#E8F0FA] p-4 rounded-2xl">
                <img
                    className="h-full w-full object-cover rounded-xl"
                    src={bgHome1}
                    alt="banner 2"
                    loading="lazy"
                />
                <div className="absolute right-[4%] top-[40%] w-[40%] text-end">
                    <h1 className="text-primaryColor text-4xl font-bold leading-[52px] mb-5">
                        Dịch vụ khám bệnh
                    </h1>
                    <p className="text-xl font-medium leading-4 mb-2">Đội ngủ bác sĩ chuyên nghiệp và trang thiết bị
                        hiện đại</p>
                    <p className="text-xl font-medium leading-4 mb-2">Đội ngũ hỗ trợ tư vấn và đặt lịch nhanh chóng</p>

                    <motion.a
                        whileHover={{scale: 1.2}}
                        href="/"
                        className="inline-block text-lg font-medium px-5 py-1 border-2 border-primaryColor rounded-full mt-4 hover:bg-primaryColor hover:text-white"
                    >
                        Đặt ngay
                    </motion.a>
                </div>
            </div>

            <div className="mt-16 mb-16 rounded-xl">
                <SlideFeedback/>
            </div>

            <div className="relative h-[350px] mt-10 mb-16 drop-shadow-2xl bg-[#E8F0FA] rounded-xl">
                <img
                    className="h-full w-full object-cover rounded-xl"
                    src={map}
                    alt="banner 2"
                    loading="lazy"
                />
                <div className="absolute left-[4%] top-[35%] w-[40%] text-start">
                    <span className="text-primaryColor text-2xl font-bold">
                    <FontAwesomeIcon icon={faMapPin} className="mr-2"/> Khu vực hoạt động
                    </span>
                    <h1 className="text-4xl font-bold leading-[52px]">
                        Thành Phố Đà Nẵng
                    </h1>
                    <span className="text-lg font-normal">Một số phòng khám nổi bật:</span>
                    <p className="text-primaryColor text-lg font-bold">Love Pet, Hữu Nghị và Thú Y Sông Hàn.</p>
                    <motion.span
                        whileHover={{scale: 1.2}}
                        className="inline-block text-lg font-medium px-5 py-1 border-2 border-primaryColor rounded-full mt-4 hover:bg-primaryColor hover:text-white"
                    >
                        <Link to="/clinic">Xem thêm</Link>
                    </motion.span>
                </div>
            </div>
        </main>
    );
};

export default Home;