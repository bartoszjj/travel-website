import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import Footer from "../components/Footer/Footer";

function MainLayout() {
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
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
