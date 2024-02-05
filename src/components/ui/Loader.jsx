import React, { memo, useEffect } from 'react'
import './loader.css'

const Loader = () => {
    useEffect(()=>{
        let loderFun =()=>{
            document.querySelector(".LoderBox").classList.add('active')
        }
        setTimeout(loderFun, 100000);
    },[])
  return (
    <div className="LoderBox">
        <div className='headBox'>
            <span class="loader_box"></span>
        </div>
    </div>
  )
}

export default memo(Loader)