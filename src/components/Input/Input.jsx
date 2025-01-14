import React from "react";
import styles from "./Input.module.css";
function Input({ id, label, border, inputSize, errorStyles, ...delegated }) {
  const generatedId = React.useId();
  const appliedId = id || generatedId;

  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={appliedId}
        className={`${styles.inputStyles} ${
          border ? styles.border : undefined
        } ${inputSize} ${errorStyles}`}
        {...delegated}
      ></input>
    </div>
  );
}

export default Input;
