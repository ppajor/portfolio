import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import * as styles from "../styles/index.module.css"
import logoXD from "../assets/logoXD.png"
import Nav from "../components/Nav/Nav"
import Hero from "../components/Hero/Hero"
import { FaBorderNone } from "react-icons/fa"
import { HiX } from "react-icons/hi"
import { FaBrain, FaUser, FaPhoneAlt, FaMagic } from "react-icons/fa"
import { BsGearFill } from "react-icons/bs"

export default function Home() {
  const [typingStopped, setTypingStopped] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const animation = useRef()
  const navRef = useRef()
  const headerRef = useRef()
  const pRef = useRef()
  const svgRef = useRef()
  const signatureRef = useRef()
  const arrow = useRef()

  useEffect(() => {
    var tl = gsap.timeline()

    tl.to(animation.current, {
      top: window.innerHeight,
      duration: 1,
      delay: 0.2,
      ease: "power3.in",
    })

    tl.from(navRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "power2.in",
    })

    tl.to(
      animation.current,
      {
        display: "none",
      },
      "<"
    )

    tl.from(headerRef.current, {
      onComplete: () => {
        setTypingStopped(false)
      },
      duration: 1,
      xPercent: -10,
      opacity: 0,
      ease: "power2.in",
    })

    tl.from(
      pRef.current,
      {
        duration: 0.75,
        xPercent: -10,
        opacity: 0,
        ease: "power2.in",
      },
      "<"
    )

    tl.from(
      signatureRef.current,
      {
        duration: 0.75,
        xPercent: -10,
        opacity: 0,
        ease: "power2.in",
      },
      "<"
    )

    tl.from(headerRef.current, {
      "--pseudo-element-width": 0,
      duration: 0.5,
    })

    tl.from(svgRef.current, {
      opacity: 0,
      duration: 2,
      ease: "power2.in",
    })

    tl.from(arrow.current, {
      opacity: 0,
      duration: 0.2,
      yPercent: -5,
      ease: "power2.in",
    })
  }, [])

  return (
    <>
      <div
        className={styles.animationContainer}
        id="animationPage"
        ref={animation}
      >
        <img className={styles.img} src={logoXD} alt="logo" />
      </div>
      <div className={styles.mainContainer}>
        <Nav navRef={navRef} hamburgerOpen={() => setMenuOpen(true)} />
        <Hero
          headerRef={headerRef}
          paragraphRef={pRef}
          svgRef={svgRef}
          signatureRef={signatureRef}
          arrowRef={arrow}
          typingAnimationStopped={typingStopped}
        />
        {menuOpen && (
          <div className={styles.mobileNavContainer}>
            <div
              className={styles.exitIconContainer}
              onClick={() =>
                setMenuOpen(false)
              } /*sposob na on clicka w divie w reactie*/
            >
              <HiX size={32} />
            </div>
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
                  <FaMagic className={styles.iconSkills} size={24} />{" "}
                  Umiejętności
                </li>
                <li className={styles.mobileNavLi}>
                  <FaPhoneAlt className={styles.iconContact} size={24} />{" "}
                  Kontakt
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
