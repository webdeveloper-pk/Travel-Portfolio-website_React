import React from 'react'
import Card from '../card/Card'
import Seperator from '../seperator'
import styles from "./About.module.css"

const index = () => {
  return (
    <div className={styles.about} id="about">
      <div className="container">
        <div className="headings">
          <Seperator
            heading="Latest Tour Places"
            paragrapgh="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae adipisci iusto totam placeat corrupti ipsum, tempora "
          />
        </div>
        <div className={styles.about_wrapper}>
          <Card src="/images/card1.jpg" alt="card"  place="Turkey"/>
          <Card src="/images/card2.jpg" alt="card" place="USA"/>
          <Card src="/images/card3.jpg" alt="card" place="Scotland"/>
        </div>
      </div>
    </div>
  );
}

export default index
