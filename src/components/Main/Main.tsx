import React from 'react';
import burgerBanner from "../../assets/images/burger-baner.png";
import './Main.scss';

const Main = () => {
  return (
    <section className='home' id='home'>
      <div className="content">
        <img data-aos='fade-up' data-aos-delay='150' src={burgerBanner} alt=""/>
        <h3 data-aos='fade-up' data-aos-delay='300'>So meaty you'll crazy</h3>
        <p data-aos='fade-up' data-aos-delay='450'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eum illum labore magni, pariatur quae quasi sed vel veritatis voluptatibus.</p>
        <a data-aos='fade-up' data-aos-delay='600' href="#menu" className='btn'>Our menu</a>
      </div>
    </section>
  );
};

export default Main;