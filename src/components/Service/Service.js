import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Service.scss';
import {faHamburger, faHeadset, faShippingFast} from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  return (
    <section className='service' id='service'>
      <div className="box" data-aos='fade-up' data-aos-delay='150'>
        <FontAwesomeIcon className='icon' icon={faHamburger}/>
        <h3>Best Quality</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quisquam?</p>
      </div>
      <div className="box" data-aos='fade-up' data-aos-delay='300'>
        <FontAwesomeIcon className='icon' icon={faShippingFast}/>
        <h3>Free Delivery</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quisquam?</p>
      </div>
      <div className="box" data-aos='fade-up' data-aos-delay='450'>
        <FontAwesomeIcon className='icon' icon={faHeadset}/>
        <h3>24/7 support</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quisquam?</p>
      </div>
    </section>
  );
};

export default Service;