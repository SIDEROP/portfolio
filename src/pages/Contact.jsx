import React from 'react'
import "./pagesCss/contact.css"
import { useId } from 'react'
import {Input} from "../components/imports/imports";

const Contact = () => {
  let userForm = useId()
  return (
    <div className='contact' id='contact'>
      <div className="formBox ">
        <div className="sideOne">
          <form className='formUser'>
            <div className="contectMe">
              <h1 className="text-pink-500">contect <span className="text-purple-500">Me</span>!</h1>
            </div>
             <div className="form_grp">
              <label htmlFor={"user1"} className="text-blue-500">Name:</label>
              <Input id={"user1"} name={"name"}/>
             </div>
             <div className="form_grp">
              <label htmlFor={"user2"} className="text-blue-500">Email:</label>
              <Input id={"user2"} name={"email"}/>
             </div>
             <div className="form_grp">
              <label htmlFor={userForm} className="text-blue-500">Message:</label>
              <textarea id={userForm} placeholder='Enter Your Message...' required></textarea>
             </div>
             <div className="form_grp">
                <button className="text-white hover:text-pink-400">submit</button>
             </div>
          </form>
        </div>
        <div className="sideTwo">
          <div className="map">
            <h3 className="text-purple-500">Where To Find Me</h3>
            <div className='mapBox'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117371.18161503592!2d79.9687529!3d23.1756951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae1a0fb6a97d%3A0x44020616bc43e3b9!2sJabalpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1705156586213!5m2!1sen!2sin" width="100%" height="100%" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          <div className="addressBox">
            <h3 className="text-purple-500">CONTACT</h3>
            <div className="address">
                <div>
                  <i className='bx bxs-location-plus text-pink-500'></i><span className="text-blue-500"> MP, Jabalpur,Patan</span>
                </div>
                <div>
                  <i className='bx bxs-envelope text-pink-500'></i> <span className="text-blue-500">Sideropcode@gmail.com</span>
                </div>
                <div>
                  <i className='bx bxs-phone text-pink-500'></i> <span className="text-blue-500">+91,8839711450</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact