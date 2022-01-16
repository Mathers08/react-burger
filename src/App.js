import {useEffect} from "react";
import './App.scss';
import AOS from 'aos';
import "aos/dist/aos.css";
import {Route, Routes} from "react-router-dom";
import {Favorites, Home, Orders} from "./pages";
import {Header} from "./components";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, []);

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
    </div>
  );
}

export default App;
