import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HamburgerMenu.module.css";
import stylesNavbar from "../Navbar/Navbar.module.css";
import Button from "../Button/Button";
import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

function HamburgerMenu({ isMenuOpen, toggleMenu }) {
  React.useEffect(() => {
    function handleEscapeMenu(event) {
      if (event.code === "Escape" && isMenuOpen === true) {
        toggleMenu();
      }
    }

    window.addEventListener("keydown", handleEscapeMenu);

    return function () {
      window.removeEventListener("keydown", handleEscapeMenu);
    };
  }, [toggleMenu]);

  return createPortal(
    <div data-hamburger-menu-portal>
      <FocusLock returnFocus={true} noFocusGuards={!isMenuOpen}>
        <RemoveScroll enabled={isMenuOpen} removeScrollBar={!isMenuOpen}>
          <nav
            role="navigation"
            aria-label="Main menu"
            className={styles.hamburgerMenuWrapper}
          >
            <div
              onClick={toggleMenu}
              className={`${styles.backdrop} ${
                isMenuOpen && styles.backdropVisible
              }`}
            ></div>
            <div
              className={`${styles.hamburgerMenu} ${
                isMenuOpen && styles.visible
              }`}
              style={{
                position: "fixed",
                top: "4rem",
                right: 0,
                bottom: 0,
              }}
            >
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? stylesNavbar.active : "inactive"
                    }
                    onClick={toggleMenu}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Products"
                    className={({ isActive }) =>
                      isActive ? stylesNavbar.active : "inactive"
                    }
                    onClick={toggleMenu}
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Services"
                    className={({ isActive }) =>
                      isActive ? stylesNavbar.active : "inactive"
                    }
                    onClick={toggleMenu}
                  >
                    Services
                  </NavLink>
                </li>
              </ul>
              <Button
                className={stylesNavbar.hoverColor}
                onClick={() => {
                  console.log("Hello");
                }}
              >
                SIGN UP
              </Button>
              <Button className={stylesNavbar.hoverColor} onClick={toggleMenu}>
                RETURN
              </Button>
            </div>
          </nav>
        </RemoveScroll>
      </FocusLock>
    </div>,
    document.body
  );
}

export default HamburgerMenu;
