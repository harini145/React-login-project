import React, { Component } from 'react'
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import image from '../components/whatsapp image.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => 
  {
    navigate("/loginn");
  }
  const handleClick1 = () => 
  {
    navigate("/table1");
  }
  const handleClick2 = () => 
  {
    navigate("/signup");
  }

    return (
    <>
      <form className='auth-inner'>
        
        <img src={image}></img>
        <p id='title'>Please login or sign up to continue</p>
        <div className="mb-3">
          <label>Phone-number:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Phone-number"
            id='user'
          />
        </div>
        <div className="mb-3">
          <label>OTP</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter OTP"
            id='pass'
          />
        </div>
        <p className="forgot-password text-right" id="forget">
        <a onClick={handleClick}>Forgot Password?</a>
        </p>
        <br></br>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" id='sign' onClick={handleClick1}>
            LOGIN IN
          </button>
        </div>
        <br></br>
        <p id='title'>if you are new user sign up to create an account</p>
        <div id='link'>
          
        </div>
        <p id='title'>or</p>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" id='sign' onClick={handleClick2}>
            SIGN UP
          </button>
        </div>
      </form>
    </>
    )
}

export default Login;