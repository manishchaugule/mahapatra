import React from 'react';
import './index.scss';


export default function Post({
    data,
    popular = false,
    trend = true,
    index = null
}) {
   return (
       <div className='post' > 
            <div className= "post__img-container col-3 px-0">
                <img src={data.bgImgae} className= "post__img" alt=""/>
                { trend && <div className='post__trend-icon icon-power'></div> }
                { index && <div className='post__index'>{index}</div> }
            </div> 
            <div className='post__details col-9'>
                {
                    (data.date && !popular) &&
                    <div className='post__date'>
                        <span>{data.type}</span> / {data.date}
                    </div>
                }
                {
                    (data.title && !popular) && 
                    <div className='post__title'>
                        {data.title}
                    </div>
                }
                {
                    data.description &&
                    <div className='post__description'>
                        {data.description }
                    </div>
                }
                {
                    data.detail && 
                    <div className='post__detail'>
                        {data.detail}
                    </div>
                }
                {
                    popular &&
                    <div className='post__type'>
                        {data.type}
                    </div>
                }
            </div>
       </div>
   );
};