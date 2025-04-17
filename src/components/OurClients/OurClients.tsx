import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './OurClients.css';

const OurClientsSection: React.FC = () => {
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);
    const [row1Visible, setRow1Visible] = useState(false);
    const [row2Visible, setRow2Visible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === row1Ref.current) {
                            setRow1Visible(true);
                        }
                        if (entry.target === row2Ref.current) {
                            setRow2Visible(true);
                        }
                    }
                });
            },
            {
                threshold: 0.4, // 20% visible to trigger
            }
        );

        if (row1Ref.current) observer.observe(row1Ref.current);
        if (row2Ref.current) observer.observe(row2Ref.current);

        return () => {
            if (row1Ref.current) observer.unobserve(row1Ref.current);
            if (row2Ref.current) observer.unobserve(row2Ref.current);
        };
    }, []);

    return (
        <div className='ourClients'>
            <h2 className='title-ourClients'>Trusted by Our Clients</h2>

            <div
                ref={row1Ref}
                className={`row ${row1Visible ? 'animate' : ''}`}
                style={{
                    marginBottom: '50px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="col"><img src="Layer_1.png" alt="Sponsor 1" className="mx-5 sponsor-img" /></div>
                <div className="col"><img src="telekom logo.png" alt="Sponsor 2" className="mx-5 sponsor-img" /></div>
                <div className="col"><img src="logo-delux.png" alt="Sponsor 3" className="mx-5 sponsor-img" /></div>
                <div className="col"><img src="Premier1.png" alt="Sponsor 4" className="mx-5 sponsor-img" /></div>
                <div className="col"><img src="Group 47.png" alt="Sponsor 5" className="mx-5 sponsor-img" /></div>
            </div>

            <div
                ref={row2Ref}
                className={`row ${row2Visible ? 'animate' : ''}`}
                style={{
                    marginBottom: '30px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="col"><img src="HUMAX LOGO.png" alt="Sponsor 6" className="mx-5 sponsor-img" /></div>
                <div className="col"><img src="Group 7687.png" alt="Sponsor 7" className="mx-5 sponsor-img" /></div>
                <div className="col"><img src="Screenshot2.png" alt="Sponsor 8" className="mx-5 sponsor-img" /></div>
                <div className="col"><img src="1.png" alt="Sponsor 9" className="mx-5 sponsor-img" /></div>
                <div className="col"><img src="exalt logo 4 (1).png" alt="Sponsor 10" className="mx-5 sponsor-img" /></div>
                <div className="col"><img src="Group 4.png" alt="Sponsor 11" className="mx-5 sponsor-img" /></div>
            </div>
        </div>
    );
};

export default OurClientsSection;
