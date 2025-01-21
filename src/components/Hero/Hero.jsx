import React from "react";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
import { Play } from "lucide-react";
import Modal from "../Modal/Modal";

function Hero() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

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
          <Button href="#getStarted" className={styles.buttonLeft}>
            GET STARTED
          </Button>
          <Button
            className={styles.buttonRight}
            onClick={() => setIsModalOpen(true)}
          >
            WATCH TRAILER <Play size={15} strokeWidth={4}></Play>
          </Button>
        </div>
      </div>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <div className={styles.trailerWrapper}>
            <h2 className={styles.trailerHeading}>
              Discover the World, One Destination at a Time
            </h2>
            <video src="/videos/video-2.mp4" autoPlay loop controls></video>
          </div>
        </Modal>
      )}
    </section>
  );
}

export default Hero;
