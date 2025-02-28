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
                <p className='animation-content-text-telefon'>is a Digital.</p>
            </div>
            <p className='animation-content-telefon'>product design agency. We start with framing the right message for your audience and go on to translate your company and its products into a system of form, voice, and experience that you give.</p>
        </div>
        </div>
    );
}; export default AnimationTextSectionTelefon;