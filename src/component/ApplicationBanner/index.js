import React from 'react';
import hside1 from "../../assets/images/hside1.jpg"
import Card from '../../helpers/Card'
import ApplicationImageSlider from "../ApplicationImageSlider"
import './index.scss';

function ApplicationBanner() {
    const data = {
        date: "TECHNOLOGY / March 26, 2020",
        bgImgae: hside1,
        description: "Japan virus success has puzzled the world. Is its luck running out?",
        detail: "The property,complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower..."
    }
    return (
        <div className="application-banner__container">
            <div className="application-banner__cards">
                <Card data={data} play={true} />
            </div>
            <ApplicationImageSlider />
        </div>
    )
}

export default ApplicationBanner;
