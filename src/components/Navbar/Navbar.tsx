import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css'
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import './Navbar.css';
const Navbar: React.FC = () => {
    return(
        <div className='Lets-talk'>
            <div className='navbar'>
                <img src="Home.png" alt="home"></img>
                <ul>
                    <li>Our Work</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Blog</li>
                </ul>
                <button className='custom-button'>Let's talk <img className="button-elipse" src="Ellipse 10.png" alt="ellipse"></img> <img className="button-arrow" src="Vector 4.png" alt="arrow"></img></button>
            </div>
        </div>
    );
};
export default Navbar;