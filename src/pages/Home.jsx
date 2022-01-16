import React from 'react';
import {About, Blogs, Contact, Footer, Main, Menu, Reviews, Service} from "../components";

const Home = () => {
  return (
    <div>
      <Main/>
      <Service/>
      <Menu/>
      <About/>
      <Reviews/>
      <Contact/>
      <Blogs/>
      <Footer/>
    </div>
  );
};

export default Home;