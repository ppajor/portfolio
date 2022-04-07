import React, { useState } from "react"

import * as styles from "./projects.module.css"
import ProjectBox from "./ProjectBox"
import NavigationCircle from "./NavigationCircle"
import mockupBooking from "../../assets/img/mockup-booking.png"
import mockupMissYou from "../../assets/img/mockup-missyouapp.png"
import mockupIPTracker from "../../assets/img/mockup-ipaddress.png"
import mockupSuprai from "../../assets/img/mockup-suprai.png"
import mockupPortfolio from "../../assets/img/mockup-portfolio.png"

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
          mattis enim ut dolor laoreet. Risus semper cursus vitae urna quam
          lectus enim. In vulputate vel varius elit mauris duis integer cras
          commodo. Vel duis accumsan adipiscing donec eu integer metus gravida.
          Sit adipiscing non condimentum ornare netus vitae tortor, semper.
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
                key={el.id}
                active={true}
                handleOnClick={() => setProjectID(el.id - 1)}
              />
            )
          } else {
            return (
              <NavigationCircle
                key={el.id}
                active={false}
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
    desc: `Application for android platform made for lovers living far away from each other. Main functionality is to attach partner nickname to an account and use this information to send notifications clicking big red heart on main screen or emoji in Humour Detector to partner's phone..`,
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
    link: "https://github.com/ppajor/MissYouApp",
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
    link: "https://github.com/ppajor/MissYouApp",
    mobile: false,
  },
]
