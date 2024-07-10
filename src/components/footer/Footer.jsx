import React from 'react'
import './footer.css'
import logo from '../../assets/logotransparent.png'

export const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                <img src={logo} alt='logo' className='pic'/>
              
                <p>I'm Vishal Rana, Full Stack Developer Based in Dharamshala
                As a full stack developer, I'm excited about the opportunity to work on projects that can make a difference in people's lives. I'm a strong believer in the power of technology to solve real-world problems, and I'm eager to contribute my skills and creativity to make that happen.</p>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">
                © 2024 Vishal Rana. All rights reserved.
                </p>
                <div className="footer-bottom-right">
                    <p>Terms of Services</p>
                    <p>Privacy</p>
                    <p><a href='https://www.linkedin.com/in/vishal-rana-6ba9bb272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>Connect</a></p>
                </div>
            </div>
        </div>
        
    )
}
export default Footer