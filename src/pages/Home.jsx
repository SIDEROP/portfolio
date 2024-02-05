import "../pages/pagesCss/home.css"
import videoOne from "../../public/videos/game.webm";
import videoTwo from "../../public/videos/fina.webm";
import React, { memo, useEffect, useState } from "react";
import {DownloadBtn} from "../components/imports/imports";
import {SocialiconsBtn} from "../components/imports/imports";
import { useSelector } from "react-redux";

const Home = () => {
  // boxIcons
  let [icons,setIcons] = useState([
    {name:"linkedin",cls:"bx bxl-linkedin",link:"https://www.linkedin.com/in/akash-patel-667a79286"},
    {name:"github",cls:"bx bxl-github",link:"https://github.com/SIDEROP"},
    {name:"youtube",cls:"bx bxl-youtube",link:"https://www.youtube.com/@SIDEROPGAMING/featured"}
  ])

  // api fetch 
  let {user} = useSelector(state=>state.store)
  // api fetch 
  useEffect(() => {
    // loopVideos
    let loopVideos = () => {
      let funOK = (num) => {
        let val = document.getElementById("two2");
        let getSty = getComputedStyle(val);

        if (getSty.zIndex == num) {
          document.getElementById("con").addEventListener("mousemove", (e) => {
            document.getElementById(
              "two2"
            ).style.clipPath = `ellipse(150px 150px at ${e.x}px ${e.y}px)`;
            document.getElementById("two2").style.zIndex = "4";
            document.getElementById("two2").style.transition =
              "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s";

            document.getElementById("one1").style.clipPath = `none`;
            document.getElementById("one1").style.zIndex = "2";
            document.getElementById("one1").style.transition = "none";
          });
        } else {
          document.getElementById("con").addEventListener("mousemove", (e) => {
            document.getElementById(
              "one1"
            ).style.clipPath = `ellipse(150px 150px at ${e.x}px ${e.y}px)`;
            document.getElementById("one1").style.zIndex = "4";
            document.getElementById("one1").style.transition =
              "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s";

            document.getElementById("two2").style.clipPath = `none`;
            document.getElementById("two2").style.zIndex = "2";
            document.getElementById("two2").style.transition = "none";
          });
        }
      };

      document.getElementById("con").addEventListener("mousedown", () => {
        document.getElementById(
          "two2"
        ).style.transition = `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s`;
        document.getElementById("two2").style.clipPath = `ellipse(100% 100%)`;

        document.getElementById("one1").style.clipPath = `ellipse(100% 100%)`;
        function time_() {
          document.getElementById("two2").classList.remove("active");
          funOK("2");
        }

        let fun = setTimeout(time_, 500);

        document.getElementById("con").addEventListener("mouseup", () => {
          clearTimeout(fun);
        });
      });

      funOK("4");
      document.getElementById("con").addEventListener("mouseout", (e) => {
        document.getElementById("two2").style.clipPath = `ellipse(100% 100%)`;
        document.getElementById("one1").style.clipPath = `ellipse(100% 100%)`;
        document.getElementById("press").style.transform= 'scale(0)';
      });
    };
    loopVideos();


    // autoTyping
    let autoTyping = () => {
      let autoStus = document.getElementById("status");
      setTimeout(() => {
        let game = `full stack dev`;
        autoStus.innerText = game.toUpperCase();
      }, 0);
      setTimeout(() => {
        let game = `GAMMER`;
        autoStus.innerText = game;
      }, 4000);
      setTimeout(() => {
        let game = `YOUTUBER`;
        autoStus.innerText = game;
      }, 8000);
    };
    autoTyping();
    setInterval(() => {
      autoTyping();
    }, 12000);

    document.addEventListener('mousemove',(e)=>{
      document.getElementById("press").style.left=`${e.x-45}px`;
      document.getElementById("press").style.top=`${e.y-15}px`;
      document.getElementById("press").style.transform= 'scale(1)';
    })

    return ()=>{
      document.getElementById("con").removeEventListener("mousemove",false)
    }
  }, []);

  return (
    <div className="home" id="/">
      <video
        id="two2"
        className="two2"
        loop
        muted
        autoPlay
        src={videoTwo}
      ></video>
      <video
        id="one1"
        className="one1"
        loop
        muted
        autoPlay
        src={videoOne}
      ></video>

      <div id="con" className="content con">
        <div id="press">Press and hold</div>
        <div className="prof_box">
          <h1 className="akash">HI,I'M AKASH!</h1>
          <div className="next_">
            <h1 id="im">I'M</h1>
            <h1 id="status" className="status"></h1>
            <span>|</span>
          </div>
        </div>

        <div className="bioData">
          <p>
          Welcome to my portfolio! I'm {user.name}, a passionate and versatile Full Stack Developer dedicated to crafting innovative digital solutions.   With a strong foundation in both front-end and back-end technologies, I thrive on turning ideas into functional, user-friendly applications.
          </p>
        </div>

        <div className="bio_down">
          <div className="social-icons">
            {
              icons?.map(val=><SocialiconsBtn iconName={val.name} iconCls={val.cls} iconLink={val.link}/>)
            }
          </div>

          <div className="down_box">
            <DownloadBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
