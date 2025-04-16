import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './TelekomSerbia.css';
const TelekomSerbiaModal = () => {
  return (
    <div
      className="modal fade"
      id="telekomSerbiaModal"
      tabIndex={-1}
      aria-labelledby="telekomSerbiaModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                className="fa-solid fa-x"></i></button>          </div>
          <div className="modal-body">
            <h2>Telekom Serbia Group</h2>
            <p className="p-telekom-content">Telekom Serbia Group is a leading telecommunications company in Southeast Europe, offering innovative services in mobile, internet, multimedia, and IT solutions.</p>
            <div className="container">
              <div className="color-container-image">
                <img src="./Section Image Container.png"></img>
              </div>
              <h3>Unified design for diverse services</h3>
              <p className="second-paragraf">The Telekom Serbia Group website integrates the company’s broad service portfolio under a cohesive design. With consistent branding, clean layouts, and clear calls-to-action, the site effectively communicates the group’s values and offerings.</p>
              <div className="color-container-image">
                <img src="./Section Image Container1.png"></img>
              </div>
              <h3 className="h3-title-exception">Engaging multimedia elements</h3>
              <p className="second-paragraf">Interactive banners and video content were strategically placed across key pages to grab attention and convey the technological leadership of Telekom Serbia. These elements provide a dynamic, modern user experience.</p>
              <div className="color-container-image exception-container-padding">
                <img src="./Section Image Container2.png"></img>
              </div>
              <h3>User-focused support section</h3>
              <p className="second-paragraf">The customer support area is designed for ease of use, featuring an intuitive FAQ, quick access to contact options, and a live chat feature. This focus ensures users can resolve issues efficiently.</p>
              <div className="color-container-image exception-container-padding">
                <img src="./Section Image Container3.png"></img>
              </div>
              <h3>Highlighting innovation and impact</h3>
              <p className="second-paragraf">Sections like “Our Innovations” and “Corporate Responsibility” utilize storytelling through visuals and metrics to showcase Telekom Serbia’s role as a leader in technology and its commitment to community impact.</p>
              <div className="color-container-image exception-container-padding">
                <img src="./Section Image Container4.png"></img>
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

export default TelekomSerbiaModal;
