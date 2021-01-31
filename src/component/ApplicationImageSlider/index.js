import React from 'react';
import ApplicationCorousal from '../../helpers/ApplicationCorousal'
import post_gsi1 from "../../assets/images/post_gsi1.jpg"
import post_gsi2 from "../../assets/images/post_gsi2.jpg"
import post_gsi3 from "../../assets/images/post_gsi3.jpg"
import post_gsi4 from "../../assets/images/post_gsi4.jpg"
import post_gsi5 from "../../assets/images/post_gsi5.jpg"
import post_gsi6 from "../../assets/images/post_gsi6.jpg"
import post_gsi7 from "../../assets/images/post_gsi7.jpg"

import './index.scss';

export default function ApplicationImageSlider() {
    const list =[
        post_gsi1,
        post_gsi2,
        post_gsi3,
        post_gsi4,
        post_gsi5,
        post_gsi6,
        post_gsi7
    ]
    return (
        <div className="application-imgae-slider">
            <ApplicationCorousal slides={6} autoplay={false}>
                {
                    list.map((value)=> 
                        <img src={value} className= "application-imgae-slider__img" alt=""/>
                    )
                }
            </ApplicationCorousal>
        </div>
    )
}