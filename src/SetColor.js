import React from "react";

const SetColor = ({ color, setColor }) => {
  return (
    <input 
    id="setColor"
    type="text" 
    value={color} 
    placeholder="Add color name"
    onChange={(e) => setColor(e.target.value)} />
     
  );
};

export default SetColor;
