import './aboutUsFirst-telefon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';

import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import './aboutUsFirst-telefon.css';
const aboutUsFirstSectionTelefon: React.FC = () =>{
    return (
        <div className='container first-container-aboutus'>
            <div className='title-about'>
                <h2>We aspire to help</h2> 
                <span>1,000 businesses</span> 
                <h2>improve the lives of</h2> 
                <span>1 Billion people</span>
            </div>
        </div>
    );
};
export default aboutUsFirstSectionTelefon;