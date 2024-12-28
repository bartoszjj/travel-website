import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Newsletter.module.css";

function Newsletter() {
  function subscribe(event) {
    event.preventDefault();
  }

  return (
    <>
      <h2 className={styles.title}>
        Join the Adventure newsletter to receive our best vacation deals
      </h2>
      <p className={styles.text}> You can unsubscribe at any time</p>
      <form className={styles.form} onSubmit={subscribe}>
        <Input type="email" placeholder="Your Email"></Input>
        <Button className={styles.subscribeButton}>Subscribe</Button>
      </form>
    </>
  );
}

export default Newsletter;
