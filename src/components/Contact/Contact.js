import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import titleImage from "../../assets/images/title-img.png";
import {faEnvelope, faMap, faPhone} from "@fortawesome/free-solid-svg-icons";
import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="heading">
        <img src={titleImage} alt=""/>
        <h3>Contact us</h3>
      </div>
      <div className="row">
        <iframe data-aos='fade-up' data-aos-delay='150' className='map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8905.94019590696!2d39.19624670684949!3d51  .65615897854031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x413b2ef4f4d1daa1%3A0x4bc16196a2e1edf2!2z0KHQvtC70L3QtdGH0L3Ri9C5INCg0LDQuQ!5e0!3m2!1sru!2sru!4v1641906579834!5m2!1sru!2sru"
                allowFullScreen="" loading="lazy"/>
        <div className="form">
          <div className="icons-container">
            <div className="icons" data-aos='fade-up' data-aos-delay='150'>
              <FontAwesomeIcon className='icon' icon={faMap}/>
              <h3>Address :</h3>
              <p>Voronezh, Russia - 400104</p>
            </div>
            <div className="icons" data-aos='fade-up' data-aos-delay='300'>
              <FontAwesomeIcon className='icon' icon={faEnvelope}/>
              <h3>Email :</h3>
              <p>something@gmail.com</p>
              <p>someone@gmail.com</p>
            </div>
            <div className="icons" data-aos='fade-up' data-aos-delay='450'>
              <FontAwesomeIcon className='icon' icon={faPhone}/>
              <h3>Phone :</h3>
              <p>+8 951 123 45 67</p>
              <p>+8 951 123 45 67</p>
            </div>
          </div>
          <form action="">
            <input type="text" placeholder='Full Name' className='box'/>
            <input type="email" placeholder='Email' className='box'/>
            <input type="number" placeholder='Phone' className='box'/>
            <textarea name="" placeholder='Message' id="" cols="30" rows="10" className='box'/>
            <input type="submit" value='Send Message' className='btn'/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;