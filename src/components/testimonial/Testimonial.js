import React from 'react'
import styles from "./Testimonial.module.css"

const Testimonial = () => {
  return (
    <div className={styles.testimonial}>
      <div className="container">
        <div className={styles.MainContainer}>
          <div className={styles.BottomContainer}>
            <div className={styles.LeftContainer}>
              <div className={styles.LeftTopContainer}>
                <img
                  className={styles.image1}
                  src={"/images/testimonial1.png"}
                  alt="image"
                />
              </div>
              <div className={styles.LeftBottomContainer}>
                <div className={styles.IconContainer}>“</div>
                <div className={styles.Description}>
                  I often used to wonder if there ever will be a solution for us
                  recruiters to manage everything in one place without having to
                  fill those same old spreadsheets, and I am relieved to have
                  come across one.
                </div>
                <div className={styles.Name}>Kate Wilson </div>
                <div className={styles.Name} Designation>
                  Recruitment Specialist - Google
                </div>
              </div>
            </div>
            <div className={styles.RightContainer}>
              <div className={styles.TopContainer}>
                <div className={styles.TopLeftContainer}>
                  <img
                    div
                    className={styles.image2}
                    src={"/images/testimonial2.png"}
                    alt="image"
                  />
                </div>
                <div className={styles.TopRightContainer}>
                  <div className={styles.IconContainer}>“</div>
                  <div className={styles.Description}>
                    Workspace has played a critical role in our organization’s
                    success. From inception till delivery, all our stuff is
                    managed and stored in one platform which makes it easy for
                    us to focus on our work without having to worry about
                    database keeping.
                  </div>
                  <div className={styles.Name}>Selena Doe </div>
                  <div className={styles.Designation}>
                    Project Manager - Adobe
                  </div>
                </div>
              </div>
              <div className={styles.LastContainer}>
                <div className={styles.LastTopContainer}>
                  <img
                    div
                    className={styles.image3}
                    src={"/images/testimonial3.png"}
                    alt="image"
                  />
                </div>
                <div className={styles.LastEndContainer}>
                  <div className={styles.IconContainer}>“</div>
                  <div className={styles.Description}>
                    Workspace has played a critical role in our organization’s
                    success. From inception till delivery, all our stuff is
                    managed and stored in one platform which makes it easy for
                    us to focus on our work without having to worry about
                    database keeping
                  </div>
                  <div className={styles.Name}>John Doe </div>
                  <div className={styles.Designation}>
                    HR Manager - Netflix
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial
