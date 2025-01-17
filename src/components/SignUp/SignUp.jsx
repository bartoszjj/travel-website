import React from "react";
import Input from "../Input/Input";
import styles from "./SignUp.module.css";
import Button from "../Button/Button";
import { CircleAlert } from "lucide-react";
import { NotificationContext } from "../Notification/NotificationProvider";

function SignUp({ closeModal }) {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [emailErrors, setEmailErrors] = React.useState([]);
  const [usernameErrors, setUsernameErrors] = React.useState([]);
  const [passwordErrors, setPasswordErrors] = React.useState([]);

  const { isNotifOpen, setIsNotifOpen } = React.useContext(NotificationContext);

  function validateEmail() {
    const tempEmailErrors = [];
    if (email.length == 0) {
      const error = "You have not entered any E-mail";
      tempEmailErrors.push(error);
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      const error = "E-mail is invalid";
      tempEmailErrors.push(error);
    }
    setEmailErrors(tempEmailErrors);
    return tempEmailErrors.length;
  }

  function validateUsername() {
    const tempUsernameErrors = [];
    if (username.length < 3 || username.length > 30) {
      const error = "Username must be between 3 and 30 characters long";
      tempUsernameErrors.push(error);
    }
    if (!username.match(/^[a-zA-Z0-9_-]+$/)) {
      const error = "Username is invalid";
      tempUsernameErrors.push(error);
    }

    setUsernameErrors(tempUsernameErrors);
    return tempUsernameErrors.length;
  }

  function validatePassword() {
    const tempPasswordErrors = [];
    if (password.length == 0) {
      const error = "You have not entered any password";
      tempPasswordErrors.push(error);
    }
    if (password.length < 10) {
      const error = "Password has to be more than 10 characters long";
      tempPasswordErrors.push(error);
    }
    if (!password.match(/[A-Z]/)) {
      const error = "Password must contain at least one uppercase letter";
      tempPasswordErrors.push(error);
    }
    if (!password.match(/[^a-zA-Z1-9]/)) {
      const error = "Password must contain at least one special character";
      tempPasswordErrors.push(error);
    }
    setPasswordErrors(tempPasswordErrors);
    return tempPasswordErrors.length;
  }

  function signUp(event) {
    event.preventDefault();
    const emailErrorsLength = validateEmail();
    const usernameErrorsLength = validateUsername();
    const passwordErrorsLength = validatePassword();
    if (emailErrorsLength + usernameErrorsLength + passwordErrorsLength !== 0) {
      return;
    }
    setIsNotifOpen(true);
    closeModal();
  }

  return (
    <div className={styles.signUpWrapper}>
      <h2>Sign Up</h2>
      <form onSubmit={signUp}>
        <Input
          inputSize={styles.inputSize}
          errorStyles={emailErrors.length > 0 && styles.errorStyles}
          label="E-mail"
          border={true}
          type="text"
          placeholder="Enter your e-mail"
          // required={true}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></Input>
        {emailErrors.length > 0 &&
          emailErrors.map((error, key) => {
            return (
              <p key={key} className={styles.errorMessage}>
                <span>
                  <CircleAlert size={18} />
                </span>
                <span>{error}</span>
              </p>
            );
          })}
        <Input
          inputSize={styles.inputSize}
          errorStyles={usernameErrors.length > 0 && styles.errorStyles}
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
        {usernameErrors.length > 0 &&
          usernameErrors.map((error, key) => {
            return (
              <p key={key} className={styles.errorMessage}>
                <span>
                  <CircleAlert size={18} />
                </span>
                <span>{error}</span>
              </p>
            );
          })}
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
                <span>
                  <CircleAlert size={18} />
                </span>
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
