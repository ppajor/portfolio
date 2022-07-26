import React, { useState, useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as styles from "./projects.module.css";

function ProjectBox({ description, img, isMobile, link, name, technologies }) {
  const [loadedImg, setLoadedImg] = useState(false);
  const { t } = useTranslation();

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
            {t("Projectbox_smallheader")}
            <span className={styles.grayText}>{technologies}</span>
          </p>

          <a href={link} className={styles.link}>
            <button className={`btnPrimary ${styles.projectContainerBtn}`}>
              <BsGithub size={18} className={styles.githubLogo} />
              {t("Check_btn")}
            </button>
          </a>
        </div>
      </article>
    </>
  );
}

export default ProjectBox;
