import React from "react";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
import { Play } from "lucide-react";

function Hero() {
  return (
    <section className={styles.heroWrapper}>
      <video
        src="/videos/video-1.mp4"
        autoPlay
        muted
        loop
        preload="none"
        poster="/images/placeholder.png"
      ></video>
      <div className={styles.heroContent}>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className={styles.buttonsWrapper}>
          <Button className={styles.buttonLeft}>GET STARTED</Button>
          <Button className={styles.buttonRight}>
            WATCH TRAILER <Play size={15} strokeWidth={4}></Play>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
