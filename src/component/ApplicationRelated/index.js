import React from 'react';
import mostsm1 from "../../assets/images/mostsm1.jpg"
import mostsm2 from "../../assets/images/mostsm2.jpg"
import mostsm3 from "../../assets/images/mostsm3.jpg"
import mostsm4 from "../../assets/images/mostsm4.jpg"
import mostsm5 from "../../assets/images/mostsm5.jpg"
import ApplicationMostViews from "../ApplicationMostViews"
import './index.scss';

function ApplicationRelated() {
    const list = [
        {
            type: "TECHNOLOGY",
            date: "March 26, 2020",
            bgImgae: mostsm1,
            trend: false,
            detail: "Nancy Zang a Chinease busy women"
        },
        {
            type: "TECHNOLOGY",
            date: "March 26, 2020",
            bgImgae: mostsm2,
            trend: false,
            detail: "Nancy Zang a Chinease busy women"
        },
        {
            type: "TECHNOLOGY",
            date: "March 26, 2020",
            bgImgae: mostsm3,
            trend: false,
            detail: "U.S Responce subash says he will label..."
        },
        {
            type: "TECHNOLOGY",
            date: "March 26, 2020",
            bgImgae: mostsm4,
            trend: false,
            detail: "U.S Responce subash says he will label..."
        },
        {
            type: "TECHNOLOGY",
            date: "March 26, 2020",
            bgImgae: mostsm5,
            trend: false,
            detail: "Best garden wing support for the"
        },
    ]
    return (
        <div className="application-related__container">
            <div className="application-related__buttons">
                <div className="">
                    <div className="application-related__button selected">
                        Related
                    </div>
                </div>
                <div className="mx-3 ">
                    <div className="application-related__button">
                        Related
                    </div>
                </div>
                <div className="">
                    <div className="application-related__button">
                        Popular
                    </div>
                </div>
            </div>
            <ApplicationMostViews list={list}  />
        </div>
    )
}

export default ApplicationRelated;
