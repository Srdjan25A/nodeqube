import React from 'react';
//import './about.css';
import AboutUsFirst from '../components/aboutUsFirst/AboutUsFirst';
import FooterSection from '../components/Footer/Footer';
import RelatedWork from '../components/Related-work/Related-work';
import OurMission from '../components/OurMission/OurMission';
import OurValues from '../components/OurValues/Ourvalues';
import OurMissionSectionTelefon from '../telephone-components/ourMission-telefon/ourMission-telefon';
import AboutUsFirstSectionTelefon from '../telephone-components/aboutUsFirst-telefon/AboutUsFirst-telefon';
import RelatedWorkSection from '../telephone-components/Related-work-telefon/RelatedwWorkSectiontelefon';
import FooterSectiontelefon from '../telephone-components/Footer-telefon/FooterSection-telefon';
import AnimationTextSection from '../components/animation-text1/AnimationTextSection';  
import NavbarTelefon from '../telephone-components/Navbar-telefon/NavbarTelefon';
const About: React.FC = () => {
    return (
      <section className="aboutus-page mb-5">
            <NavbarTelefon/>
            <AboutUsFirst/>
            <AboutUsFirstSectionTelefon/>
            <AnimationTextSection/>
            <OurValues/>
            <OurMission/>
            <OurMissionSectionTelefon/>
            <RelatedWork/>
            <RelatedWorkSection/>
            <FooterSectiontelefon/>
            <FooterSection/>
      
      </section>
    );
  };
  
  export default About;