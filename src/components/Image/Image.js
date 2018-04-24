import React from "react";
import "./Image.css";

const Image = props => (
  <div className="image">
      <img id={props.id} src={props.image}
        onClick={() => props.handleCharacterChange(props.id)} alt="clicky game" />
  </div>
);

export default Image;