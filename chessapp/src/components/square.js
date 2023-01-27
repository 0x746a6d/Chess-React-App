import React from "react";
import "../index.css";

/** 
*   Square is a stateless component
*   One square rendered in its color and piece if it exists
*       that information is received through props in the form of style object, onClick, 
*       and shade of sqaure. 
*/
export default function Square(props) {
  return (
    <button
      className={"square " + props.shade}
      onClick={props.onClick}
      style={props.style}
    ></button>
  );
}
