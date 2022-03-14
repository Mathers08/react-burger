import {useState} from 'react';
import ReactCardFlip from "react-card-flip";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import aboutImage from '../../assets/images/about-img.png';
import './About.scss';
import {checkIcon} from "../../consts/typedIcons";

const About = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const toggleFlipped = () => setIsFlipped(!isFlipped);
  const headers = ['Best price', 'Best service', 'Fresh ingredient', 'Backed buns', 'Natural cheese', 'Veg & non-veg'];

  return (
    <section className="about" id='about'>
      <div className="image" data-aos='fade-right' data-aos-delay='150'>
        <img src={aboutImage} alt=""/>
      </div>
      <div className="content" data-aos='fade-left' data-aos-delay='300'>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div className="front">
            <h3 className="title">Step into burger heaven</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, aut consequuntur,
              deleniti, dicta dolor et ipsa laboriosam magnam molestiae natus obcaecati quaerat quas quos
              reprehenderit rerum sapiente soluta ullam voluptate.</p>
            <div className="icons">
              {headers.map(header => (
                <h3><FontAwesomeIcon className="icon" icon={checkIcon}/>{header}</h3>
              ))}
            </div>
            <button onClick={toggleFlipped} className='btn'>Read more</button>
          </div>
          <div className="back">
            <h3 className="title">Step into burger heaven</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis fuga nesciunt omnis praesentium
              veritatis? Dicta labore magni placeat quis repudiandae. Consequuntur earum eos error fugiat illo laborum
              minima nam nemo praesentium quis! Ab, ad architecto aspernatur consequuntur dicta distinctio ea explicabo
              iste laboriosam, maiores mollitia nostrum numquam praesentium provident quo sit unde. Ad adipisci aliquid
              asperiores aut, autem, consequatur dolorem doloremque eligendi illo iure odio quam quia quis, quod quos
              repudiandae suscipit. A, aliquam aliquid architecto asperiores assumenda aut beatae commodi deserunt fuga
              illo inventore itaque magni minus nihil, optio pariatur praesentium quasi quidem reiciendis
              reprehenderit.</p>
            <button onClick={toggleFlipped} className='btn'>Go back</button>
          </div>
        </ReactCardFlip>
      </div>
    </section>
  );
};

export default About;