import "./header.css";
import LOGO from "../../public/imgs/LOGO.jpeg";
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import profileApi from "../app/userSlice";

const Header = () => {
  // api fetch
  let dispatch = useDispatch()
  let {user} = useSelector(state=>state.store)
  
  useEffect(()=>{
    dispatch(profileApi())
  },[])
  // api fetch end

  let leftClick = () => {
    let widthNav = document.getElementById("nav_scroll");
    // setleftW(pre=>pre+=80)
    let w = (widthNav.scrollLeft -= 80);
    document.getElementById("left").classList.add("leftbb");
    document.getElementById("right_").classList.remove("right_");
  };

  let rightClick = () => {
    let widthNav = document.getElementById("nav_scroll");
    let w = (widthNav.scrollLeft += 80);
    document.getElementById("left").classList.remove("leftbb");
    document.getElementById("right_").classList.add("right_");
  };

  useEffect(() => {
    const headerSticky = () => {
      let topScroll = 0;
      let header = document.querySelector("header");
      document.addEventListener("scroll", () => {
        const scrollYside = window.pageYOffset;
        if (scrollYside > topScroll) {
          header.style.top = "-100px";
        } else {
          header.style.top = "0px";
          document.querySelector(".navLinks").style.backgroundColor = "black";
          document.querySelector(".logo").style.backgroundColor = "black";
        }
        topScroll = scrollYside;
      });
    };
    headerSticky();
  }, []);

  return (
    <>
      <header>
        <div className="logo">
          <div className="logo_name">
            <h4>{user.name}</h4>
          </div>
          <img src={LOGO} />
        </div>
        <nav>
          <div className="navLinks">
            {/* btn left */}
            <span>
              <i
                id="left"
                className="bx bxs-chevron-left"
                onClick={leftClick}
              ></i>
            </span>

            <div id="nav_scroll" className="box_nav">
              <span>
                <a href="#/">Home</a>
              </span>
              <span>
                <a href="#about">About</a>
              </span>
              <span>
                <a href="#services">Servecis</a>
              </span>
              <span>
                <a href="#project">Project</a>
              </span>
              <span>
                <a href="#review">Review</a>
              </span>
              <span>
                <a href="#contact">Contenct</a>
              </span>
            </div>

            {/* btn rigth */}
            <span>
              <i
                id="right_"
                className="bx bxs-chevron-right right_"
                onClick={rightClick}
              ></i>
            </span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default memo(Header);
