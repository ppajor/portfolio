import React, { useState } from "react"
import { Link } from "gatsby"
import * as styles from "./projects.module.css"
import ProjectBox from "./ProjectBox"
import NavigationCircle from "./NavigationCircle"
import mockupBooking from "../../assets/img/mockup-booking-min.png"
import mockupMissYou from "../../assets/img/mockup-missyouapp-min.png"
import mockupIPTracker from "../../assets/img/mockup-ipaddress-min.png"
import mockupSuprai from "../../assets/img/mockup-suprai-min.png"
import mockupPortfolio from "../../assets/img/mockup-portfolio-min.png"

function Projects() {
  const [projectID, setProjectID] = useState(0)

  return (
    <section id="projectsSection" className="customContainer">
      <h3 className="revealTop sectionHeader">PROJEKTY</h3>
      <div className={styles.checkContainer}>
        <h2 className={`revealLeft ${styles.checkHeader}`}>
          Sprawdź moje projekty!
        </h2>
        <p className={`revealRight ${styles.checkParagraph} paragraph`}>
          Poniższe projekty, zostały zrealizowane w 100% przeze mnie i jestem
          ich pomysłodawcą. Podczas ich tworzenia staram się kłaść nacisk
          zarówno na funkcjonalności jak i walory estetyczne, by były przyjemne
          dla oka i przyciągały uwagę użytkowników. Dbałość o szczegóły,
          estetyka oraz kreatywność to główne cechy jakimi kieruję się przy
          tworzeniu projektów.
        </p>
      </div>
      <ProjectBox
        name={projects[projectID].name}
        img={projects[projectID].img}
        description={projects[projectID].desc}
        technologies={projects[projectID].technologies}
        link={projects[projectID].link}
        isMobile={projects[projectID].mobile}
      />
      <div className={styles.sliderNavigation}>
        {projects.map(el => {
          if (el.id - 1 == projectID) {
            return (
              <NavigationCircle
                active={true}
                key={el.id}
                handleOnClick={() => setProjectID(el.id - 1)}
              />
            )
          } else {
            return (
              <NavigationCircle
                active={false}
                key={el.id}
                handleOnClick={() => setProjectID(el.id - 1)}
              />
            )
          }
        })}
      </div>
    </section>
  )
}

export default Projects

const projects = [
  {
    id: 1,
    name: "Booking",
    img: mockupBooking,
    desc: `Mobile application for android platform created to store information about books read by a certain user. App can create statistics and store user's friends information.`,
    technologies: "react native, expo, firebase, node.js, npm, api",
    link: "https://github.com/ppajor/BooKing",
    mobile: true,
  },
  {
    id: 2,
    name: "MissYou App",
    img: mockupMissYou,
    desc: `Application for android platform made for lovers living far away from each other. `,
    technologies: "react native, firebase, node.js, npm",
    link: "https://github.com/ppajor/MissYouApp",
    mobile: "true",
  },
  {
    id: 3,
    name: "IP Address Tracker",
    img: mockupIPTracker,
    desc: `Responsive website used for tracking IP addresses`,
    technologies: "html, css, js, api",
    link: "https://github.com/ppajor/IP-Address-Tracker",
    mobile: false,
  },
  {
    id: 4,
    name: "SuprAI",
    img: mockupSuprai,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
    mattis enim ut dolor laoreet. Risus semper cursus vitae urna quam
    lectus enim. In vulputate vel varius elit mauris duis integer cras
    commodo. In vulputate vel varius elit mauris duis integer cras
    commodo.`,
    technologies: "html, css, bootstrap",
    link: "https://github.com/ppajor/Company-landing-page",
    mobile: false,
  },
  {
    id: 5,
    name: "Portfolio",
    img: mockupPortfolio,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
    mattis enim ut dolor laoreet. Risus semper cursus vitae urna quam
    lectus enim. In vulputate vel varius elit mauris duis integer cras
    commodo. In vulputate vel varius elit mauris duis integer cras
    commodo.`,
    technologies: "gatsby, css modules",
    link: "https://github.com/ppajor/portfolio",
    mobile: false,
  },
]
