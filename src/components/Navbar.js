import React, { useState } from "react";
import "./navbar.css";
import {
  BsWallet,
} from "react-icons/bs";
import {
  FiSearch
} from "react-icons/fi";
import {
  AiOutlineUser
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { ReactComponent as AppLogo } from '../assets/pupi_pay_logo.svg';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <AppLogo />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/explore">Explore</NavLink>
            </li>
            <li>
              <NavLink to="/stats">Stats</NavLink>
            </li>
            <li>
              <NavLink to="/resources">Resources</NavLink>
            </li>
            <li>
              <NavLink to="/create">Create</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://www.youtube.com">
                <FiSearch style={{color:'black'}}/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <AiOutlineUser style={{color:'black'}}/>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com">
                <BsWallet style={{color:'black'}} />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;