import React, { useEffect, useRef, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Typed from "react-typed";
import lottie from "lottie-web";

import * as styles from "./hero.module.css";
import animation from "../../assets/lottie/arrow-down.json";
import { Link } from "gatsby";
import MovingEclipse from "../Reusable/MovingEclipse";
import redEclipse from "../../assets/img/red.png";
import greenEclipse from "../../assets/img/green.png";
import purpleEclipse from "../../assets/img/purple.png";
import orangeEclipse from "../../assets/img/orange.png";

function Hero({ arrowRef, headerRef, leftSectionRef, paragraphRef, svgRef, signatureRef }) {
  const [mobile, setMobile] = useState(null);

  const animationContainer = useRef();

  useEffect(() => {
    if (window.innerWidth < 684) {
      setMobile(true);
    }
    lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation,
    });
  }, []);

  return (
    <div id="heroSection" className={styles.hero}>
      <section className={styles.leftSection} ref={leftSectionRef}>
        <div ref={headerRef}>
          {mobile ? (
            <h2 className={styles.heroHeader}>Frontend developer</h2>
          ) : (
            <Typed className={styles.heroHeader} strings={["Frontend developer"]} typeSpeed={20} stopped={false} startDelay={1200} />
          )}
        </div>
        <p className={styles.heroParagraph} ref={paragraphRef}>
          Lorem ipsum dolor amet, consectetur adipiscing elit. Hac enim donec vitae tortor. At sem enim integer mi accumsan, morbi massa tincidunt
          non. Diam blandit dignissim sem enim arcu, tellus, fringilla lorem.
        </p>
      </section>
      <section className={styles.rightSection} ref={svgRef}>
        <StaticImage src="../../assets/img/ja3.png" alt="ja" placeholder="blurred" className={styles.imgMe} />
        <div className={styles.eclipsesWrapper}>
          <div className={styles.redEclipse}>
            <MovingEclipse imgPath={redEclipse} styling={`${styles.redEclipseContainer} ${styles.eclipseContainer}`} imgAlt="red eclipse" />
          </div>
          <div className={styles.greenEclipse}>
            <MovingEclipse imgPath={greenEclipse} styling={`${styles.greenEclipseContainer} ${styles.eclipseContainer}`} imgAlt="green eclipse" />
          </div>
          <div className={styles.purpleEclipse}>
            <MovingEclipse imgPath={purpleEclipse} styling={`${styles.purpleEclipseContainer} ${styles.eclipseContainer}`} imgAlt="purple eclipse" />
          </div>
          <div className={styles.orangeEclipse}>
            <MovingEclipse imgPath={orangeEclipse} styling={`${styles.orangeEclipseContainer} ${styles.eclipseContainer}`} imgAlt="orange eclipse" />
          </div>
        </div>
      </section>
      <Link to="#projectsSection" className={`link ${styles.scrollAnimationContainer}`} ref={arrowRef}>
        <div className={styles.scrollAnimation} ref={animationContainer}></div>
      </Link>
    </div>
  );
}

export default Hero;
