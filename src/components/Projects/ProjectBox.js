import React, { useState, useEffect } from "react";
import { BsGithub } from "react-icons/bs";

import * as styles from "./projects.module.css";

function ProjectBox({ description, img, isMobile, link, name, technologies }) {
  const [loadedImg, setLoadedImg] = useState(false);

  console.log("loadedimg", loadedImg);

  useEffect(() => {
    setLoadedImg(false);
  }, [img]);

  return (
    <>
      <article id="projectBox" className={`revealLeft ${styles.project}`}>
        <div className={styles.mockupContainer}>
          {isMobile ? (
            <img
              className={`${styles.mockupImgMobile} ${loadedImg ? styles.active : styles.hidden}`}
              src={img}
              alt="mockup"
              onLoad={() => setLoadedImg(true)}
            />
          ) : (
            <img
              className={`${styles.mockupImgDesktop} ${loadedImg ? styles.active : styles.hidden}`}
              src={img}
              alt="mockup"
              onLoad={() => setLoadedImg(true)}
            />
          )}
        </div>
        <div className={styles.projectContentContainer}>
          <h2 className={styles.projectContentHeader}>{name}</h2>
          <p className={` ${styles.projectContentParagraph} paragraph`}>{description}</p>
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
  );
}

export default ProjectBox;
