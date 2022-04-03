import React from "react"
import * as styles from "./about.module.css"
import av from "../../assets/img/cv-foto2.jpg"

function About() {
  return (
    <div id="aboutSection" className="customContainer">
      <h3 className={`sectionHeader revealTop ${styles.headerRed}`}>O MNIE</h3>
      <div className={styles.container}>
        <div className={`revealLeft ${styles.aboutImgContainer}`}>
          <img className={` ${styles.img}`} src={av} alt="av" />
        </div>
        <div className={`revealRight ${styles.aboutContentContainer}`}>
          <h2 className={styles.aboutHeader}>Cześć! Jestem Paweł! :)</h2>
          <p className={styles.aboutParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut
            varius interdum posuere porttitor ultricies aliquam scelerisque
            maecenas. Nibh vel elementum, tincidunt elit tortor justo, in. Id
            sed fermentum, mauris, quam purus et. Id vestibulum lectus in urna.
            Nulla sagittis penatibus mi malesuada commodo nulla. Massa et in
            montes, tristique mauris. Pretium eget ut congue et feugiat euismod
            at donec blandit. Amet sit eget venenatis felis, quis in. Vitae
            donec aliquet vitae pretium.
          </p>
          <button className={`btnPrimary ${styles.contactBtn}`}>
            Skontaktuj się ze mną!
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
