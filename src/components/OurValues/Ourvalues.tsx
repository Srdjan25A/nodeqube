import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './OurValues.css';

const OurValues: React.FC = () =>{
    return (
        <div className='container ourValuesContainer'>
            <h2>Our Values</h2>
            <div className='row'>
                <div className='col-md-3 ourValuesColumn'>
                    <img className='image-values' src='Icon.png' alt='icon'></img>
                    <h3 className='ourValues-subtitle'>Innovative Design</h3>
                    <p className='ourValues-text'>Creative and cutting-edge.</p>
                </div>
                <div className='col-md-3 ourValuesColumn'>
                    <img className='image-values' src='Vector (1).png' alt='icon'></img>
                    <h3 className='ourValues-subtitle'>Human Centric</h3>
                    <p className='ourValues-text'>Your Vision, our goal.</p>
                </div>
                <div className='col-md-3 ourValuesColumn'>
                    <img className='image-values' src='Group (9).png' alt='icon'></img>
                    <h3 className='ourValues-subtitle'>Proven Expertise</h3>
                    <p className='ourValues-text'>Experienced and reliable.</p>
                </div>
                <div className='col-md-3 ourValuesColumn'>
                    <img className='image-values' src='Vector (2).png' alt='icon'></img>
                    <h3 className='ourValues-subtitle'>Eco-Friendly</h3>
                    <p className='ourValues-text'>Sustainable Solutions</p>
                </div>
            </div>
        </div>
    );
};
export default OurValues;