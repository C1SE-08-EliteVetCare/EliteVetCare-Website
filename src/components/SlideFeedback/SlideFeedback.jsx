import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import Feedback from "../Feedback/Feedback";

const SlideFeedback = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        cssEase: 'linear',
        touchThreshold: 100,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div>
            <h1 className="text-4xl font-bold text-primaryColor mb-8">Đánh Giá Của Người Dùng</h1>
            {loading ? (
                <Slider {...settings}>
                    <Feedback.Loading key={1}/>
                    <Feedback.Loading key={2}/>
                    <Feedback.Loading key={3}/>
                    <Feedback.Loading key={4}/>
                </Slider>
            ) : (
                <Slider {...settings}>
                    <Feedback key={1}/>
                    <Feedback key={2}/>
                    <Feedback key={3}/>
                    <Feedback key={4}/>
                </Slider>
            )}
        </div>
    );
};

export default SlideFeedback;