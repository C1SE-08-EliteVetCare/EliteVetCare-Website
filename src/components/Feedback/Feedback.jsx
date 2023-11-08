import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import Rate from "../Rate/Rate";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";

const Feedback = () => {
    return (
        <div className="py-4">
            <Link to="/">
                <div
                    className="w-auto mx-3 bg-white text-center shadow p-4 rounded-xl hover:shadow-xl transform transition-all translate-y-0 hover:-translate-y-2 ">
                    <div>
                        <Rate rating={5} classStyle="mx-1.5 py-2"/>
                        <LoadingSkeleton/>
                    </div>
                    <span className="block px-4 mb-2 font-medium">Toàn bộ ứng dụng</span>
                    <p className="">
                        <FontAwesomeIcon className="text-primaryColor mr-2 mb-1.5" icon={faQuoteLeft}/>
                        Ứng dụng thật tuyệt vời, nhanh mượt, đa dạng chức năng, bác sĩ thân thiện, tư vấn nhiệt tình Ứng
                        dụng thật tuyệt vời, nhanh mượt, đa dạng chức năng, bác sĩ thân thiện, tư vấn nhiệt tình
                        <FontAwesomeIcon className="text-primaryColor ml-2 mb-1.5" icon={faQuoteRight}/>
                    </p>
                    <img className="w-[50px] h-[50px] rounded-full mx-auto mt-6"
                         src="https://ph-files.imgix.net/75c2cda9-e2c3-4bcd-a0b1-0595daba1844.png?auto=format&fit=crop"
                         alt="customer"></img>
                    <h4 className="mt-3 mb-4 text-xl font-bold text-textBoldColor">Cao Quốc Huy</h4>
                </div>
            </Link>
        </div>
    );
};

const Loading = () => {
    return (
        <div className="py-4">
            <Link to="/">
                <div
                    className="w-auto mx-3 bg-white text-center shadow p-4 rounded-xl hover:shadow-xl transform transition-all translate-y-0 hover:-translate-y-2 ">
                    <div>
                        <LoadingSkeleton className="mt-2 mb-4 w-[45%] h-[15px] mx-auto"/>
                        {/*<Rate rating={5} classStyle="mx-1.5 py-2"/>*/}
                    </div>
                    <LoadingSkeleton className="mt-2 mb-4 w-[70%] h-[20px] mx-auto"/>
                    <div className="">
                        <LoadingSkeleton className="w-full h-[10px] mb-4"/>
                        <LoadingSkeleton className="w-full h-[10px] mb-4"/>
                        <LoadingSkeleton className="w-full h-[10px] mb-4"/>
                        <LoadingSkeleton className="w-full h-[10px]"/>
                    </div>
                    <LoadingSkeleton className="w-[50px] h-[50px] rounded-full mx-auto mt-6"/>
                    <LoadingSkeleton className="mt-3 mb-4 w-[50%] h-[20px] mx-auto"/>
                </div>
            </Link>
        </div>
    )
}

Feedback.Loading = Loading

export default Feedback;