import React, { useEffect, useRef, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Typed from "react-typed";
import lottie from "lottie-web";

import * as styles from "./hero.module.css";
import animation from "../../assets/lottie/arrow-down.json";
import { Link } from "gatsby";
import GreenEclipse from "../../assets/svg/green_shadow.svg";
import RedEclipse from "../../assets/svg/red_shadow.svg";
import PurpleEclipse from "../../assets/svg/purple_shadow.svg";
import OrangeEclipse from "../../assets/svg/orange_shadow.svg";
import Eclipses from "../../assets/svg/eclipseSvgs.svg";

function Hero({ arrowRef, headerRef, leftSectionRef, paragraphRef, svgRef, signatureRef }) {
  const [mobile, setMobile] = useState(null);

  const animationContainer = useRef();
  const typedStrings = ["Frontend developer"];

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
      <div className={styles.heroContainer}>
        <section className={styles.leftSection} ref={leftSectionRef}>
          <div ref={headerRef}>
            {mobile ? (
              <h2 className={styles.heroHeader}>Frontend developer</h2>
            ) : (
              <Typed className={styles.heroHeader} strings={typedStrings} typeSpeed={20} stopped={false} startDelay={1200} />
            )}
          </div>
          <p className={styles.heroParagraph} ref={paragraphRef}>
            Lorem ipsum dolor amet, consectetur adipiscing elit. Hac enim donec vitae tortor. At sem enim integer mi accumsan, morbi massa tincidunt
            non. Diam blandit dignissim sem enim arcu, tellus, fringilla lorem accumsan.
          </p>
          <Link to="#contactSection" className={`link`} ref={signatureRef}>
            <button className={`btnPrimary ${styles.contactBtn}`}>Poznajmy się!</button>
          </Link>
        </section>
        <section className={styles.rightSection} ref={svgRef}>
          <StaticImage src="../../assets/img/ja3.png" alt="ja" placeholder="blurred" className={styles.imgMe} />
          <div className={styles.eclipses}>
            <Eclipses />
          </div>
        </section>
      </div>
      <Link to="#projectsSection" className={`link ${styles.animationContainer}`} ref={arrowRef}>
        <div className={styles.scrollAnimation} ref={animationContainer}></div>
      </Link>
    </div>
  );
}

export default Hero;
