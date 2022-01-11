import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
import './Menu.scss';
import titleImage from "../../assets/images/title-img.png";
import prod1 from "../../assets/images/product-1.png";
import prod2 from "../../assets/images/product-2.png";
import prod3 from "../../assets/images/product-3.png";
import prod4 from "../../assets/images/product-4.png";
import prod5 from "../../assets/images/product-5.png";
import prod6 from "../../assets/images/product-6.png";

const Menu = () => {
  return (
    <section className='menu' id='menu'>
      <div className="heading">
        <img src={titleImage} alt=""/>
        <h3>Our menu</h3>
      </div>
      <div className="box-container">
        <div className="box" data-aos='fade-up' data-aos-delay='150'>
          <img src={prod1} alt=""/>
          <div className="content">
            <div className="stars">
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStarHalfAlt}/>
            </div>
            <h3>Cheese hamburger</h3>
            <div className="price">$29.99</div>
            <a href="#" className='btn'>Add to cart</a>
          </div>
        </div>
        <div className="box" data-aos='fade-up' data-aos-delay='300'>
          <img src={prod2} alt=""/>
          <div className="content">
            <div className="stars">
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStarHalfAlt}/>
            </div>
            <h3>Cheese hamburger</h3>
            <div className="price">$29.99</div>
            <a href="#" className='btn'>Add to cart</a>
          </div>
        </div>
        <div className="box" data-aos='fade-up' data-aos-delay='450'>
          <img src={prod3} alt=""/>
          <div className="content">
            <div className="stars">
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStarHalfAlt}/>
            </div>
            <h3>Cheese hamburger</h3>
            <div className="price">$29.99</div>
            <a href="#" className='btn'>Add to cart</a>
          </div>
        </div>
        <div className="box" data-aos='fade-up' data-aos-delay='600'>
          <img src={prod4} alt=""/>
          <div className="content">
            <div className="stars">
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStarHalfAlt}/>
            </div>
            <h3>Cheese hamburger</h3>
            <div className="price">$29.99</div>
            <a href="#" className='btn'>Add to cart</a>
          </div>
        </div>
        <div className="box" data-aos='fade-up' data-aos-delay='750'>
          <img src={prod5} alt=""/>
          <div className="content">
            <div className="stars">
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStarHalfAlt}/>
            </div>
            <h3>Cheese hamburger</h3>
            <div className="price">$29.99</div>
            <a href="#" className='btn'>Add to cart</a>
          </div>
        </div>
        <div className="box" data-aos='fade-up' data-aos-delay='900'>
          <img src={prod6} alt=""/>
          <div className="content">
            <div className="stars">
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStar}/>
              <FontAwesomeIcon className='icons' icon={faStarHalfAlt}/>
            </div>
            <h3>Cheese hamburger</h3>
            <div className="price">$29.99</div>
            <a href="#" className='btn'>Add to cart</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;