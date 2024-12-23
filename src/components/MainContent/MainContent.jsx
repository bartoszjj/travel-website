import React from "react";
import styles from "./MainContent.module.css";

function MainContent({ children }) {
  return <main className={styles.MainContent}>{children}</main>;
}

export default MainContent;
