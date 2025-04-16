import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css'
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import './Navbar.css';
const Navbar: React.FC = () => {

    const [currTime, setCurrTime] = useState('');
    const [currDate, setCurrDate] = useState('');
    const [currAmPm, setCurrAmPm] = useState('');

    useEffect(() =>{
        const updateTime = () => {
            const now = new Date();

            const hours = now.getHours();
            const minutes = now.getMinutes();

            const ampm = hours >= 12 ? 'pm' : 'am';
            const formatedHours = hours % 12 || 12;
            const formatedMinutes = minutes < 10 ? `0${minutes}` : minutes;

            setCurrTime(`${formatedHours}:${formatedMinutes}`);
            setCurrAmPm(ampm);

            const day = now.getDate();
            const month = now.toLocaleString('default', { month: 'long'});

            setCurrDate(`${day}. ${month}`);
        }


        updateTime();
        const interval = setInterval(updateTime, 1000);
    });


    return(
        <div className='Lets-talk'>
            <div className="top-nav">
                <a href="/">
                    <img src="nodeqube-logo.svg" alt="nodeqube logo"/>
                </a>
                <div className="nav-time">
                    <h4>{currTime}</h4>
                    <p>{currAmPm}<br/>{currDate}</p>
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
