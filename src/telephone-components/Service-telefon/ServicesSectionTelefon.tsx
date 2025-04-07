import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './ServicesSectionTelefon.css';
const ServicesSectionTelefon: React.FC = () => {
    return (
        <div className='servicesTelefon container'>
            <h2>Our Services</h2>
            <div className='row services-row'>
                <div className='col-6'>
                    <div className="services-card-container-main">
                        <div className="services-card-container-image">
                            <img src="uiuxdesign.png" alt="UI/UX Design" className='uiux' />
                            <img src="external-link.png" alt="Link" className='external'/>
                        </div>
                        <p className="services-card-text">UX/UI Design</p>
                    </div>
                </div>
                <div className='col-6'>
                    <div className="services-card-container-main">
                        <div className="services-card-container-image">
                            <img src="pen-tool.png" alt="pen-tool" className='uiux' />
                            <img src="external-link.png" alt="Link" className='external'/>
                        </div>
                        <p className="services-card-text">Branding & Strategy</p>
                    </div>
                </div>
            </div>
            <div className='row services-row'>
                <div className='col-6'>
                    <div className="services-card-container-main">
                        <div className="services-card-container-image">
                            <img src="code.png" alt="arrow" className='uiux' />
                            <img src="external-link.png" alt="Link" className='external'/>
                        </div>
                        <p className="services-card-text">Web & App Development</p>
                    </div>
                </div>
                <div className='col-6'>
                    <div className="services-card-container-main">
                        <div className="services-card-container-image">
                            <img src="bar-chart-2.png" alt="bar-chart-2" className='uiux' />
                            <img src="external-link.png" alt="Link" className='external'/>
                        </div>
                        <p className="services-card-text">Digital Marketing</p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className="services-card-container-main">
                        <div className="services-card-container-image">
                            <img src="Vector64.png" alt="vector64"  />
                            <img src="external-link.png" alt="Link" className='external'/>
                        </div>
                        <p className="services-card-text width-text-card">E-commerce Solutions</p>
                    </div>
                </div>
                <div className='col-6'>
                    <div className="services-card-container-main">
                        <div className="services-card-container-image">
                            <img src="Group 6994.png" alt="group6994" className='uiux' />
                            <img src="external-link.png" alt="Link" className='external'/>
                        </div>
                        <p className="services-card-text">Quality Assurance & Testing</p>
                    </div>
                </div>
            </div>
        </div>
    );
}; export default ServicesSectionTelefon;