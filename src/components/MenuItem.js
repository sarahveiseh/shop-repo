import React from "react";

import "../styles/menu-item.scss";

const MenuItem = (props) => (
  <div className="menu-item">
    <div className="content">
      <h1 className="title"> {props.title} </h1>
      <br></br>
      <p className="subtitle"> {props.subtitle} </p>
    </div>
  </div>
);

export default MenuItem;
