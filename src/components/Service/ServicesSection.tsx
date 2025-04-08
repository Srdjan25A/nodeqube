import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css'
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import './ServicesSection.css';
const ServicesSection: React.FC = () => {
    return (
        <div className="div-service">
          <h2 className="title-services">Our Services</h2>
          <Swiper
            spaceBetween={10}
            
            loop={true}
            autoplay={{
                delay: 3000, 
                disableOnInteraction: false, 
                reverseDirection: true,
              }}
              allowTouchMove={false}
            breakpoints={{
              460: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3.4 },
            }}
            className="swiper-container"
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <div className="card-container-main">
                <div className="card-container-image">
                  <img src="uiuxdesign.png" alt="UI/UX Design" />
                  <img src="external-link.png" alt="Link" />
                </div>
                <p className="card-text">UX/UI Design</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-container-main">
                <div className="card-container-image">
                  <img src="pen-tool.png" alt="pen-tool" />
                  <img src="external-link.png" alt="Link" />
                </div>
                <p className="card-text">Branding & Strategy</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-container-main">
                <div className="card-container-image">
                  <img src="code.png" alt="Web Development" />
                  <img src="external-link.png" alt="Link" />
                </div>
                <p className="card-text">Web & App Development</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-container-main">
                <div className="card-container-image">
                  <img src="bar-chart-22.png" alt="bar-chart" />
                  <img src="external-link.png" alt="Link" />
                </div>
                <p className="card-text">Digital Marketing</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-container-main">
                <div className="card-container-image">
                  <img src="Vector16.png" alt="E-commerce" />
                  <img src="external-link.png" alt="Link" />
                </div>
                <p className="card-text">E-commerce Solutions</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-container-main">
                <div className="card-container-image">
                  <img src="Group 6994.png" alt="Quality" />
                  <img src="external-link.png" alt="Link" />
                </div>
                <p className="card-text">Quality Assurance & Testing</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      );
};
export default ServicesSection;