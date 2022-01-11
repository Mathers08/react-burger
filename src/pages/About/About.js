import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import aboutImage from '../../assets/images/about-img.png';
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import './About.scss';

const About = () => {
  return (
    <section className="about">
      <div className="image" data-aos='fade-right' data-aos-delay='150'>
        <img src={aboutImage} alt=""/>
      </div>
      <div className="content" data-aos='fade-left' data-aos-delay='300'>
        <h3 className="title">Step into burger heaven</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, aut consequuntur, deleniti, dicta dolor et ipsa laboriosam magnam molestiae natus obcaecati quaerat quas quos reprehenderit rerum sapiente soluta ullam voluptate.</p>
        <div className="icons">
          <h3><FontAwesomeIcon className="icon" icon={faCheck}/>Best price</h3>
          <h3><FontAwesomeIcon className="icon" icon={faCheck}/>Best service</h3>
          <h3><FontAwesomeIcon className="icon" icon={faCheck}/>Fresh ingredient</h3>
          <h3><FontAwesomeIcon className="icon" icon={faCheck}/>Backed buns</h3>
          <h3><FontAwesomeIcon className="icon" icon={faCheck}/>Natural cheese</h3>
          <h3><FontAwesomeIcon className="icon" icon={faCheck}/>Veg & non-veg</h3>
        </div>
        <a href="#" className='btn'>Read more</a>
      </div>
    </section>
  );
};

export default About;