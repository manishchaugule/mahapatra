import React from 'react';
import feature2 from "../../assets/images/feature2.jpg"
import feature3 from "../../assets/images/feature3.jpg"
import feature4 from "../../assets/images/feature4.jpg"
import Card from '../../helpers/Card'
import './index.scss';

function ApplicationFeature() {
    const list = [
        {
            date: "TECHNOLOGY / March 26, 2020",
            bgImgae: feature2,
            detail: "Best garden wing support for the horticu itural"
        },
        {
            date: "TECHNOLOGY / March 26, 2020",
            bgImgae: feature3,
            detail: "Best garden wing support for the horticu itural"
        },
        {
            date: "TECHNOLOGY / March 26, 2020",
            bgImgae: feature2,
            detail: "Best garden wing support for the horticu itural"
        },
        {
            date: "TECHNOLOGY / March 26, 2020",
            bgImgae: feature4,
            detail: "Best garden wing support for the horticu itural"
        },
    ]
  return (
    <div className="application-feature__container">
        <div className="application-feature__title">
            Feature News
        </div>
        <div className="row application-feature__cards">
            {
                list.map((value)=>{
                    return(
                        <div className="col-sm-3 col-xs-3 col-md-3 col-lg-3 application-feature__cards-list">
                            <Card data= {value} />   
                        </div>
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default ApplicationFeature;
