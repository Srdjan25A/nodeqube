import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './GoinModal.css';
const GoinModal = () =>{
  return (
    <div
      className="modal fade"
      id="goinModal"
      tabIndex={-1}
      aria-labelledby="goinModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                className="fa-solid fa-x"></i></button>          </div>
          <div className="modal-body">
            <h2>Goin’ Mobile App</h2>
            <p className="p-telekom-content">Goin’ is a social app designed to help college students across America connect, make friends, and create lasting memories.</p>
            <div className="container">
              <div className="color-container-image">
                <img src="./Container33.png"></img>
              </div>
              <h3>Explore your campus with<br></br> an interactive map</h3>
              <p className="second-paragraf">The app’s interactive map helps users discover events, social hotspots, and nearby connections. With detailed pins and real-time updates, it’s never been easier to navigate your campus community.</p>
              <div className="color-container-image goinModal">
                <img src="./Container34.png"></img>
              </div>
              <h3>Engaging onboarding experience</h3>
              <p className="second-paragraf">The app features a quick and friendly onboarding process, allowing users to set up profiles, select interests, and start connecting within minutes. Vibrant visuals and clear instructions enhance the user journey.</p>
              <div className="color-container-image goinModal-second">
                <img src="./Container36.png"></img>
              </div>
              <div className="row row-image-pop">
                <div className="col-md-4 color-container-one-column">
                  <img src="./image40.png"></img>
                </div>
                <div className="col-md-4  color-container-one-column">
                <img src="./image41.png"></img>
                </div>
                <div className="col-md-4  color-container-one-column">
                <img src="./image42.png"></img>
                </div>
              </div>
              <h3>Interest-based connection discovery</h3>
              <p className="second-paragraf">A unique algorithm suggests connections based on shared interests, making it easy for students to find like-minded peers. Users can explore profiles, join group chats, and plan events effortlessly.</p>
              <div className="color-container-image">
                <img src="./Container48.png"></img>
              </div>
              <h3>Connection invites and<br></br> seamless chats</h3>
              <p className="goinModal-paragraf">The app allows users to send personalized connection invites, making it easy to reach out and start building friendships. Once connected, users can enjoy real-time chats with a clean, intuitive interface, perfect for casual conversations or deeper connections. Group chat options bring communities together, fostering a sense of belonging.</p>
              <div className="color-container-image">
                <img src="./Image Container50.png"></img>
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

export default GoinModal;
