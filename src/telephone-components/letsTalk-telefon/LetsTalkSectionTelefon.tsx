import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css'
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import './letsTalkSectionTelefon.css';
const LetsTalkSectionTelefon: React.FC = () => {
    return(
      
        <div className='Lets-talk1 container'>
            <p>Design for today.</p>
            <h2>Success for Tomorrow.</h2>
            <button className='custom-button'>Let's talk <img className="button-elipse" src="Ellipse 10.png" alt="ellipse"></img> <img className="button-arrow" src="Vector 4.png" alt="arrow"></img></button>
            
            <Swiper
            spaceBetween={20}

            loop={true}
            
            autoplay={{
                delay: 3000, 
                disableOnInteraction: false, 
              }}
              slidesPerView={1.2}
            breakpoints={{
              460: { slidesPerView: 2 },
              768: { slidesPerView: 1.7 },
              1200: { slidesPerView: 3.5 },
            }}
            modules={[Autoplay]} 
            className="swiper-container-lets"
          >
            <SwiperSlide>
                <img src="image (6).png" alt="slika"></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src="image (7).png" alt="slika"></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src="image (8).png" alt="slika"></img>
            </SwiperSlide>
            <SwiperSlide>   
            <img src="image (9).png" alt="slika"></img>
            </SwiperSlide>
          </Swiper>
        </div>
        
    );
}; export default LetsTalkSectionTelefon;