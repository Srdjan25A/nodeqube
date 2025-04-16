import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useRef, useState } from 'react';
import './AnimationTextSection.css';

const AnimationTextSection: React.FC = () => {
    const animatedText = "Node Qube is your all-in-one digital agency for design, development, and marketing. We create powerful messages that connect with your audience, transforming your brand into a bold, seamless experience that leaves a lasting impression.";
    const containerRef = useRef<HTMLDivElement>(null);
    const [visibleLetters, setVisibleLetters] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const baseOffset = containerRef.current?.offsetTop || 0;
            const offset = Math.max(scrollTop + window.innerHeight / 1.3 - baseOffset, 0);
            const revealCount = Math.min(Math.floor(offset / 4), animatedText.length);
            setVisibleLetters(revealCount);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [animatedText.length]);

    const nodePart = "Node Qube";
    const qubeAndRest = animatedText.slice(nodePart.length); // Qube and the rest of the sentence

    return (
        <div className='animation-container' ref={containerRef}>
            <img
                src="/floating-background-image2.png"
                alt="floating background"
                className="floating-background-image"
            />
            <div className='animation-image-content'>
                <p className='animation-content'>
                    {nodePart.split('').map((letter, i) => (
                        <span key={`node-${i}`} className={i < visibleLetters ? 'visible' : ''}>
                            {letter}
                        </span>
                    ))}

                    {/* Image always visible */}
                    <img
                        src="nq.svg"
                        alt="nodeqube logo"
                        className="inline-logo"
                        style={{ verticalAlign: 'middle', margin: '0 6px', height: '1em' }}
                    />

                    {qubeAndRest.split('').map((letter, i) => (
                        <span key={`qube-${i}`} className={i + nodePart.length < visibleLetters ? 'visible' : ''}>
                            {letter}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default AnimationTextSection;
