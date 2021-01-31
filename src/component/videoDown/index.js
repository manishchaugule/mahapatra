import React from 'react';
import ApplicationMostViews from "../ApplicationMostViews"
import Card from '../../helpers/Card'
import mostsm1 from "../../assets/images/mostsm1.jpg"
import mostsm2 from "../../assets/images/mostsm2.jpg"
import mostsm3 from "../../assets/images/mostsm3.jpg"
import mostsm4 from "../../assets/images/mostsm4.jpg"
import mostsm5 from "../../assets/images/mostsm5.jpg"
import video1 from "../../assets/images/video1.jpg"

import './index.scss';

function ApplicationVideoDown() {
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
  const data = {
    date: "TECHNOLOGY / March 26, 2020",
    bgImgae: video1,
    detail: "Japan virus success has puzzled the world. Is its luck running out?",
    
}
  return (
    <div className="application-video-down">
      <div className="application-video-down__container">
        <div className="col-8 pl-0">
          <div className="application-video-down__video">
            <Card data={data} youtube={true}/>
          </div>
        </div>
        <div className="col-4 pr-0">
          <ApplicationMostViews title="Popular Posts" list={list} rank= {true} popular={true}/>
        </div>
      </div>
    </div>
  );
}

export default ApplicationVideoDown;
