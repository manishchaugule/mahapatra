import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss';

export default function ApplicationCarousal({
   children,
   slides,
   autoplay=true
}) {
    const settings = {
        dots: false,
        arrows: true,
        autoplay: autoplay,
        infinite: true,
        draggable: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        slidesToShow:slides
    };
   return (
    <Slider {...settings}> {children} </Slider>
   );
};