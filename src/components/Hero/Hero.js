import React, { useEffect, useRef } from "react"
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse"
import Typed from "react-typed"
import lottie from "lottie-web"

import * as styles from "./hero.module.css"
import eclipses from "../../assets/img/eclipses.png"
import { FaQuoteLeft } from "react-icons/fa"
import animation from "../../assets/lottie/arrow-down.json"

function Hero({
  arrowRef,
  headerRef,
  paragraphRef,
  svgRef,
  signatureRef,
  typingAnimationStopped,
}) {
  console.log("animation stop:", typingAnimationStopped)

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
        <div ref={headerRef}>
          <Typed
            className={styles.heroHeader}
            strings={["Frontend developer"]}
            typeSpeed={20}
            stopped={false}
          />
        </div>
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
        <p className={styles.heroSignature} ref={signatureRef}>
          Paweł Pajor
        </p>
      </section>
      <div className={styles.rightSection} ref={svgRef}>
        <MouseParallaxContainer className={styles.parallaxContainer}>
          <MouseParallaxChild factorX={0.03} factorY={0.05}>
            <img
              className={styles.eclipsesImg}
              src={eclipses}
              alt="moving eclipses"
            />
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
      <div className={styles.scrollAnimationContainer} ref={arrowRef}>
        <div className={styles.scrollAnimation} ref={animationContainer}></div>
      </div>
    </div>
  )
}

export default Hero
