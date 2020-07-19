import React from "react";

const Button = ({ clickHandler, children }) => {
  console.log("Rendering Button");
  return <button onClick={clickHandler}>{children}</button>;
};

export default Button;
