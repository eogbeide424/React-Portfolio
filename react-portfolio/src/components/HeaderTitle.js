import React from "react";

const styles = {
  sidebarHeading: {
    padding: " 10px 0",
    fontSize: "1.5em",
    lineHeight: "1.2",
    background: "linear-gradient(to right, #4CE2F9, #7D38C2)",
    color: "white",

    textAlign: "center",
  },
};
export var title = "";

function HeaderTitle({ title }) {
  return (
    <div className=" text-center">
      <h1 style={styles.sidebarHeading} className="header">
        {title}
      </h1>
    </div>
  );
}
export default HeaderTitle;
