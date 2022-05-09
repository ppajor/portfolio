import React from "react"
import ReactLogo from "../../assets/svg/logo-react.svg"
import FirebaseLogo from "../../assets/svg/logo-firebase.svg"
import Html5Logo from "../../assets/svg/logo-html5.svg"
import CssLogo from "../../assets/svg/logo-css.svg"
import JsLogo from "../../assets/svg/logo-js.svg"
import SassLogo from "../../assets/svg/logo-sass.svg"
import GatsbyLogo from "../../assets/svg/logo-gatsby.svg"
import ReactNativeLogo from "../../assets/svg/logo-reactNative.svg"
import VsCodeLogo from "../../assets/svg/logo-vscode.svg"
import FigmaLogo from "../../assets/svg/logo-figma.svg"
import GithubLogo from "../../assets/svg/logo-github.svg"
import NpmLogo from "../../assets/svg/logo-npm.svg"
import WebpackLogo from "../../assets/svg/logo-webpack.svg"

import * as styles from "./skills.module.css"

function Skills() {
  return (
    <div id="skillsSection" className="customContainer">
      <h3 className={`sectionHeader revealTop ${styles.headerGreen}`}>
        UMIEJĘTNOŚCI
      </h3>

      <div className={`marginContainer ${styles.container}`}>
        <div className={`revealLeft longCol ${styles.introSection}`}>
          <h2 className={`header ${styles.headerPosition}`}>
            Technologie których używam
          </h2>
          <p className="paragraph">
            Używanie nowych technologii pomagają tworzyć projekty szybciej oraz
            umożliwiać lepszą współpracę i komunikację w zespole.
          </p>
        </div>
        <div className={`revealRight shortCol ${styles.technologiesSection}`}>
          <div className={styles.technologyContainer}>
            <ReactLogo className={styles.logo} />
          </div>
          <div className={styles.technologyContainer}>
            <FirebaseLogo className={styles.logo} />
          </div>
          <div className={styles.technologyContainer}>
            <GatsbyLogo className={styles.logo} />
          </div>
          <div className={styles.technologyContainer}>
            <JsLogo className={styles.logo} />
          </div>
          <div className={styles.technologyContainer}>
            <ReactNativeLogo className={styles.logo} />
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

        <div
          className={`revealRight longCol ${styles.introSection} ${styles.toolsSection}`}
        >
          <h2 className={`header ${styles.headerPosition}`}>
            Narzędzia których używam
          </h2>
          <p className="paragraph">
            Narzędzia potrafią zaoszczędzić wiele czasu programiście, ułatwić
            pracę oraz pomagać realizować obrane cele.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
