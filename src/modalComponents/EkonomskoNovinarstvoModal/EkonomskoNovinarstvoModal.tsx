import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './EkonomskoNovinarstvoModal.css';
const EkonomskoNovinarstvoModal = () => {
  return (
    <div
      className="modal fade"
      id="ekonomskoModal"
      tabIndex={-1}
      aria-labelledby="ekonomskoModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                className="fa-solid fa-x"></i></button>          </div>
          <div className="modal-body">
            <h2>Economic Journalism</h2>
            <p className="p-telekom-content">The “Economic Journalism” is an interactive project by the Faculty of Political Sciences and the weekly magazine Vreme, aimed at providing future young journalists with perspectives in the fields of economy and finance.</p>
            <div className="container">
              <div className="color-container-image">
                <img src="./Mask group11.png"></img>
              </div>
              <h3>Comprehensive educational program</h3>
              <p className="second-paragraf">The workshop brings together lecturers from major media outlets and companies with extensive experience in economics, economic writing, and data management. Through their expertise, they assist students in objectively and accurately reporting on business, entrepreneurship, and the economy. </p>
              <div className="color-container-image">
                <img src="./Main Image Container87.png"></img>
              </div>
              <h3 className="h3-title-exception">Practical experience and industry insight</h3>
              <p className="second-paragraf">Participants have the opportunity to engage directly with professionals, gaining firsthand experience and understanding of the challenges and nuances of economic journalism. This practical approach enhances their skills and prepares them for real-world reporting.</p>
              <div className="color-container-image exception-container-padding">
                <img src="./Image Container87.png"></img>
              </div>
              <h3>Support from academic and <br></br>media institutions</h3>
              <p className="second-paragraf">The project is strongly supported by the Faculty of Political Sciences, aiming to enrich existing journalism and communication studies with specialized knowledge in economic journalism. Additionally, Vreme magazine actively participates, offering internships and daily work opportunities to outstanding participants.</p>
              <div className="color-container-image exception-container-padding">
                <img src="./Main Image Container88.png"></img>
              </div>
              <div className="color-container-image ekonomsko-container-padding">
                <img src="./Image Container89.png"></img>
              </div>
              <h3>Engaging multimedia resources</h3>
              <p className="second-paragraf">The website features a gallery section with photos and videos from lectures, workshops, and visits to media houses, providing a comprehensive view of the program’s activities and the dynamic learning environment it fosters.</p>
              <div className="color-container-image exception-container-padding">
                <img src="./Image Container88.png"></img>
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

export default EkonomskoNovinarstvoModal;
