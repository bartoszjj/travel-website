import React from "react";
import styles from "./SectionWrapper.module.css";

function SectionWrapper({ color, children, className = "" }) {
  const colors = ["primary", "secondary"];
  const colorClass = colors.includes(color) ? color : undefined;

  return (
    <section
      className={`${styles.sectionWrapper} ${styles[colorClass]} ${className}`}
    >
      {children}
    </section>
  );
}

export default SectionWrapper;
