import React from "react";
import styles from "./Input.module.css";
function Input({ ...delegated }) {
  return <input className={styles.inputStyles} {...delegated}></input>;
}

export default Input;
