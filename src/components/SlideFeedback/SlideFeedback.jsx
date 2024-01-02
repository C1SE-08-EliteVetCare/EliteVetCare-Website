import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Feedback from '../Feedback/Feedback';
import * as feedbackService from '../../services/feedbackService';

const SlideFeedback = () => {
    const [loading, setLoading] = useState(true);
    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        const fetchFeedbackData = async () => {
            try {
                const accessToken = localStorage.getItem('access-token');
                const feedbackResponse = await feedbackService.getFeedBack(accessToken);

                if (feedbackResponse.statusCode === 200) {
                    const allFeedbackData = feedbackResponse.response.data;
                    setFeedbackList(allFeedbackData);
                }
            } catch (error) {
                console.error('Error fetching feedback data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFeedbackData();
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
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
                    {feedbackList.map((feedback, index) => (
                        <Feedback key={index} feedback={feedback} />
                    ))}
                </Slider>
            )}
        </div>
    );
};

export default SlideFeedback;