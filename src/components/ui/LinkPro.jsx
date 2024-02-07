import React from "react";
import "./LinkPro.css";

const LinkPro = ({link}) => {
  console.log(link)
  return (
      <button className="btn_">
        <a href={link}>
          <span >GO{">>"}</span>
        </a>
      </button>
  );
};

export default LinkPro;
