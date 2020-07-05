import React from "react";
import { useState } from "react";
import HooksMouse from "./HooksMouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HooksMouse />}
    </div>
  );
};

export default MouseContainer;
