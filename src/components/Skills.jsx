import React from "react";
import './Skills.css'
import SkillsBox from "./ui/SkillsBox";

const Skills = ({data,Fbtn,Bbtn,valNum}) => {
  return (
    <div className="about_card_slide">
      <div className="skills_title">
        <h3>
          {"< "}SKILLS{" />"}
        </h3>
      </div>
      <div className="skills_">
        <SkillsBox name={data[0]} valNum={valNum}/>
        <SkillsBox name={data[1]} valNum={valNum}/>
        <SkillsBox name={data[2]} valNum={valNum}/>
        <SkillsBox name={data[3]} valNum={valNum}/>
        <SkillsBox name={data[4]} valNum={valNum}/>
      </div>
        <div className="fb_btn">
            <span onClick={Bbtn}>F</span>
            <span onClick={Fbtn}>B</span>
        </div>
    </div>
  );
};

export default Skills;
