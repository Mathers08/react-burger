import { useEffect } from "react";
import './App.scss';
import {init} from 'aos';
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import { Favorites, Home, Login, Orders, Signup } from "./pages";
import { Header } from "./components";

const App = () => {
  useEffect(() => {
    init({
      duration: 800
    });
  }, []);

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
};

export default App;
