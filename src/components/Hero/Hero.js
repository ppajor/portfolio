import React, { useEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse"
import Typed from "react-typed"
import lottie from "lottie-web"
import { FaQuoteLeft } from "react-icons/fa"

import * as styles from "./hero.module.css"
import eclipses from "../../assets/img/eclipses.png"
import green from "../../assets/img/green.png"
import orange from "../../assets/img/orange.png"
import purple from "../../assets/img/purple.png"
import red from "../../assets/img/red.png"
import animation from "../../assets/lottie/arrow-down.json"
import ja from "../../assets/img/ja.jpg"

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
    <div id="heroSection" className={styles.hero}>
      <section className={`revealLeft ${styles.leftSection}`}>
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
      <section className={`revealRight ${styles.rightSection}`} ref={svgRef}>
        <StaticImage
          src="../../assets/img/ja.jpg"
          alt="ja"
          placeholder="blurred"
          className={styles.imgMe}
        />

        <div className={styles.redEclipse}>
          <MouseParallaxContainer className={styles.eclipseContainer}>
            <MouseParallaxChild factorX={0.05} factorY={0.07}>
              <StaticImage
                className={styles.eclipse}
                src="../../assets/img/red.png"
                placeholder="blurred"
                alt="red eclipse"
              />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        <div className={styles.greenEclipse}>
          <MouseParallaxContainer className={styles.eclipseContainer}>
            <MouseParallaxChild factorX={0.05} factorY={0.07}>
              <StaticImage
                className={styles.eclipse}
                src="../../assets/img/green.png"
                placeholder="blurred"
                alt="green eclipse"
              />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        <div className={styles.purpleEclipse}>
          <MouseParallaxContainer className={styles.eclipseContainer}>
            <MouseParallaxChild factorX={0.05} factorY={0.07}>
              <StaticImage
                className={styles.eclipse}
                src="../../assets/img/purple.png"
                placeholder="blurred"
                alt="purple eclipse"
              />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        <div className={styles.orangeEclipse}>
          <MouseParallaxContainer className={styles.eclipseContainer}>
            <MouseParallaxChild factorX={0.05} factorY={0.07}>
              <StaticImage
                className={styles.eclipse}
                src="../../assets/img/orange.png"
                placeholder="blurred"
                alt="orange eclipse"
              />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
      </section>
      <div className={styles.scrollAnimationContainer} ref={arrowRef}>
        <div className={styles.scrollAnimation} ref={animationContainer}></div>
      </div>
    </div>
  )
}

export default Hero
