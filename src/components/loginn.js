import React, { Component } from 'react'
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import image from '../components/whatsapp image.png';
import { useNavigate } from 'react-router-dom'; 

const Loginn = () => {
  const navigate = useNavigate();

  const handleClick = () => 
  {
    navigate("/");
  }

    return (
    <>
      <form className='auth-inner'>
        
        <img src={image}></img>
        <p id='title'>Create New Password</p>
        <div className="mb-3">
          <label>Set New Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="Set New Password"
            id='user'
          />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            id='pass'
          />
        </div>
        
        <br></br>
        <div className="d-grid">
          
        </div>
        <br></br>
        
        <div id='link'>
          
        </div>
        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" id='sign' onClick={handleClick}>
            SET
          </button>
        </div>
      </form>
    </>
    )
}

export default Loginn;