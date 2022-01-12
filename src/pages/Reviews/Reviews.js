import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import titleImage from '../../assets/images/title-img.png';
import {faStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
import './Reviews.scss';
import axios from "axios";

const Reviews = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/dbReview.json')
      .then(res => setItems(res.data));
  });

  return (
    <section className="reviews" id="reviews">
      <div className="heading">
        <img src={titleImage} alt=""/>
        <h3>Testimonial</h3>
      </div>
      <div className="box-container">
        {items.map(item => (
          <div key={item.id} className="box" data-aos='fade-up' data-aos-delay={item.dataAosDelay}>
            <img src={item.imageUrl} alt=""/>
            <h3>{item.fullName}</h3>
            <p>{item.description}</p>
            <div className="stars">
              <FontAwesomeIcon className='icon' icon={faStar}/>
              <FontAwesomeIcon className='icon' icon={faStar}/>
              <FontAwesomeIcon className='icon' icon={faStar}/>
              <FontAwesomeIcon className='icon' icon={faStar}/>
              <FontAwesomeIcon className='icon' icon={faStarHalfAlt}/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;