import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './aboutUsFirst.css';
import '../Navbar/Navbar'
import Navbar from '../Navbar/Navbar';
const AboutUsFirst: React.FC = () => {
    return(
        <div className='main-aspire-container container'>
            <div className='aspire-container'>
                <p className='aspire-title'>Drive growth with smart</p>
                <span>design, <span className='aspire-title'>sleek</span> apps, <span className='aspire-title'>and</span></span> 
                <p className='aspire-title'> strategic <span> marketing</span></p> 
            </div>
            <Navbar/>
        </div>
       
    );
};
export default AboutUsFirst;