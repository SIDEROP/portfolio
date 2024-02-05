import React from 'react'
import './feedback.css'
const Feedback = ({btn,cssToggle}) => {
    let cancelBtn = (e)=>{
        btn(false)
    }
  return (
    <div style={cssToggle?{display:"flex"}:{display:"none"}} className='feedbackSend'>
        <div className="feedCard">
                <i onClick={cancelBtn} className='bx bx-x btnFeedBox'></i>
            <h2>
               Send FeedBack
            </h2>
            <textarea required placeholder='Your Feedback'></textarea>

            <div className="senderFeed">
                <div className="emoji">
                    <span>😉</span>
                    <span>☹️</span>
                </div>
                <div className="sendUser">
                    <i className='bx bx-send'></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feedback