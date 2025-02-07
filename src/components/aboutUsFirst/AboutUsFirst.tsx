import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './aboutUsFirst.css';
import '../Navbar/Navbar'
import Navbar from '../Navbar/Navbar';
const AboutUsFirst: React.FC = () => {
    return(
        <div className='main-aspire-container container'>
            <div className='aspire-container'>
                <p className='aspire-title'>We aspire to help</p>
                <span>1,000s businesses <span className='aspire-title'>improve</span></span> 
                <p className='aspire-title'> the lives of <span>1 Billion people</span></p>
                 
                
            </div>
            <Navbar/>
        </div>
       
    );
};
export default AboutUsFirst;