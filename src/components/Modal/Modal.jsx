import React from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { X } from "lucide-react";
import VisuallyHidden from "../../utils/VisuallyHidden";
import Button from "../Button/Button";

function Modal({ setIsModalOpen, children }) {
  const [animateModal, setAnimateModal] = React.useState(false);

  React.useEffect(() => {
    setAnimateModal(true);
  }, []);

  function closeModal() {
    setAnimateModal(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
  }

  React.useEffect(() => {
    function handleCloseModal(event) {
      if (event.code === "Escape") {
        closeModal();
      }
    }
    window.addEventListener("keydown", handleCloseModal);
    return () => {
      window.removeEventListener("keydown", handleCloseModal);
    };
  }, [closeModal]);

  return createPortal(
    <div data-modal-portal>
      <FocusLock returnFocus={true}>
        <RemoveScroll enabled={true} removeScrollBar={false}>
          <div
            onClick={closeModal}
            className={`${styles.backdrop} ${
              animateModal && styles.showBackdrop
            }`}
          ></div>
          <div
            className={`${styles.modal} ${animateModal && styles.showModal}`}
            role="dialog"
            aria-modal="true"
          >
            <button onClick={closeModal} className={styles.closeButton}>
              <X size={40} strokeWidth={1.5} />
              <VisuallyHidden>Close modal</VisuallyHidden>
            </button>
            <div className={styles.content}>
              {React.isValidElement(children) &&
              typeof children.type === "function"
                ? React.cloneElement(children, { closeModal })
                : children}
            </div>
          </div>
        </RemoveScroll>
      </FocusLock>
    </div>,
    document.body
  );
}

export default Modal;
