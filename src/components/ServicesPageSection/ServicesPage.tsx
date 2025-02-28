import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './ServicesPage.css';
import '../Navbar/Navbar'
import Navbar from '../Navbar/Navbar';
const ServicesPage: React.FC = () => {
    return(
        <div className='main-aspire-container container'>
            <div className='aspire-container'>
                <p className='aspire-title'>Boost your brand with</p>
                <span>UX/UI<span className='aspire-title'>, high-performing</span></span> 
                <p className='aspire-title'> websites, <span>and marketing.</span></p> 
            </div>
            <Navbar/>
        </div>
       
    );
};
export default ServicesPage;