import React from 'react'
import "./Portfolio.css";

const Portfolio = (props) => {
  return (
    <div>
      <div className="port">
      <div className="header1 skill1 copy">
                <p className='wel'>Portfolio</p>
                <p className='have hire'>My Creative Works</p>
                <p className='have hire'>letest <span>Project</span></p>
                <p>I have selected and mentioned here some of my latest projects to share with you.</p>
                <button>Hire Me</button>
               
            </div>
      
        <div className="port1">
          {
            props.data.map((item)=>{
              return (
                <img src={item} alt="" />
              )
            })
          }
        </div>
      </div>
<div className="portchild">
  {
    props.data2.map((item)=>{
      return (
        <img src={item} alt="" />
      )
    })
  }

</div>
      
    </div>
  )
}

export default Portfolio
