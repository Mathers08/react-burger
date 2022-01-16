import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faShoppingCart, faStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
import './Menu.scss';
import titleImage from "../../assets/images/title-img.png";
import axios from "axios";

const Menu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchedItems = async () => {
      const {data} = await axios.get('http://localhost:3000/dbMenu.json');
      setItems(data);
    }
    fetchedItems();
  });

  return (
    <section className='menu' id='menu'>
      <div className="heading">
        <img src={titleImage} alt=""/>
        <h3>Our menu</h3>
      </div>
      <div className="box-container">
        {items.map(item => (
          <div key={item.id} className="box" data-aos='fade-up' data-aos-delay={item.dataAosDelay}>
            <img src={item.imageUrl} alt=""/>
            <div className="content">
              <div className="stars">
                <FontAwesomeIcon className='icons' icon={faStar}/>
                <FontAwesomeIcon className='icons' icon={faStar}/>
                <FontAwesomeIcon className='icons' icon={faStar}/>
                <FontAwesomeIcon className='icons' icon={faStar}/>
                <FontAwesomeIcon className='icons' icon={faStarHalfAlt}/>
              </div>
              <h3>{item.title}</h3>
              <div className="price">{item.price}</div>
              <div className='btnBlock'>
                <a href="#" className='btn btnInner'>
                  <p>Add to favorites</p>
                  <FontAwesomeIcon className='icons' icon={faHeart}/>
                </a>
                <a href="#" className='btn btnInner'>
                  <p>Add to cart</p>
                  <FontAwesomeIcon className='icons' icon={faShoppingCart}/>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;