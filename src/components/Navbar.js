import React from "react";
import "./navbar.css";
import LinkIcon from "./LinkIcon.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCog,
  faEye,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const homeIcon = <FontAwesomeIcon icon={faHome} className="icon" />;
const aboutIcon = <FontAwesomeIcon icon={faUser} className="icon" />;
const skillsIcon = <FontAwesomeIcon icon={faCog} className="icon" />;
const workIcon = <FontAwesomeIcon icon={faEye} className="icon" />;
const contactIcon = <FontAwesomeIcon icon={faEnvelope} className="icon" />;

const Navbar = () => {
  return (
    <div className="Navbar">
      <NavLink to="/" exact activeClassName={"iconHighlight"}>
        <LinkIcon icon={homeIcon} text="Home" />
      </NavLink>
      <NavLink to="/about" exact activeClassName={"iconHighlight"}>
        <LinkIcon icon={aboutIcon} text="About" />
      </NavLink>
      <NavLink to="/mywork" exact activeClassName={"iconHighlight"}>
        <LinkIcon icon={workIcon} text="My Work" />
      </NavLink>
      <NavLink to="/contact" exact activeClassName={"iconHighlight"}>
        <LinkIcon icon={contactIcon} text="Contact" />
      </NavLink>
    </div>
  );
};
export default Navbar;
