import React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { CircleCheckBig } from "lucide-react";
import styles from "./Notification.module.css";
import VisuallyHidden from "../../utils/VisuallyHidden";
import { NotificationContext } from "./NotificationProvider";

function Notification() {
  const { isNotifOpen, setIsNotifOpen } = React.useContext(NotificationContext);
  const [animateNotif, setAnimateNotif] = React.useState(false);

  React.useEffect(() => {
    setAnimateNotif(true);
    setTimeout(closeNotification, 3000);
  }, []);

  function closeNotification() {
    setAnimateNotif(false);
    setTimeout(() => {
      setIsNotifOpen(false);
    }, 300);
  }

  return createPortal(
    <div data-notification-portal>
      <div
        className={`${styles.notification} ${
          animateNotif ? styles.notificationVisible : ""
        }`}
      >
        <div className={styles.iconContainer}>
          <CircleCheckBig />
        </div>
        <div className={styles.message}>
          <h2>Success</h2>
          <p>You have successfully signed up</p>
        </div>
        <button onClick={closeNotification} className={styles.closeButton}>
          <X size={30} strokeWidth={1.5} />
          <VisuallyHidden>Close notification</VisuallyHidden>
        </button>
      </div>
    </div>,
    document.body
  );
}

export default Notification;
