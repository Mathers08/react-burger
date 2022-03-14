import React, {useState} from 'react';
import './Blogs.scss';
import ReactCardFlip from "react-card-flip";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {calendarIcon, userIcon} from "../../consts/typedIcons";
import {ICard} from "../../types/ICard";

const Card = ({imageUrl, dataAosDelay, date, createdBy, title, infoFront, infoBack}: ICard) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const toggleIsFlipped = () => setIsFlipped(!isFlipped);

  return (
    <div className="box" data-aos='fade-up' data-aos-delay={dataAosDelay}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className='front'>
          <div className="image">
            <img src={imageUrl} alt=""/>
            <div className="icons">
              <a href="#"><FontAwesomeIcon className='icon' icon={calendarIcon}/>{date}</a>
              <a href="#"><FontAwesomeIcon className='icon' icon={userIcon}/>{createdBy}</a>
            </div>
          </div>
          <div className="content">
            <h3>{title}</h3>
            <p>{infoFront}</p>
          </div>
          <button className='btn' onClick={toggleIsFlipped}>Read more</button>
        </div>
        <div className='back'>
          <h3>{title}</h3>
          <p>{infoBack}</p>
          <button className='btn' onClick={toggleIsFlipped}>Go back</button>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Card;