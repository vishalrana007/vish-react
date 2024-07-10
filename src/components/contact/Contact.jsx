import React from 'react';
import './contact.css';
import theme from '../../assets/theme-pattern.svg';
import mail_icon from '../../assets/mail_icon.png';
import location_icon from '../../assets/location_icon.png';
import phone_icon from '../../assets/phone_icon.png';

export const Contact = () => {
    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get In Touch</h1>
                <img src={theme} alt="theme" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                  <h1>Let's Talk</h1>
                       <p className='para'>I'm currently avaliable to take on new projects,so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                 <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt='png' /><p>vr772107@gmail.com</p>
                        </div>
                       {/*<div className="contact-detail">
                            <img src={phone_icon} alt='png' /><p>8219198229</p>
                        </div>
                          <div className="contact-detail">
                            <img src={location_icon} alt='png' /><p>Dharamshala,Himachal Pradesh, India</p>
                        </div> */}
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Contact