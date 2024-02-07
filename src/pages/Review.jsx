import React, { useEffect } from 'react'
import "./pagesCss/review.css"
import img1 from "../../public/dumy/1.jpg";
import img2 from "../../public/dumy/2.png";
import img3 from "../../public/dumy/3.jpg";
import img4 from "../../public/dumy/4.jpg";
import img5 from "../../public/dumy/5.jpg";

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
            <h3>ankitakori</h3>
            <div className="reviewItem">
              <div className='message'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit reprehenderit quo nesciunt vel commodi nemo dolore?
              </div>
              <div className="profileReview">
                <div className="userPic">
                    <img src={img1} alt="" />
                </div>
                <div className="userName">
                  <span>@</span>
                  <h3>ankitakori</h3>
                </div>
              </div>
            </div>
          </span>
          <span className="img">
            <h3>diyatiwari</h3>
            <div className="reviewItem">
              <div className='message'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit reprehenderit quo nesciunt vel commodi nemo dolore?
              </div>
              <div className="profileReview">
                <div className="userPic">
                  <img src={img2} alt="" />
                </div>
                <div className="userName">
                  <span>@</span>
                  <h3>sahilPatel</h3>
                </div>
              </div>
            </div>
          </span>
          <span className="img">
            <h3>sonamsingh</h3>
            <div className="reviewItem">
              <div className='message'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit reprehenderit quo nesciunt vel commodi nemo dolore?
              </div>
              <div className="profileReview">
                <div className="userPic">
                  <img src={img3} alt="" />
                </div>
                <div className="userName">
                  <span>@</span>
                  <h3>sonamsingh</h3>
                </div>
              </div>
            </div>
          </span>
          <span className="img">
            <h3>arohipatel</h3>
            <div className="reviewItem">
              <div className='message'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit reprehenderit quo nesciunt vel commodi nemo dolore?
              </div>
              <div className="profileReview">
                <div className="userPic">
                  <img src={img4} alt="" />
                </div>
                <div className="userName">
                  <span>@</span>
                  <h3>arohipatel</h3>
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
                  <img src={img5} alt="" />
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