import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css'
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import Navbar from '../Navbar/Navbar';
import './LetsTalk.css';
const LetsTalk: React.FC = () => {
    return(
        <div className='Lets-talk'>
            <p>Design for today.</p>
            <h2>Success for Tomorrow.</h2>
            <button className='custom-button'><span>Let's talk</span> <img className="button-elipse" src="Ellipse 10.png" alt="ellipse"></img> <img className="button-arrow" src="Vector 4.png" alt="arrow"></img></button>

            <Swiper
            spaceBetween={30}
            loop={true}
            allowTouchMove={false}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
            breakpoints={{
              460: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3.5 },
            }}
            modules={[Autoplay]}
            className="swiper-container-lets"
          >
            <SwiperSlide>
                <img src="image44.png" alt="image44"></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src="image45.png" alt="image45"></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src="image46.png" alt="image46"></img>
            </SwiperSlide>
            <SwiperSlide>
            <img src="image47.png" alt="image47"></img>
            </SwiperSlide>
          </Swiper>
            <Navbar/>
        </div>
    );
};
export default LetsTalk;
