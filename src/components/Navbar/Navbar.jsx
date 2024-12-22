import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Luggage } from "lucide-react";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import HamburgerMenuButton from "../HamburgerMenuButton/HamburgerMenuButton";
import useToggle from "../../hooks/useToggle";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

function Navbar() {
  const [isMenuOpen, toggleValue] = useToggle();

  React.useEffect(() => {
    function hideHamburgerMenu() {
      if (window.innerWidth >= 700 && isMenuOpen === true) {
        toggleValue();
      }
    }
    window.addEventListener("resize", hideHamburgerMenu);

    return () => {
      window.removeEventListener("resize", hideHamburgerMenu);
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div
          className={`${styles.logoWrapper} ${styles.hoverColor}`}
          onClick={() => isMenuOpen && toggleValue()}
        >
          <Link to="/">
            <span>TRVL</span> <Luggage size={35} strokeWidth={2.5}></Luggage>
          </Link>
        </div>
        <ul className={styles.menuUL}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : "inactive"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Products"
              className={({ isActive }) =>
                isActive ? styles.active : "inactive"
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Services"
              className={({ isActive }) =>
                isActive ? styles.active : "inactive"
              }
            >
              Services
            </NavLink>
          </li>
        </ul>
        <div className={styles.navButtonWrapper}>
          <Button className={styles.hoverColor}>SIGN UP</Button>
        </div>

        <HamburgerMenuButton
          className={styles.hamburgerMenuButton}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleValue}
        ></HamburgerMenuButton>

        <HamburgerMenu
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleValue}
        ></HamburgerMenu>
      </nav>
    </header>
  );
}

export default Navbar;
