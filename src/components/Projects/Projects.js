import React, { useState, useEffect } from "react"

import * as styles from "./projects.module.css"
import ProjectBox from "./ProjectBox"
import NavigationCircle from "./NavigationCircle"

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
        img={projects[projectID].imgName}
        description={projects[projectID].desc}
        technologies={projects[projectID].technologies}
        link={projects[projectID].link}
      />
      <div className={styles.sliderNavigation}>
        {projects.map(el => {
          if (el.id - 1 == projectID) {
            return (
              <NavigationCircle
                active={true}
                handleOnClick={() => setProjectID(el.id - 1)}
              />
            )
          } else {
            return (
              <NavigationCircle
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
    imgName: "mockup-booking",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
    mattis enim ut dolor laoreet. Risus semper cursus vitae urna quam
    lectus enim. In vulputate vel varius elit mauris duis integer cras
    commodo. Vel duis accumsan adipiscing donec eu integer metus
    gravida. Sit adipiscing non condimentum ornare netus vitae tortor,
    semper`,
    technologies: "react native, firebase, node.js, npm",
    link: "https://github.com/ppajor/BooKing",
  },
  {
    id: 2,
    name: "MissYou App",
    imgName: "mockup-missyouapp",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
    mattis enim ut dolor laoreet. Risus semper cursus vitae urna quam
    lectus enim. In vulputate vel varius elit mauris duis integer cras
    commodo.`,
    technologies: "react native, firebase, node.js, npm",
    link: "https://github.com/ppajor/MissYouApp",
  },
  {
    id: 3,
    name: "IP Address Tracker",
    imgName: "mockup-missyouapp",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
    mattis enim ut dolor laoreet. Risus semper cursus vitae urna quam
    lectus enim. In vulputate vel varius elit mauris duis integer cras
    commodo. In vulputate vel varius elit mauris duis integer cras
    commodo.`,
    technologies: "html, css, js, api",
    link: "https://github.com/ppajor/IP-Address-Tracker",
  },
  {
    id: 4,
    name: "SuprAI",
    imgName: "mockup-missyouapp",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
    mattis enim ut dolor laoreet. Risus semper cursus vitae urna quam
    lectus enim. In vulputate vel varius elit mauris duis integer cras
    commodo. In vulputate vel varius elit mauris duis integer cras
    commodo.`,
    technologies: "html, css, bootstrap",
    link: "https://github.com/ppajor/MissYouApp",
  },
  {
    id: 5,
    name: "Portfolio",
    imgName: "mockup-missyouapp",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
    mattis enim ut dolor laoreet. Risus semper cursus vitae urna quam
    lectus enim. In vulputate vel varius elit mauris duis integer cras
    commodo. In vulputate vel varius elit mauris duis integer cras
    commodo.`,
    technologies: "gatsby, css modules",
    link: "https://github.com/ppajor/MissYouApp",
  },
]
