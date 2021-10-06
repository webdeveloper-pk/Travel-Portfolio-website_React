import React from 'react'
import styles from "./Card.module.css"

const Card = ({src , place}) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.card} ${styles.front_face}`}>
        <img src={src} alt="card" />
      </div>
      <div className={`${styles.card} ${styles.back_face}`}>
        <img src={src} alt="card"/>
        <div className={styles.info}>
          <div className={styles.title}>
            {place}
            <p>Lorem ipsum dolor amet Lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card
