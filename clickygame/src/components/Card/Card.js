import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <ul>
                <li>
                    <strong>Name:</strong> {props.name}
                </li>
                <li>
                    <strong>Type:</strong> {props.type}
                </li>
            </ul>
        </div>
    </div>
);

export default Card;