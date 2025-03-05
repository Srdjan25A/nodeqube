import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServicesPage from '../components/ServicesPageSection/ServicesPage';
import ServicesTimeline from '../components/ServicesTimeline/ServicesTimeline';
import ServicesTimelineTelefon from '../telephone-components/ServicesTimeline-telefon/ServicesTimeline';
import Accordionquestions from '../components/accordionQuestions/Accordionquestions';
import AccordionQuestionTelefon from '../telephone-components/AccordionQuestions-telefon/AccordionQuestionTelefon';
import FooterSection from '../components/Footer/Footer';
import FooterSectiontelefon from '../telephone-components/Footer-telefon/FooterSection-telefon';
import ServicesUsFirst from "../telephone-components/servicesUsFirst-telefon/ServicesUsFirst";

const Services: React.FC = () => {
    return (
        <section className="mb-5">
            <ServicesPage/>
            <ServicesUsFirst/>
            <ServicesTimeline/>
            <ServicesTimelineTelefon/>
            <Accordionquestions/>
            <AccordionQuestionTelefon/>
            <FooterSection/>
            <FooterSectiontelefon/>
        </section>
    );
}; export default Services;