import React from 'react'
import './Input.css'
const Input = ({name,id}) => {
  return (
    <input type={name} id={id} name="name" required className="input_contect" placeholder={`Type your ${name}`}/>
  )
}
export default Input