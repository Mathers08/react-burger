import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <a href="#home" className='btn'>Home</a>
        <a href="#menu" className='btn'>Menu</a>
        <a href="#about" className='btn'>About</a>
        <a href="#reviews" className='btn'>Reviews</a>
        <a href="#contact" className='btn'>Contact</a>
        <a href="#blogs" className='btn'>Blogs</a>
      </div>
      <p className="credit"> created by <span>Black Mathers</span> | all rights reserved! </p>
    </footer>
  );
};

export default Footer;