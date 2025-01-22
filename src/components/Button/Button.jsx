import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

function Button({ children, className = "", onClick, href }) {
  const buttonClassName = `${styles.button} ${className}`;

  if (href) {
    return (
      <Link to={href} className={buttonClassName} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
