import React from 'react';
import Post from '../../helpers/post'
import './index.scss';

function ApplicationMostViews({
  list,
  title,
  rank = false,
  number = false,
  popular = false
}) {
  const titleClass = popular ? "application-most-views__title py-4" :"application-most-views__title"
  return (
    <div className="application-most-views__container">
      {title && <div className={titleClass}>
        {title}
      </div>}
      <div className="application-most-views__post">
        {
          list.map((value, index) => {
            return (
              <div className="application-most-views__post-list">
                {
                  rank
                    ? <Post data={value} trend={value.trend} index={index+1} popular={popular}/>
                    : <Post data={value} trend={value.trend} />
                }

                {number && <div className="application-most-views__post-index">{index + 1}</div>}
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default ApplicationMostViews;
