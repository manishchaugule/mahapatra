import React from 'react';
import ApplicationPageLayout from "../../helpers/ApplicationPageLayout"
import './index.scss';

function ApplicationAbout() {
    const News = ["politics", "Bussiness", "Technology", "Science", "Health", "Sports", "entertainment", "Education", "Correction", "Obituaries", "Education", "Paper", "Correction", "Foods"]
    const living = ["Crossword", "Food", "Automobile", "Education", "Health", "Magazine", "Wedding", "Classifieds", "Photogrphies", "NYT store", "Journalism", "Public editor", "sevcices", "My account"]
    return (
        <div className="application-about">
            <ApplicationPageLayout>
                <div className="application-about__container">
                    <div className="application-about__detail-container col-sm-4 col-xs-4 col-md-4 col-lg-4 pl-0">
                        <div className="application-about__titles">
                            News Categories
                        </div>
                        <div className="application-about__detail">
                            <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6 application-about__col ">
                                {
                                    News.map((value, index) => {
                                        if (index < 7) {
                                            return (
                                                <div className="application-about__item">
                                                    {value}
                                                </div>
                                            )
                                        }
                                        return ""
                                    })
                                }
                            </div>
                            <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6 application-about__col ">
                                {
                                    News.map((value, index) => {
                                        if (index > 6) {
                                            return (
                                                <div className="application-about__item">
                                                    {value}
                                                </div>
                                            )
                                        }
                                        return ""

                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="application-about__detail-container col-sm-4 col-xs-4 col-md-4 col-lg-4 pl-4">
                        <div className="application-about__titles">
                            Living
                        </div>
                        <div className="application-about__detail">
                            <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6 application-about__col ">
                                {
                                    living.map((value, index) => {
                                        if (index < 7) {
                                            return (
                                                <div className="application-about__item">
                                                    {value}
                                                </div>
                                            )
                                        }
                                        return ""

                                    })
                                }
                            </div>
                            <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6 application-about__col ">
                                {
                                    living.map((value, index) => {
                                        if (index > 6) {
                                            return (
                                                <div className="application-about__item">
                                                    {value}
                                                </div>
                                            )
                                        }
                                        return ""

                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="application-about__more col-sm-4 col-xs-4 col-md-4 col-lg-4 pl-4 pr-0">
                        <div className="application-about__titles">
                            More News
                        </div>
                        {
                            News.map((value, index) => {
                                if (index < 2) {
                                    return (
                                        <div className="application-about__more-detail">
                                            <div className="application-about__more-title">
                                                <span>Technology </span> / March 26, 2020
                                            </div>
                                            <div className="application-about__more-sub-detail">
                                                <div className="application-about__data">
                                                    Nancy Zhang a chinese busy woman and dakha
                                                </div>
                                                <div className="application-about__index">
                                                    {index}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                return ""

                            })
                        }

                    </div>
                </div>

            </ApplicationPageLayout>
        </div>
    );
}

export default ApplicationAbout;
