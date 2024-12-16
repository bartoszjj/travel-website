import React from "react";
import styles from "./Button.module.css";

function Button({ children, className = "", onClick }) {
  const buttonClassName = `${styles.button} ${className}`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
