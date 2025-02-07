import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css'

import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import './OurClients.css';
const OurClientsSection: React.FC = () => {
    return(
        <div className='ourClients'>
            <h2 className='title-ourClients'>Trusted by Our Clients</h2>
            <img src="Container.png" alt="sponzori"></img>
        </div>
    );
};
export default OurClientsSection;