import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './AnimationTextSection.css';

const AnimationTextSection: React.FC = () => {
    return(
            <div className='container'>
                <div className='animation-container1'>
                    <div className='animation-image-content1'>
                        <img  className='logo-desktop' src='Logo Container.png' alt='logo-desktop'></img>
                        <p className='animation-content1'>is your all-in-one</p>
                        <img className='logo-telefon' src='Header Title.png' alt='logo-telefon'></img>
                        <img className='logo-telefon' src='Vector (5).png' alt='logo-telefon'></img>
                        <p className='animation-content1-telefon'>is your all-in-one</p>
                    </div>
                    <p className='animation-content1'>digital agency for design, development, and marketing. We create powerful messages that connect with your audience, transforming your brand into a bold, seamless experience that leaves a lasting impression.</p>
                    <p className='animation-content1-telefon'>product design agency. We start with framing the right message for your audience and go on to translate your company and its products into a system of form, voice, and experience that you give.</p>
                </div>
            </div>
    );
}; export default AnimationTextSection;