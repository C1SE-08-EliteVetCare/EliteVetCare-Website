import React, {useState} from 'react';
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slide = ({images}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: images.length,
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
                    slidesToShow: 5,
                    slidesToScroll: 2
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [currentImage, setCurrentImage] = useState(images[0])
    return (
        (images.length > 0 && (
            <div>
                <div className="rounded w-full h-[400px] shadow overflow-hidden">
                    <img className="rounded w-full h-full object-cover transition-all hover:cursor-pointer hover:scale-110"
                         src={currentImage.url}
                         alt={currentImage.url}/>
                </div>
                {images.length > 1 && (
                    <div className="my-5">
                        <Slider {...settings}>
                            {
                                images.map((item) => {
                                    return (
                                        <div className="px-1.5">
                                            <img onMouseOver={() => setCurrentImage(item)} key={item.id}
                                                 className="w-full h-[100px] object-cover rounded transition-all hover:border-2 hover:border-primaryColor hover:cursor-pointer"
                                                 src={item.url} alt={item.name}/>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                )}
            </div>
        ))
    );
};

export default Slide;