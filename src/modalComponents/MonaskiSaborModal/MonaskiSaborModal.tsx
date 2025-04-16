import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './MonaskiSaborModal.css';
const MonaskisaborModal = () =>{
  return (
    <div
      className="modal fade"
      id="monaskiSaborModal"
      tabIndex={-1}
      aria-labelledby="monaskiSaborModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                className="fa-solid fa-x"></i></button>          </div>
          <div className="modal-body">
            <h2>Monastic Council</h2>
            <p className="size-paragraf">Monastic Council is a cultural platform celebrating Serbian monastic traditions, offering rich insights into history, spirituality, and architecture.</p>
            <div className="container">
              <div className="color-container-image">
                <img src="./Image Card61.png"></img>
              </div>
              <h3>Immersive storytelling</h3>
              <p className="second-paragraf">The website features a visually captivating design, using high-quality images and engaging narratives to bring the history and traditions of Serbian monasteries to life.</p>
              <div className="color-container-image title-top-padding">
                <img src="./Image Container81.png"></img>
              </div>
              <div className="row row-image-pop">
                <div className="col-md-4 color-container-one-column">
                  <img src="./image94.png"></img>
                </div>
                <div className="col-md-4  color-container-one-column">
                <img src="./image91.png"></img>
                </div>
                <div className="col-md-4  color-container-one-column">
                <img src="./image92.png"></img>
                </div>
              </div>
              <h3 className="h3-title-exception title-top-padding">Interactive monastery map</h3>
              <p className="second-paragraf">An interactive map allows users to explore Serbia’s monasteries by region, providing details about their history, significance, and visitor information in an easy-to-navigate format.</p>
              <div className="color-container-image title-top-padding">
                <img src="./Main Image Container42.png"></img>
              </div>
              <h3 className="h3-title-exception title-top-padding">Cultural and spiritual resources</h3>
              <p className="second-paragraf">The platform includes a dedicated section for articles, books, and videos, offering valuable resources for those interested in monastic life and Serbian heritage.</p>
              <div className="color-container-image title-top-padding">
                <img src="./Main Image Container43.png"></img>
              </div>
            </div>
            <div className="modal-container-footer modal-top-margin">
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

export default MonaskisaborModal;
