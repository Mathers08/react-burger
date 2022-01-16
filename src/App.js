import {useEffect} from "react";
import './App.scss';
import AOS from 'aos';
import "aos/dist/aos.css";
import {Footer, Header, Service} from "./components";
import {About, Blogs, Contact, Home, Menu, Reviews} from "./pages";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, []);

  return (
    <div>
      <Header/>
      <Home/>
      <Service/>
      <Menu/>
      <About/>
      <Reviews/>
      <Contact/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
