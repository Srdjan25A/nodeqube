import React from 'react';
import './ContactTelefon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ContactTelefon: React.FC = () => {
    return(
        <div className="contact-telefon">
            <div className='container contact-telefon-content'>
                <h2>Ready to start your project?</h2>
                <p>Let's bring your vision to life with expert design and development.
                100+ Success Stories and Counting!</p> 
                <img src='Frame 556.png' className='image-logo-contact'></img>   
            </div>
            <div className='container mail-telefon-contact'>
                <h3>You prefer email communication?
                Drop us an email!</h3>
                <a href='mailto:office@nodeqube.com'><button><img src='mail.png'></img>office@nodeqube.com</button></a>
            </div>
      </div>
    );
};

export default ContactTelefon;