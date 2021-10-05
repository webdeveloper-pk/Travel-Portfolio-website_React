import React from 'react'
import styles from "./Button.module.css";

const Button = ({text}) => {
  return (
    <div className={styles.action_button}>
      {text}
    </div>
  )
}

export default Button;
