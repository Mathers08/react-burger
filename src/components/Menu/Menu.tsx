import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Menu.scss';
import titleImage from "../../assets/images/title-img.png";
import axios from "axios";
import {Modal} from "../index";
import {Link} from "react-router-dom";
import {heartIcon, shoppingCartIcon, starHalfAltIcon, starIcon} from "../../consts/typedIcons";
import {IMenu} from "../../types/IMenu";

const Menu = () => {
  const [items, setItems] = useState([]);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const onModalClick = () => setModalActive(true);

  useEffect(() => {
    const fetchedItems = async () => {
      const {data} = await axios.get('http://localhost:3000/dbMenu.json');
      setItems(data);
    };
    fetchedItems();
  }, [modalActive]);

  return (
    <section className="menu" id="menu">
      <div className="heading">
        <img src={titleImage} alt=""/>
        <h3>Our menu</h3>
      </div>
      <div className="box-container">
        {items.map(({id, imageUrl, title, price, dataAosDelay}: IMenu) => (
          <div key={id} className="box" data-aos="fade-up" data-aos-delay={dataAosDelay}>
            <img src={imageUrl} alt=""/>
            <div className="content">
              <div className="stars">
                <FontAwesomeIcon className="icons" icon={starIcon}/>
                <FontAwesomeIcon className="icons" icon={starIcon}/>
                <FontAwesomeIcon className="icons" icon={starIcon}/>
                <FontAwesomeIcon className="icons" icon={starIcon}/>
                <FontAwesomeIcon className="icons" icon={starHalfAltIcon}/>
              </div>
              <h3>{title}</h3>
              <div className="price">{price}</div>
              <div className="btnBlock">
                <a onClick={onModalClick} className="btn btnInner">
                  <p>Add to favorites</p>
                  <FontAwesomeIcon className="icons" icon={heartIcon}/>
                </a>
                <a onClick={onModalClick} className="btn btnInner">
                  <p>Add to cart</p>
                  <FontAwesomeIcon className="icons" icon={shoppingCartIcon}/>
                </a>
              </div>

            </div>
          </div>
        ))}
        <Modal active={modalActive} setActive={setModalActive}>
          <p>Войдите в аккаунт, чтобы делать заказы и добавлять в избранные!</p>
          <Link to="/login">
            <a className="btn">Sign in</a>
          </Link>
          <Link to="/signup">
            <a className="btn">Sign up</a>
          </Link>
        </Modal>
      </div>
    </section>
  );
};

export default Menu;