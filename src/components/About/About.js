import React from "react"
import * as styles from "./about.module.css"
import av from "../../assets/img/cv-foto.jpg"

function About() {
  return (
    <div className="customContainer">
      <h3 className={`sectionHeader ${styles.headerRed}`}>O mnie</h3>
      <div className={styles.container}>
        <div className={styles.aboutImgContainer}>
          <img className={styles.img} src={av} alt="av" />
        </div>
        <div className={styles.aboutContentContainer}>
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
        </div>
      </div>
    </div>
  )
}

export default About
