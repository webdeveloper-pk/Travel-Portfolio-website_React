import React from "react";
import Seperator from "../seperator";
import styles from "./Testimonial.module.css";

const Testimonial = () => {
  return (
    <div className={styles.testimonial} id="people">
      <div className="container">
        <div className="headings">
          <Seperator
            heading="What People Say About Us"
            paragrapgh="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae adipisci iusto totam placeat corrupti ipsum, tempora "
          />
        </div>
        <div className={styles.MainContainer}>
          <div className={styles.BottomContainer}>
            <div className={styles.LeftContainer}>
              <div className={styles.LeftTopContainer}>
                <img
                  className={styles.image1}
                  src="/images/testimonial1.png"
                  alt="testimonial"
                />
              </div>
              <div className={styles.LeftBottomContainer}>
                <div className={styles.Description}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  voluptas deserunt beatae adipisci iusto totam placeat corrupti
                  ipsum, tempora beatae adipisci iusto totam placeat .
                </div>
                <div className={styles.Name}>Kate Wilson </div>
                <div className={styles.designation}>
                  Recruitment Specialist - Google
                </div>
              </div>
            </div>
            <div className={styles.RightContainer}>
              <div className={styles.TopContainer}>
                <div className={styles.TopLeftContainer}>
                  <img
                    className={styles.image2}
                    src="/images/testimonial2.png"
                    alt="testimonial"
                  />
                </div>
                <div className={styles.TopRightContainer}>
                  <div className={styles.Description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque voluptas deserunt beatae adipisci iusto totam placeat
                    corrupti ipsum, tempora beatae adipisci iusto totam placeat
                    .
                  </div>
                  <div className={styles.Name}>Selena Doe </div>
                  <div className={styles.designation}>
                    Project Manager - Adobe
                  </div>
                </div>
              </div>
              <div className={styles.LastContainer}>
                <div className={styles.LastTopContainer}>
                  <img
                    
                    className={styles.image3}
                    src="/images/testimonial3.png"
                    alt="testimonial"
                  />
                </div>
                <div className={styles.LastEndContainer}>
                  <div className={styles.Description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque voluptas deserunt beatae adipisci iusto totam placeat
                    corrupti ipsum, tempora beatae adipisci iusto totam placeat
                    .
                  </div>
                  <div className={styles.Name}>John Doe </div>
                  <div className={styles.designation}>HR Manager - Netflix</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
