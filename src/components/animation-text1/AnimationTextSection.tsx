import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useRef, useState} from 'react';
import './AnimationTextSection.css';

const AnimationTextSection: React.FC = () => {

    const animatedText = "Expert UI/UX, branding, and web development solutions Data-driven approach for optimized digital experiences High-quality print design and preparation Transparent services with no hidden commitments beyond project scope Let’s build something amazing together. Contact us today to start your next project.";
    const containerRef = useRef<HTMLDivElement>(null);
    const [visibleLetters, setVisibleLetters] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const baseOffset = containerRef.current?.offsetTop || 0;
            const offset = Math.max(scrollTop + window.innerHeight / 1 - baseOffset, 0);
            const revealCount = Math.min(Math.floor(offset / 4), animatedText.length);
            setVisibleLetters(revealCount);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [animatedText.length]);

    const nodePart = "";
    const qubeAndRest = animatedText.slice(nodePart.length); // Qube and the rest of the sentence

    return(
        <div className='container' ref={containerRef}>
                <div className='animation-container1'>
                    <p className='animation-content1'>
                        {qubeAndRest.split('').map((letter, i) => (
                            <span key={`qube-${i}`} className={i + nodePart.length < visibleLetters ? 'visible' : ''}>
                            {letter}
                        </span>
                        ))}
                    </p>
                </div>
            </div>
    );
}; export default AnimationTextSection;
