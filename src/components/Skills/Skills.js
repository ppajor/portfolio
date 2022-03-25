import React from "react"
import { FaReact } from "react-icons/fa"

import * as styles from "./skills.module.css"

function Skills() {
  return (
    <div className="customContainer">
      <h3 className={`sectionHeader ${styles.headerGreen}`}>Umiejętności</h3>

      <div className={styles.container}>
        <FaReact size={32} color="dodgerblue" />
      </div>
    </div>
  )
}

export default Skills
