import React from "react"
import * as styles from "./hero.module.css"

import ParallaxSVG from "../../assets/svg/heroSVG.svg"

function Hero({ headerRef, paragraphRef, svgRef }) {
  return (
    <div className={styles.hero}>
      <section className={styles.leftSection}>
        <h1 className={styles.heroHeader} ref={headerRef}>
          Frontend Developer
        </h1>
        <p className={styles.heroParagraph} ref={paragraphRef}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac enim
          donec vitae tortor. At sem enim integer mi accumsan, morbi massa
          tincidunt non. Diam blandit dignissim sem enim arcu, tellus, fringilla
          lorem.
        </p>
      </section>
      <div className={styles.rightSection} ref={svgRef}>
        <ParallaxSVG />
      </div>
    </div>
  )
}

export default Hero
