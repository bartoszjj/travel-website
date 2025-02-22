import React from "react";
import Button from "../Button/Button";
import { Play } from "lucide-react";
import Modal from "../Modal/Modal";
import styles from "./Hero.module.css";

function Hero(props, ref) {
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
          <Button
            className={styles.buttonLeft}
            onClick={() => {
              ref.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
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
            <div>
              <video src="/videos/video-2.mp4" autoPlay loop controls></video>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

export default React.forwardRef(Hero);
