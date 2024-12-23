import React from "react";
import styles from "./HamburgerMenuButton.module.css";
import VisuallyHidden from "../../utils/VisuallyHidden";

function HamburgerMenuButton({ className = "", isMenuOpen, toggleMenu }) {
  const combinedStyles = `${className} ${styles.hamburgerMenuButton} ${
    isMenuOpen && styles.animate
  }`;
  return (
    <button
      aria-expanded={isMenuOpen}
      className={combinedStyles}
      onClick={toggleMenu}
    >
      <div />
      <div />
      <div />
      <VisuallyHidden>Open Menu</VisuallyHidden>
    </button>
  );
}

export default HamburgerMenuButton;
