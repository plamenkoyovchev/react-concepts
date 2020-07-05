import React from "react";
import { useContext } from "react";
import { UserContext } from "../../patterns-and-concepts/context/userContext";

const ComponentZ = () => {
  const username = useContext(UserContext);

  return <div>{username}</div>;
};

export default ComponentZ;
