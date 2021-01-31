import React from 'react';
import Card from '../../helpers/Card'
import ApplicationCorousal from '../../helpers/ApplicationCorousal'
import black_white1 from "../../assets/images/black_white1.jpg"
import black_white2 from "../../assets/images/black_white2.jpg"
import './index.scss';

export default function ApplicationNewsGallary() {
    const list = [
        {
            date: "TECHNOLOGY / March 26, 2020",
            bgImgae: black_white1,
            play:true,
            trend:false,
            description: "Best garden wing support for the horticu itural"
        },
        {
            date: "TECHNOLOGY / March 26, 2020",
            bgImgae: black_white2,
            play:false,
            trend:true,
            description: "Best garden wing support for the horticu itural"
        },
        {
            date: "TECHNOLOGY / March 26, 2020",
            bgImgae: black_white1,
            play:true,
            trend:false,
            description: "Best garden wing support for the horticu itural"
        },
        {
            date: "TECHNOLOGY / March 26, 2020",
            bgImgae: black_white2,
            play:false,
            trend:true,
            description: "Best garden wing support for the horticu itural"
        },
    ]
    return (
        <div className="application-news-gallary">
            <ApplicationCorousal slides={2}>
                {
                    list.map((value)=>{
                        return(
                            <div className="application-news-gallary__image">
                                <Card data= {value} play={value.play} trend={value.trend}/>   
                            </div>
                        )
                    })
                }
            </ApplicationCorousal>
        </div>
    )
}