import React, { useEffect, useState } from 'react'
import '../pages/pagesCss/project.css'
import {Card3d} from "../components/imports/imports";
import porfolio from "../../public/imgs/porfolio.png" 
import extention from "../../public/imgs/extention.png" 
import tweet from "../../public/imgs/tweet.png" 

const Project = () => {

  let [projecData_,projectDataSet] = useState([
    {
      porName:"MY PORTFOLIO",
      img:porfolio,
      about:"3d Animation portfolio no using any framework and library only core java css and react",
      link:"https://siderop.github.io/protfolio"
    },
    {
      porName:"Chorome Extention",
      img:extention,
      about:"I made this project for myself because I don't like the default extension of cookie browser.",
      link:"https://siderop.github.io/siderop"
    },
    {
      porName:"Twitter Clone",
      img:tweet,
      about:"Hello, this is my full stack project which works like a full backend or it can work like a twitter in a few days or after that we will bring mor..🙏❤️❤️",
      link:"https://siderop.github.io/twitter"
    },
    {
      porName:"Flipkart Clone",
      img:porfolio,
      about:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, a?",
      link:"https://siderop.github.io/flipkart"
    },
    {
      porName:"Spotify Clone",
      img:porfolio,
      about:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, a?",
      link:"https://siderop.github.io/spotify"
    }
  ])

  let scrollPro = ()=>{
    document.getElementById("projectSlider").classList.toggle("active")
    document.querySelector(".btnProj").classList.toggle("active")
    document.querySelector(".projecbtn").classList.toggle("active")
  }

  useEffect(()=>{
    // rojectSlider()
    
    document.getElementById("projectSlider").addEventListener("wheel",(e)=>{
      e.preventDefault()
      console.log(e.deltaY)
      document.getElementById("projectSlider").scrollLeft += e.deltaY
    })

    document.querySelectorAll(".proSame").forEach(val=>{
      val.addEventListener("mousemove",e=>{
        if (e.x>0) {
          document.querySelector(".svg1").style.left = `${e.x / 5}px`
          document.querySelector(".svg2").style.right = `-${e.x / 5}px`
        }
        if (e.y> 0) {
          document.querySelector(".svg1").style.top = `${e.y / 5}px`
          document.querySelector(".svg2").style.bottom = `-${e.y / 5}px`
        }
      })
    })

  },[])
  return (
    <div className='project' id='project' >
      <div className='projecbtn'>
        <h1 className='h1' >
            <span>P</span>
            <span>R</span>
            <span>J</span>
            <span>E</span>
            <span>C</span>
            <span>T</span>
            <span>{">"}</span>
            <span>{">"}</span>
          </h1>

        <div className="projectSlider" id='projectSlider'>
          <div className="pro1 proSame">
            {
              projecData_?.map(val=>(
                <Card3d data={val}/>
              ))
            }
          </div>
          <div className="pro2 proSame">

          </div>
          <div className="pro3 proSame">

          </div>
        </div>
          <div onClick={scrollPro} className='btnProj'>{"<"}</div>
      </div>
    </div>
  )
}

export default Project