import React from 'react';
import transm1 from "../../assets/images/transm1.jpg"
import transm2 from "../../assets/images/transm2.jpg"
import transm4 from "../../assets/images/transm4.jpg"
import transm5 from "../../assets/images/transm5.jpg"
import transm6 from "../../assets/images/transm6.jpg"
import trendbig1 from "../../assets/images/trendbig1.jpg"
import trendbig2 from "../../assets/images/trendbig2.jpg"
import Post from '../../helpers/post'
import './index.scss';
function ApplicationTrending() {
  const list = [
    {
      type: "TECHNOLOGY",
      date: "March 26, 2020",
      bgImgae: transm1,
      detail: "Nancy Zang a Chinease busy women and Dhaka"
    },
    {
      type: "TECHNOLOGY",
      date: "March 26, 2020",
      bgImgae: transm2,
      detail: "Nancy Zang a Chinease busy women and Dhaka"
    },
    {
      type: "TECHNOLOGY",
      date: "March 26, 2020",
      bgImgae: transm4,
      detail: "U.S Responce subash says he will label region by risk of..."
    },
    {
      type: "TECHNOLOGY",
      date: "March 26, 2020",
      bgImgae: transm5,
      detail: "U.S Responce subash says he will label region by risk of..."
    },
    {
      type: "TECHNOLOGY",
      date: "March 26, 2020",
      bgImgae: transm5,
      detail: "Best garden wing support for the horticu itural"
    },
    {
      type: "TECHNOLOGY",
      date: "March 26, 2020",
      bgImgae: transm6,
      detail: "Best garden wing support for the horticu itural"
    },
  ]
  const bigPost = [
    {
      type: "TECHNOLOGY",
      date: "March 26, 2020",
      trend: true,
      bgImgae: trendbig1,
      detail: "Nancy Zang a Chinease busy women and Dhaka",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
    },
    {
      type: "TECHNOLOGY",
      date: "March 26, 2020",
      bgImgae: trendbig2,
      trend: false,
      detail: "Nancy Zang a Chinease busy women and Dhaka",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
    },
  ]
  return (
    <div className="application-trending__container">
      <div className="application-trending__title">
        Trending News
      </div>
      <div className="row application-trending__posts">
        {
          bigPost.map((data) => {
            return (
              <div className="col-6">
                <div className="application-trending__posts__img-container">
                  <img src={data.bgImgae} className="application-trending__posts__img" alt=""/>
                  {data.trend && <div className='application-trending__posts__trend-icon icon-power'></div>}
                </div>
                <div className="application-trending__posts__details">
                  {
                    data.date &&
                    <div className='application-trending__posts__date'>
                      <span>{data.type}</span> / {data.date}
                    </div>
                  }
                  {
                    data.detail &&
                    <div className='application-trending__posts__detail'>
                      {data.detail}
                    </div>
                  }
                  {
                    data.description &&
                    <div className='application-trending__posts__description'>
                      {data.description}
                    </div>
                  }
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="row application-trending__post">
        {
          list.map((value, index) => {
            return (
              <div className= "col-6">
                <div className={index < 4
                  ? `application-trending__post-list post-border`
                  : ` application-trending__post-list`}>
                  <Post data={value} />
                </ div>

              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default ApplicationTrending;
