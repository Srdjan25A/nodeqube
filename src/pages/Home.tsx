import React from 'react';
import ServicesSection from '../components/Service/ServicesSection';
import WorkSection from '../components/Work-section/WorkSection';
import OurClientsSection from '../components/OurClients/OurClients';
import FooterSection from '../components/Footer/Footer';
import LetsTalkSection from '../components/LetsTalk/LetsTalk';
import WhatOurClients from '../components/WhatOurClients/WhatOurClients';
import OurWork from '../components/OurWork/OurWork';     
import AnimationTextSection from '../components/animation-text/AnimationTextSection';  
import './home.css';
  const Home: React.FC = () => {
    return (
        <section className="home-page mb-5">
          <LetsTalkSection/>
          <AnimationTextSection/>
          <ServicesSection/>
          <OurWork/>
          <WorkSection/>
          <WhatOurClients/>
          <OurClientsSection/>
          <FooterSection/>
        </section>
         
    );
  };
         
  export default Home;