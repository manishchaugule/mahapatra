import React from 'react';
import './index.scss';

function ApplicationFollowUs() {
  return (
    <div className="application-follow-us__container">
      <div className="application-follow-us__title">
        Follow Us
      </div>
      <div className="application-follow-us__detail">
        <div className=" col-4 application-follow-us__detail-container facebook ">
          <div className="application-follow-us__icon icon-facebook"></div>
          <div className="application-follow-us__data">
            <div className="application-follow-us__count">
              34,456
            </div>
            <div className="application-follow-us__text">
              Fans
            </div>
          </div>
        </div>
        <div className=" col-4 application-follow-us__detail-container twitter">
          <div className="application-follow-us__icon icon-twitter"></div>
          <div className="application-follow-us__data">
            <div className="application-follow-us__count">
              34,456
            </div>
            <div className="application-follow-us__text">
              Followers
            </div>
          </div>
        </div>
        <div className=" col-4 application-follow-us__detail-container youtube">
          <div className="application-follow-us__icon icon-youtube"></div>
          <div className="application-follow-us__data">
            <div className="application-follow-us__count">
              34,456
            </div>
            <div className="application-follow-us__text">
              Subscribers
            </div>
          </div>
        </div>
        <div className=" col-4 application-follow-us__detail-container insta">
          <div className="application-follow-us__icon icon-instagram"></div>
          <div className="application-follow-us__data">
            <div className="application-follow-us__count">
              34,456
            </div>
            <div className="application-follow-us__text">
              Followers
            </div>
          </div>
        </div>
        <div className=" col-4 application-follow-us__detail-container vido">
          <div className="application-follow-us__icon icon-vimeo"></div>
          <div className="application-follow-us__data">
            <div className="application-follow-us__count">
              34,456
            </div>
            <div className="application-follow-us__text">
              Followers
            </div>
          </div>
        </div>
        <div className=" col-4 application-follow-us__detail-container skype">
          <div className="application-follow-us__icon icon-skype"></div>
          <div className="application-follow-us__data">
            <div className="application-follow-us__count">
              34,456
            </div>
            <div className="application-follow-us__text">
              Followers
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationFollowUs;
