import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import * as styles from "../styles/index.module.css"
import logoXD from "../assets/logoXD.png"
import Nav from "../components/Nav/Nav"
import Hero from "../components/Hero/Hero"
import { FaBorderNone } from "react-icons/fa"

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
        <Nav navRef={navRef} hamburgerOpen={menuOpen} />
        <Hero
          headerRef={headerRef}
          paragraphRef={pRef}
          svgRef={svgRef}
          signatureRef={signatureRef}
          arrowRef={arrow}
          typingAnimationStopped={typingStopped}
        />
      </div>
    </>
  )
}
