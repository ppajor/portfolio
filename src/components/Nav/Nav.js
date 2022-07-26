import React from "react";
import { FaBrain, FaUser, FaPhoneAlt, FaMagic } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next";

import * as styles from "./nav.module.css";
import Logo from "../../assets/svg/nowe_logo.svg";

function Nav({ navRef, ...props }) {
  const { languages, changeLanguage } = useI18next();
  const { t } = useTranslation();

  const hamburgerOnClick = () => {
    props.hamburgerOpen();
  };

  return (
    <nav className={styles.nav} ref={navRef}>
      <div className={styles.navWraper}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <ul className={styles.ul}>
          <Link to="#projectsSection" className={`link ${styles.li}`}>
            <FaBrain className={`iconProjects ${styles.icon}`} />
            {t("Navlink1")}
          </Link>
          <Link to="#aboutSection" className={`link ${styles.li}`}>
            <FaUser className={` iconAboutMe ${styles.icon}`} />
            {t("Navlink2")}
          </Link>
          <Link to="#skillsSection" className={`link ${styles.li}`}>
            <FaMagic className={`iconSkills ${styles.icon}`} />
            {t("Navlink3")}
          </Link>
          <Link to="#contactSection" className={`link ${styles.li}`}>
            <FaPhoneAlt className={`iconContact ${styles.icon}`} />
            {t("Navlink4")}
          </Link>
        </ul>
        <ul className={styles.langMenu}>
          <span>lang:</span>
          <div className={styles.flagsContainer}>
            {languages.map((lng) => (
              <li key={lng}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    changeLanguage(lng);
                  }}
                >
                  {lng === "pl" && <img className={styles.flag} src="https://flagcdn.com/16x12/pl.png"></img>}
                  {lng === "en" && <img className={styles.flag} src="https://flagcdn.com/16x12/gb.png"></img>}
                </a>
              </li>
            ))}
          </div>
        </ul>
        <div className={styles.hamburgerMenuContainer} onClick={() => hamburgerOnClick()}>
          <HiOutlineMenuAlt3 className={styles.hamburgerMenu} size={32} />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
