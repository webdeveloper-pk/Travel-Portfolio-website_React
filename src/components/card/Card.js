import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Card.module.css"

const Card = ({src , place}) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.card} ${styles.front_face}`}>
        <img src={src} />
      </div>
      <div className={`${styles.card} ${styles.back_face}`}>
        <img src={src} />
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
