import React from "react";
import "./nav-item.styles.scss";

import { Home } from "react-feather";

export default function NavItem(props) {
  return <a className="nav-btn">{props.title}</a>;
}
