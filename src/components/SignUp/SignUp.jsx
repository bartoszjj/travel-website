import React from "react";
import Input from "../Input/Input";
import styles from "./SignUp.module.css";
import Button from "../Button/Button";

function SignUp({ closeModal }) {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [emailErrors, setEmailErrors] = React.useState([]);
  const [usernameErrors, setUsernameErrors] = React.useState([]);
  const [passwordErrors, setPasswordErrors] = React.useState([]);

  function validateEmail() {}

  function validateUsername() {}

  function validatePassword() {}

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
          required={true}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></Input>
        <Input
          inputSize={styles.inputSize}
          label="Username"
          border={true}
          type="text"
          placeholder="Enter your username"
          required={true}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></Input>
        <Input
          inputSize={styles.inputSize}
          label="Password"
          border={true}
          type="password"
          placeholder="Enter your password"
          required={true}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></Input>
        <Button className={styles.button}>SIGN UP</Button>
      </form>
    </div>
  );
}

export default SignUp;
