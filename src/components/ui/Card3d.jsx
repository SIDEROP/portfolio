import React, { memo } from 'react'
import './Card3d.css'
import LinkPro from './LinkPro'
const Card3d = ({data}) => {
  return (
    <div className="myCard">
        <div className="innerCard">
            <div className="frontSide">
              <img src={data.img}/>
              <p className='title'>{data.porName}</p>
            </div>
            <div className="backSide">
                <p className="aboutSide">{data.about}</p>
                <div className='backHover'>
                  <LinkPro link={data.link}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default memo(Card3d)