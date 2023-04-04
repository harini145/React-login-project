import React, { useState } from "react";
import "./Table1.css";
import data from "./mock-data.json";
import image from '../components/whatsapp image.png';
import { useNavigate } from "react-router-dom";

const Table1=() => {
  const navigate = useNavigate();

  const handleClick = () => 
  {
    navigate("/table2");
  }
  const handleClick1 = () => 
  {
    navigate("/j");
  }

const [contacts, setContacts] = useState(data);

  return(
    <>
        <h1 id='title'>Contact</h1>
        <div id="h">
        
        <img src={image}></img> 
           
        </div>
        <p className="forgot-password text-right" id="forget">
        <a><button onClick={handleClick}>CALL</button></a>
        </p>
        <div className="app-contain">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
              <tr>
                <td>{contact.id}</td>
                <td>{contact.fullName}</td>
                <td>{contact.email}</td>
                <td>{contact.phoneNumber}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div id='logout'>
          <button type="submit" className="btn btn-primary" id='out' onClick={handleClick1}>
              LOGOUT
          </button>
        </div>
    </>
  );
};
export default Table1;