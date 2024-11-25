import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div>
        <div className="header">
            <div className="header1">
                <p className='wel'>Welcome</p>
                <p className='have'>I have <span>Creative</span> </p>
                <p className='have'> <span>Design</span>  Experience</p>
                <p>I’m Tanvir, a creative Product Designer. I’ve been helping businesses 
                to solve their problems with my design for 2 years.</p>
                <button>Contact Me</button>
                <button>My Portfolio <img src="/photos/Vector (3).png" alt="" /></button>
            </div>
            <div className="header1">
                <div className="boy"></div>
                <div className="boy1"></div>
                <img src="/photos/image206.png" alt="" />

            </div>
        </div>
                <div className="rotate">
                    <p>Follow me on</p>
                    <hr />
                    <img src="/photos/facebook.png" alt="" />
                    <img src="/photos/instagram.png" alt="" />
                    <img src="/photos/linkedin.png" alt="" />

                </div>
    </div>
  )
}

export default Header
