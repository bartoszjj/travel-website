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

  // function validateEmail() {
  //   const tempPasswordErrors = [];
  //   // if (password.length < 10) {
  //   //   const error = "Password has to be more than 10 characters long";
  //   //   tempPasswordErrors.push(error);
  //   //   setPasswordErrors(tempPasswordErrors);
  //   // }
  //   // if (password.length == 0) {
  //   //   const error = "You have not entered any password";
  //   //   tempPasswordErrors.push(error);
  //   //   setPasswordErrors(tempPasswordErrors);
  //   // }
  //   return tempPasswordErrors.length;
  // }

  // function validateUsername() {
  //   const tempPasswordErrors = [];
  //   // if (password.length < 10) {
  //   //   const error = "Password has to be more than 10 characters long";
  //   //   tempPasswordErrors.push(error);
  //   //   setPasswordErrors(tempPasswordErrors);
  //   // }
  //   // if (password.length == 0) {
  //   //   const error = "You have not entered any password";
  //   //   tempPasswordErrors.push(error);
  //   //   setPasswordErrors(tempPasswordErrors);
  //   // }
  //   return tempPasswordErrors.length;
  // }

  function validatePassword() {
    const tempPasswordErrors = [];
    if (password.length < 10) {
      const error = "Password has to be more than 10 characters long";
      tempPasswordErrors.push(error);
    }
    if (password.length == 0) {
      console.log("You have not entered any password");
      const error = "You have not entered any password";
      tempPasswordErrors.push(error);
    }
    if (!password.match(/[^a-zA-Z]/)) {
      console.log("Password must contain at least one special character");
      const error = "Password must contain at least one special character";
      tempPasswordErrors.push(error);
      setPasswordErrors(tempPasswordErrors);
    }

    if (!password.match(/[A-Z]/)) {
      console.log("Password must contain at least one uppercase letter");
      const error = "Password must contain at least one uppercase letter";
      tempPasswordErrors.push(error);
    }

    console.log(tempPasswordErrors.length);
    setPasswordErrors(tempPasswordErrors);
    return tempPasswordErrors.length;
  }

  function signUp(event) {
    event.preventDefault();
    // if (validateEmail() && validateUsername() && validatePassword()) {
    //   return;
    // }
    if (validatePassword()) {
      return;
    }
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
          // required={true}
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
          // required={true}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></Input>
        <Input
          inputSize={styles.inputSize}
          errorStyles={passwordErrors.length > 0 && styles.errorStyles}
          label="Password"
          border={true}
          type="password"
          placeholder="Enter your password"
          // required={true}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></Input>
        {passwordErrors.length > 0 &&
          passwordErrors.map((error, key) => {
            return (
              <p key={key} className={styles.errorMessage}>
                <span>•</span>
                <span>{error}</span>
              </p>
            );
          })}
        <Button className={styles.button}>SIGN UP</Button>
      </form>
    </div>
  );
}

export default SignUp;
