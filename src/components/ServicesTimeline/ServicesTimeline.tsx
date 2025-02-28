import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './ServicesTimeline.css';
const ServicesTimeline: React.FC = () => {
    return(
        <div className='full-timeline-container container'>
            <h2 className='title-timeline'>Services</h2>                
                <div className="vertical-timeline timeline-vertical1">
                <div className="timeline-item">
                    <span className="timeline-point1"><img src='./horse.png'></img></span>
                    
                    <div className="content-display">
                        <div>
                        <p className="timeline-date">Consulting & Strategy</p>
                        <p className="timeline-description1">
                        We provide expert guidance and strategic planning to help businesses navigate digital transformation, optimize workflows, and enhance their digital presence.
                        </p>
                        <p className='timeline-description1 pt-4 pb-4'>
                            Services:
                            <ul>
                                <li>Custom UX/UI design for websites, mobile apps, e-commerce platforms, and SaaS solutions</li>
                                <li>User journey mapping and conversion-optimized design</li>
                                <li>Mobile-first and responsive UI for enhanced accessibility</li>
                                <li>Wireframing and prototyping for seamless user experiences</li>
                            </ul>
                        </p>
                        <p className='timeline-description1'>
                        Best for businesses looking for expert advice to refine their digital strategy, improve user experience, and maximize online success.
                        </p>
                        </div>
                        <img src='./consulting.png' className='timeline-picture'></img>
                    </div>
                </div>
                <div className="timeline-item">
                    <span className="timeline-point1"><img src='./penTool1.png'></img></span>
                    <div className="content-display">
                           <div>
                            <p className="timeline-date">Branding & Visual Identity</p>
                            <p className="timeline-description1">
                            A strong brand is the foundation of your business. We create distinct, memorable identities that connect with your audience and maintain consistency across all platforms.</p>
                            <p className='timeline-description1 pt-4 pb-4'>
                            Services:
                            <ul>
                                <li>Logo design and complete brand identity development</li>
                                <li>Brand guidelines (brand book) for visual consistency</li>
                                <li>Business card, leaflet, catalog, and brochure design</li>
                                <li>Print-ready design preparation for marketing materials.</li>
                            </ul>
                            </p>
                            <p className='timeline-description1'>
                            Best for businesses looking to establish a cohesive, professional brand identity before launching their digital presence.</p>                    
                           </div>
                           <img src='./Branding&.png' className='timeline-picture'></img>
                        
                    </div>
                </div>
                <div className="timeline-item">
                    <span className="timeline-point1"><img src='./figma1.png'></img></span>
                    <div className="content-display">
                      <div>  
                        <p className="timeline-date">UX/UI Design</p>
                        <p className="timeline-description1">
                        We design intuitive, user-friendly digital experiences that engage visitors, improve usability, and drive conversions across web, mobile, and e-commerce platforms.
                        </p>
                        <p className='timeline-description1 pt-4 pb-4'>
                            Services:
                            <ul>
                                <li>Custom UX/UI design for websites, mobile apps, e-commerce platforms, and SaaS solutions</li>
                                <li>User journey mapping and conversion-optimized design</li>
                                <li>Mobile-first and responsive UI for enhanced accessibility</li>
                                <li>Wireframing and prototyping for seamless user experiences</li>
                            </ul>
                        </p>
                        <p className='timeline-description1'>
                        Best for businesses seeking visually compelling, high-converting digital experiences that enhance engagement and retention.
                        </p>
                      </div>
                      <img src='./uxuiDesign.png' className='timeline-picture'></img>
                    </div>
                </div>
                <div className="timeline-item">
                    <span className="timeline-point1"><img src='code1.png'></img></span>
                    <div className="content-display">
                      <div>  
                        <p className="timeline-date">Web & App Development</p>
                            <p className="timeline-description1">
                            We build high-performance, scalable websites and mobile applications that are fast, secure, and designed to grow with your business.</p>
                            <p className='timeline-description1 pt-4 pb-4'>
                                Services:
                                <ul>
                                    <li>Custom website and web app development for businesses and startups</li>
                                    <li>CMS-based solutions (WordPress, Webflow) and fully custom-coded websites</li>
                                    <li>Mobile app development for iOS and Android with responsive UI/UX</li>
                                    <li>Landing page development optimized for lead generation</li>
                                    <li>Performance and speed optimization for fast-loading experiences</li>
                                    <li>Website and app maintenance, updates, and technical support</li>
                                </ul>
                            </p>
                            <p className='timeline-description1'>
                            Best for businesses needing a secure, high-performing website or application built for long-term success. </p>
                      </div>
                      <img src='web&app.png' className='timeline-picture'></img>
                    </div>
                </div>
                <div className="timeline-item">
                    <span className="timeline-point1"><img src='./Group 6994.png'></img></span>
                    <div className="content-display">
                        <div>    
                            <p className="timeline-date date-title">Quality Assurance & Website Testing</p>
                            <p className="timeline-description1">
                            We ensure your website, app, or digital product runs smoothly with a rigorous quality assurance and testing process to detect and resolve issues before launch.
                            </p>
                            <p className='timeline-description1 pt-4 pb-4'>
                                Services:
                                <ul>
                                    <li>Website and app functionality testing, both manual and automated</li>
                                    <li>Cross-browser and device compatibility testing</li>
                                    <li>Performance testing for speed and efficiency</li>
                                    <li>UX audits to identify usability issues</li>
                                    <li>Quality control for digital assets and content</li>
                                </ul>
                            </p>
                            <p className='timeline-description1'>
                            Best for businesses looking for a flawless, high-performing website or application that ensures a seamless user experience.
                             </p>
                        </div>
                        <img src='./quality.png' className='timeline-picture'></img>
                    </div>
                </div>
                <div className="timeline-item">
                    <span className="timeline-point1"><img src='./bar-chart-2.png'></img></span>
                    <div className="content-display">
                       <div> 
                        <p className="timeline-date date-title-text"> Digital Marketing & Social Growth</p>
                        <p className="timeline-description1">
                        We specialize in LinkedIn, Facebook, and Instagram, helping businesses and professionals boost visibility, attract the right audience, and build authority through SEO, content marketing, and social media management.
                        </p>
                        <p className='timeline-description1 pt-4 pb-4'>
                            Services:
                            <ul>
                                <li>Digital transformation consulting for businesses moving online</li>
                                <li>UX and conversion optimization strategies for websites and apps</li>
                                <li>Branding and positioning strategy for stronger market presence</li>
                                <li>Website and app performance audits with actionable insights</li>
                                <li>Personalized consulting sessions tailored to business needs</li>
                            </ul>
                        </p>
                        <p className='timeline-description1'>
                        Best for businesses and professionals looking to increase search rankings, grow their brand on LinkedIn, Facebook, and Instagram, and establish industry credibility.
                        </p>
                       </div>
                       <img src='digitalMarketing.png' className='timeline-picture'></img>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ServicesTimeline;