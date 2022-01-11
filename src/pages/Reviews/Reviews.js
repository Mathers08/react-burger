import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import titleImage from '../../assets/images/title-img.png';
import pic1 from '../../assets/images/pic-1.png';
import pic2 from '../../assets/images/pic-2.png';
import pic3 from '../../assets/images/pic-3.png';
import {faStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
import './Reviews.scss';

const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      <div className="heading">
        <img src={titleImage} alt=""/>
        <h3>Testimonial</h3>
      </div>
      <div className="box-container">
        <div className="box" data-aos='fade-up' data-aos-delay='150'>
          <img src={pic1} alt=""/>
          <h3>John Deo</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi eaque error ipsum maxime numquam officia porro ratione. Eaque, sed!</p>
          <div className="stars">
            <FontAwesomeIcon className='icon' icon={faStar}/>
            <FontAwesomeIcon className='icon' icon={faStar}/>
            <FontAwesomeIcon className='icon' icon={faStar}/>
            <FontAwesomeIcon className='icon' icon={faStar}/>
            <FontAwesomeIcon className='icon' icon={faStarHalfAlt}/>
          </div>
        </div>
        <div className="box" data-aos='fade-up' data-aos-delay='300'>
          <img src={pic2} alt=""/>
          <h3>John Deo</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi eaque error ipsum maxime numquam officia porro ratione. Eaque, sed!</p>
          <div className="stars">
            <FontAwesomeIcon className='icon' icon={faStar}/>
            <FontAwesomeIcon className='icon' icon={faStar}/>
            <FontAwesomeIcon className='icon' icon={faStar}/>
            <FontAwesomeIcon className='icon' icon={faStar}/>
            <FontAwesomeIcon className='icon' icon={faStarHalfAlt}/>
          </div>
        </div>
        <div className="box" data-aos='fade-up' data-aos-delay='450'>
          <img src={pic3} alt=""/>
          <h3>John Deo</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi eaque error ipsum maxime numquam officia porro ratione. Eaque, sed!</p>
          <div className="stars">
            <FontAwesomeIcon className='icon' icon={faStar}/>
            <FontAwesomeIcon className='icon' icon={faStar}/>
            <FontAwesomeIcon className='icon' icon={faStar}/>
            <FontAwesomeIcon className='icon' icon={faStar}/>
            <FontAwesomeIcon className='icon' icon={faStarHalfAlt}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;