import React from 'react'
import "./Contact.css";

const Contact = (props) => {
  return (
    <div>
       <div className="header1 con">
                <p className='wel'>Contact</p>
                <p className='have conp'>Let Discuss Your <span>Project</span> </p>
                <p>Let’s make something new, different and more meaningful or make </p>
                <p>thing more visual or conceptual</p>
            </div>
      <div className="contact">
        <div className="contact1">
         {
          props.data.map((item)=>{
            return (
              <span>
              <img src={item.img} alt="" />
              <p>{item.text1}</p>
              <p>{item.text2}</p>

              </span>

            )
          })
         }
        </div>
        <div className="contact2">
          <input type="text" placeholder='Full Name'/>
          <input type="text"  placeholder='Phone Number'/>
          <input type="text"  placeholder='Your Email'/>
          <input type="text"  placeholder='Budget' />
          <textarea placeholder='Message'></textarea>
          <button>Submit Message</button>



        </div>

      </div>
    </div>
  )
}

export default Contact
