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
    <h1 style={styles.sidebarHeading} className="sidebar-heading">
      {title}{" "}
    </h1>
  );
}
export default HeaderTitle;
