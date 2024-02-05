import React, { useEffect, useState } from 'react'
import "../pages/pagesCss/about.css"
import {BtnFeedback} from "../components/imports/imports";
import {SkillsBox} from "../components/imports/imports";
import {Skills} from "../components/imports/imports";
import {Feedback} from "../components/imports/imports";
import { useSelector } from 'react-redux';
const About = () => {
  // api fetch 
    let {user} = useSelector(state=>state.store)
  // api fetch 
  let [skills,setSkills] = useState(true)
  const frontEnd = ["html' 'css","javascript","jquery","bootstrap","react"]
  const backend  = ["node","redux-toolkit","mongodb","express-js","mongoosh"]
  const valNum = 100

  let funFrontBack = ()=>{
    setSkills(pre=>!pre)
  }

  useEffect(()=>{
    let inrWidth = window.innerHeight - 30
    document.addEventListener("scroll",e=>{
      scrollY = window.pageYOffset

      if (scrollY > inrWidth) {
        document.querySelector(".about_up").style.top = "-50%"
        document.querySelector(".about_dwon").style.bottom = "-50%"
      } else {
        document.querySelector(".about_up").style.top = "0px"
        document.querySelector(".about_dwon").style.bottom = "0px"
      }
    })
  }),[]


  let [toggle,setToggle] = useState("")


  return (
    <div className='about' id='about'>
      <Feedback cssToggle={toggle}  btn={setToggle}/>
      <section className='about_content'>
            <div className="about_card">
              <div className="card_profileOne">
                <div className="MY_card">
                  <img src={user.avatar_url}/>
                </div>
                <div className='my_data_'>
                  <h3>{"< "}{user.name?.slice(0, 5)} <span style={{color:'aqua'}}>{user.name?.slice(5, 11)}</span>{" />"}</h3>
                  <h3>{"< "} <span style={{color:'aqua'}}>FULL STACK </span>DEVELOPER{" />"}</h3>
                </div>
              </div>
              {/* card_profileTwo */}
              <div className="card_profileTwo">
                <div className='about_me'>
                  <h2>{"< "}ABOUT <span style={{color:'aqua'}}>ME</span>{" />"}</h2>
                </div>
                <div className="status_about">
                    <div>
                      <h4>Experience:</h4><span>1.5 Years</span>
                    </div>
                    <div>
                      <h4>Speciality:</h4><span>Full Stack Developer</span>
                    </div>
                    <div>
                      <h4>Email:</h4><span>Sideropcoder@gmail.com</span>
                    </div>
                    <div>
                      <h4>Address:</h4><span>Mp,Jabalpur,Patan</span>
                    </div>
                    <div>
                      <h4>Phone:</h4><span>8839711450</span>
                    </div>
                    <div>
                      <h4>Feedbacks:</h4><span>Note Available</span>
                    </div>
                </div>
                <div className="about_btn">
                  <BtnFeedback btn={setToggle}/>
                </div>

                <div className="slideCardBtn">
                      <span>{"<"}</span>
                </div>
                {skills?<Skills data={frontEnd} Fbtn={funFrontBack}/>:<Skills data={backend} Bbtn={funFrontBack} valNum={valNum}/>}
              </div>
            </div>
      </section>

      <div className="about_up">
        <span>ABOUT</span>
      </div>
      <div className="about_dwon">
        <span>ABOUT</span>
      </div>
    </div>
  )
}

export default About