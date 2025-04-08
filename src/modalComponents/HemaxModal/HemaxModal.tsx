import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './HemaxModal.css';
const HemaxModal = () =>{
  return (
    <div
      className="modal fade"
      id="hemaxModal"
      tabIndex={-1}
      aria-labelledby="hemaxModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <h2>Humax E-commerce</h2>
            <p className="size-paragraf">Humax is a modern e-commerce platform offering a diverse selection of electronics and home solutions, designed to enhance everyday life.</p>
            <div className="container">
              <div className="color-container-image">
                <img src="./Container71.png"></img>
              </div>
              <h3>Smart product navigation</h3>
              <p className="second-paragraf">The website’s intuitive design allows users to seamlessly browse categories, from smart devices to home entertainment systems. A well-organized menu and search functionality make finding products quick and easy.</p>
              <div className="color-container-image">
                <img src="./Main Image Container31.png"></img>
              </div>
              <div className="row row-image-pop">
                <div className="col-md-4 color-container-one-column">
                  <img src="./image61.png"></img>
                </div>
                <div className="col-md-4  color-container-one-column">
                <img src="./image62.png"></img>
                </div>
                <div className="col-md-4  color-container-one-column">
                <img src="./image63.png"></img>
                </div>
              </div>
              <h3 className="h3-title-exception">Detailed product showcases</h3>
              <p className="second-paragraf">Each product page provides high-resolution images, comprehensive descriptions, and technical specifications, ensuring customers have all the information they need to make informed decisions.</p>
              <div className="color-container-image">
                <img src="./Main Image Container21.png"></img>
              </div>
              <div className="color-container-image">
                <img className="main22-image" src="./Main Image Background22.png"></img>
              </div>
              <h3>Customer-centric design</h3>
              <p className="second-paragraf">The platform prioritizes user experience with a responsive interface, helpful FAQs, and clear return policies, creating a smooth and transparent shopping journey.</p>
              <div className="color-container-image">
                <img src="./Main Image Container71.png"></img>
              </div>
              
            </div>
            <div className="modal-container-footer">
                <button className="custom-button-1">View Live Website <img className="button-elipse" src="Ellipse 10.png" alt="ellipse"></img><img className="button-arrow" src="Vector 4.png" alt="arrow"></img></button>        
            </div>
          </div>
          <div className="modal-footer">
                  <p className="first-close">Press ESC to close</p>
                  <p className="second-close">Click outside of the window to close</p>
                  <p>Click X on top right to close</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HemaxModal;