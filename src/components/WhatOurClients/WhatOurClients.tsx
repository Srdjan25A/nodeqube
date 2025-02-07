import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css'
import "swiper/css/autoplay";
import { Autoplay, EffectCards } from "swiper/modules";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import './WhatOurClients.css';

const WhatOurClients: React.FC = () => {
    return(
        <div className='container'>
            <div className='row row-what'>
                <div className='col-md-6 first-column-what'>
                    <h2 className='what-our-title'>What Our Clients Say About Us?</h2>
                </div>
                <div className='col-md-6'>
                    <Swiper
                        breakpoints={{
                            460: { slidesPerView: 1 },
                            768: { slidesPerView: 1 },
                            1200: { slidesPerView: 1 },
                          }}
                          effect={'cards'}
                          grabCursor={true}
                        
                          pagination={{ clickable: true }} // Aktivira paginaciju
                          navigation={true} // Aktivira navigaciju
                          modules={[Navigation, Pagination, EffectCards]}
                        className="whatour-swiper"
                    >
                    <SwiperSlide>
                        <div className="testimonial-card">
                            <p>
                                "Our long-term collaboration with WCS has primarily brought us peace of mind regarding IT. Reliability and professionalism are the key reasons why we chose WCS. The challenges we encountered while creating and enhancing an interactive astrology site, which I can say is also demanding from a programming perspective, were resolved in cooperation with their team, leading to the creation of a platform we are proud of."
                            </p>
                            <h4>Ivica Dimitrijevic, Owner of</h4>
                            <h4>Premier Style</h4>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="testimonial-card">
                            <p>
                                "Our long-term collaboration with WCS has primarily brought us peace of mind regarding IT. Reliability and professionalism are the key reasons why we chose WCS. The challenges we encountered while creating and enhancing an interactive astrology site, which I can say is also demanding from a programming perspective, were resolved in cooperation with their team, leading to the creation of a platform we are proud of."
                            </p>
                            <h4>Ivica Dimitrijevic, Owner of</h4>
                            <h4>Premier Style</h4>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="testimonial-card">
                            <p>
                                "Our long-term collaboration with WCS has primarily brought us peace of mind regarding IT. Reliability and professionalism are the key reasons why we chose WCS. The challenges we encountered while creating and enhancing an interactive astrology site, which I can say is also demanding from a programming perspective, were resolved in cooperation with their team, leading to the creation of a platform we are proud of."
                            </p>
                            <h4>Ivica Dimitrijevic, Owner of</h4>
                            <h4>Premier Style</h4>
                        </div>
                    </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};
export default WhatOurClients;