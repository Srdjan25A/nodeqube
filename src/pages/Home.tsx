import React from 'react';
import ServicesSection from '../components/Service/ServicesSection';
import WorkSection from '../components/Work-section/WorkSection';
import OurClientsSection from '../components/OurClients/OurClients';
import FooterSection from '../components/Footer/Footer';
import LetsTalkSection from '../components/LetsTalk/LetsTalk';
import WhatOurClients from '../components/WhatOurClients/WhatOurClients';
import OurWork from '../components/OurWork/OurWork';     
import AnimationTextSection from '../components/animation-text/AnimationTextSection';  
import LetsTalkSectionTelefon from '../telephone-components/letsTalk-telefon/LetsTalkSectionTelefon';
import FooterSectiontelefon from '../telephone-components/Footer-telefon/FooterSection-telefon';
import OurClientsSectionTelefon from '../telephone-components/ourClients-telefon/OurClientsSectionTelefon';
import WorkWorkSectiontelefon from '../telephone-components/Work-work-telefon/WorkWorkSectiontelefon';
import ServicesSectiontelefon from '../telephone-components/Service-telefon/ServicesSectionTelefon';
import WhatOurClientsTelefon from '../telephone-components/WhatOurClients-telefon/WhatOurClientstelefon';
import './home.css';
import AnimationTextSectionTelefon from "../telephone-components/animationText-telefon/AnimationText";
  const Home: React.FC = () => {
    return (
        <section className="home-page mb-5">
          <LetsTalkSection/>
          <LetsTalkSectionTelefon/>
          <AnimationTextSection/>
          <AnimationTextSectionTelefon/>
          <ServicesSection/>
          <ServicesSectiontelefon/>

          <OurWork/>

          <WorkSection/>
          <WorkWorkSectiontelefon/>

          <WhatOurClients/>
          <WhatOurClientsTelefon/>
          <OurClientsSection/>
          <OurClientsSectionTelefon/>
          <FooterSection/>
          <FooterSectiontelefon/>
        </section>
         
    );
  };
         
  export default Home;