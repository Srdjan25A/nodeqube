import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useRef } from 'react';
import './OurWork.css';

const OurWork: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const segmentRefs = useRef<HTMLDivElement[]>([]);
    const timelineItemRefs = useRef<HTMLDivElement[]>([]); // Ref for timeline items

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const sectionTop = sectionRef.current.offsetTop;
            const sectionHeight = sectionRef.current.offsetHeight;
            const scrollY = window.scrollY + window.innerHeight;

            // Set a threshold (e.g., start the effect after 30% of the section is scrolled into view)
            const offset = 0.3; // 30% of the section height

            // Adjust progress to start later
            const progress = Math.min((scrollY - sectionTop - (sectionHeight * offset)) / sectionHeight, 1);
            const segmentsToActivate = Math.floor(progress * 100); // 100 segments

            // Apply opacity to the vertical line segments
            segmentRefs.current.forEach((segment, i) => {
                if (segment) {
                    (segment as HTMLElement).style.opacity = i < segmentsToActivate ? '1' : '0.3'; // Cast to HTMLElement
                }
            });

            // Update opacity of timeline items based on specific segment numbers
            if (segmentsToActivate >= 1) {
                timelineItemRefs.current[0].style.opacity = '1'; // First timeline item (23rd segment)
            } else {
                timelineItemRefs.current[0].style.opacity = '0.3';
            }

            if (segmentsToActivate >= 25) {
                timelineItemRefs.current[1].style.opacity = '1'; // Second timeline item (46th segment)
            } else {
                timelineItemRefs.current[1].style.opacity = '0.3';
            }

            if (segmentsToActivate >= 50) {
                timelineItemRefs.current[2].style.opacity = '1'; // Third timeline item (70th segment)
            } else {
                timelineItemRefs.current[2].style.opacity = '0.3';
            }

            if (segmentsToActivate >= 75) {
                timelineItemRefs.current[3].style.opacity = '1'; // Fourth timeline item (80th segment)
            } else {
                timelineItemRefs.current[3].style.opacity = '0.3';
            }

            if (segmentsToActivate >= 100) {
                timelineItemRefs.current[4].style.opacity = '1'; // Fifth timeline item (100th segment)
            } else {
                timelineItemRefs.current[4].style.opacity = '0.3';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='container' ref={sectionRef} style={{ position: "relative" }}>
            <img
                src="/floating-background-image2.png"
                alt="floating background"
                className="floating-background-image floating-background-image2"
            />
            <h2 className='title-timeline'>Our WorkFlow</h2>
            <div className="timeline-wrapper">
                <div className="vertical-line-container">
                    {[...Array(100)].map((_, index) => (
                        <div
                            key={index}
                            className={`line-segment segment-${index}`}
                            ref={el => (segmentRefs.current[index] = el!)}
                        />
                    ))}
                </div>

                <div className="vertical-timeline">
                    {[...Array(5)].map((_, i) => {
                        const data = [
                            {
                                title: "Discover",
                                description:
                                    "We start by understanding your vision—learning about your goals, audience, and challenges to uncover the perfect path forward.",
                            },
                            {
                                title: "Strategize",
                                description:
                                    "We plan for success by crafting a tailored strategy that combines design, development, and marketing to achieve your objectives.",
                            },
                            {
                                title: "Design",
                                description:
                                    "Our team shapes your brand’s identity with visuals and experiences that reflect your brand and captivate your audience.",
                            },
                            {
                                title: "Develop",
                                description:
                                    "We build seamless solutions by bringing ideas to life with cutting-edge development, delivering products that are functional and user-friendly.",
                            },
                            {
                                title: "Launch & Optimize",
                                description:
                                    "We deliver and evolve by launching your project with precision, monitoring its performance, and continuously optimizing for long-term success.",
                            },
                        ][i];

                        return (
                            <div
                                className="timeline-item"
                                key={i}
                                ref={el => (timelineItemRefs.current[i] = el!)} // Assign ref for each timeline item
                                style={{ opacity: '0.3' }} // Initially set opacity to 0.3
                            >
                                <span className="timeline-point">{`0${i + 1}`}</span>
                                <div className="timeline-content">
                                    <span className="timeline-date">{data.title}</span>
                                    <span className="timeline-description">{data.description}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default OurWork;
