import React from 'react'
import "./Footer.css";
const Footer = (props) => {
  return (
    <div>
      <div className="footer">
        <p>@ 2022. All Rights Reserved</p>
        <p>Designed by Aryan Singh</p>
        {
             props.data.map((item)=>{
                return (
                    <img src={item} alt="" />
                )
             })
        }


      </div>
    </div>
  )
}

export default Footer
