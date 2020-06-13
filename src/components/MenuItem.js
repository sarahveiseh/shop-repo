import React from "react";
import { Link, withRouter } from "react-router-dom";

import "../styles/menu-item.scss";

const MenuItem = ({ title, subtitle, history, linkURL, match }) => (
  <div
    className="menu-item"
    onClick={(s) => history.push(`${match.url}${linkURL}`)}
  >
    <div className="content">
      <h1 className="title"> {title} </h1>
      <p className="subtitle"> {subtitle} </p>
    </div>
  </div>
);

export default withRouter(MenuItem);
