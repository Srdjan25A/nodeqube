import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css'

import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import './FooterSection-telefon.css';
const FooterSectiontelefon: React.FC = () => {
    return (
        <div className='container footer-container-telefon'>
             <h2 className='main-footer-content-telefon'><span>Let’s create something great together</span>---<span>Let’s create something great together</span></h2>
            <div className='footerTelefon'>
                    <h3>Get in Touch</h3>
                    <p>All rights reserved 2025 @ Node Qube</p>
                    <p className='footerPrivacy'>Privacy Policy</p>
                    <p className='footerFollow'>Follow Us:</p>
                    <div className='social-container'>
                        <img src='Social Media Icon.png' className='instagram-icon' alt='in'></img>
                        <img src='Social Media Icon (1).png' alt='ig'></img>
                    </div>
            </div>
        </div>
    );
}; 
export default FooterSectiontelefon;