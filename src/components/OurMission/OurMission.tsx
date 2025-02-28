import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './OurMission.css';

const OurMission: React.FC = () =>{
    return (
        <div className='main-mission-container container'>
           <div className='row'>
                <div className='col-md-6'>
                    <img src="Vector (4).png" alt="vector"></img>
                </div>
                <div className='col-md-6 second-mission-column'>
                        <h2>Our Mission</h2>
                        <p>At Node Qube, we create high-impact digital experiences that drive growth, engagement, and brand recognition. With a user-first approach, strategic messaging, and cutting-edge technology, we craft visually compelling and highly functional digital solutions.</p>
                        <p>Specializing in UX/UI design, web development, branding, and digital marketing, we blend strategy, innovation, and data-driven insights to enhance interactions and increase conversions. Whether it’s a website, mobile app, or marketing campaign, we deliver optimized, results-driven solutions that elevate your brand and ensure long-term success.</p>
                </div>            
           </div>
        </div>
       
    );
};
export default OurMission;