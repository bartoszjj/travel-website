import React from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { Check } from "lucide-react";

function ProductCard({ href, title, price, info, hoursLeft }) {
  return (
    <li className={styles.productCardWrapper}>
      <Link to={href}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.startingFrom}>starting from</div>
        <div className={styles.price}>
          <span>$</span>
          {price}
        </div>
        <Button className={styles.button}>CHOOSE</Button>
        <div className={styles.divider}></div>
        <ul className={styles.infoList}>
          {info.map((infoContent, index) => {
            return (
              <li key={index}>
                <span className={styles.iconContainer}>
                  <Check size={20}></Check>
                </span>
                <span>{infoContent}</span>
              </li>
            );
          })}
        </ul>
        <div className={styles.time}>
          <span>{hoursLeft}</span>h left
        </div>
      </Link>
    </li>
  );
}

export default ProductCard;
