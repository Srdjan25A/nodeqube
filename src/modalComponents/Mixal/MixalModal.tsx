import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './MixalModal.css';
const MixalModal = () =>{
  return (
    <div
      className="modal fade"
      id="mixalModal"
      tabIndex={-1}
      aria-labelledby="mixalModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <h2>Mixal E-Commerce</h2>
            <p className="p-telekom-content">Mixal is an e-commerce platform offering a wide range of products, from home essentials to trendy accessories, all designed to simplify and elevate daily life.</p>
            <div className="container">
              <div className="color-container-image">
                <img src="./Image Container46.png"></img>
              </div>
              <h3>User-friendly product browsing</h3>
              <p className="second-paragraf">The website features an intuitive layout, allowing users to easily browse categories and filter products by price, popularity, or ratings. High-quality images and detailed descriptions make shopping seamless.</p>
              <div className="color-container-image">
                <img src="./Main Image Container47.png"></img>
              </div>

              <h3 className="h3-title-exception">Extensive product catalog</h3>
              <p className="second-paragraf">The website offers a comprehensive selection of tools, including power tools, hand tools, and garden equipment from renowned brands like Bosch, Makita, and Stihl.</p>
              <div className="color-container-image">
                <img src="./Main Image Container48.png"></img>
              </div>
              <h3>Improved product navigation</h3>
              <p className= "improved-product-paragraf">Mixal’s website features a streamlined navigation system, enabling users to effortlessly explore categories and subcategories. With clear menus and smart organization, finding the right tools and equipment is faster and more convenient than ever.</p>
              <div className="color-container-image">
                <img src="./Main Image Container49.png"></img>
              </div>
              <div className="color-container-image mixal-padding-top">
                <img src="./Image Container60.png"></img>
              </div>
            </div>
            <div className="modal-container-footer">
                <button className="custom-button-1">View Live Web <img className="button-elipse" src="Ellipse 10.png" alt="ellipse"></img><img className="button-arrow" src="Vector 4.png" alt="arrow"></img></button>        
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

export default MixalModal;