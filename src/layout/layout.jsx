import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header"


const layout = () => {
  useEffect(() => {
    let funEnter = () => {
      document.getElementById("press").style.display = "none";
    };
    let funLeave = () => {
      document.getElementById("press").style.display = "block";
    };
    document.querySelector("header").addEventListener("mouseenter", funEnter);
    document.querySelector("header").addEventListener("mouseleave", funLeave);
    return () => {
      document
        .querySelector("header")
        .removeEventListener("mouseenter", funEnter);
      document
        .querySelector("header")
        .removeEventListener("mouseleave", funLeave);
    };
  }, []);

  return (
    <>
      <Header />
      <div id="main" className="ma">
        <Outlet />
      </div>
    </>
  );
};

export default layout;
