import React from 'react';
import titleImage from "../../assets/images/title-img.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import blog1 from '../../assets/images/blog-1.jpg';
import blog2 from '../../assets/images/blog-2.jpg';
import blog3 from '../../assets/images/blog-3.jpg';
import {faCalendar, faUser} from "@fortawesome/free-solid-svg-icons";
import './Blogs.scss';

const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
      <div className="heading">
        <img src={titleImage} alt=""/>
        <h3>Daily posts</h3>
      </div>
      <div className="box-container">
        <label>
          <input type="checkbox"/>
          <div className="box" data-aos='fade-up' data-aos-delay='150'>
            <div className='front'>
              <div className="image">
                <img src={blog1} alt=""/>
                <div className="icons">
                  <a href="#"><FontAwesomeIcon className='icon' icon={faCalendar}/>21st May, 2022</a>
                  <a href="#"><FontAwesomeIcon className='icon' icon={faUser}/>by Admin</a>
                </div>
              </div>
              <div className="content">
                <h3>Blog title goes here.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, sunt?</p>
              </div>
              <a href="#" className='btn rotate-btn'>Read more</a>

            </div>
            <div className='back'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex illo iste labore, laudantium
                libero molestiae nisi pariatur quia quibusdam reprehenderit totam. Earum et ipsam iure minima minus qui,
                saepe sed sequi veritatis. Adipisci dicta distinctio error et explicabo fugiat inventore iure nemo,
                placeat praesentium quasi, qui, quod vel. Consequuntur eius hic ipsum neque nobis, quis rem suscipit
                voluptates? Recusandae!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex illo iste labore, laudantium
                libero molestiae nisi pariatur quia quibusdam reprehenderit totam. Earum et ipsam iure minima minus qui,
                saepe sed sequi veritatis. Adipisci dicta distinctio error et explicabo fugiat inventore iure nemo,
                placeat praesentium quasi, qui, quod vel. Consequuntur eius hic ipsum neque nobis, quis rem suscipit
                voluptates? Recusandae!</p>
              <a href="#" className='btn rotate-btn'>Go back</a>
            </div>
          </div>
        </label>
        <label>
          <input type="checkbox"/>
          <div className="box" data-aos='fade-up' data-aos-delay='300'>
            <div className='front'>
              <div className="image">
                <img src={blog2} alt=""/>
                <div className="icons">
                  <a href="#"><FontAwesomeIcon className='icon' icon={faCalendar}/>21st May, 2022</a>
                  <a href="#"><FontAwesomeIcon className='icon' icon={faUser}/>by Admin</a>
                </div>
              </div>
              <div className="content">
                <h3>Blog title goes here.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, sunt?</p>
              </div>
              <a href="#" className='btn rotate-btn'>Read more</a>

            </div>
            <div className='back'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex illo iste labore, laudantium
                libero molestiae nisi pariatur quia quibusdam reprehenderit totam. Earum et ipsam iure minima minus qui,
                saepe sed sequi veritatis. Adipisci dicta distinctio error et explicabo fugiat inventore iure nemo,
                placeat praesentium quasi, qui, quod vel. Consequuntur eius hic ipsum neque nobis, quis rem suscipit
                voluptates? Recusandae!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex illo iste labore, laudantium
                libero molestiae nisi pariatur quia quibusdam reprehenderit totam. Earum et ipsam iure minima minus qui,
                saepe sed sequi veritatis. Adipisci dicta distinctio error et explicabo fugiat inventore iure nemo,
                placeat praesentium quasi, qui, quod vel. Consequuntur eius hic ipsum neque nobis, quis rem suscipit
                voluptates? Recusandae!</p>
              <a href="#" className='btn rotate-btn'>Go back</a>
            </div>
          </div>
        </label>
        <label>
          <input type="checkbox"/>
          <div className="box" data-aos='fade-up' data-aos-delay='450'>
            <div className='front'>
              <div className="image">
                <img src={blog3} alt=""/>
                <div className="icons">
                  <a href="#"><FontAwesomeIcon className='icon' icon={faCalendar}/>21st May, 2022</a>
                  <a href="#"><FontAwesomeIcon className='icon' icon={faUser}/>by Admin</a>
                </div>
              </div>
              <div className="content">
                <h3>Blog title goes here.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, sunt?</p>
              </div>
              <a href="#" className='btn rotate-btn'>Read more</a>

            </div>
            <div className='back'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex illo iste labore, laudantium
                libero molestiae nisi pariatur quia quibusdam reprehenderit totam. Earum et ipsam iure minima minus qui,
                saepe sed sequi veritatis. Adipisci dicta distinctio error et explicabo fugiat inventore iure nemo,
                placeat praesentium quasi, qui, quod vel. Consequuntur eius hic ipsum neque nobis, quis rem suscipit
                voluptates? Recusandae!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex illo iste labore, laudantium
                libero molestiae nisi pariatur quia quibusdam reprehenderit totam. Earum et ipsam iure minima minus qui,
                saepe sed sequi veritatis. Adipisci dicta distinctio error et explicabo fugiat inventore iure nemo,
                placeat praesentium quasi, qui, quod vel. Consequuntur eius hic ipsum neque nobis, quis rem suscipit
                voluptates? Recusandae!</p>
              <a href="#" className='btn rotate-btn'>Go back</a>
            </div>
          </div>
        </label>
      </div>
    </section>
  );
};

export default Blogs;