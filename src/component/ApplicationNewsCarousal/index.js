import React from 'react';
import ApplicationCorousal from '../../helpers/ApplicationCorousal'
import Post from '../../helpers/post'
import hside1 from "../../assets/images/hside1.jpg"
import hside2 from "../../assets/images/hside2.jpg"
import hside3 from "../../assets/images/hside3.jpg"
import hside4 from "../../assets/images/hside4.jpg"
import hside5 from "../../assets/images/hside5.jpg"
import './index.scss';

export default function ApplicationNewsCarousel() {
    const list = [
        {
          type: "TECHNOLOGY",
          bgImgae: hside1,
          trend: false,
          detail: "Nancy Zang a Chinease busy women"
        },
        {
          type: "TECHNOLOGY",
          bgImgae: hside2,
          trend: false,
          detail: "Nancy Zang a Chinease busy women"
        },
        {
          type: "TECHNOLOGY",
          bgImgae: hside3,
          trend: false,
          detail: "U.S Responce subash says he will label..."
        },
        {
          type: "TECHNOLOGY",
          bgImgae: hside4,
          trend: false,
          detail: "U.S Responce subash says he will label..."
        },
        {
          type: "TECHNOLOGY",
          bgImgae: hside5,
          trend: false,
          detail: "Best garden wing support for the"
        },
    ]
    return (
        <div className="application-news-carousal">
            <ApplicationCorousal slides={3}>
                    {
                        list.map((value) => {
                            return (
                                <div className="application-news-carousal__item">
                                    <Post data={value} trend={value.trend} popular={true}/>
                                </div>
                            )
                        })
                    }
            </ApplicationCorousal>
        </div>
    )
}