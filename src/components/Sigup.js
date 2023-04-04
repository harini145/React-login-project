import React, { Component } from 'react'
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import image from '../components/whatsapp image.png';
import { useNavigate } from 'react-router-dom';

const Sigup = () => {
  const navigate = useNavigate();

  const handleClick = () => 
  {
    navigate("/");
  }

    return (
    <>
      <form className='auth-inner'>
        <img src={image}></img>
        <p id='title'>Create a New Account</p>
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
          <label>Email Address:</label>
          <input
            type="Email"
            className="form-control"
            placeholder="Email Address"
            id='pass'
          />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            id='user'
          />
        </div>
        
        <br></br>
        <div className="d-grid">
         
        </div>
        <br></br>
        
        <div id='link'>
          
        </div>
       
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" id='sign' onClick={ handleClick}>
            Start
          </button>
        </div>
      </form>
    </>
    )
}

export default Sigup;