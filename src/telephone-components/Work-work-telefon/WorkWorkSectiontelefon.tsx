import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';

import React from 'react';
import { Swiper, SwiperSlide, SwiperRef} from 'swiper/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import './WorkWorkSectiontelefon.css';

const WorkWorkSection: React.FC = () =>{
    const swiperRef1 = useRef<SwiperRef>(null);
    const handlePrev1 = useCallback(() => {
        if (!swiperRef1.current) return;
            swiperRef1.current.swiper.slidePrev();
        }, []);

    const handleNext1 = useCallback(() => {
        if (!swiperRef1.current) return;
        swiperRef1.current.swiper.slideNext();
    }, []);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    return (
        <div className='relatedwork-sectainer container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='container-related'>
                        <h2>Work</h2>
                        <img src="TagContainer1.png" alt="number" ></img>
                    </div>

                    <p className="text-work-content">A selection of our crafted work, built from scratch by  our talented team.</p>
                    
                    <div className="container-work-button">
                        <div className='container-left-button'>
                            <button className="work-button">Case studies</button>
                        </div>
                        <div className='container-right-button'>
                            <button id="prevBtn" onClick={handlePrev1}  className={atStart ? "disabled-btn" : ""}><img src="arrow-left.png" alt="arrow-left"/></button>
                            <button id="nextBtn" onClick={handleNext1} className={atEnd ? "disabled-btn" : ""}><img src="arrow-left.png" alt="arrow-left"/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                <Swiper
                    ref={swiperRef1}
                    spaceBetween={10}
                    onReachBeginning={() => setAtStart(true)}
                    onReachEnd={() => setAtEnd(true)}
                    onSlideChange={() => {
                        setAtStart(swiperRef1.current?.swiper.isBeginning ?? false);
                        setAtEnd(swiperRef1.current?.swiper.isEnd ?? false);
                    }}
                    slidesPerView={1.2}
                    breakpoints={{
                        768: { slidesPerView: 1.5 }
                    }}>
                    <SwiperSlide>
                        
                        <div className="image-overlay">
                            <img src="goin.png" alt="Goin App" className="img-fluid rounded" />
                            <div className="overlay-content">
                                <h3>Goin' App</h3>
                                <span>Mobile app</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-overlay">
                            <img src="premier-style.png" alt="premier" className="img-fluid rounded" />
                            <div className="overlay-content">
                                <h3>Goin' App</h3>
                                <span>Mobile app</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-overlay">
                            <img src="premier-style.png" alt="premier" className="img-fluid rounded" />
                            <div className="overlay-content">
                                <h3>Goin' App</h3>
                                <span>Mobile app</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
        </div>
    );
}; export default WorkWorkSection;