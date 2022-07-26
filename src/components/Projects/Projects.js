import React, { useState } from "react";
import * as styles from "./projects.module.css";
import ProjectBox from "./ProjectBox";
import NavigationCircle from "./NavigationCircle";
import mockupBooking from "../../assets/img/mockup-booking-min.png";
import mockupMissYou from "../../assets/img/mockup-missyouapp-min.png";
import mockupIPTracker from "../../assets/img/mockup-ipaddress-min.png";
import mockupSuprai from "../../assets/img/mockup-suprai-min.png";
import mockupPortfolio from "../../assets/img/mockup-portfolio-min.png";
import mockupGithubSearch from "../../assets/img/mockup_githubSearch.png";
import { useTranslation, I18nextContext } from "gatsby-plugin-react-i18next";

function Projects() {
  const { t } = useTranslation();
  const context = React.useContext(I18nextContext);
  const { language } = context;

  const [projectID, setProjectID] = useState(0);

  return (
    <section id="projectsSection" className="customContainer">
      <h3 className="revealTop sectionHeader">{t("Navlink1")}</h3>
      <div className={styles.checkContainer}>
        <h2 className={`revealLeft ${styles.checkHeader}`}>{t("Projects_header")}</h2>
        <p className={`revealRight ${styles.checkParagraph} paragraph`}>{t("Projects_body")}</p>
      </div>
      <ProjectBox
        name={projects[projectID].name}
        img={projects[projectID].img}
        description={language === "pl" ? projects[projectID].desc : projects[projectID].desc_en}
        technologies={projects[projectID].technologies}
        link={projects[projectID].link}
        isMobile={projects[projectID].mobile}
        demo={projects[projectID].demo}
        loaded={false}
      />
      <div className={styles.sliderNavigation}>
        {projects.map((el) => {
          if (el.id - 1 === projectID) {
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
    desc_en: `Mobile application for the platformandroid that allows searching,saving and sharinginformation related to the reading process and creating statistics for tracking user's progress`,
    technologies: "react native, expo, firebase, node.js, npm, api",
    link: "https://github.com/ppajor/BooKing",
    mobile: true,
  },
  {
    id: 2,
    name: "Github files search",
    img: mockupGithubSearch,
    desc: "Responsywna strona internetowa zbudowana przy pomocy technologii React/Typescript mająca na celu wyszukiwanie plików z repozytoriów githuba, danego użytkownika przy określeniu języka programowania",
    desc_en: `Responsive website built with React / Typescript, made for searching github files of a given user, specifying phrase and programming language`,
    technologies: "react, typescript, node.js, npm, api, local storage",
    link: "https://github.com/ppajor/GithubFilesSearch",
    demo: "https://astounding-chaja-76a044.netlify.app/",
    mobile: false,
  },
  {
    id: 3,
    name: "MissYou App",
    img: mockupMissYou,
    desc_en: `A mobile application for the android platform created for lovers living far away from each other `,
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
    desc_en: "Responsive website that allows you to search for key information about the location of the entered IP or domain address",
    technologies: "html, css, js, api",
    link: "https://github.com/ppajor/IP-Address-Tracker",
    demo: "https://dreamy-meitner-f6d00a.netlify.app/",
    mobile: false,
  },
  {
    id: 5,
    name: "SuprAI",
    img: mockupSuprai,
    desc: `Responsywna strona internetowa dla firmy, stworzona przy pomocy frameworku Bootstrap.`,
    desc_en: "Responsive landing page for company, made with Bootstrap framework",
    technologies: "html, css, bootstrap",
    link: "https://github.com/ppajor/Company-landing-page",
    demo: "https://admirable-travesseiro-ef441f.netlify.app/",
    mobile: false,
  },
  {
    id: 6,
    name: "Portfolio",
    img: mockupPortfolio,
    desc: `Projekt aktualnego portfolio.`,
    desc_en: `Actual portfolio project`,
    technologies: "gatsby, css modules",
    link: "https://github.com/ppajor/portfolio",
    mobile: false,
  },
];
