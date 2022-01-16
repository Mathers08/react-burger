import React, {useState} from 'react';
import logo from '../../assets/images/logo.png';
import {faBars, faHeart, faSearch, faShoppingCart, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Header.scss';
import {Link} from "react-router-dom";

const Header = () => {
  const [visibleSearch, setVisibleSearch] = useState(false);
  const toggleVisibleSearch = () => setVisibleSearch(!visibleSearch);
  const navItems = ['home', 'menu', 'about', 'reviews', 'contact', 'blogs'];
  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <header className='header'>
      <Link to='/'>
        <div className='logo'><img src={logo} alt=""/></div>
      </Link>

      <nav className="nav">
        {navItems.map(nav => (
          <a href={'#' + nav}>{capitalizeFirstLetter(nav)}</a>
        ))}
      </nav>

      <div className='btnBlock'>
        <FontAwesomeIcon className='icons' icon={visibleSearch ? faTimesCircle : faSearch} onClick={toggleVisibleSearch} id='search-btn'/>
        <Link to='/favorites'>
          <FontAwesomeIcon className='icons' icon={faHeart}/>
        </Link>
        <Link to='/orders'>
          <FontAwesomeIcon className='icons' icon={faShoppingCart}/>
        </Link>
        <FontAwesomeIcon className='icons' icon={faBars} id='menu-btn'/>
      </div>


      {visibleSearch &&
        <form action="" className="search-form">
          <input type="search" placeholder='Search here...' id='search-box'/>
          <label htmlFor="search-box"><FontAwesomeIcon className='icons' icon={faSearch}/></label>
        </form>
      }

    </header>
  );
};

export default Header;