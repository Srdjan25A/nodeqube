import React from 'react';
import './Contact.css';

import ContactTelefon from '../telephone-components/Contact-telefon/ContactTelefon';
import Navbar from '../components/Navbar/Navbar';
import NavbarTelefon from '../telephone-components/Navbar-telefon/NavbarTelefon';
import FooterSection from '../components/Footer/Footer';
import FooterSectiontelefon from '../telephone-components/Footer-telefon/FooterSection-telefon';
import ContactSectionOne from "../components/contactSectionOne/ContactSectionOne";
const Contact: React.FC = () => {
    return (
      <section className="contact mb-5">
           <Navbar/>
           <NavbarTelefon/>
           <ContactSectionOne/>
            <ContactTelefon/>
           <FooterSection/>
           <FooterSectiontelefon/>
      </section>
    );
  };

  export default Contact;
