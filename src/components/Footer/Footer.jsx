import React from "react";
import styles from "./Footer.module.css";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import Newsletter from "../Newsletter/Newsletter";

function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <SectionWrapper color="primary">
        <Newsletter></Newsletter>
      </SectionWrapper>
      <SectionWrapper color="primary">fddf</SectionWrapper>
      <SectionWrapper color="primary">fdfd</SectionWrapper>
    </footer>
  );
}

export default Footer;
