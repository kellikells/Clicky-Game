import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <span onClick={() => props.removeFriend(props.id)} className="remove">

        <img alt={props.name} src={props.image} />
        </span>
      </div>
      {/* <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div> */}
    
        
 
    </div>
  );
}

export default Card;
