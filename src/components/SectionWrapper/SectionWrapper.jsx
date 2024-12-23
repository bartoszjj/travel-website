import React from "react";
import styles from "./SectionWrapper.module.css";

function SectionWrapper({ children }) {
  return <section className={styles.sectionWrapper}>{children}</section>;
}

export default SectionWrapper;
