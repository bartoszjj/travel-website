import React from "react";
import styles from "./ServiceItem.module.css";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

function ServiceItem({ href, icon: Icon, title, text }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <li className={styles.serviceItemWrapper}>
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
        <div className={styles.iconWrapper}>
          <div className={styles.iconContainer}>
            <Icon size={80} strokeWidth={1.2} />
          </div>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>{text}</p>
      </Link>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <p>Thank you for choosing our services</p>
        </Modal>
      )}
    </li>
  );
}

export default ServiceItem;
