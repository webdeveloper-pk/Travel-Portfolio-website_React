import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Card.module.css"

const Card = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.card} ${styles.front_face}`}>
        <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
      </div>
      <div className={`${styles.card} ${styles.back_face}`}>
        <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
        <div className={styles.info}>
          <div className={styles.title}>CodingLab</div>
          <p>
            User interface designer and <br />
            front-end developer
          </p>
        </div>
        <ul>
          <a href="#">
            <FontAwesomeIcon icon={faCoffee} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faCoffee} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faCoffee} />
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Card
