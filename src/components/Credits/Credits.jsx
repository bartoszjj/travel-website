import { Luggage } from "lucide-react";
import React from "react";
import VisuallyHidden from "../../utils/VisuallyHidden";
import { Link } from "react-router-dom";
import styles from "./Credits.module.css";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Youtube } from "lucide-react";
import { X } from "lucide-react";
import { Linkedin } from "lucide-react";

function Credits() {
  return (
    <div className={styles.creditsWrapper}>
      <Link className={styles.logo} to="/">
        <span>TRVL</span>
        <Luggage size={35} strokeWidth={2.5}></Luggage>
        <VisuallyHidden>Website Logo</VisuallyHidden>
      </Link>
      <span>TRVL©2024</span>
      <ul className={styles.iconList}>
        <li>
          <a href="https://facebook.com/">
            <Facebook></Facebook>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/">
            <Instagram></Instagram>
          </a>
        </li>
        <li>
          <a href="https://youtube.com/">
            <Youtube></Youtube>
          </a>
        </li>
        <li>
          <a href="https://x.com/">
            <img
              height="32"
              width="32"
              src="https://cdn.simpleicons.org/x/e3e3e3"
            />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/">
            <Linkedin></Linkedin>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Credits;
