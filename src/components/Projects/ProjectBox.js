import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { BsGithub } from "react-icons/bs"

import * as styles from "./projects.module.css"

function ProjectBox({ description, img, isMobile, link, name, technologies }) {
  return (
    <>
      <article className={`revealLeft ${styles.project}`}>
        <div className={styles.mockupContainer}>
          {isMobile ? (
            <img className={styles.mockupImgMobile} src={img} alt="mockup" />
          ) : (
            <img className={styles.mockupImgDesktop} src={img} alt="mockup" />
          )}
        </div>
        <div className={styles.projectContentContainer}>
          <h2 className={styles.projectContentHeader}>{name}</h2>
          <p className={` ${styles.projectContentParagraph} paragraph`}>
            {description}
          </p>
          <p className={styles.projectContentTechnologies}>
            Zastosowane technologie:
            <span className={styles.grayText}>{technologies}</span>
          </p>
          <a href={link} className={styles.link}>
            <button className={`btnPrimary ${styles.projectContainerBtn}`}>
              <BsGithub size={18} className={styles.githubLogo} />
              Sprawdź
            </button>
          </a>
        </div>
      </article>
    </>
  )
}

export default ProjectBox
