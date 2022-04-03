import React from "react"
import { Link } from "gatsby"
import { FaBrain, FaUser, FaPhoneAlt, FaMagic } from "react-icons/fa"
import { HiOutlineMenuAlt3 } from "react-icons/hi"

import * as styles from "./nav.module.css"
import Logo from "../../assets/svg/nav-logo.svg"

function Nav({ navRef, ...props }) {
  const hamburgerOnClick = () => {
    props.hamburgerOpen()
  }

  return (
    <nav className={styles.nav} ref={navRef}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <ul className={styles.ul}>
        <Link to="#projectsSection" className={`link ${styles.li}`}>
          <FaBrain className={`iconProjects ${styles.icon}`} />
          Projekty
        </Link>
        <Link to="#aboutSection" className={`link ${styles.li}`}>
          <FaUser className={` iconAboutMe ${styles.icon}`} />O mnie
        </Link>
        <Link to="#skillsSection" className={`link ${styles.li}`}>
          <FaMagic className={`iconSkills ${styles.icon}`} />
          Umiejętności
        </Link>
        <Link to="#contactSection" className={`link ${styles.li}`}>
          <FaPhoneAlt className={`iconContact ${styles.icon}`} />
          Kontakt
        </Link>
      </ul>
      <div
        className={styles.hamburgerMenuContainer}
        onClick={() => hamburgerOnClick()}
      >
        <HiOutlineMenuAlt3 className={styles.hamburgerMenu} size={32} />
      </div>
    </nav>
  )
}

export default Nav
