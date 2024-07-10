import React from 'react'
import './hero.css'
import profilepic from '../../assets/profilepic.jpg'
export const Hero = () => {
    return (
        <div id='hero' className='hero'>
            <img src={profilepic} alt='profile'></img>
            <h1><span>I'm Vishal Rana</span>, Full Stack Developer Based in Dharamshala</h1>
            <p>As a full stack developer, I'm excited about the opportunity to work on projects that can make a difference in people's lives. I'm a strong believer in the power of technology to solve real-world problems, and I'm eager to contribute my skills and creativity to make that happen.</p>
            <div className="hero-action">
               <a href='https://www.instagram.com/vishh____05?utm_source=qr&igsh=MWJ3eG1semE2emhqcQ=='> <div className="hero-connect">Connect Wtih Me</div></a>
                <a href='https://black-annette-52.tiiny.site/'>  <div className="hero-resume">My Resume</div></a>
            </div>
        </div>
        
    )
}
export default Hero