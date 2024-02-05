import React from "react";
import "./btnFeedback.css";
const BtnFeedback = ({btn}) => {
  return (
    <button className="feedback" onClick={()=> btn(true)}>
      <div>
        <span>
          <p>Feedback</p>
          <p>:)</p>
        </span>
      </div>
      <div>
        <span>
          <p>Thanks</p>
          <p>:D</p>
        </span>
      </div>
    </button>
  );
};

export default BtnFeedback;
