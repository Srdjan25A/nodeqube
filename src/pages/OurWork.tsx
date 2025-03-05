import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Card, ListGroup, Button } from "react-bootstrap";
import './OurWork.css';
import DeltaHoldingModal from "../modalComponents/DeltaHoldingModal/DeltaHoldingModal";
import FooterSection from '../components/Footer/Footer';
import ProjectCard from '../project-components/ProjectCard/ProjectCard';
import Navbar from '../components/Navbar/Navbar';
const projects = [
    { title: "Delta Holding", category: "website", imageUrl: "/DeltaHolding2.png", backgroundImage:"/Background-card.png" },
    { title: "Telekom Serbia", category: "website", imageUrl: "/TelekomSerbia2.png", backgroundImage:"/Background-card.png"  },
    { title: "Suneti", category: "webapp", imageUrl: "/Suneti.png", backgroundImage:"/Background-card.png"  },
    { title: "Premier Style", category: "website", imageUrl: "/PremierStyle2x.png", backgroundImage:"/Background-card.png"  },
    { title: "Goin'", category: "mobileapp", imageUrl: "/Mixal2.png", backgroundImage:"/Background-card.png"  },
    { title: "Mixal", category: "e-commerce", imageUrl: "/Goin2.png", backgroundImage:"/Background-card.png"  },
    { title: "Humax", category: "e-commerce", imageUrl: "/Humax.png", backgroundImage:"/Background-card.png"  },
    { title: "Monaski Sabor", category: "website", imageUrl: "/MonaskiSabor.png", backgroundImage:"/Background-card.png"  },
    { title: "Career Connect Website", category: "webapp", imageUrl: "/CareerConnectWebsite.png", backgroundImage:"/Background-card.png"  },
    { title: "Career Connect Web App", category: "webapp", imageUrl: "/CareerConnectWebApp.png", backgroundImage:"/Background-card.png"  },
    { title: "Ekonomsko Novinarstvo", category: "website", imageUrl: "/EkonomskoNovinarstvo.png", backgroundImage:"/Background-card.png"  },
    { title: "Gostudy", category: "website", imageUrl: "/GoStudy.png", backgroundImage:"/Background-card.png"  },

];
  
const OurWork: React.FC = () => {
   
    return (
        <section className='ourWork mb-5'>
            <div className='container ourwork-cards'>
                <div className='row'>
                    <div className='col-md-4'>
                      <Card className="card-work" style={{ width: "353px", background: "#38413C", color: "white" }}>
                         <Card.Title className="card-title-work">Project Categories:</Card.Title>
                         <ListGroup variant="flush">
                            {["All projects", "Websites", "Web Apps", "Mobile Apps", "E-commerce", "Branding"].map((category, index) => (
                                <ListGroup.Item key={index} className="list-group-item d-flex justify-content-between align-items-center bg-transparent text-white border-0">
                                {category}
                                <input type="checkbox" className="checkboxName"/>
                                </ListGroup.Item>
                            ))}
                         </ListGroup>
                        <Button className="button-item-card w-100">Reset Filters</Button>
                      </Card>
                    </div>
                    <div className='col-md-8'>
                        <div className='row'>
                            {projects.map((project, index)=>(
                                <div className='col-md-6 mb-3' key={index}>
                                    <ProjectCard {...project}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Navbar/>
            </div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
            <FooterSection/>
        </section>
    );
};
export default OurWork;