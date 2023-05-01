import React from "react";
import "./PageBox.css";

const PageBox = (props) => {
  return (
    <>
      <div className="divider" id={props.id} />
      <div className="pagebox">{props.children}</div>
    </>
  );
};

export default PageBox;
