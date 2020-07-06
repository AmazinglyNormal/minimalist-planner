import React from "react";
import "./drawer.styles.scss";

import Nav from "../nav/nav.component";

export default function Drawer() {
  return (
    <div className="drawer">
      <Nav />

      <hr />
      <h6>Topics</h6>
      <ul>
        <li>Discrete Math</li>
        <li>Data Structures</li>
        <li>+ Add new topic</li>
      </ul>
    </div>
  );
}
