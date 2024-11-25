import React from 'react'
import "./Reviews.css";
const Reviews = (props) => {
  return (
    <div>
        <img src="/photos/Group.png" alt="" className='green'/>
        <div className="header1 skill1 rev">
                <p className='wel'>Reviews</p>
                <p className='have hire'>Our Customer Say 
                </p>
                <p className='have hire'>Something <span>About Us</span></p>
              <img src="/photos/arrow2.png" alt="" />
              <img src="/photos/arrow3.png" alt="" />
               
            </div>
            <div className="review">
             {/* {
              props.data1.map((item)=>{
                return (
                  <div className="review1">
                    {
                      props.data2.map((item)=>{
                        return (
                          <img src={item} alt="" className='stars' />
                        )
                      })
                    }
                    <p className='parag'>{item.text1}</p>
                    <img src={item.img} alt="" className='author'/>
                    <p className='aname'>{item.text2}</p>
                    <p className='designer'>{item.text3}</p>

                  </div>
                )
              })

             } */}
             {
              props.data1.map((item)=>{
                return(
                  <div className="review1">
                  {
                    props.data1.map((item)=>{
                      return (
                        <img src={item.img5} alt="" className='stars' />
                      )
                    })
                  }
                  <p className='parag'>{item.text1}</p>
                  <img src={item.img} alt="" className='author'/>
                  <p className='aname'>{item.text2}</p>
                  <p className='designer'>{item.text3}</p>

                </div>

                )
              })
             }

                
            </div>
    </div>
  )
}

export default Reviews

