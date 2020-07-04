import React from "react";
import { useState, useEffect } from "react";

const HooksMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePositionHandler = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", logMousePositionHandler);

    return () => {
      window.removeEventListener("mousemove", logMousePositionHandler);
    };
  }, []);

  return (
    <div>
      (X - {x}; Y - {y})
    </div>
  );
};

export default HooksMouse;
