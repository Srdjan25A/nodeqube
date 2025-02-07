import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './OurMission.css';

const OurMission: React.FC = () =>{
    return (
        <div className='main-mission-container container'>
           <div className='row'>
                <div className='col-md-6'>
                    <img src="Vector (4).png" alt="vector"></img>
                </div>
                <div className='col-md-6 second-mission-column'>
                        <h2>Our Mission</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Tortor gravida ut venenatis leo pharetra pretium ante. Amet feugiat mauris facilisi pulvinar. Tortor purus odio nunc mi vitae nam. At vel lectus eget blandit. Viverra pellentesque mollis proin lectus nibh sagittis est ac gravida. Nulla tincidunt aliquam sit porta interdum. Praesent sapien at ipsum sed.</p>
                        <p>Lorem ipsum dolor sit amet consectetur. Tortor gravida ut venenatis leo pharetra pretium ante. Amet feugiat mauris facilisi pulvinar. Tortor purus odio nunc mi vitae nam. At vel lectus eget blandit. Viverra pellentesque mollis proin lectus nibh sagittis est ac gravida. Nulla tincidunt aliquam sit porta interdum. Praesent sapien at ipsum sed.</p>
                </div>
            
           </div>
        </div>
       
    );
};
export default OurMission;