import React from "react";
import styles from "./ServiceItem.module.css";
import { Link } from "react-router-dom";

function ServiceItem({ href, icon: Icon, title, text }) {
  return (
    <li className={styles.serviceItemWrapper}>
      <Link to={href}>
        <div className={styles.iconWrapper}>
          <div className={styles.iconContainer}>
            <Icon size={80} strokeWidth={1.2} />
          </div>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>{text}</p>
      </Link>
    </li>
  );
}

export default ServiceItem;
