import React from "react";
import "./workcard.css";

const WorkCard = props => {
  const openWebsite = () => {
    if (props.URL) {
      window.open(props.URL, "_blank");
    }
  };
  return (
    <div className="workCard" onClick={openWebsite}>
      <img src={props.imageSRC} />
      <div className="work-text">
        <h3>{props.title}</h3>
        <ul>
          {props.skills.map(txt => (
            <li>{txt}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default WorkCard;
