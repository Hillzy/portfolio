import React from "react";
import Switch from "react-switch";
import Tags from "../components/Tags";
import "./home.css";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <div className="home">
      <div className="home-left">
        <Tags tag="html" type="open" indent={-1} />
        <Tags tag="body" type="open" indent={0} />
        <div className="home-text-container">
          <Tags tag="h1" type="open" indent={0} />
          <h1 className="home-title">
            Hi,
            <br />
            I'm <span className="home-text-highlight">Liam</span>,
            <br />a web developer
          </h1>
          <Tags tag="h1" type="close" indent={0} />
          <h5 className="home-subHeading">
            Front End Developer / Reactjs / HTML+CSS
          </h5>
          <Link to="/contact" className="home-cta">
            Contact me
          </Link>
        </div>
        <Tags tag="body" type="close" indent={0} />
        <Tags tag="html" type="close" indent={-1} />
      </div>
      <div className="home-right">
        <h5 className="home--right-themet">Dark Mode: </h5>
        <Switch
          onChange={props.toggleTheme}
          checked={props.checked}
          onColor="#feda6a"
          uncheckedIcon={false}
          checkedIcon={false}
          width={75}
        />
      </div>
    </div>
  );
};
export default Home;
