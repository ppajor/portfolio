import React from "react"

import * as styles from "./footer.module.css"

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.overlay}>
        <p className={styles.p}>© 2022 Paweł Pajor. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
