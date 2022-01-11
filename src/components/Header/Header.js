import React from 'react';
import logo from '../../assets/images/logo.png';
import {faBars, faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <FontAwesomeIcon id='menu-btn' className='icons' icon={faBars}/>
      <FontAwesomeIcon id='search-btn' className='icons' icon={faSearch}/>

      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <span className="space"/>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
        <a href="#blogs">Blogs</a>
      </nav>

      <a href="#"><FontAwesomeIcon className='icons' icon={faShoppingCart}/></a>
      <a href="#home" className='logo'><img src={logo} alt=""/></a>

      <form action="" className="search-form">
        <input type="search" placeholder='Search here...' id='search-box'/>
        <label htmlFor="search-box"><FontAwesomeIcon className='icons' icon={faSearch}/></label>
      </form>

    </header>
  );
};

export default Header;