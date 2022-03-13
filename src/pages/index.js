import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import * as styles from "../styles/index.module.css"
import logoXD from "../assets/logoXD.png"
import Nav from "../components/Nav/Nav"
import Hero from "../components/Hero/Hero"

export default function Home() {
  const animation = useRef()
  const navRef = useRef()
  const headerRef = useRef()
  const pRef = useRef()
  const svgRef = useRef()

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
      duration: 0.8,
      ease: "power2.in",
    })
    tl.from(headerRef.current, {
      duration: 1,
      xPercent: -120,
      ease: "power2.in",
    })
    tl.from(pRef.current, {
      duration: 0.5,
      xPercent: -120,
      ease: "power2.in",
    })
    tl.to(svgRef.current, {
      opacity: 1,
      duration: 2,
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
        <Nav navRef={navRef} />
        <Hero headerRef={headerRef} paragraphRef={pRef} svgRef={svgRef} />
      </div>
    </>
  )
}
