import React from "react";
import Input from "../Input/Input";
import styles from "./SignUp.module.css";
import Button from "../Button/Button";

function SignUp() {
  return (
    <div className={styles.signUpWrapper}>
      <h2>Sign Up</h2>
      <form>
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
        <Button>Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUp;
