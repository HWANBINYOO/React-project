import React from "react";
import "./Button.css";

const Button = (props: any) => {
  return (
    <div
      className="Button"
      onClick={props.onClick}
      data-size={props.size}
      data-value={props.value}
    >
      {props.label}
    </div>
  );
};

export default Button;
