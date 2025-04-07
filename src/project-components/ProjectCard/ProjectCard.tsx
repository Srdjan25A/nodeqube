import React from 'react';
import {Card, Badge, CardBody} from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './ProjectCard.css';
interface ProjectCardProps{
    title: string;
    category: string;
    imageUrl: string;
    backgroundImage: string;
    /* */
    modalTarget?: string;
}
const ProjectCard: React.FC<ProjectCardProps> =({title, category, imageUrl, backgroundImage, modalTarget}) => {
    return(
        <div className="project-card-wrapper"  {...(modalTarget
            ? { 'data-bs-toggle': 'modal', 'data-bs-target': modalTarget } // <-- Ako postoji modalTarget, dodeljujemo data-bs-toggle i data-bs-target
            : {})}>
           <Card className='text-white border-0' style={{ 
                                                                borderRadius: "25px",
                                                                backgroundImage: `url(${backgroundImage})`, 
                                                                backgroundSize: "cover", 
                                                                backgroundPosition: "center", 
                                                                backgroundRepeat: "no-repeat" 
                                                                }}>
            <Card.Img src={imageUrl} alt={title} className="rounded" />
            <Badge className='badge-category position-absolute top-0 end-0'>{category}</Badge>
            
           </Card>
           <h4 className="title-card">{title}</h4>
        </div> 
    );
};
export default ProjectCard;