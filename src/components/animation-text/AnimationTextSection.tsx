import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useRef, useState } from 'react';
import './AnimationTextSection.css';

const AnimationTextSection: React.FC = () => {
    const text = "is your all-in-one digital agency for design, development, and marketing. We create powerful messages that connect with your audience, transforming your brand into a bold, seamless experience that leaves a lasting impression.";
    const containerRef = useRef<HTMLDivElement>(null);
    const [visibleLetters, setVisibleLetters] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const baseOffset = containerRef.current?.offsetTop || 0;
            const offset = Math.max(scrollTop + window.innerHeight / 1.3 - baseOffset, 0);
            const revealCount = Math.min(Math.floor(offset / 4), text.length);
            setVisibleLetters(revealCount);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [text.length]);


    return (
        <div className='animation-container' ref={containerRef}>
            {/* Floating background image */}

            <div className='animation-image-content'>
                <p className='animation-content'>
                    {text.split('').map((letter, i) => (
                        <span key={i} className={i < visibleLetters ? 'visible' : ''}>
            {letter}
          </span>
                    ))}
                </p>
            </div>
        </div>
    );

};

export default AnimationTextSection;
