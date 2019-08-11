import React from "react";
import "./Box.css";

const Box = props => {
  let style = {
    backgroundColor: props.color,
    width: `${props.width}px`,
    height: `${props.height}px`
  };

  return (
    <div className="Box">
      <div style={style}>
        <button>x</button>
      </div>
    </div>
  );
};

export default Box;
