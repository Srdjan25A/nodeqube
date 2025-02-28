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
import './WhatOurClientstelefon.css';

const WhatOurClientsTelefon: React.FC = () => {
    return(
        <div className='container whatOurClientsTelefon-container'>
            <div className='row'>
                <div className='col-12'>
                    <h2>What Our Clients Say About Us?</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <Swiper
                        breakpoints={{
                            460: { slidesPerView: 1 },
                            768: { slidesPerView: 1 },
                            1200: { slidesPerView: 1 },
                          }}
                          effect={'cards'}
                          grabCursor={true}
                          modules={[EffectCards]}
                    >
                        <SwiperSlide>
                        <div className="testimonial-card-telefon">
                            <p>
                                "Our long-term collaboration with WCS has primarily brought us peace of mind regarding IT. Reliability and professionalism are the key reasons why we chose WCS. The challenges we encountered while creating and enhancing an interactive astrology site, which I can say is also demanding from a programming perspective, were resolved in cooperation with their team, leading to the creation of a platform we are proud of."
                            </p>
                            <h4>Ivica Dimitrijevic, Owner of</h4>
                            <h4>Premier Style</h4>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="testimonial-card-telefon">
                            <p>
                                "Our long-term collaboration with WCS has primarily brought us peace of mind regarding IT. Reliability and professionalism are the key reasons why we chose WCS.</p>
                            <h4>Ivica Dimitrijevic, Owner of</h4>
                            <h4>Premier Style</h4>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="testimonial-card-telefon">
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
}; export default WhatOurClientsTelefon;