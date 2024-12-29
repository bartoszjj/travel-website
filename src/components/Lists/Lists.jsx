import React from "react";
import styles from "./Lists.module.css";

function Lists({ children }) {
  return <div className={styles.listsWrapper}>{children}</div>;
}

export default Lists;
