import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './OurClientsSectionTelefon.css';

const OurClientsSectionTelefon: React.FC = () => {
    return(
        <div className='container ourClientsTelefon'>
            <h2>Trusted by Our Clients.</h2>
                <div className='row'>
                    <div className='col-4'>
                        <img src='aspen.png' alt='aspen'></img>
                    </div>
                    <div className='col-4 ourClientsColumn'>
                        <img src='mixal.png' alt='mixal'></img>
                    </div>
                    <div className='col-4'>
                        <img src='preserve.png' alt='preserve'></img>
                    </div>
                </div>
                <div className='row ourClientsRow'>
                    <div className='col-4'>
                        <img src='aspen.png' alt='aspen'></img>
                    </div>
                    <div className='col-4 ourClientsColumn'>
                        <img src='mixal.png' alt='mixal'></img>
                    </div>
                    <div className='col-4'>
                        <img src='preserve.png' alt='preserve'></img>
                    </div>
                </div>
        </div>
    );
}; export default OurClientsSectionTelefon;