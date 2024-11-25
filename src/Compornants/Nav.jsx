import React from 'react'
import "./Nav.css";
const Nav = (props) => {
  return (
    <div>
        <div className="nav">
          <img src="/photos/Vector (2).png" alt="" /><span>Design</span>
          {
          props.data.map((item)=>{
            return (
              <button>{item}</button>
            )
          })
         }  
          
        </div>
    </div>
  )
}

export default Nav
