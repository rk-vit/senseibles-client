import React from "react";
import "./comp-css/Button.css";

function Button(props) {
  const [hovered, setHovered] = React.useState(false); // Use boolean state for hover

  return (
    <div>
      <button
        onMouseEnter={() => setHovered(true)} // Change to true on mouse enter
        onMouseLeave={() => setHovered(false)} // Change to false on mouse leave
        className={`button ${hovered ? "hovered" : ""}`} // Apply hover class
      >
        {props.text}
      </button>
    </div>
  );
}

export default Button;
