import React, { useState } from "react";
import "./navlink.css";

const LinkIcon = props => {
  const [navState] = useState({
    nav: [
      { icon: props.icon },
      { text: props.text },
      { link: props.link },
      { isActive: props.active }
    ]
  });

  return (
    <div className="navLink">
      <div className="icon">{navState.nav[0].icon}</div>
      <div className="text-container">
        <p className="text">{navState.nav[1].text}</p>
      </div>
    </div>
  );
};
export default LinkIcon;
