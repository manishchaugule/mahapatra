import React from 'react';
import ApplicationPageLayout from "../../helpers/ApplicationPageLayout"
import ApplicationNavigationBar from "../ApplicationNavigationBar"
import './index.scss';

function ApplicationHeader() {
    const list = ["icon-twitter", "icon-facebook", "icon-youtube", "icon-instagram"]
    return (
        <React.Fragment>
            <div className="applictaion-header">
                <ApplicationPageLayout>
                    <div className="applictaion-header__container">
                        <div className="applictaion-header__title-container">
                            <div className="applictaion-header__title-container__title">
                                Trending
                    </div>
                            <div className="applictaion-header__title-container__detail">
                                Top 10 Best Movies Of 2018 So Far: Great Movies
                    </div>
                        </div>
                        <div className="applictaion-header__about-container">
                            <div className="applictaion-header__about-container__date">
                                Saturday,Jan 30,2021
                    </div>
                            <div className="applictaion-header__about-container__divider"></div>
                            <div className="applictaion-header__about-container__socia-media">
                                {
                                    list.map((value) => {
                                        return (
                                            <div className={`${value} applictaion-header__about-container__socia-media__items`}></div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </ApplicationPageLayout>
            </div>
            <ApplicationNavigationBar />
        </React.Fragment>

    );
}

export default ApplicationHeader;
