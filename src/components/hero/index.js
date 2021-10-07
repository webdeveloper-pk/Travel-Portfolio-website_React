import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero} id="home">
      <div className="container">
        <div className={styles.main_container}>
          <h6>Tour & Travlers</h6>
          <h2>
            Amazing <span>Places</span> on <span>Earth</span>
          </h2>
          <button className={styles.hero_button}>Get Started</button>
          <div className={styles.inner_container}>
            <div className={styles.left}>
              <img src={"/images/leftt.jpg"} alt="hero" />
            </div>
            <div className={styles.centerLeft}>
              <img src={"/images/left2.jpg"} alt="hero" />
            </div>
            <div className={styles.center}>
              <img src={"/images/centerr.jpg"} alt="hero" />
            </div>
            <div className={styles.centerRight}>
              <img src={"/images/right2.jpg"} alt="hero" />
            </div>
            <div className={styles.right}>
              <img src={"/images/rightt.jpg"} alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
