import React from 'react'
import "./Experience.css"

const Experience = (props) => {
  return (
    <div>
        <div className="exp">
            {
                props.data.map((item)=>{
                    return (
                    <p>{item.num} <p>{item.text}</p> <hr /></p>
                    
                    //  {/* <p>{item.text}</p> */}
                    )
                })
                
            }
            </div>

      
    </div>
  )
}

export default Experience
