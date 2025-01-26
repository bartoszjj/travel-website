import React from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { Check } from "lucide-react";
import Timer from "../Timer/Timer";
import Modal from "../Modal/Modal";

function ProductCard({ href, title, price, info, hoursLeft }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <li className={styles.productCardWrapper}>
      <Link
        onClick={(event) => {
          if (href === undefined) {
            event.preventDefault();
            console.log("ggsgg");
            setIsModalOpen(true);
          }
        }}
        to={href}
      >
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.startingFrom}>starting from</div>
        <div className={styles.price}>
          <span>$</span>
          {price}
        </div>
        <div className={styles.button}>CHOOSE</div>
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
          <Timer hours={hoursLeft} />h left
        </div>
      </Link>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <p>Thank you for choosing our products</p>
        </Modal>
      )}
    </li>
  );
}

export default ProductCard;
