import React from 'react';
import {Card, Badge, CardBody} from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './BlogCard.css';
interface ProjectCardProps{
    title: string;
    category: string;
    imageUrl: string;
    time: string;
}
const BlogCard: React.FC<ProjectCardProps> =({title, category, imageUrl, time}) => {
    return(
        <div className="project-card-wrapper" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
           <Card className='text-white border-0'>
            <Card.Img src={imageUrl} alt={title} className="rounded" />
           </Card>
            <div>
                <Badge className='badge-category badge-category-blog top-0 end-0'>{category}</Badge>
                <span className="time"><img src="clock.svg" alt=""/>{time}</span>
            </div>
           <h4 className="title-card">{title}</h4>
        </div>
    );
};
export default BlogCard;
