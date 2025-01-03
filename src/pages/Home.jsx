import React from "react";
import styles from "./Home.module.css";
import Hero from "../components/Hero/Hero";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";
import MainContent from "../components/MainContent/MainContent";
import Cards from "../components/Cards/Cards";

function Home() {
  return (
    <>
      <Hero></Hero>
      <MainContent>
        <SectionWrapper color="secondary">
          <h2 className={styles.title}>Check out these EPIC Destinations!</h2>
          <Cards></Cards>
        </SectionWrapper>
        <SectionWrapper color="secondary"></SectionWrapper>
        <SectionWrapper color="secondary"></SectionWrapper>
      </MainContent>
    </>
    // <>
    //   <p>Home</p>
    //   <div className={styles.imageWrapper}>
    //     <img src="/images/img-1.jpg" alt="mountain photo" />
    //   </div>
    // </>
  );
}

export default Home;
