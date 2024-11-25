import React from 'react'
import "./Skills.css"

const Skills = (props) => {
  return (
    <div>
        <img src="/photos/Group.png" alt=""  className='group'/>

      <div className="skill">
      <div className="header1 skill1">
                <p className='wel'>My Skills</p>
                <p className='have hire'>Why Hire Me For Your </p>
                <p className='have hire'>Next <span>Project</span></p>
                <p>I’m specialist in UI/UX Designe. My passion is designing & solving problems through user experience and research.</p>
                <button>Hire Me</button>
               
            </div>
            <div className="skill2">
                {
                    props.data.map((item)=>{
                        return (
                            <div className="skill3">
                                <img src={item.img} alt="" />
                                <p>{item.text1}</p>
                                <p>{item.text2}</p>

                        
                    </div>
                        )
                    })
                    
                }
               
              



            </div>



      </div>
    </div>
  )
}

export default Skills
