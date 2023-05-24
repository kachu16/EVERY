import React from 'react';
import { FaUserCircle, FaAngleDown } from 'react-icons/fa';
import './navbar.css';
import logo from "../../assets/logo.png";
import Box from '../Box';

const Navbar = () => {
  return (
    <>
        <nav>
      <div className="logo">
        <img src={logo} alt="TuteDude" />
      </div>
      <ul className="nav-items">
        <li className="hide-mobile">
          <a href="#">My Assignment</a>
        </li>
        <li className="hide-mobile">
          <a href="#">Chat with Mentor</a>
        </li>
        <li>
          <div className="profile">
            <div className="profile-icon">
              <FaUserCircle />
            </div>
            <span className='profile-name'>Profile Name</span>
            <FaAngleDown className="down-icon" />
          </div>
        </li>
      </ul>
    </nav>

    <Box heading="UI/UX &gt; Refer &amp; Earn"/>
    </>
  );
};

export default Navbar;
