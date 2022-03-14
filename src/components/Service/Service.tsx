import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Service.scss';
import {hamburgerIcon, headsetIcon, shippingFastIcon} from "../../consts/typedIcons";

const Service = () => {
  return (
    <section className='service' id='service'>
      <div className="box" data-aos='fade-up' data-aos-delay='150'>
        <FontAwesomeIcon className='icon' icon={hamburgerIcon}/>
        <h3>Best Quality</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quisquam?</p>
      </div>
      <div className="box" data-aos='fade-up' data-aos-delay='300'>
        <FontAwesomeIcon className='icon' icon={shippingFastIcon}/>
        <h3>Free Delivery</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quisquam?</p>
      </div>
      <div className="box" data-aos='fade-up' data-aos-delay='450'>
        <FontAwesomeIcon className='icon' icon={headsetIcon}/>
        <h3>24/7 support</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quisquam?</p>
      </div>
    </section>
  );
};

export default Service;