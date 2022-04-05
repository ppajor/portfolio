import React from "react"
import * as styles from "./projects.module.css"

function NavigationCircle(props) {
  return (
    <>
      {props.active ? (
        <div
          onClick={() => props.handleOnClick()}
          className={`${styles.sliderCircleActive} ${styles.sliderCircle}`}
        ></div>
      ) : (
        <div
          onClick={() => props.handleOnClick()}
          className={styles.sliderCircle}
        ></div>
      )}
    </>
  )
}

export default NavigationCircle
