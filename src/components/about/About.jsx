import React from 'react'
import './about.css'
import theme from '../../assets/theme-pattern.svg'
import profilepic2 from '../../assets/profilepic2.jpeg'
export const About = () => {
    return (
        <div className='about'>
            <div id='about' className="about-title">
                <h1>About Me</h1>
                <img src={theme} alt='theme'></img>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profilepic2} alt='profilepic' className='profile'></img>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>As a fresh full stack developer, I'm driven by a passion to craft innovative solutions that exceed client expectations. With experience in understanding client needs, I've developed a customer-centric approach that ensures seamless user experiences. I'm excited to leverage my skills to make a meaningful impact in the industry.</p>
                        <p>My passion for full stack development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "35%" }} /></div> <div className="about-skill"><p>React Js</p><hr style={{ width: "50%" }} /></div> <div className="about-skill"><p>Python & Django</p><hr style={{ width: "35%" }} /></div> <div className="about-skill"><p>MySql & C++</p><hr style={{ width: "25%" }} /></div>
                        <div className="about-skill"><p>Canva </p><hr style={{ width: "30%" }} /></div>
                        <div className="about-skill"><p>Tailwind CSS </p><hr style={{ width: "45%" }} /></div>
                     
                        <div className="about-skill"><p>Bootstrap</p><hr style={{ width: "42%" }} /></div>
                        <div className="about-skill"><p>Wordpress</p><hr style={{ width: "48%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1> 1 </h1>
                    <p>YEARS OF EXPERIENCE </p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1> 5+ </h1>
                    <p>PROJECTS</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1> 4+ </h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}
export default About