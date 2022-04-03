import React from "react"

import * as styles from "./projects.module.css"
import mockupBooking from "../../assets/img/mockup-booking.png"

function Projects() {
  return (
    <section id="projectsSection" className="customContainer">
      <h3 className="revealTop sectionHeader">PROJEKTY</h3>
      <div className={styles.checkContainer}>
        <h2 className={`revealLeft ${styles.checkHeader}`}>
          Sprawdź moje projekty!
        </h2>
        <p className={`revealRight ${styles.checkParagraph} paragraph`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
          mattis enim ut dolor laoreet. Risus semper cursus vitae urna quam
          lectus enim. In vulputate vel varius elit mauris duis integer cras
          commodo. Vel duis accumsan adipiscing donec eu integer metus gravida.
          Sit adipiscing non condimentum ornare netus vitae tortor, semper.
        </p>
      </div>
      <article className={`revealLeft ${styles.project}`}>
        <div className={styles.mockupContainer}>
          <img src={mockupBooking} alt="mockup" />
        </div>
        <div className={styles.projectContentContainer}>
          <h2 className={styles.projectContentHeader}>Booking</h2>
          <p className={` ${styles.projectContentParagraph} paragraph`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
            mattis enim ut dolor laoreet. Risus semper cursus vitae urna quam
            lectus enim. In vulputate vel varius elit mauris duis integer cras
            commodo. Vel duis accumsan adipiscing donec eu integer metus
            gravida. Sit adipiscing non condimentum ornare netus vitae tortor,
            semper.
          </p>
          <p className={styles.projectContentTechnologies}>
            Zastosowane technologie:
            <span className={styles.grayText}>
              react native, firebase, node.js, npm
            </span>
          </p>
          <button className={`btnPrimary ${styles.projectContainerBtn}`}>
            Sprawdź
          </button>
        </div>
      </article>
    </section>
  )
}

export default Projects
