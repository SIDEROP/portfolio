import React from 'react'
import '../pages/pagesCss/services.css'
import oneImg from '../../public/imgs/servicesImg/1img.png'
import twoImg from '../../public/imgs/servicesImg/2img.png'
import threImg from '../../public/imgs/servicesImg/3img.png'
import forImg from '../../public/imgs/servicesImg/4img.png'
import fiveImg from '../../public/imgs/servicesImg/5img.png'

const Services = () => {
  let prev = ()=>{
    let items = document.querySelectorAll(".item")
    document.getElementById("slider").appendChild(items[0])
  }
  let next = ()=>{
    let items = document.querySelectorAll(".item")
    document.getElementById("slider").prepend(items[items.length - 1])
  }

  return (
    <div className='services' id='services'>
      <div className="container">
        <div className="slider" id='slider'>

          <div className="item" style={{background:`url(${oneImg})`,backgroundSize:"cover",backgroundPosition:"center"}}>
            <div className="contentBlur"></div>
            <div className="content">
              <h3>Frontend DeV</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia commodi voluptate, soluta adipisci explicabo quibusdam.</p>
            </div>
          </div>

          <div className="item" style={{background:`url(${twoImg})`,backgroundSize:"cover",backgroundPosition:"center"}}>
              <div className="contentBlur"></div>
            <div className="content">
              <h3>Backend Dev</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia commodi voluptate, soluta adipisci explicabo quibusdam.</p>
            </div>
          </div>

          <div className="item" style={{background:`url(${threImg})`,backgroundSize:"cover",backgroundPosition:"center"}}>
              <div className="contentBlur"></div>
            <div className="content">
              <h3>Full Stack Dev</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia commodi voluptate, soluta adipisci explicabo quibusdam.</p>
            </div>
          </div>

          <div className="item" style={{background:`url(${forImg})`,backgroundSize:"cover",backgroundPosition:"center"}}>
              <div className="contentBlur"></div>
            <div className="content">
              <h4>API Dev and Integration</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia commodi voluptate, soluta adipisci explicabo quibusdam.</p>
            </div>
          </div>

          <div className="item" style={{background:`url(${fiveImg})`,backgroundSize:"cover",backgroundPosition:"center"}}>
              <div className="contentBlur"></div>
            <div className="content">
              <h4>Database Management</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia commodi voluptate, soluta adipisci explicabo quibusdam.</p>
            </div>
          </div>

        </div>
        <div className='btn_box'>
          <button onClick={prev} id="prev">{'<'}</button>
          <button onClick={next} id="next">{'>'}</button>
        </div>
      </div>
    </div>
  )
}

export default Services