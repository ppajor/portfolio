import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./about.module.css"
import av from "../../assets/img/cv-foto2.jpg"
import { Link } from "gatsby"

function About() {
  return (
    <div id="aboutSection" className="customContainer">
      <h3 className={`sectionHeader revealTop ${styles.headerRed}`}>O MNIE</h3>
      <div className={styles.container}>
        <div className={`revealLeft ${styles.aboutImgContainer}`}>
          <StaticImage
            className={` ${styles.img}`}
            src="../../assets/img/cvlol.png"
            placeholder="blurred"
            alt="av"
          />
        </div>
        <div className={`revealRight ${styles.aboutContentContainer}`}>
          <h2 className={styles.aboutHeader}>Cześć! Jestem Paweł! :)</h2>
          <p className={styles.aboutParagraph}>
            Jestem studentem, od kilku lat interesuję się designem, tworzeniem
            stron internetowych oraz aplikacji mobilnych. Moim celem jest
            uzyskanie doświadczenia zawodowego i kształtowanie swoich
            umiejętności technicznych w zakresie Frontend Developmentu. Nie mam
            problemów z komunikacją w języku angielskim i posiadam wysokie
            umiejętności interpersonalne. Istotnym elementem pracy jest dla mnie
            atmosfera w zespole.
          </p>
          <Link to="#contactSection" className="link">
            <button className={`btnPrimary ${styles.contactBtn}`}>
              Skontaktuj się ze mną!
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
