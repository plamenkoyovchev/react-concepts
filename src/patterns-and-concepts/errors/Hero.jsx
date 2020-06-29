import React from "react";

const Hero = (props) => {
  const { name } = props;
  if (name === "plamen") {
    throw new Error("plamen is forbidden");
  }

  return <div>{name}</div>;
};

export default Hero;
