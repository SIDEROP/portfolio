import React, { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Project from "./pages/Project";
import Review from "./pages/Review";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import {Loader} from "./components/imports/imports";
import { useSelector } from "react-redux";

const App = () => {
    // api fetch 
    let {loading} = useSelector(state=>state.store)
    // api fetch 

  useEffect(()=>{
    let funEnter = ()=>{
      document.getElementById("press").style.display="none"
    }
    let funLeave = ()=>{
      document.getElementById("press").style.display="block"
    }
    document.querySelector('header').addEventListener("mouseenter",funEnter)
    document.querySelector('header').addEventListener("mouseleave",funLeave)
    return ()=>{
      document.querySelector("header").removeEventListener("mouseenter",funEnter)
      document.querySelector("header").removeEventListener("mouseleave",funLeave)
    }
  },[])

  return (
    <>
      {loading?<Loader/>:null}
      <Header />
      <div id="main" className="ma">
        <Home />
        <About />
        <Services />
        <Project />
        <Review />
        <Contact />
      </div>
    </>
  );
};

export default App;
