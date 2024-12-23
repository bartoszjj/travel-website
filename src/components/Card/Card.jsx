import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ src, alt, title }) {
  return (
    <li className={styles.card}>
      <Link>
        <div className={styles.imageWrapper}>
          <img src={src} alt={alt} />
        </div>

        <h3 className={styles.title}>{title}</h3>
      </Link>
    </li>
  );
}

export default Card;
