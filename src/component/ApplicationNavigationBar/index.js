import React from 'react';
import ApplicationPageLayout from "../../helpers/ApplicationPageLayout"
import temp from "../../assets/images/temp.png"
import './index.scss';

function ApplicationNavigation() {
    const list = ["Home", "Pages", "Posts", "Categories", "World", "Sports", "Contact"]
    return (
        <div className="application-navigation">
            <ApplicationPageLayout>
                <div className="application-navigation__container">
                    <div className="col-sm-7 col-xs-7 col-md-7 col-lg-7 application-navigation__list pl-0">
                        {
                            list.map((value, index) => {
                                if (index < 4) {
                                    return (
                                        <div className="application-navigation__item">
                                            {value}
                                            <span className="icon-sort-desc nav-down-icon"></span>
                                        </div>
                                        
                                    )
                                }
                                else {
                                    return (
                                        <div className="application-navigation__item">
                                            {value}
                                        </div>
                                    )
                                }

                            })
                        }
                    </div>
                    <div className=" application-navigation__detail pr-0">
                        <div className="application-navigation__search">
                            <div className=" icon-search"></div>
                            <div className=" px-3 icon-user-circle"></div>
                        </div>
                        <div className="application-navigation__lang px-3">
                            English 
                            <span className="icon-sort-desc nav-down-icon"></span>
                        </div>
                        <div className="application-navigation__temp">
                            <img src={temp} className="px-3" alt=""/>
                            <div className="application-navigation__temp-detail">
                                <div><span>13</span> &#8451;</div>
                                <div>
                                    san francisco
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ApplicationPageLayout>
        </div>
    );
}

export default ApplicationNavigation;
