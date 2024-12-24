import React from "react";
import styles from "./SectionWrapper.module.css";

function SectionWrapper({ color, children }) {
  const colors = ["primary", "secondary"];
  const colorClass = colors.includes(color) ? color : undefined;

  return (
    <section className={`${styles.sectionWrapper} ${styles[colorClass]}`}>
      {children}
    </section>
  );
}

export default SectionWrapper;
