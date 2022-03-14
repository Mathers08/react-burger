import React, {useEffect, useState} from 'react';
import titleImage from "../../assets/images/title-img.png";
import './Blogs.scss';
import axios from "axios";
import Card from "./Card";

// @ts-ignore
function createEntry(props) {
  return <Card key={props.id} {...props} />
}

const Blogs = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchedItems = async () => {
      const {data} = await axios.get('http://localhost:3000/dbBlog.json');
      setItems(data);
    }
    fetchedItems();
  });

  return (
    <section className="blogs" id="blogs">
      <div className="heading">
        <img src={titleImage} alt=""/>
        <h3>Daily posts</h3>
      </div>
      <div className='box-container'>
        {items.map(createEntry)}
      </div>
    </section>
  );
};

export default Blogs;