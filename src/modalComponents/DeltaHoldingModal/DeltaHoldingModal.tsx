import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './DeltaHoldingModal.css';
const DeltaHoldingModal = () =>{
  return (
    <div
      className="modal fade"
      id="deltaHoldingModal"
      tabIndex={-1}
      aria-labelledby="deltaHoldingModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <h2>Delta Holding</h2>
            <p>Delta Holding is a leading Serbian company with a diverse portfolio in industries like transportation, agriculture, and retail.</p>
            <div className="container">
              <div className="color-container-image">
                <img src="./MacBook Air (2022).png"></img>
              </div>
              <h3>Streamlined Homepage Design</h3>
              <p className="second-paragraf">The homepage was designed to <b>clearly present</b> Delta Holding’s wide range of services, with an intuitive structure that guides users through its diverse business sectors. The layout ensures <b>visitors can easily access relevant content</b>, reinforcing the company’s professional image.</p>
              <div className="color-container-image">
                <img src="./Group 6972.png"></img>
              </div>
              <div className="row row-image-pop">
                <div className="col-md-4 color-container-one-column">
                  <img src="./image1.png"></img>
                </div>
                <div className="col-md-4  color-container-one-column">
                <img src="./image5.png"></img>
                </div>
                <div className="col-md-4  color-container-one-column">
                <img src="./image6.png"></img>
                </div>
              </div>
              <h3 className="h3-title-exception">Sector-Focused Navigation</h3>
              <p className="second-paragraf">The website navigation was customized to highlight each of Delta Holding’s business divisions. This approach allows users to quickly explore specific areas of interest, ensuring a smooth browsing experience.</p>
              <div className="container-one-image">
                <img src="./image3.png"></img>
              </div>
              <h3>Visual Storytelling <br></br>with a Professional Touch</h3>
              <p className="second-paragraf">Through carefully selected visuals and a clean design aesthetic, the site communicates Delta Holding’s values of innovation, professionalism, and reliability. The use of modern typography and brand-aligned colors enhances user engagement while maintaining corporate consistency.</p>
              <div className="container-one-image">
                <img src="./image4.png"></img>
              </div>
              <h3>Responsive and User - Friendly Experience</h3>
              <p className="second-paragraf">Through carefully selected visuals and a clean design aesthetic, the site communicates Delta Holding’s values of innovation, professionalism, and reliability. The use of modern typography and brand-aligned colors enhances user engagement while maintaining corporate consistency.</p>
              <div className="color-container-image">
                <img src="./Image Card.png"></img>
              </div>
              <div className="row row-image-pop">
                <div className="col-md-4 color-container-one-column">
                  <img src="./image8.png"></img>
                </div>
                <div className="col-md-4  color-container-one-column">
                <img src="./image9.png"></img>
                </div>
                <div className="col-md-4  color-container-one-column">
                <img src="./image10.png"></img>
                </div>
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

export default DeltaHoldingModal;