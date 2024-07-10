import React, { useState, useRef } from 'react';
import './navbar.css';
import logo from '../../assets/logotransparent.png';
import underline from '../../assets/nav_underline.svg';
import open_menu from '../../assets/open_menu.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import close_menu from '../../assets/close_menu.svg';

function Navbar() {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
      <img src={logo} alt='logo' />
      <img src={open_menu} alt='logo' className='nav-mob-open' onClick={openMenu} />
      <ul className="navmenu" ref={menuRef}>
        <img src={close_menu} alt="" className="nav-mob-close" onClick={closeMenu}/>
        <li>
          <AnchorLink className='anchor-links' href='#hero'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} className='underline' alt='underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-links' offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} className='underline' alt='underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-links' offset={50} href='#services'>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} className='underline' alt='underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-links' offset={50} href='#work'>
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} className='underline' alt='underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-links' offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} className='underline' alt='underline' />}
        </li>
      </ul>
      <div className="nav-connect"> <a href="https://www.linkedin.com/in/vishal-rana-6ba9bb272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Connect With Me</a></div> 
    </div>
  );
}

export default Navbar;