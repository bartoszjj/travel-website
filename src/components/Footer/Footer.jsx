import React from "react";
import styles from "./Footer.module.css";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import Newsletter from "../Newsletter/Newsletter";
import Lists from "../Lists/Lists";
import List from "../List/List";
import Credits from "../Credits/Credits";

function Footer() {
  const aboutUs = React.useMemo(() => {
    return [
      { listItem: "How it works" },
      { listItem: "Testimonials" },
      { listItem: "Careers" },
      { listItem: "Investors" },
      { listItem: "Terms of Service" },
    ];
  });
  const contactUs = React.useMemo(() => {
    return [
      { listItem: "Contact" },
      { listItem: "Support" },
      { listItem: "Destinations" },
      { listItem: "Sponsorship" },
    ];
  });
  const videos = React.useMemo(() => {
    return [
      { listItem: "Submit Video" },
      { listItem: "Ambassadors" },
      { listItem: "Agency" },
      { listItem: "Influencer" },
    ];
  });
  const socialMedia = React.useMemo(() => {
    return [
      { listItem: "Instagram", url: "https://instagram.com/" },
      { listItem: "Facebook", url: "https://facebook.com/" },
      { listItem: "Youtube", url: "https://youtube.com/" },
      { listItem: "Twitter", url: "https://x.com/" },
    ];
  });
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
