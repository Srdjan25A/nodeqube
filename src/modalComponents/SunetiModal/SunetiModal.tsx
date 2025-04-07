import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './SunetiModal.css';
const SunetiModal = () => {
  return (
    <div
      className="modal fade"
      id="sunetiModal"
      tabIndex={-1}
      aria-labelledby="sunetiModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <h2>Suneti Web App</h2>
            <p className="p-telekom-content">Suneti is a powerful web app designed for tracking vessel schedules and container movements, providing real-time data and detailed analytics for efficient maritime operations.</p>
            <div className="container">
              <div className="color-container-image">
                <img src="./Image Container.png"></img>
              </div>
              <h3>Dashboard with actionable insights</h3>
              <p className="second-paragraf">The main dashboard provides a clear overview of vessel schedules, real-time updates, and key metrics. Color-coded statuses and intuitive charts ensure users can quickly access critical information.</p>
              <div className="color-container-image">
                <img src="./Section Image Container7.png"></img>
              </div>
              <h3 className="h3-title-exception">Advanced tracking and analytics</h3>
              <p className="second-paragraf">The tracking module enables detailed monitoring of container movements, with filters and visual graphs that simplify complex data. This functionality empowers users to make informed logistical decisions.</p>
              <div className="color-container-image exception-container-padding">
                <img src="./Section Image Container8.png"></img>
              </div>
              <h3>Efficient and user-friendly interface</h3>
              <p className="second-paragraf">Designed with simplicity in mind, the navigation system ensures quick access to core features like schedules, reports, and alerts. The clean layout reduces user effort and enhances productivity.</p>
              <div className="color-container-image exception-container-padding">
                <img src="./Section Image Container9.png"></img>
              </div>
              <h3>Comprehensive load data with cargo preview</h3>
              <p className="second-paragraf">The app enables users to input and manage detailed load information, including container ID, weight, destination, and delivery status. A cargo preview feature provides a visual summary of the load, helping users verify details and ensure accurate shipment tracking.</p>
              <div className="color-container-image exception-container-padding">
                <img src="./Section Image Container10.png"></img>
              </div>
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

export default SunetiModal;