import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import titleImage from '../../assets/images/title-img.png';
import './Reviews.scss';
import axios from "axios";
import {starHalfAltIcon, starIcon} from "../../consts/typedIcons";
import {IReview} from "../../types/IReview";

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
        {items.map(({id, imageUrl, fullName, dataAosDelay, description}: IReview) => (
          <div key={id} className="box" data-aos='fade-up' data-aos-delay={dataAosDelay}>
            <img src={imageUrl} alt=""/>
            <h3>{fullName}</h3>
            <p>{description}</p>
            <div className="stars">
              <FontAwesomeIcon className='icon' icon={starIcon}/>
              <FontAwesomeIcon className='icon' icon={starIcon}/>
              <FontAwesomeIcon className='icon' icon={starIcon}/>
              <FontAwesomeIcon className='icon' icon={starIcon}/>
              <FontAwesomeIcon className='icon' icon={starHalfAltIcon}/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;