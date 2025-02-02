import React, { useEffect, useState } from 'react'
import "./pagesCss/review.css"
import img1 from "../../public/dumy/1.jpg";
import img2 from "../../public/dumy/2.png";
import img3 from "../../public/dumy/3.jpg";
import img4 from "../../public/dumy/4.jpg";
import img5 from "../../public/dumy/5.jpg";

const Review = () => {
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    message: ''
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the review to a backend
    setShowForm(false);
    setNewReview({ name: '', message: '' });
  }

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
          <i className='bx bx-chevron-left' id='reviwLeft'></i>
          <i className='bx bx-chevron-right' id='reviwRight'></i>
        </div>

        <button 
          className="add-review-btn mb-[10px]"
          onClick={() => setShowForm(true)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff', 
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px',
            fontSize: '14px',
            '@media (min-width: 768px)': {
              padding: '12px 24px',
              fontSize: '16px'
            },
            '@media (min-width: 1024px)': {
              padding: '14px 28px',
              fontSize: '18px'
            }
          }}
        >
          Add Review
        </button>

        {showForm && (
          <div className="review-form-overlay" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}>
            <form onSubmit={handleSubmit} style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              width: '90%',
              maxWidth: '500px'
            }}>
              <h2 style={{marginBottom: '20px', color: '#333'}}>Add Your Review</h2>
              <input
                type="text"
                placeholder="Your Name"
                value={newReview.name}
                onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ddd'
                }}
              />
              <textarea
                placeholder="Your Review"
                value={newReview.message}
                onChange={(e) => setNewReview({...newReview, message: e.target.value})}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                  minHeight: '100px'
                }}
              />
              <div style={{display: 'flex', gap: '10px', justifyContent: 'flex-end'}}>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default Review