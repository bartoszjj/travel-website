import React from "react";
import styles from "./Footer.module.css";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import Newsletter from "../Newsletter/Newsletter";
import Lists from "../Lists/Lists";
import List from "../List/List";
import Credits from "../Credits/Credits";

function Footer() {
  const aboutUs = [
    "How it works",
    "Testimonials",
    "Careers",
    "Investors",
    "Terms of Service",
  ];
  const contactUs = ["Contact", "Support", "Destinations", "Sponsorship"];
  const videos = ["Submit Video", "Ambassadors", "Agency", "Influencer"];
  const socialMedia = ["Instagram", "Facebook", "Youtube", "Twitter"];
  return (
    <footer className={styles.footerWrapper}>
      <SectionWrapper color="primary">
        <Newsletter></Newsletter>
      </SectionWrapper>
      <SectionWrapper color="primary">
        <Lists>
          <List heading={"About Us"} list={aboutUs}></List>
          <List heading={"Contact Us"} list={contactUs}></List>
          <List heading={"Videos"} list={videos}></List>
          <List heading={"Social Media"} list={socialMedia}></List>
        </Lists>
      </SectionWrapper>
      <SectionWrapper color="primary">
        <Credits></Credits>
      </SectionWrapper>
    </footer>
  );
}

export default Footer;
