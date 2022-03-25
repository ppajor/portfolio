import React from "react"
import { FaBrain, FaUser, FaPhoneAlt, FaMagic } from "react-icons/fa"
import * as styles from "./navMobile.module.css"

function NavMobile() {
  return (
    <div className={styles.mobileNavContentContainer}>
      <ul>
        <li className={styles.mobileNavLi}>
          <FaBrain className={styles.iconProjects} size={24} />
          Projekty
        </li>
        <li className={styles.mobileNavLi}>
          <FaUser className={styles.iconAboutMe} size={24} />O mnie
        </li>
        <li className={styles.mobileNavLi}>
          <FaMagic className={styles.iconSkills} size={24} /> Umiejętności
        </li>
        <li className={styles.mobileNavLi}>
          <FaPhoneAlt className={styles.iconContact} size={24} /> Kontakt
        </li>
      </ul>
    </div>
  )
}

export default NavMobile
