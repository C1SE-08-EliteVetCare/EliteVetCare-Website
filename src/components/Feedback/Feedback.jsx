import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Rate from "../Rate/Rate";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";

const Feedback = ({ feedback }) => {
    return (
        <div className="py-4">
            <div className="py-4 w-290 h-200">
                <Link to="/">
                    <div className="w-350 h-[416px] mx-3 bg-white text-center shadow p-4 rounded-xl hover:shadow-xl transform transition-all translate-y-0 hover:-translate-y-2">
                        <div>
                            <Rate rating={5} classStyle="mx-1.5 py-2" />
                            <LoadingSkeleton />
                        </div>
                        <span className="block text-2xl px-4 mb-2 font-medium" >{feedback.clinic ? feedback.clinic.name : 'Unknown Clinic'}</span>
                        <p className="h-[99px]">
                            <FontAwesomeIcon className="text-primaryColor block px-4   mr-2 mb-1.5" icon={faQuoteLeft} />
                            {feedback.subject}
                            <FontAwesomeIcon className="text-primaryColor ml-1 mb-1" icon={faQuoteRight} />
                        </p>
                        <p className="h-[99px]">
                            <FontAwesomeIcon className="text-primaryColor mr-1 mb-1" icon={faQuoteLeft} />
                            {feedback.content}
                            <FontAwesomeIcon className="text-primaryColor ml-2 mb-1.5" icon={faQuoteRight} />
                        </p>
                        {feedback.user?.avatar ? (
                            <img
                                className="w-[50px] h-[50px] rounded-full mx-auto mt-6"
                                src={feedback.user.avatar}
                                alt="customer"
                            />
                        ) : (
                            <img
                                className="w-[50px] h-[50px] rounded-full mx-auto mt-6"
                                src="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"
                                alt="default-avatar"
                            />
                        )}
                        {feedback.user?.avatar ? null : <hr />}
                        <h4 className="mt-3 mb-4 text-xl font-bold text-textBoldColor">{feedback.user.fullName}</h4>
                    </div>
                </Link>
            </div>
        </div>
    );
};

const Loading = () => {
    return (
        <div className="py-4">
            <Link to="/">
                <div className="w-auto mx-3 bg-white text-center shadow p-4 rounded-xl hover:shadow-xl transform transition-all translate-y-0 hover:-translate-y-2 ">
                    <div>
                        <LoadingSkeleton className="mt-2 mb-4 w-[45%] h-[15px] mx-auto" />
                        {/*<Rate rating={5} classStyle="mx-1.5 py-2"/>*/}
                    </div>
                    <LoadingSkeleton className="mt-2 mb-4 w-[70%] h-[20px] mx-auto" />
                    <div className="">
                        <LoadingSkeleton className="w-full h-[10px] mb-4" />
                        <LoadingSkeleton className="w-full h-[10px] mb-4" />
                        <LoadingSkeleton className="w-full h-[10px] mb-4" />
                        <LoadingSkeleton className="w-full h-[10px]" />
                    </div>
                    <img
                        className="w-[50px] h-[50px] rounded-full mx-auto mt-6"
                        src="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"
                        alt="default-avatar"
                    />
                    <LoadingSkeleton className="mt-3 mb-4 w-[50%] h-[20px] mx-auto" />
                </div>
            </Link>
        </div>
    );
};

Feedback.Loading = Loading;

export default Feedback;
