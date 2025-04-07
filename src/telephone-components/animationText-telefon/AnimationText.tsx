import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './animationText.css';

const AnimationTextSectionTelefon: React.FC = () => {
    return(
        <div className='container'>
        <div className='animation-telefon-container'>
            <div className='animation-text-telefon-content'>
                <img className="logo-telefon-tekst" src='Header Title.png' alt="logo-telefon"></img>
                <img className='logo-telefon' src='Vector (5).png' alt='logo-telefon'></img>
                <p className='animation-content-text-telefon'>is your.</p>
            </div>
            <p className='animation-content-telefon'>all-in-one digital agency for design, development, and marketing. We create powerful messages that connect with your audience, transforming your brand into a bold, seamless experience that leaves a lasting impression.</p>
        </div>
        </div>
    );
}; export default AnimationTextSectionTelefon;