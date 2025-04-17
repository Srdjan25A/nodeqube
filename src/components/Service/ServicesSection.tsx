import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css'
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import './ServicesSection.css';
const ServicesSection: React.FC = () => {

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [scrollLength, setScrollLength] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    const title = document.querySelector('.title-services') as HTMLElement;
    if (!container || !content || !title) return;

    const contentWidth = content.scrollWidth;
    const containerHeight = window.innerHeight + contentWidth - window.innerWidth;
    setScrollLength(containerHeight);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const containerTop = container.offsetTop;
      const containerBottom = containerTop + containerHeight;

      const titleTop = title.getBoundingClientRect().top;
      const scrollOffset = scrollY - containerTop;
      if (titleTop <= 100) {
        title.classList.add('fixed-title');
      } else {
        title.classList.remove('fixed-title');
      }

      if(scrollOffset > 1208) {
        let newFixedTop = 1308 - scrollOffset;
        // title.classList.remove('fixed-title')
        title.style.top = newFixedTop + 'px';
      }

      if (scrollY >= containerTop && scrollY <= containerBottom) {
        const scrollOffset = scrollY - containerTop;
        content.style.transform = `translateX(-${scrollOffset}px)`;

        // const titleTop = title.getBoundingClientRect().top;
        // if (titleTop <= 100) {
        //   title.classList.add('fixed-title');
        // } else {
        //   title.classList.remove('fixed-title');
        // }
      } else {
        // If outside the section, always reset
        content.style.transform = 'translateX(0)';
        title.classList.remove('fixed-title');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
      <div>

        <div
            ref={containerRef}
            className="horizontal-section"
            style={{ height: `${scrollLength}px` }}
        >
          <div className="title-wrapper">
            <h2 className="title-services">Our Services</h2>
          </div>

          <div
              ref={contentRef}
              className="horizontal-scroll-content"
              style={{
                position: "sticky",
                top: 0,
                display: "inline-flex",
                height: "100vh",
              }}
          >
            <div>
              <div style={{ display: "inline-flex" }}>
                <div className="card-container-main">
                  <div className="card-container-image">
                    <img src="figma.svg" alt="UI/UX Design" />
                  </div>
                  <p className="card-text">UX/UI Design</p>
                </div>
                <div className="card-container-main">
                  <div className="card-container-image">
                    <img src="pen-tool.svg" alt="pen-tool" />
                  </div>
                  <p className="card-text">Branding & Strategy</p>
                </div>
                <div className="card-container-main">
                  <div className="card-container-image">
                    <img src="code2.svg" alt="Web Development" />
                  </div>
                  <p className="card-text">Web & App Development</p>
                </div>
                <div className="card-container-main">
                  <div className="card-container-image">
                    <img src="design.svg" alt="bar-chart" />
                  </div>
                  <p className="card-text">Digital Marketing</p>
                </div>
                <div className="card-container-main">
                  <div className="card-container-image">
                    <img src="horse.svg" alt="E-commerce" />
                  </div>
                  <p className="card-text">Consulting & Strategy</p>
                </div>
                <div className="card-container-main">
                  <div className="card-container-image">
                    <img src="qa.svg" alt="Quality" />
                  </div>
                  <p className="card-text">Quality Assurance & Testing</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  );


      return (
          <div className="div-service">

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

              </SwiperSlide>
              <SwiperSlide>

              </SwiperSlide>
              <SwiperSlide>

              </SwiperSlide>
              <SwiperSlide>

              </SwiperSlide>
              <SwiperSlide>

              </SwiperSlide>
            </Swiper>
          </div>
        );
};
export default ServicesSection;
