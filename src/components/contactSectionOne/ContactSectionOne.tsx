import React from 'react';
import './contactSectionOne.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ContactSectionOne: React.FC = () => {
    return (
      <div className="contact-one">
        <div className='container contact-container'>
            <h2>Ready to start your project?</h2>
            <p>Let's bring your vision to life with expert design and development.
            100+ Success Stories and Counting!</p>    
        </div>
        <div className='container contact-email'>
            <h3>You prefer email communication? Drop us an email!</h3>
            <a href='#'><button><img src='mail.png'></img>office@nodeqube.com</button></a>
        </div>
      </div>
    );
  };
  
  export default ContactSectionOne;