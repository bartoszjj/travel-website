import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import styles from "./MainLayout.module.css";
import Footer from "../../components/Footer/Footer";
import { NotificationContext } from "../../components/Notification/NotificationProvider";
import Notification from "../../components/Notification/Notification";
import ScrollToTop from "../../utils/ScrollToTop";

function MainLayout() {
  const { isNotifOpen, setIsNotifOpen } = React.useContext(NotificationContext);
  const contentRef = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    if (contentRef.current) {
      contentRef.current.focus();
    }
  }, [location]);

  React.useEffect(() => {
    function removeTabIndex() {
      if (contentRef.current) {
        contentRef.current.blur();
      }
    }

    window.addEventListener("click", removeTabIndex);

    return () => {
      window.removeEventListener("click", removeTabIndex);
    };
  }, []);

  return (
    <>
      <div ref={contentRef} tabIndex="-1" className={styles.pageWrapper}>
        <Navbar />
        <Outlet />
        {/* <ScrollToTop /> */}
        <Footer></Footer>
        {isNotifOpen && <Notification />}
        <ScrollRestoration />
      </div>
    </>
  );
}

export default MainLayout;
