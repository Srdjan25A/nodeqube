import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css'

import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import './Footer.css';
import {Link} from "react-router-dom";
const FooterSection: React.FC = () => {
    return (
        <div className='main-footer-desktop'>
             <h2 className='main-footer-content'><span>Let’s create something great together</span>---<span>Let’s create something great together</span></h2>
            <div className='container'>
                <div className='footer'>
                    <div className='footer-content'>
                        <h1 className='footer-title'><Link to={'/contact'}>Get in Touch</Link></h1>
                    </div>
                    <div className="footer-bottom">
                        <p className="footer-left">All rights reserved 2025 @ Node Qube</p>

                        <div className='footer-bottom-right'>
                            <a href="#" className="footer-right">Privacy Policy</a>
                            <a href="#" className='footer-right2'>Follow Us:</a>
                            <img src="Social Media Icon.png" alt="in" className='linkin'></img>
                            <img src="Social Media Icon (1).png" alt="instagram" className='instagram-icon'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FooterSection;
