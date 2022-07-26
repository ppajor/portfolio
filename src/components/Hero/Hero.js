import React, { useEffect, useRef, useState } from "react";
import * as styles from "./hero.module.css";
import { StaticImage } from "gatsby-plugin-image";
import Typed from "react-typed";
import lottie from "lottie-web";
import { useTranslation, Trans, Link } from "gatsby-plugin-react-i18next";

import animation from "../../assets/lottie/arrow-down.json";
import Eclipses from "../../assets/svg/eclipseSvgs.svg";

function Hero({ arrowRef, headerRef, leftSectionRef, paragraphRef, svgRef, signatureRef }) {
  const [mobile, setMobile] = useState(null);
  const { t } = useTranslation();

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
            {t("Hero_body")}
          </p>
          <Link to="#projectsSection" className={`link`} ref={signatureRef}>
            <button className={`btnPrimary ${styles.contactBtn}`}>{t("Hero_btn")}</button>
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
