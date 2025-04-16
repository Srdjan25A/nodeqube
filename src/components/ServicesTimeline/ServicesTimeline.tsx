import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useRef } from 'react';
import './ServicesTimeline.css';

const ServicesTimeline: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const segmentRefs = useRef<HTMLDivElement[]>([]);
    const timelineItemRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const sectionTop = sectionRef.current.offsetTop;
            const sectionHeight = sectionRef.current.offsetHeight;
            const scrollY = window.scrollY + window.innerHeight;
            const offset = 0.1;
            const progress = Math.min(
                (scrollY - sectionTop - sectionHeight * offset) / sectionHeight,
                1
            );
            const segmentsToActivate = Math.floor(progress * 100);

            segmentRefs.current.forEach((segment, i) => {
                if (segment) {
                    segment.style.opacity = i < segmentsToActivate ? '1' : '0.3';
                }
            });

            const opacities = [1, 25, 50, 75, 100];
            opacities.forEach((threshold, index) => {
                if (timelineItemRefs.current[index]) {
                    timelineItemRefs.current[index].style.opacity =
                        segmentsToActivate >= threshold ? '1' : '0.3';
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className="full-timeline-container container"
            ref={sectionRef}
            style={{ position: 'relative' }}
        >
            <h2 className="title-timeline">Services</h2>
            <div className="timeline-wrapper">
                <div className="vertical-line-container">
                    {[...Array(100)].map((_, index) => (
                        <div
                            key={index}
                            className={`line-segment segment-${index}`}
                            ref={(el) => (segmentRefs.current[index] = el!)}
                        />
                    ))}
                </div>

                <div className="vertical-timeline timeline-vertical1">
                    {[
                        {
                            img: './horse.png',
                            title: 'Consulting & Strategy',
                            description: [
                                'We provide expert guidance and strategic planning to help businesses navigate digital transformation, optimize workflows, and enhance their digital presence.',
                                'Services:',
                                [
                                    'Custom UX/UI design for websites, mobile apps, e-commerce platforms, and SaaS solutions',
                                    'User journey mapping and conversion-optimized design',
                                    'Mobile-first and responsive UI for enhanced accessibility',
                                    'Wireframing and prototyping for seamless user experiences',
                                ],
                                'Best for businesses looking for expert advice to refine their digital strategy, improve user experience, and maximize online success.',
                            ],
                            image: './consulting.png',
                        },
                        {
                            img: './penTool1.png',
                            title: 'Branding & Visual Identity',
                            description: [
                                'A strong brand is the foundation of your business. We create distinct, memorable identities that connect with your audience and maintain consistency across all platforms.',
                                'Services:',
                                [
                                    'Logo design and complete brand identity development',
                                    'Brand guidelines (brand book) for visual consistency',
                                    'Business card, leaflet, catalog, and brochure design',
                                    'Print-ready design preparation for marketing materials.',
                                ],
                                'Best for businesses looking to establish a cohesive, professional brand identity before launching their digital presence.',
                            ],
                            image: './Branding&.png',
                        },
                        {
                            img: './figma1.png',
                            title: 'UX/UI Design',
                            description: [
                                'We design intuitive, user-friendly digital experiences that engage visitors, improve usability, and drive conversions across web, mobile, and e-commerce platforms.',
                                'Services:',
                                [
                                    'Custom UX/UI design for websites, mobile apps, e-commerce platforms, and SaaS solutions',
                                    'User journey mapping and conversion-optimized design',
                                    'Mobile-first and responsive UI for enhanced accessibility',
                                    'Wireframing and prototyping for seamless user experiences',
                                ],
                                'Best for businesses seeking visually compelling, high-converting digital experiences that enhance engagement and retention.',
                            ],
                            image: './uxuiDesign.png',
                        },
                        {
                            img: 'code1.png',
                            title: 'Web & App Development',
                            description: [
                                'We build high-performance, scalable websites and mobile applications that are fast, secure, and designed to grow with your business.',
                                'Services:',
                                [
                                    'Custom website and web app development for businesses and startups',
                                    'CMS-based solutions (WordPress, Webflow) and fully custom-coded websites',
                                    'Mobile app development for iOS and Android with responsive UI/UX',
                                    'Landing page development optimized for lead generation',
                                    'Performance and speed optimization for fast-loading experiences',
                                    'Website and app maintenance, updates, and technical support',
                                ],
                                'Best for businesses needing a secure, high-performing website or application built for long-term success.',
                            ],
                            image: 'web&app.png',
                        },
                        {
                            img: './Group 6994.png',
                            title: 'Quality Assurance & Website Testing',
                            description: [
                                'We ensure your website, app, or digital product runs smoothly with a rigorous quality assurance and testing process to detect and resolve issues before launch.',
                                'Services:',
                                [
                                    'Website and app functionality testing, both manual and automated',
                                    'Cross-browser and device compatibility testing',
                                    'Performance testing for speed and efficiency',
                                    'UX audits to identify usability issues',
                                    'Quality control for digital assets and content',
                                ],
                                'Best for businesses looking for a flawless, high-performing website or application that ensures a seamless user experience.',
                            ],
                            image: './quality.png',
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="timeline-item"
                            ref={(el) => (timelineItemRefs.current[index] = el!)}
                            style={{ opacity: 0.3 }}
                        >
              <span className="timeline-point1">
                <img src={item.img} alt={item.title} />
              </span>
                            <div className="content-display">
                                <div>
                                    <p className="timeline-date">{item.title}</p>
                                    {item.description.map((text, i) =>
                                        Array.isArray(text) ? (
                                            <ul key={i} className="pt-4 pb-4">
                                                {text.map((li, idx) => (
                                                    <li key={idx}>{li}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p key={i} className="timeline-description1">
                                                {text}
                                            </p>
                                        )
                                    )}
                                </div>
                                <img src={item.image} className="timeline-picture" alt={item.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesTimeline;
