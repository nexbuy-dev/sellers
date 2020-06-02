import React from "react";

const Scrollbar = (props) => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "5px solid white",
        marginBottom: "70px",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scrollbar;
