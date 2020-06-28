import React, { memo } from "react";

// React.memo is the functional component alternative of PureComponent for class components

const MemoComponent = (props) => {
  console.log("MemoComponent render");

  return <div>{`MemoComponent ${props.name}`}</div>;
};

export default memo(MemoComponent);
