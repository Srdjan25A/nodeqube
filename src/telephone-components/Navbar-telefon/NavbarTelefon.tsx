import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import React from 'react';
import './NavbarTelefon.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, [pathname]);
  
    return null;
  };
const NavbarTelefon: React.FC = () => {
    return(
        <div className='container navbar-telefon'>
            <div className='navbar'>
                <div className='navbar-content'>
                    <img src='menu.png' alt='menu'></img>
                    <p>Menu</p>
                </div>
                
                {/*<Link to='/' className='link-page'><img src="Home.png" alt="home"></img></Link>
                 
                <ul>
                    <li><Link to="/our-work" className='link-page'>Our Work</Link></li>
                    <li><Link to="/about" className='link-page'>About Us</Link></li>
                    <li><Link to="/services" className='link-page'>Services</Link></li>
                    <li><Link to="/blog" className='link-page'>Blog</Link></li>
                </ul>
                */} 
                <button className='custom-button custom-button-telefon'>Let's talk <img className="button-elipse" src="Ellipse 10.png" alt="ellipse"></img> <img className="button-arrow" src="Vector 4.png" alt="arrow"></img></button>
            </div>
        </div>
    );
};
export default NavbarTelefon;