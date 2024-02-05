import React, { useEffect } from 'react'
import "./pagesCss/review.css"

const Review = () => {
  useEffect(()=>{
    
    document.getElementById("reviwLeft").addEventListener("click",()=>{
      let arrDiv = document.querySelectorAll(".img")
      document.getElementById("reviewCont").appendChild(arrDiv[0])
    })
    document.getElementById("reviwRight").addEventListener("click",()=>{
      let arrDiv = document.querySelectorAll(".img")
      document.getElementById("reviewCont").prepend(arrDiv[arrDiv.length - 1])
    })
  },[])
  return (
    <div className='review' id='review'>
      <div className="reviewbox">
        <div className="reviewCont" id='reviewCont'>
          <span className="img">
            <h3>vikashpatel1</h3>
            <div className="reviewItem">
              <div className='message'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit reprehenderit quo nesciunt vel commodi nemo dolore?
              </div>
              <div className="profileReview">
                <div className="userPic">
                    pic
                </div>
                <div className="userName">
                  <span>@</span>
                  <h3>amitPatel</h3>
                </div>
              </div>
            </div>
          </span>
          <span className="img">
            <h3>rohitPatel2</h3>
            <div className="reviewItem">
              <div className='message'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit reprehenderit quo nesciunt vel commodi nemo dolore?
              </div>
              <div className="profileReview">
                <div className="userPic">
                    pic
                </div>
                <div className="userName">
                  <span>@</span>
                  <h3>sahilPatel</h3>
                </div>
              </div>
            </div>
          </span>
          <span className="img">
            <h3>akashPatel3</h3>
            <div className="reviewItem">
              <div className='message'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit reprehenderit quo nesciunt vel commodi nemo dolore?
              </div>
              <div className="profileReview">
                <div className="userPic">
                    pic
                </div>
                <div className="userName">
                  <span>@</span>
                  <h3>akashPatel</h3>
                </div>
              </div>
            </div>
          </span>
          <span className="img">
            <h3>amitPatel4</h3>
            <div className="reviewItem">
              <div className='message'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit reprehenderit quo nesciunt vel commodi nemo dolore?
              </div>
              <div className="profileReview">
                <div className="userPic">
                    pic
                </div>
                <div className="userName">
                  <span>@</span>
                  <h3>rohitPatel</h3>
                </div>
              </div>
            </div>
          </span>
          <span className="img">
            <h3>vikahPatel5</h3>
            <div className="reviewItem">
              <div className='message'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit reprehenderit quo nesciunt vel commodi nemo dolore?
              </div>
              <div className="profileReview">
                <div className="userPic">
                    pic
                </div>
                <div className="userName">
                  <span>@</span>
                  <h3>sidhartPatel</h3>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div className="contrlRevi">
          <i class='bx bx-chevron-left' id='reviwLeft'></i>
          <i class='bx bx-chevron-right' id='reviwRight'></i>
        </div>
      </div>
    </div>
  )
}

export default Review