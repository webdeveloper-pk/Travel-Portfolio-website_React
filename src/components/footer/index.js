import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer_wrapper}>
          <div className={styles.link_wrapper}>
            <div className={styles.link_inner_wrapper}>
              <h4>About Us</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium quia atque nemo ad modi officiis iure, autem nulla
                tenetur repellendus
              </p>
            </div>
            <div className={styles.link_inner_wrapper}>
              <h4>Newsletter</h4>
              <p>Stay update with our latest</p>
              <input type="text" placeholder="Email" />
            </div>
            <div className={styles.link_inner_wrapper}>
              <h4 className={styles.heading}>Tours</h4>
              <ul>
                <li>International</li>
                <li>National</li>
                <li>Local</li>
              </ul>
            </div>
            <div className={styles.link_inner_wrapper}>
              <h4 className={styles.heading}>Contact Us</h4>
              <ul>
                <li>Website</li>
                <li>Page</li>
                <li>Social</li>
              </ul>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={`${styles.icon} ${styles.facebook}`}>
              <div className={styles.tooltip}>Instagram</div>
              <span>
                <img src="/images/insta.png" alt="insta" />
              </span>
            </div>
            <div className={`${styles.icon} ${styles.twitter}`}>
              <div className={styles.tooltip}>LinkedIn</div>
              <span>
                <img src="/images/linkedin.png" alt="linkedin" />
              </span>
            </div>
            <div className={`${styles.icon} ${styles.instagram}`}>
              <div className={styles.tooltip}>Dribble</div>
              <span>
                <img src="/images/dribble.png" alt="dribble" />
              </span>
            </div>
            <div className={`${styles.icon} ${styles.youtube}`}>
              <div className={styles.tooltip}>Pinterest</div>
              <span>
                <img src="/images/pinterest.png" alt="pinterest" />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.bottom_footer}>
          Copyright © 2019 Graphics Studio | All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer
