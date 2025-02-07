import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './AnimationTextSection.css';

const AnimationTextSection: React.FC = () => {
    return(
        
            <div className='animation-container'>
                <div className='animation-image-content'>
                    <img src='Logo Container.png'></img>
                    <p className='animation-content'>is your all-in-one</p>
                </div>
                <p className='animation-content'>digital agency for design, development, and marketing. We create powerful messages that connect with your audience, transforming your brand into a bold, seamless experience that leaves a lasting impression.</p>
            </div>
        
    );
}; export default AnimationTextSection;