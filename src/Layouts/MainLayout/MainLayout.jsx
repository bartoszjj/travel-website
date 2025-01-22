import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import Footer from "../../components/Footer/Footer";
import { NotificationContext } from "../../components/Notification/NotificationProvider";
import Notification from "../../components/Notification/Notification";
import ScrollToTop from "../../utils/ScrollToTop";

function MainLayout() {
  const { isNotifOpen, setIsNotifOpen } = React.useContext(NotificationContext);

  return (
    <div
      style={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Navbar />
      <Outlet />
      <ScrollToTop />
      <Footer></Footer>
      {isNotifOpen && <Notification />}
    </div>
  );
}

export default MainLayout;
