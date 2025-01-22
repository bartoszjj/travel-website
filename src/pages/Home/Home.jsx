import React from "react";
import styles from "./Home.module.css";
import Hero from "../../components/Hero/Hero";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import MainContent from "../../components/MainContent/MainContent";
import Cards from "../../components/Cards/Cards";

function Home() {
  const getStartedRef = React.useRef();
  return (
    <>
      <Hero ref={getStartedRef}></Hero>
      <MainContent>
        <SectionWrapper color="secondary">
          <h2 ref={getStartedRef} className={styles.title}>
            Check out these EPIC Destinations!
          </h2>
          <Cards></Cards>
        </SectionWrapper>
      </MainContent>
    </>
  );
}

export default Home;
