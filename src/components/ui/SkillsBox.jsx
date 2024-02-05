import React from "react";
import './SkillsBox.css'
const SkillsBox = ({name,valNum}) => {
  const w = 100;
  return (
    <div className="skills_box">
      <h4 className="skillsName">{name}</h4>
      <span className="inputRange">
        <span style={{width:`${valNum}%`}} className="colorRange"></span>
      </span>
    </div>
  );
};

export default SkillsBox;
