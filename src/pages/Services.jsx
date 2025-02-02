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
      <div className="container-box">
        <div className="slider" id='slider'>

          <div className="item" style={{background:`url(${oneImg})`,backgroundSize:"cover",backgroundPosition:"center"}}>
            <div className="contentBlur"></div>
            <div className="content">
              <h3 style={{fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: '600'}}>Frontend</h3>
              <p style={{fontFamily: 'Open Sans, sans-serif', fontSize: '1.1rem', lineHeight: '1.6'}}>Expert in creating responsive and interactive user interfaces using modern frameworks like React, Vue.js, and Angular. Skilled in HTML5, CSS3, and JavaScript.</p>
            </div>
          </div>

          <div className="item" style={{background:`url(${twoImg})`,backgroundSize:"cover",backgroundPosition:"center"}}>
              <div className="contentBlur"></div>
            <div className="content">
              <h3 style={{fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: '600'}}>Backend</h3>
              <p style={{fontFamily: 'Open Sans, sans-serif', fontSize: '1.1rem', lineHeight: '1.6'}}>Specialized in building robust server-side applications using Node.js, Python, and PHP. Experience with RESTful APIs and microservices.</p>
            </div>
          </div>

          <div className="item" style={{background:`url(${threImg})`,backgroundSize:"cover",backgroundPosition:"center"}}>
              <div className="contentBlur"></div>
            <div className="content">
              <h3 style={{fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: '600'}}>Full Stack</h3>
              <p style={{fontFamily: 'Open Sans, sans-serif', fontSize: '1.1rem', lineHeight: '1.6'}}>End-to-end web application development combining frontend and backend expertise. Proficient in MERN stack and cloud deployment.</p>
            </div>
          </div>

          <div className="item" style={{background:`url(${forImg})`,backgroundSize:"cover",backgroundPosition:"center"}}>
              <div className="contentBlur"></div>
            <div className="content">
              <h4 style={{fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: '600'}}>API Dev</h4>
              <p style={{fontFamily: 'Open Sans, sans-serif', fontSize: '1.1rem', lineHeight: '1.6'}}>Design and implementation of secure, efficient APIs. Experience in third-party integration and API documentation.</p>
            </div>
          </div>

          <div className="item" style={{background:`url(${fiveImg})`,backgroundSize:"cover",backgroundPosition:"center"}}>
              <div className="contentBlur"></div>
            <div className="content">
              <h4 style={{fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: '600'}}>Database</h4>
              <p style={{fontFamily: 'Open Sans, sans-serif', fontSize: '1.1rem', lineHeight: '1.6'}}>Expertise in SQL and NoSQL databases including MySQL, PostgreSQL, MongoDB. Skilled in database design and optimization.</p>
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