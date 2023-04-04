import React, { useState } from "react";
import "./Table2.css";
import data from "./mock-data.json";
import { useNavigate } from "react-router-dom";

const Table2=() => {
  const navigate = useNavigate();

  const handleClick = () => 
  {
    navigate("/table1");
  }

const [contacts, setContacts] = useState(data);

  return(
    <>
        <h1 id='title'>CALL HISTORY</h1>
        <div id="h">
          <h1 id='t'>Contact</h1>
        </div>
        <div className="app-contain">
          <table>
            <thead>
              <tr>
                <th>NAME</th>
                
                <th>Phone Number</th>
                <th>TIME</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
              <tr>
                <td>{contact.fullName}</td><td>{contact.phoneNumber}</td>
                <td>{contact.time}</td>
                
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div id='logout'>
          <button type="submit" className="btn btn-primary" id='out' onClick={handleClick}>
              BACK
          </button>
        </div>
    </>
  );
};
export default Table2;