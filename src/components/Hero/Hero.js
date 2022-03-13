import React, { useEffect, useRef } from "react"
import * as styles from "./hero.module.css"
import { FaQuoteLeft } from "react-icons/fa"
import ParallaxSVG from "../../assets/svg/heroSVG.svg"
import lottie from "lottie-web"
import animation from "../../assets/lottie/arrow-down.json"

function Hero({ headerRef, paragraphRef, svgRef }) {
  const animationContainer = useRef()
  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation,
    })
  }, [])
  return (
    <div className={styles.hero}>
      <section className={styles.leftSection}>
        <h1 className={styles.heroHeader} ref={headerRef}>
          Frontend Developer
        </h1>
        <p className={styles.heroParagraph} ref={paragraphRef}>
          <FaQuoteLeft
            className={styles.quoteIcon}
            color="rgba(0,0,0,0.5)"
            size={24}
          />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac enim
          donec vitae tortor. At sem enim integer mi accumsan, morbi massa
          tincidunt non. Diam blandit dignissim sem enim arcu, tellus, fringilla
          lorem.
        </p>
        <p className={styles.heroSignature}>Paweł Pajor</p>
      </section>
      <div className={styles.rightSection} ref={svgRef}>
        <ParallaxSVG />
      </div>
      <div className={styles.scrollAnimationContainer}>
        <div className={styles.scrollAnimation} ref={animationContainer}></div>
      </div>
    </div>
  )
}

export default Hero
