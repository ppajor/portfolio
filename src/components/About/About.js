import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./about.module.css";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div id="aboutSection" className="customContainer">
      <h3 className={`sectionHeader revealTop ${styles.headerRed}`}>{t("Navlink2")}</h3>
      <div className={styles.container}>
        <div className={`revealLeft ${styles.aboutImgContainer}`}>
          <StaticImage className={` ${styles.img}`} src="../../assets/img/cvlol.png" placeholder="blurred" alt="av" />
        </div>
        <div className={`revealRight ${styles.aboutContentContainer}`}>
          <h2 className={styles.aboutHeader}>{t("Aboutme_header")}</h2>
          <p className={styles.aboutParagraph}>{t("Aboutme_body")}</p>
          <Link to="#contactSection" className="link">
            <button className={`btnPrimary ${styles.contactBtn}`}>{t("Aboutme_btn")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
