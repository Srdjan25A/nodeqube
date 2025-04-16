import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './PremierStyleModal.css';
const PremierStyleModal = () =>{
  return (
    <div
      className="modal fade"
      id="premierStyleModal"
      tabIndex={-1}
      aria-labelledby="premierStyleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                className="fa-solid fa-x"></i></button>          </div>
          <div className="modal-body">
            <h2>Premier Style</h2>
            <p className="p-telekom-content">Premier Style is a luxury interior design brand based in Switzerland, offering bespoke furniture and interior solutions for corporate spaces and high-end clients.</p>
            <div className="container">
              <div className="color-container-image">
                <img src="./Container1.png"></img>
              </div>
              <h3>Furniture saloon showcase</h3>
              <p className="second-paragraf">The website highlights Premier Style’s exclusive furniture saloon, featuring a curated collection of elegant designs. Each piece is displayed with detailed descriptions and high-quality images, emphasizing craftsmanship and luxury.</p>
              <div className="color-container-image">
                <img src="./Main Image Container2.png"></img>
              </div>
              <div className="row row-image-pop">
                <div className="col-md-4 color-container-one-column">
                  <img src="./image15.png"></img>
                </div>
                <div className="col-md-4  color-container-one-column">
                <img src="./image19.png"></img>
                </div>
                <div className="col-md-4  color-container-one-column">
                <img src="./image20.png"></img>
                </div>
              </div>
              <h3 className="h3-title-exception">Stylish living room designs</h3>
              <p className="second-paragraf">The website features an inspiring gallery of luxurious living room setups, blending modern elegance with comfort. Each design showcases Premier Style’s ability to create personalized spaces tailored to clients’ tastes. </p>
              <div className="color-container-image">
                <img src="./Frame55.png"></img>
              </div>
              <div className="color-container-image padding-last-premier">
                <img src="./Section Container22.png"></img>
              </div>
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

export default PremierStyleModal;
