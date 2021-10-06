import React from 'react'
import styles from "./Seperator.module.css"

const Seperator = ({heading , paragrapgh}) => {
  return (
    <div className={styles.seperator_wrapper}>
      <h3>{heading}</h3>
     <hr />
      <p>{paragrapgh}</p>
    </div>
  );
}

export default Seperator
