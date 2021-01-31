import React from 'react';
import './index.scss';

export default function card({
   data,
   play = false,
   trend = false,
   youtube = false,

}) {
    const detailClass = youtube ? 'card__youtube-detail': 'card__details'
   return (
       <div className='card' >  
            <img src={data.bgImgae} className= "card__img" alt=""/>
            { youtube && <div className='card__youtube-icon icon-youtube'></div> }
            { play && <div className='card__play-icon icon-play3'></div> }
            { trend && <div className='card__trend-icon icon-power'></div> }

            <div className={detailClass}>
                {
                    data.date &&
                    <div className='card__date'>
                        {data.date}
                    </div>
                }
                {
                    data.title && 
                    <div className='card__title'>
                        {data.title}
                    </div>
                }
                {
                    data.description &&
                    <div className='card__description'>
                        {data.description }
                    </div>
                }
                {
                    data.detail && 
                    <div className='card__detail'>
                        {data.detail}
                    </div>
                }
            </div>
       </div>
   );
};