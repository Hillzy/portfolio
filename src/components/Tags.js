import React from "react";
import "../App.css";

const Tags = props => {
  let tag = "";
  if (props.type === "open") {
    tag = "<" + props.tag + ">";
  }
  if (props.type === "close") {
    tag = "</" + props.tag + ">";
  }

  const tagClass = ["tagStyle"];
  if (props.indent === -1) {
    tagClass.push("tagIndentNeg");
  }
  if (props.indent === 0) {
    tagClass.push("tagIndentZero");
  }
  if (props.indent === 1) {
    tagClass.push("tagIndentOne");
  }
  if (props.indent === 2) {
    tagClass.push("tagIndentTwo");
  }

  return (
    <div className={tagClass.join(" ")}>
      <i>{tag}</i>
    </div>
  );
};
export default Tags;
