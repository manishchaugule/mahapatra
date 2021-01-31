import React from 'react';
import VideoUp from "../videoUp"
import VideoDown from "../videoDown"
import './index.scss';

function ApplicationVideoNews() {

    return (
        <div className="application-video-news">
            <div className="application-video-news__container">
                <div className="application-video-news__up">
                    <VideoUp />
                </div>
                <div className="application-video-news__title">
                    Video News
                </div>
                <div className="application-video-news__down">
                    <VideoDown />
                </div>
            </div>
        </div>
    );
}

export default ApplicationVideoNews;
