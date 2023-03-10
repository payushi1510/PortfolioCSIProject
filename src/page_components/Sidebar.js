import React from "react";
import ButtonGroup from "./ButtonGroup";
import "../style/sidebar.css";

export default function Sidebar({ changeComponent, component }) {
  return (
    <div className="cover">
      <div className="sidebar">
        <span className="s_line"></span>
        <ButtonGroup
          buttons={["Home", "Works", "About" ,"Contact"]}
          doSomething={changeComponent}
          component={component}
        />
      </div>
    </div>
  );
}
