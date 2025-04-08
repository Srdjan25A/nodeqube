import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './OurWork.css';

const OurWork: React.FC = () => {
    return(
        <div className='container'>
            <h2 className='title-timeline'>Our WorkFlow</h2>
            <div className="vertical-timeline">
                <div className="timeline-item">
                    <span className="timeline-point">01</span>
                    <div className="timeline-content">
                        <span className="timeline-date">Discover</span>
                        <span className="timeline-description">We start by understanding your vision—learning about your goals, audience, and challenges to uncover the perfect path forward.</span>
                    </div>
                </div>
                <div className="timeline-item">
                    <span className="timeline-point">02</span>
                    <div className="timeline-content">
                        <span className="timeline-date">Strategize</span>
                        <span className="timeline-description">We plan for success by crafting a tailored strategy that combines design, development, and marketing to achieve your objectives.</span>
                    </div>
                </div>
                <div className="timeline-item">
                    <span className="timeline-point">03</span>
                    <div className="timeline-content">
                        <span className="timeline-date">Design</span>
                        <span className="timeline-description">Our team shapes your brand’s identity with visuals and experiences that reflect your brand and captivate your audience. </span>
                    </div>
                </div>
                <div className="timeline-item">
                    <span className="timeline-point">04</span>
                    <div className="timeline-content">
                        <span className="timeline-date">Develop</span>
                        <span className="timeline-description">We build seamless solutions by bringing ideas to life with cutting-edge development, delivering products that are functional and user-friendly.</span>
                    </div>
                </div>
                <div className="timeline-item">
                    <span className="timeline-point ">05</span>
                    <div className="timeline-content">
                        <span className="timeline-date">Launch & Optimize</span>
                        <span className="timeline-description">We deliver and evolve by launching your project with precision, monitoring its performance, and continuously optimizing for long-term success. </span>
                    </div>
                </div>
            </div>
        </div>
        
    
    );
};
export default OurWork;