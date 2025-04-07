import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css'
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import React from 'react';
import './Navbar.css';
const Navbar: React.FC = () => {
    return(
        <div className='Lets-talk'>
            <div className="top-nav">
                <a href="/">
                    <img src="nodeqube-logo.svg" alt="nodeqube logo"/>
                </a>
                <div className="nav-time">
                    <h4>12:43</h4>
                    <p>pm<br/>12. November</p>
                </div>
            </div>
            <div className='navbar'>
                <img src="Home.png" alt="home"></img>
                <ul>
                    <li><Link to="/our-work" className='link-page'>Our Work</Link></li>
                    <li><Link to="/about" className='link-page'>About Us</Link></li>
                    <li><Link to="/services" className='link-page'>Services</Link></li>
                    <li><Link to="/blog" className='link-page'>Blog</Link></li>
                </ul>
                <button className='custom-button'>Let's talk <img className="button-elipse" src="Ellipse 10.png" alt="ellipse"></img> <img className="button-arrow" src="Vector 4.png" alt="arrow"></img></button>
            </div>
        </div>
    );
};
export default Navbar;
