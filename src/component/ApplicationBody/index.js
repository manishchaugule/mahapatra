import React from 'react';
import ApplicationPageLayout from "../../helpers/ApplicationPageLayout"
import ApplicationFeatures from "../ApplicationFeatures"
import ApplicationFollowUs from "../ApplicationFollowUs"
import ApplicationTrending from "../ApplicationTrending"
import ApplicationBanner from "../ApplicationBanner"
import ApplicationRelated from "../ApplicationRelated"
import ApplicationMostViews from "../ApplicationMostViews"
import ApplicationVideoNews from "../ApplicationVideoNews"
import ApplicationNewsCarousal from "../ApplicationNewsCarousal"

import mostsm1 from "../../assets/images/mostsm1.jpg"
import mostsm2 from "../../assets/images/mostsm2.jpg"
import mostsm3 from "../../assets/images/mostsm3.jpg"
import mostsm4 from "../../assets/images/mostsm4.jpg"
import mostsm5 from "../../assets/images/mostsm5.jpg"

import './index.scss';

function ApplicationBody() {
  const list = [
    {
      type: "TECHNOLOGY",
      date: "March 26, 2020",
      bgImgae: mostsm1,
      trend: true,
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
      trend: true,
      detail: "U.S Responce subash says he will label..."
    },
    {
      type: "TECHNOLOGY",
      date: "March 26, 2020",
      bgImgae: mostsm4,
      trend: true,
      detail: "U.S Responce subash says he will label..."
    },
    {
      type: "TECHNOLOGY",
      date: "March 26, 2020",
      bgImgae: mostsm5,
      trend: false,
      detail: "Best garden wing support for the"
    },
    {
      type: "TECHNOLOGY",
      date: "March 26, 2020",
      bgImgae: mostsm2,
      trend: false,
      detail: "Best garden wing support for the"
    },
  ]
  return (
    <div className="application-body">
      <ApplicationPageLayout>
        <ApplicationNewsCarousal />
        <div className="row">
          <div className="col-8">
            <ApplicationBanner />
          </div>
          <div className="col-4">
            <ApplicationRelated />
          </div>
        </div>
        <ApplicationFeatures />
        <div className="row">
          <div className="col-8">
            <ApplicationTrending />
          </div>
          <div className="col-4">
            <ApplicationFollowUs />
            <ApplicationMostViews title="Most View" list={list} number={true} />
          </div>
        </div>
      </ApplicationPageLayout>
      <ApplicationVideoNews/>
    </div>
  );
}

export default ApplicationBody;
