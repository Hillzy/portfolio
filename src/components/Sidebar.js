import React from "react";
import "./sidebar.css";

import Navbar from "./Navbar";

const Sidebar = () => {
  return (
    <div className="Sidebar-container">
      <div className="sidebar">
        <div className="navbar">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
