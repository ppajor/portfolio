import React from "react"
import { HiMail, HiPhone } from "react-icons/hi"
import { AiOutlineSend } from "react-icons/ai"

import * as styles from "./contact.module.css"

function Contact() {
  return (
    <div className="customContainer">
      <h3 className={`sectionHeader revealTop ${styles.headerOrange}`}>
        KONTAKT
      </h3>
      <div className={styles.container}>
        <div className={`shortCol revealLeft ${styles.contactInfo}`}>
          <h2 className={`header ${styles.headerCustom}`}>
            Jak mogę Ci pomóc?
          </h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
            mattis enim ut dolor laoreet. Risus semper cursus vitae urna quam
            lectus enim
          </p>
          <div className={styles.contactBox}>
            <HiMail className={styles.icon} size={24} />
            <p className={styles.contactBoxText}>pawelpajor8@wp.pl</p>
          </div>
          <div className={styles.contactBox}>
            <HiPhone className={styles.icon} size={24} />
            <p className={styles.contactBoxText}>535204304</p>
          </div>
        </div>
        <div className={`longCol revealRight `}>
          <form className={styles.form}>
            <label className={styles.label}>Name</label>
            <input className={styles.input} placeholder="Your name..." />
            <label className={styles.label}>Mail</label>
            <input className={styles.input} placeholder="Your mail..." />
            <label className={styles.label}>Message</label>
            <textarea
              className={styles.input}
              placeholder="Your message goes here..."
            />
            <button className={` btnPrimary ${styles.btn}`}>
              <AiOutlineSend className={styles.btnIcon} size={16} /> Wyślij
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
