import React from "react";
import ReactLogo from "../../assets/svg/logo-react.svg";
import FirebaseLogo from "../../assets/svg/logo-firebase.svg";
import Html5Logo from "../../assets/svg/logo-html5.svg";
import CssLogo from "../../assets/svg/logo-css.svg";
import JsLogo from "../../assets/svg/logo-js.svg";
import SassLogo from "../../assets/svg/logo-sass.svg";
import GatsbyLogo from "../../assets/svg/logo-gatsby.svg";
import ReactNativeLogo from "../../assets/svg/logo-reactNative.svg";
import VsCodeLogo from "../../assets/svg/logo-vscode.svg";
import FigmaLogo from "../../assets/svg/logo-figma.svg";
import GithubLogo from "../../assets/svg/logo-github.svg";
import NpmLogo from "../../assets/svg/logo-npm.svg";
import WebpackLogo from "../../assets/svg/logo-webpack.svg";
import TypescriptLogo from "../../assets/svg/logo-typescript.svg";

import * as styles from "./skills.module.css";
import { useTranslation } from "gatsby-plugin-react-i18next";

function Skills() {
  const { t } = useTranslation();

  return (
    <div id="skillsSection" className="customContainer">
      <h3 className={`sectionHeader revealTop ${styles.headerGreen}`}>{t("Navlink3")}</h3>

      <div className={`marginContainer ${styles.container}`}>
        <div className={`revealLeft longCol ${styles.introSection}`}>
          <h2 className={`header ${styles.headerPosition}`}>{t("Skills_header1")}</h2>
          <p className="paragraph">{t("Skills_body1")}</p>
        </div>
        <div className={`revealRight shortCol ${styles.technologiesSection}`}>
          <div className={styles.technologyContainer}>
            <ReactLogo className={styles.logo} />
          </div>
          <div className={styles.technologyContainer}>
            <TypescriptLogo className={styles.logo} />
          </div>
          <div className={styles.technologyContainer}>
            <ReactNativeLogo className={styles.logo} />
          </div>
          <div className={styles.technologyContainer}>
            <GatsbyLogo className={styles.logo} />
          </div>
          <div className={styles.technologyContainer}>
            <JsLogo className={styles.logo} />
          </div>
          <div className={styles.technologyContainer}>
            <FirebaseLogo className={styles.logo} />
          </div>
          <div className={styles.technologyContainer}>
            <Html5Logo className={styles.logo} />
          </div>
          <div className={styles.technologyContainer}>
            <CssLogo className={styles.logo} />
          </div>
          <div className={styles.technologyContainer}>
            <SassLogo className={styles.logo} />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={`revealLeft shortCol ${styles.technologiesSection}`}>
          <div className={styles.technologyContainer}>
            <VsCodeLogo className={styles.logo} />
          </div>
          <div className={styles.technologyContainer}>
            <FigmaLogo className={styles.logo} />
          </div>
          <div className={styles.technologyContainer}>
            <GithubLogo className={styles.logo} />
          </div>
          <div className={styles.technologyContainer}>
            <NpmLogo className={styles.logo} />
          </div>
          <div className={styles.technologyContainer}>
            <WebpackLogo className={styles.logo} />
          </div>
        </div>

        <div className={`revealRight longCol ${styles.introSection} ${styles.toolsSection}`}>
          <h2 className={`header ${styles.headerPosition}`}>{t("Skills_header2")}</h2>
          <p className="paragraph">{t("Skills_body2")}</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
