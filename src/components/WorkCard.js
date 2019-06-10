import React from "react";
import "./workcard.css";

const workClass = ["workCard"];
const WorkCard = props => {
  const openWebsite = () => {
    if (props.URL) {
      window.open(props.URL, "_blank");
    }
  };

  const workClass = ["workCard"];
  if (props.num === 1) {
    workClass.push("item1");
  }
  if (props.num === 2) {
    workClass.push("item2");
  }
  if (props.num === 3) {
    workClass.push("item3");
  }
  if (props.num === 4) {
    workClass.push("item4");
  }
  if (props.num === 5) {
    workClass.push("item5");
  }
  if (props.num === 6) {
    workClass.push("item6");
  }
  if (props.num === 7) {
    workClass.push("item7");
  }
  if (props.num === 8) {
    workClass.push("item8");
  }
  return (
    <div className={workClass.join(" ")} onClick={openWebsite}>
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
