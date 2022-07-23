import React, { useState } from "react";
import { Link } from "gatsby";
import * as styles from "./projects.module.css";
import ProjectBox from "./ProjectBox";
import NavigationCircle from "./NavigationCircle";
import mockupBooking from "../../assets/img/mockup-booking-min.png";
import mockupMissYou from "../../assets/img/mockup-missyouapp-min.png";
import mockupIPTracker from "../../assets/img/mockup-ipaddress-min.png";
import mockupSuprai from "../../assets/img/mockup-suprai-min.png";
import mockupPortfolio from "../../assets/img/mockup-portfolio-min.png";
import mockupGithubSearch from "../../assets/img/mockup_githubSearch.png";

function Projects() {
  const [projectID, setProjectID] = useState(0);

  return (
    <section id="projectsSection" className="customContainer">
      <h3 className="revealTop sectionHeader">PROJEKTY</h3>
      <div className={styles.checkContainer}>
        <h2 className={`revealLeft ${styles.checkHeader}`}>Sprawdź moje projekty!</h2>
        <p className={`revealRight ${styles.checkParagraph} paragraph`}>
          Poniższe projekty, zostały zrealizowane w 100% przeze mnie i jestem ich pomysłodawcą. Podczas ich tworzenia staram się kłaść nacisk zarówno
          na funkcjonalności jak i walory estetyczne, by były przyjemne dla oka i przyciągały uwagę użytkowników. Dbałość o szczegóły, estetyka oraz
          kreatywność to główne cechy jakimi kieruję się przy tworzeniu projektów.
        </p>
      </div>
      <ProjectBox
        name={projects[projectID].name}
        img={projects[projectID].img}
        description={projects[projectID].desc}
        technologies={projects[projectID].technologies}
        link={projects[projectID].link}
        isMobile={projects[projectID].mobile}
        loaded={false}
      />
      <div className={styles.sliderNavigation}>
        {projects.map((el) => {
          if (el.id - 1 == projectID) {
            return <NavigationCircle active={true} key={el.id} handleOnClick={() => setProjectID(el.id - 1)} />;
          } else {
            return <NavigationCircle active={false} key={el.id} handleOnClick={() => setProjectID(el.id - 1)} />;
          }
        })}
      </div>
    </section>
  );
}

export default Projects;

const projects = [
  {
    id: 1,
    name: "Booking",
    img: mockupBooking,
    desc: `Aplikacja mobilna na platformę android wykonana jest przy pomocy technologii React Native, której głównym celem jest zapisywanie i przechowywanie informacji na temat książek interesujących danego użytkownika. `,
    technologies: "react native, expo, firebase, node.js, npm, api",
    link: "https://github.com/ppajor/BooKing",
    mobile: true,
  },
  {
    id: 2,
    name: "Github files search",
    img: mockupGithubSearch,
    desc: `Responsywna strona internetowa zbudowana przy pomocy technologii React/Typescript mająca na celu wyszukiwanie plików z repozytoriów githuba, danego użytkownika przy określeniu języka programowania`,
    technologies: "react, typescript, node.js, npm, api, local storage",
    link: "https://github.com/ppajor/GithubFilesSearch",
    mobile: false,
  },
  {
    id: 3,
    name: "MissYou App",
    img: mockupMissYou,
    desc: `Aplikacja mobilna na platformę android stworzona dla zakochanych przy pomocy frameworku React Native `,
    technologies: "react native, firebase, node.js, npm",
    link: "https://github.com/ppajor/MissYouApp",
    mobile: "true",
  },
  {
    id: 4,
    name: "IP Address Tracker",
    img: mockupIPTracker,
    desc: `Responsywna strona internetowa pozwalająca na wyszukiwanie kluczowych informacji oraz lokalizacji wpisanego IP bądź adresu domeny. `,
    technologies: "html, css, js, api",
    link: "https://github.com/ppajor/IP-Address-Tracker",
    mobile: false,
  },
  {
    id: 5,
    name: "SuprAI",
    img: mockupSuprai,
    desc: `Responsywna strona internetowa dla firmy, stworzona przy pomocy frameworku Bootstrap.`,
    technologies: "html, css, bootstrap",
    link: "https://github.com/ppajor/Company-landing-page",
    mobile: false,
  },
  {
    id: 6,
    name: "Portfolio",
    img: mockupPortfolio,
    desc: `Projekt aktualnego portfolio.`,
    technologies: "gatsby, css modules",
    link: "https://github.com/ppajor/portfolio",
    mobile: false,
  },
];
