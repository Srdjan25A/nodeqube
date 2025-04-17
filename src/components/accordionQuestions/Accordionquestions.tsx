import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import './Accordionquestions.css';

const Accordionquestions: React.FC = () => {
 return(
<div className='full-accordion-container'>
    <div className='container container-button-accordion'>
    <p className='not-seeing'>Not seeing what you’re looking for?</p>
    <button className='custom-button'>Let's talk <img className="button-elipse" src="Ellipse 10.png" alt="ellipse"></img> <img className="button-arrow" src="Vector 4.png" alt="arrow"></img></button>
    </div>
    <div className='accordion-container container'>
        <div className="accordion first-accordion" id="accordionExample">
            <h2 className='accordion-title'>Frequently asked questions</h2>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What services does Node Qube offer?
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    We offer custom website design, web and app development, UI/UX design, branding, and digital marketing solutions including SEO, social media, and paid advertising.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Do you work with international clients?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Yes — we collaborate with clients across Europe, the United States, and beyond. All meetings and project communication are handled online.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    How long does a project usually take?
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Timelines depend on the scope and complexity of the work. We'll provide a realistic time estimate after discussing your project in detail.
                    </div>
                </div>
            </div>
             {/* Drugi set Accordiona - DODATO */}
             <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Will my website be mobile-friendly and SEO optimized?
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Yes. Every website we build is fully responsive and includes basic SEO best practices like fast loading speed, clean code, and optimized meta tags.
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Do I need to provide all the content?
                </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Not necessarily. If you already have content, we can work with it. If not, we offer services like copywriting, image sourcing, and branding to support your project.
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        Do you provide ongoing support and maintenance?
                    </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Yes, we offer maintenance plans and support after launch — including updates, backups, security monitoring, and general help as your site grows.                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive2" aria-expanded="false" aria-controls="collapseFive2">
                        Who owns the final product?
                    </button>
                </h2>
                <div id="collapseFive2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Once the project is completed and any outstanding payments are settled, you receive full ownership of all deliverables — including code, designs, and files.
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
    );
};
export default Accordionquestions;
