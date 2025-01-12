import React from "react";
import Input from "../Input/Input";
import styles from "./SignUp.module.css";
import Button from "../Button/Button";

function SignUp({ closeModal }) {
  function signUp(event) {
    event.preventDefault();
    closeModal();
  }

  return (
    <div className={styles.signUpWrapper}>
      <h2>Sign Up</h2>
      <form onSubmit={signUp}>
        <Input
          inputSize={styles.inputSize}
          label="E-mail"
          border={true}
          type="email"
          placeholder="Enter your e-mail"
        ></Input>
        <Input
          inputSize={styles.inputSize}
          label="Username"
          border={true}
          type="text"
          placeholder="Enter your username"
        ></Input>
        <Input
          inputSize={styles.inputSize}
          label="Password"
          border={true}
          type="password"
          placeholder="Enter your password"
        ></Input>
        <Button className={styles.button}>SIGN UP</Button>
      </form>
    </div>
  );
}

export default SignUp;
