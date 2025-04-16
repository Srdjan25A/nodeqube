import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css'

import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import './FooterSection-telefon.css';
import {Link} from "react-router-dom";
const FooterSectiontelefon: React.FC = () => {
    return (
        <div className='footer-container-telefon'>
            <h2 className='main-footer-content-telefon'><span>Let’s create something great together</span>---<span>Let’s create something great together</span></h2>
            <div className='container'>
                <div className='footerTelefon'>
                    <h3><Link to={'/contact'}>Get in Touch</Link></h3>
                    <p>All rights reserved 2025 @ Node Qube</p>
                    <p className='footerPrivacy'>Privacy Policy</p>
                    <p className='footerFollow'>Follow Us:</p>
                    <div className='social-container'>
                        <Link to={'https://www.linkedin.com/company/nodeqube/'}><img src='Social Media Icon.png' className='instagram-icon' alt='in'></img></Link>
                        <Link to={'https://www.instagram.com/node.qube?igsh=N2c3ZTZkOTlxdXNv'}><img src='Social Media Icon (1).png' alt='ig'></img></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FooterSectiontelefon;
