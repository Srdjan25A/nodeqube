import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css'

import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import './OurClients.css';
const OurClientsSection: React.FC = () => {
    return(
        <div className='ourClients'>
            <h2 className='title-ourClients'>Trusted by Our Clients</h2>
            
            <div className="sponsor-strip-wrapper overflow-hidden">
                <div className="sponsor-strip-wrapper py-4 overflow-hidden">
                    <div className="sponsor-track d-flex align-items-center">
                        <img src="Layer_1.png" alt="Sponsor 1" className="mx-5 sponsor-img" />
                        <img src="telekom logo.png" alt="Sponsor 2" className="mx-5 sponsor-img" />
                        <img src="logo-delux.png" alt="Sponsor 3" className="mx-5 sponsor-img" />
                        <img src="Premier1.png" alt="Sponsor 4" className="mx-5 sponsor-img" />
                        <img src="Group 47.png" alt="Sponsor 5" className="mx-5 sponsor-img" />

                        <img src="HUMAX LOGO.png" alt="Sponsor 6" className="mx-5 sponsor-img" />
                        <img src="Group 7687.png" alt="Sponsor 7" className="mx-5 sponsor-img" />
                        <img src="Screenshot2.png" alt="Sponsor 8" className="mx-5 sponsor-img" />
                        <img src="1.png" alt="Sponsor 9" className="mx-5 sponsor-img" />
                        <img src="exalt logo 4 (1).png" alt="Sponsor 10" className="mx-5 sponsor-img" />
                        <img src="Group 4.png" alt="Sponsor 11" className="mx-5 sponsor-img" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default OurClientsSection;