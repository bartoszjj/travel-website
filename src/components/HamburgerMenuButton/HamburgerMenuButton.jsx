import React from "react";
import styles from "./HamburgerMenuButton.module.css";

function HamburgerMenuButton({ className = "", isMenuOpen, toggleMenu }) {
  const combinedStyles = `${className} ${styles.hamburgerMenuButton} ${
    isMenuOpen && styles.animate
  }`;
  return (
    <button className={combinedStyles} onClick={toggleMenu}>
      <div />
      <div />
      <div />
    </button>
  );
}

export default HamburgerMenuButton;
