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
      <span className={styles.copyright}>TRVL©2024</span>
      <ul className={styles.iconList}>
        <li>
          <a href="https://facebook.com/">
            <Facebook size={30}></Facebook>
            <VisuallyHidden>Facebook</VisuallyHidden>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/">
            <Instagram size={30}></Instagram>
            <VisuallyHidden>Instagram</VisuallyHidden>
          </a>
        </li>
        <li>
          <a href="https://youtube.com/">
            <Youtube size={30}></Youtube>
            <VisuallyHidden>Youtube</VisuallyHidden>
          </a>
        </li>
        <li>
          <a href="https://x.com/">
            <img
              height="30"
              width="30"
              src="https://cdn.simpleicons.org/x/e3e3e3"
            />
            <VisuallyHidden>X.com</VisuallyHidden>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/">
            <Linkedin size={30}></Linkedin>
            <VisuallyHidden>LinkedIn</VisuallyHidden>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Credits;
