import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Luggage } from "lucide-react";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import HamburgerMenuButton from "../HamburgerMenuButton/HamburgerMenuButton";
import useToggle from "../../hooks/useToggle";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import VisuallyHidden from "../../utils/VisuallyHidden";
import Modal from "../Modal/Modal";
import SignUp from "../SignUp/SignUp";

function Navbar() {
  const [isMenuOpen, toggleValue] = useToggle();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

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
        <Link
          className={`${styles.logo} ${styles.hoverColor}`}
          onClick={() => isMenuOpen && toggleValue()}
          to="/"
        >
          <span>TRVL</span>
          <Luggage size={35} strokeWidth={2.5}></Luggage>
          <VisuallyHidden>Website Logo</VisuallyHidden>
        </Link>
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
          <Button
            onClick={() => {
              setIsModalOpen(true);
            }}
            className={styles.hoverColor}
          >
            SIGN UP
          </Button>
        </div>
        {isModalOpen && (
          <Modal setIsModalOpen={setIsModalOpen}>
            <SignUp></SignUp>
          </Modal>
        )}

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
