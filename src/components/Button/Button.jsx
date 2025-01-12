import React from "react";
import styles from "./Button.module.css";

function Button({ children, className = "", onClick, href }) {
  const buttonClassName = `${styles.button} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClassName} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
