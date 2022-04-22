import React, { useState, useEffect } from "react"
import * as styles from "./projects.module.css"
import { Link } from "gatsby"

function NavigationCircle(props) {
  const [mobile, setMobile] = useState(null)

  useEffect(() => {
    if (window.innerWidth < 684) {
      setMobile(true)
    }
  }, [])

  return (
    <>
      {mobile ? (
        <>
          {props.active ? (
            <Link
              to="#projectBox"
              onClick={() => props.handleOnClick()}
              className={`${styles.sliderCircleActive} ${styles.sliderCircle}`}
            ></Link>
          ) : (
            <Link
              to="#projectBox"
              onClick={() => props.handleOnClick()}
              className={styles.sliderCircle}
            ></Link>
          )}
        </>
      ) : (
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
      )}
    </>
  )
}

export default NavigationCircle
