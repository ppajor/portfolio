import React from "react"
import * as styles from "./nav.module.css"
import Logo from "../../assets/svg/nav-logo.svg"
import { FaBrain, FaUser, FaPhoneAlt } from "react-icons/fa"
import { BsGearFill } from "react-icons/bs"

function Nav({ navRef }) {
  return (
    <nav className={styles.nav} ref={navRef}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <FaBrain className={styles.icon} color="#4C1560" />
          Projekty
        </li>
        <li className={styles.li}>
          <FaUser className={styles.icon} color="#D73838" />O mnie
        </li>
        <li className={styles.li}>
          <BsGearFill className={styles.icon} color="#21861F" />
          Umiejętności
        </li>
        <li className={styles.li}>
          <FaPhoneAlt className={styles.icon} color="#F46A05" />
          Kontakt
        </li>
      </ul>
    </nav>
  )
}

export default Nav
