import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className="container">
        <div className={styles. main_container}>
          <h2>TRAVEL WITH US</h2>
          <p>Where you get Natures love</p>
          <button className={styles.hero_button} >Get Started</button>
          <div className={styles. inner_container}>
            <div className={styles.left}>
              <img src={"/images/leftimage.jpg"} alt="image" />
            </div>
            <div className={styles.centerLeft}>
              <img src={"/images/leftcenterr.jpg"} alt="image" />
            </div>
            <div className={styles.center}>
              <img src={"/images/center.jpg"} alt="image" />
            </div>
            <div className={styles.centerRight}>
              <img src={"/images/rightcenter.jpg"} alt="image" />
            </div>
            <div className={styles.right}>
              <img src={"/images/rightimage.jpg"} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
