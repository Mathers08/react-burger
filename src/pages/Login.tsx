import './Login.scss';
import {lockIcon, userIcon} from "../consts/typedIcons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import signImg from '../assets/images/sign.jpg';
import useInput from "../hooks/useInput";

const Login = () => {
  const username = useInput('');
  const password = useInput('');

  return (
    <div className='login'>
      <img src={signImg} alt=""/>
      <div className='login-box'>
        <h1>Login</h1>
        <div className="text-box">
          <FontAwesomeIcon className='icons' icon={userIcon}/>
          <input type="text" placeholder='Username' value={username.value} onChange={username.onChange}/>
        </div>
        <div className="text-box">
          <FontAwesomeIcon className='icons' icon={lockIcon}/>
          <input type="text" placeholder='Password' value={password.value} onChange={password.onChange}/>
        </div>
        <button className="btn">Sign In</button>
      </div>
    </div>
  );
};

export default Login;