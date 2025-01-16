import React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { CircleCheckBig } from "lucide-react";
import styles from "./Notification.module.css";
import VisuallyHidden from "../../utils/VisuallyHidden";

function Notification() {
  return createPortal(
    <div data-notification-portal>
      <div className={styles.notification}>
        <div className={styles.iconContainer}>
          <CircleCheckBig />
        </div>
        <div className={styles.message}>
          <h2>Success</h2>
          <p>You have successfully signed up</p>
        </div>
        <button className={styles.closeButton}>
          <X size={30} strokeWidth={1.5} />
          <VisuallyHidden>Close notification</VisuallyHidden>
        </button>
      </div>
    </div>,
    document.body
  );
}

export default Notification;
