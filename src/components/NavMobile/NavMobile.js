import React from "react"
import { Link } from "gatsby"
import { FaBrain, FaUser, FaPhoneAlt, FaMagic } from "react-icons/fa"

import * as styles from "./navMobile.module.css"

function NavMobile(props) {
  return (
    <div className={styles.mobileNavContentContainer}>
      <ul>
        <Link
          onClick={() => props.clickLink()}
          to="#projectsSection"
          className={`link ${styles.mobileNavLi}`}
        >
          <FaBrain className={`iconProjects ${styles.icon}`} size={24} />
          Projekty
        </Link>
        <Link
          onClick={() => props.clickLink()}
          to="#aboutSection"
          className={`link ${styles.mobileNavLi}`}
        >
          <FaUser className={`iconAboutMe ${styles.icon}`} size={24} />O mnie
        </Link>
        <Link
          onClick={() => props.clickLink()}
          to="#skillsSection"
          className={`link ${styles.mobileNavLi}`}
        >
          <FaMagic className={`iconSkills ${styles.icon}`} size={24} />
          Umiejętności
        </Link>
        <Link
          onClick={() => props.clickLink()}
          to="#contactSection"
          className={`link ${styles.mobileNavLi}`}
        >
          <FaPhoneAlt className={`iconContact ${styles.icon}`} size={24} />
          Kontakt
        </Link>
      </ul>
    </div>
  )
}

export default NavMobile
