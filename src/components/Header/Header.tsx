import React, {useState} from 'react';
import logo from '../../assets/images/logo.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Header.scss';
import {Link} from "react-router-dom";
import {barsIcon, heartIcon, searchIcon, shoppingCartIcon, timesCircleIcon, userIcon} from "../../consts/typedIcons";
import {useTypedSelector} from "../../hooks";

const Header = () => {
  const {isAuth} = useTypedSelector(state => state.auth)
  const [visibleSearch, setVisibleSearch] = useState<boolean>(false);
  const toggleVisibleSearch = () => setVisibleSearch(!visibleSearch);
  const navItems = ['home', 'menu', 'about', 'reviews', 'contact', 'blogs'];
  const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

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
        <FontAwesomeIcon className='icons' icon={visibleSearch ? timesCircleIcon : searchIcon}
                         onClick={toggleVisibleSearch} id='search-btn'/>
        {isAuth ?
          <>
            <Link to='/favorites'>
              <FontAwesomeIcon className='icons' icon={heartIcon}/>
            </Link>
            <Link to='/orders'>
              <FontAwesomeIcon className='icons' icon={shoppingCartIcon}/>
            </Link>
            <Link to='/user'>
              <FontAwesomeIcon className='icons' icon={userIcon}/>
            </Link>
          </>
          :
          <>
            <Link to='/login'>
              <a className='btn'>Sign in</a>
            </Link>
            <Link to='/signup'>
              <a className='btn'>Sign up</a>
            </Link>
          </>
        }
        <FontAwesomeIcon className='icons' icon={barsIcon} id='menu-btn'/>
      </div>

      {visibleSearch &&
      <form action="" className="search-form">
        <input type="search" placeholder='Search here...' id='search-box'/>
        <label htmlFor="search-box"><FontAwesomeIcon className='icons' icon={searchIcon}/></label>
      </form>
      }

    </header>
  );
};

export default Header;