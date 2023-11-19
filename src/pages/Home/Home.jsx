import banner from "../../assets/images/banner-home.png";
import bgHome1 from "../../assets/images/bg-home-1.png";
import map from "../../assets/images/map.png";
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapPin,} from "@fortawesome/free-solid-svg-icons";
import CommitmentItem from "../../components/CommitmentItem/CommitmentItem";
import SlideFeedback from "../../components/SlideFeedback/SlideFeedback";
import React from "react";

const Home = () => {


    return (
        <main className="container max-w-screen-2xl mx-auto mt-8">
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
                    <motion.a
                        whileHover={{scale: 1.2}}
                        href="/make-appointment"
                        className="mt-2 inline-block bg-primaryColor text-white text-lg font-bold px-9 py-1.5 rounded-3xl"
                    >
                        Bắt đầu
                    </motion.a>
                </div>
            </div>

            <CommitmentItem/>

            {/*<div className="grid grid-flow-col gap-6 mb-16 shadow-2xl p-4 bg-indigo-200">*/}
            {/*  <img src={imgHome1} alt="home-1" className="col-span-4" />*/}
            {/*  <div className="col-span-8 text-center">*/}
            {/*    <h1 className="text-3xl font-normal leading-tight">Chúng tôi đồng hành cùng tình yêu với thú cưng của bạn</h1>*/}
            {/*    <p className="mt-8">Tại đây, chúng tôi cam kết đem lại dịch vụ thú y chất lượng cao, sự quan tâm tận tâm, và*/}
            {/*      sự*/}
            {/*      đồng hành đáng tin cậy trong việc bảo vệ sức khỏe và hạnh phúc của thú cưng của bạn. Hãy khám phá thế giới*/}
            {/*      của chúng tôi và tìm hiểu thêm về cách chúng tôi có thể giúp bạn và thú cưng của bạn</p>*/}
            {/*  </div>*/}
            {/*</div>*/}

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
                    <motion.a
                        whileHover={{scale: 1.2}}
                        href="/"
                        className="inline-block text-lg font-medium px-5 py-1 border-2 border-primaryColor rounded-full mt-4 hover:bg-primaryColor hover:text-white"
                    >
                        Xem thêm
                    </motion.a>
                </div>
            </div>
        </main>
    );
};

export default Home;