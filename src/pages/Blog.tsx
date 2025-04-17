import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '/clock.svg';
import NavbarTelefon from '../telephone-components/Navbar-telefon/NavbarTelefon';
import {Card, ListGroup, Button, Badge} from "react-bootstrap";
import './Blog.css';
import FooterSection from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import BlogCard from "../blog-components/BlogCard/BlogCard";
import NlIframe from "../components/NlIframe/NlIframe";
const blogs = [
    { title: "Why we love Webflow (And You Should, Too!)", category: "tips and tricks", imageUrl: "/DeltaHolding2.png", time:"5 min reading" },
    { title: "Why we love Webflow (And You Should, Too!)", category: "tips and tricks", imageUrl: "/TelekomSerbia2.png", time:"5 min reading"  },
    { title: "Why we love Webflow (And You Should, Too!)", category: "tips and tricks", imageUrl: "/Suneti.png", time:"5 min reading"  },
    { title: "Premier Style", category: "tips and tricks", imageUrl: "/PremierStyle2x.png", time:"5 min reading"  },
    { title: "Why we love Webflow (And You Should, Too!)'", category: "tips and tricks", imageUrl: "/Mixal2.png", time:"5 min reading"  },
    { title: "Why we love Webflow (And You Should, Too!)", category: "tips and tricks", imageUrl: "/Goin2.png", time:"5 min reading"  },
];

const Blog: React.FC = () => {

    return (
        <section className='ourWork mb-5'>
            <NavbarTelefon/>
            <div className='container ourwork-cards'>
                <div className="row">
                    <div className="col-md-6 featured-blog">
                        <img src="image (21).png" alt="" className="img-responsive"/>
                        <div>
                            <Badge className='badge-category badge-category-blog top-0 end-0'>tips and tricks</Badge>
                            <span className="time"><img src="clock.svg" alt=""/> 5 min reading</span>
                        </div>
                        <p className="p-blog-title">Why we love Webflow (And You Should, Too!)</p>
                    </div>
                    <div className="col-md-6 featured-blogs">
                        <h1>Featured Blogs</h1>
                        <div className="single-featured-blog">
                            <a href="#">
                                <p>Why we love Webflow (And You Should, Too!)</p>
                                <div>
                                    <span><img src="calendar.svg" alt=""/> 07.05.2025</span>
                                    <span className="time"><img src="clock.svg" alt=""/> 5 min reading</span>
                                </div>
                            </a>
                        </div>
                        <div className="single-featured-blog">
                            <a href="#">
                                <p>Why we love Webflow (And You Should, Too!)</p>
                                <div>
                                    <span><img src="calendar.svg" alt=""/> 07.05.2025</span>
                                    <span className="time"><img src="clock.svg" alt=""/> 5 min reading</span>
                                </div>
                            </a>
                        </div>
                        <div className="single-featured-blog">
                            <a href="#">
                                <p>Why we love Webflow (And You Should, Too!)</p>
                                <div>
                                    <span><img src="calendar.svg" alt=""/> 07.05.2025</span>
                                    <span className="time"><img src="clock.svg" alt=""/> 5 min reading</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                      <Card className="card-work" style={{ width: "353px", background: "#38413C", color: "white" }}>
                         <Card.Title className="card-title-work">Blog Categories:</Card.Title>
                         <ListGroup variant="flush">
                            {["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"].map((category, index) => (
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
                            {blogs.map((blog, index)=>(
                                <div className='col-md-6 mb-3' key={index}>
                                    <BlogCard {...blog}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Navbar/>
            </div>

            <div className="get-nl">
                <h3>Get our latest blogs straight to your inbox</h3>
                <NlIframe></NlIframe>
            </div>

            <FooterSection/>
        </section>
    );
};
export default Blog;
