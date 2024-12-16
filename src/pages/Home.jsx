import React from "react";
import styles from "./Home.module.css";
import Hero from "../components/Hero/Hero";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";

function Home() {
  return (
    <main>
      <Hero></Hero>
      <SectionWrapper></SectionWrapper>
      <SectionWrapper></SectionWrapper>
      <SectionWrapper></SectionWrapper>
    </main>
    // <>
    //   <p>Home</p>
    //   <div className={styles.imageWrapper}>
    //     <img src="/images/img-1.jpg" alt="mountain photo" />
    //   </div>
    // </>
  );
}

export default Home;
