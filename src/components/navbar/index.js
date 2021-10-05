import React, { useState } from "react";
import Button from "../button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [hamburg, setHamburg] = useState(false);

  const clickHandler = () => {
    if (hamburg === false) {
      setHamburg(true);
    } else {
      setHamburg(false);
    }
  };

  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.navbar_wrapper}>
          <div className={styles.logo_wrapper}>
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className={styles.menuItem_wrapper}>
            <ul>
              <li>About</li>
              <li>Portfolio</li>
              <li>Contact</li>
              <li>
                <Button text="Get Started" />
              </li>
              <button className={styles.humberg_button} onClick={clickHandler}>
                <span className={styles.topbar}></span>
                <span className={styles.midbar}></span>
                <span className={styles.bottombar}></span>
              </button>
            </ul>

            {hamburg === true ? (
              <div className={styles.absolute_wrapper}>
                <div className={styles.absolute_wrapper_items}>
                  <p>About</p>
                  <p>Portfolio</p>
                  <p>Contact</p>
                  <p>
                    <Button text="Get Started" />
                  </p>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
