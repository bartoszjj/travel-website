import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ href, src, alt, title, label }) {
  return (
    <li className={styles.card}>
      <Link to={href}>
        <div className={styles.imageWrapper}>
          <img src={src} alt={alt} />
          <span className={styles.label}>{label}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
      </Link>
    </li>
  );
}

export default Card;
