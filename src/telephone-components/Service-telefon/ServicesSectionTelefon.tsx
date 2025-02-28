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
                            <img src="uiuxdesign.png" alt="UI/UX Design" className='uiux' />
                            <img src="external-link.png" alt="Link" className='external'/>
                        </div>
                        <p className="services-card-text">Brand Design</p>
                    </div>
                </div>
            </div>
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
                            <img src="uiuxdesign.png" alt="UI/UX Design" className='uiux' />
                            <img src="external-link.png" alt="Link" className='external'/>
                        </div>
                        <p className="services-card-text">Brand Design</p>
                    </div>
                </div>
            </div>
            <div className='row'>
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
                            <img src="uiuxdesign.png" alt="UI/UX Design" className='uiux' />
                            <img src="external-link.png" alt="Link" className='external'/>
                        </div>
                        <p className="services-card-text">Brand Design</p>
                    </div>
                </div>
            </div>
        </div>
    );
}; export default ServicesSectionTelefon;