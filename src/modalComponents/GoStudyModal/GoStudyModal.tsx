import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './GoStudyModal.css';
const GoStudyModal = () => {
  return (
    <div
      className="modal fade"
      id="goStudyModal"
      tabIndex={-1}
      aria-labelledby="goStudyModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <h2>GOstudy Platform</h2>
            <p className="p-telekom-content">GOstudy is a free educational platform offering online courses and tools in digital marketing, entrepreneurship, sales, and digital technologies, aimed at enhancing the knowledge and business skills of its users.</p>
            <div className="container">
              <div className="color-container-image">
                <img src="./Image 1.png"></img>
              </div>
              <h3>Diverse course offerings</h3>
              <p className="second-paragraf">The platform provides a wide range of educational modules across various fields, including entrepreneurship, digital marketing, new technologies, and business skills. Users can explore courses such as “Digital Marketing,” “SEO for Beginners,” “E-commerce/Internet Sales,” and “Project Management: A Guide to Successful Project Management.”</p>
              <div className="color-container-image last-gostudy">
                <img src="./Image Container76.png"></img>
              </div>
              <h3 className="h3-title-exception">User experiences</h3>
              <p className="second-paragraf">Participants have expressed appreciation for the free access to knowledge, detailed course content, and practical insights provided by GOstudy. Testimonials highlight the platform’s effectiveness in delivering comprehensive education in an accessible manner.</p>
              <div className="color-container-image exception-container-padding">
                <img src="./Image Container77.png"></img>
              </div>
              <h3>Accessible learning</h3>
              <p className="second-paragraf">GOstudy is designed for anyone looking to improve their skills in digital marketing and entrepreneurship, regardless of prior experience. The platform offers free registration and access to all courses, making it an inclusive resource for personal and professional development.</p>
              <div className="color-container-image exception-container-padding">
                <img src="./Image Container78.png"></img>
              </div>
              <div className="color-container-image ekonomsko-container-padding">
                <img src="./final.png"></img>
              </div>
            </div>
            <div className="modal-container-footer">
                <button className="custom-button-1">View Live Website <img className="button-elipse" src="Ellipse 10.png" alt="ellipse"></img><img className="button-arrow" src="Vector 4.png" alt="arrow"></img></button>        
            </div>
          </div>
          <div className="modal-footer exception-footer-padding">
                  <p className="first-close">Press ESC to close</p>
                  <p className="second-close">Click outside of the window to close</p>
                  <p>Click X on top right to close</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoStudyModal;