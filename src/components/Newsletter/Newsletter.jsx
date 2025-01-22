import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Newsletter.module.css";
import Modal from "../Modal/Modal";

function Newsletter() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  function subscribe(event) {
    event.preventDefault();
    setIsModalOpen(true);
  }

  return (
    <>
      <h2 className={styles.title}>
        Join the Adventure newsletter to receive our best vacation deals
      </h2>
      <p className={styles.text}> You can unsubscribe at any time</p>
      <form className={styles.form} onSubmit={subscribe}>
        <Input type="email" placeholder="Your Email" required={true}></Input>
        <Button className={styles.subscribeButton}>Subscribe</Button>
      </form>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <p>You have successfully subscribed!</p>
        </Modal>
      )}
    </>
  );
}

export default Newsletter;
