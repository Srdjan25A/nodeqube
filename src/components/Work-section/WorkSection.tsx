import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';

import React from 'react';
import { Swiper, SwiperSlide, SwiperRef} from 'swiper/react';
import  { useCallback, useEffect, useRef, useState } from 'react';
import './WorkSection.css';

const WorkSection: React.FC = () =>{
    const swiperRef = useRef<SwiperRef>(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const handlePrev = useCallback(() => {
        if (!swiperRef.current) return;
            swiperRef.current.swiper.slidePrev();
        }, []);

    const handleNext = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slideNext();
    }, []);
    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;
        if (!swiperInstance) return;

        const updateNavButtons = () => {
            setAtStart(swiperInstance.isBeginning);
            setAtEnd(swiperInstance.isEnd);
        };

        swiperInstance.on('slideChange', updateNavButtons);
        updateNavButtons(); // Proveri inicijalno stanje

        return () => {
            swiperInstance.off('slideChange', updateNavButtons);
        };
    }, []);
    return (
        <div className="row row-work">
                <div className="col-md-4">
                    <div className="container-work">
                        <h2 className='work-title'>Work</h2>
                        <img src="Tag Container.png" alt="number"  ></img>
                    </div>
                    <p className="wort-text">A selection of our crafted work, built from scratch by  our talented team.</p>
                    <div className="container-work">
                        <button id="prevBtn" onClick={handlePrev}  className={atStart ? "disabled-btn" : ""}><img src="arrow-left.png" alt="arrow-left"/></button>
                        <button id="nextBtn" onClick={handleNext}  className={atEnd ? "disabled-btn" : ""}><img src="arrow-left.png" alt="arrow-left"/></button>
                    </div>
                    <button className="work-button">Case studies</button>
                </div>
                <div className='col-md-8'>
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={30}
                        /*slidesPerView={3}*/
                        breakpoints={{
                        460: {slidesPerView: 2},
                        768: { slidesPerView: 2 },
                        1200: { slidesPerView: 2 },
                    }}
                    >
                    <SwiperSlide>
                        <div className="work-slider-container">
                            <img src="smartphone.png" alt="goin" className="img-fluid rounded" />
                            <div className="overlay-content-desktop">
                                <h3 className="project-title">Goin’ App</h3>
                                <div className="project-tag">Mobile app</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="work-slider-container">
                            <img src="image111.png" alt="goin" className="img-fluid rounded" />
                            <div className="overlay-content-desktop">
                                <h3 className="project-title">Delta Holding</h3>
                                <div className="project-tag">Website</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="work-slider-container">
                            <img src="goin.png" alt="goin" className="img-fluid rounded" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
    
    );
};
export default WorkSection;