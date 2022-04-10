import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { HiX } from "react-icons/hi"

import * as styles from "../styles/index.module.css"
import Nav from "../components/Nav/Nav"
import Hero from "../components/Hero/Hero"
import NavMobile from "../components/NavMobile/NavMobile"
import Projects from "../components/Projects/Projects"
import About from "../components/About/About"
import Skills from "../components/Skills/Skills"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"

export default function Home() {
  const [typingStopped, setTypingStopped] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const navRef = useRef()
  const headerRef = useRef()
  const pRef = useRef()
  const svgRef = useRef()
  const signatureRef = useRef()
  const arrow = useRef()

  console.log("menu open", menuOpen)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const topTriggers = gsap.utils.toArray(".revealTop")
    topTriggers.forEach(item => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
        },
        y: -100,
        duration: 2,
        delay: 0.2,
        ease: "power3.out",
        opacity: 0,
      })
    })

    const leftTriggers = gsap.utils.toArray(".revealLeft")
    leftTriggers.forEach(item => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
        },
        x: -30,
        duration: 2,
        delay: 0.2,
        ease: "power3.out",
        opacity: 0,
      })
    })

    const rightTriggers = gsap.utils.toArray(".revealRight")
    rightTriggers.forEach(item => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
        },
        x: 30,
        duration: 2,
        delay: 0.2,

        ease: "power3.out",
        opacity: 0,
      })
    })

    var tl = gsap.timeline()

    tl.from(navRef.current, {
      yPercent: -100,
      duration: 0.75,
      ease: "power2.in",
    })

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
      duration: 0.75,
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
            <NavMobile clickLink={() => setMenuOpen(false)} />
          </div>
        )}
        <Projects />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
