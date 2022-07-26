import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { HiMail, HiPhone } from "react-icons/hi";

import * as styles from "./contact.module.css";

function Contact() {
  const { t } = useTranslation();

  return (
    <div id="contactSection" className="customContainer">
      <h3 className={`sectionHeader revealTop ${styles.headerOrange}`}>{t("Navlink4")}</h3>
      <div className={styles.container}>
        <div className={`longCol revealLeft ${styles.contactInfo}`}>
          <h2 className={`header ${styles.headerCustom}`}>{t("Contact_header")}</h2>
          <p className="paragraph">{t("Contact_body")}</p>
          <div className={styles.contactBox}>
            <HiMail className={styles.icon} size={24} />
            <p className={styles.contactBoxText}>pawelpajor8@gmail.pl</p>
          </div>
          <div className={styles.contactBox}>
            <HiPhone className={styles.icon} size={24} />
            <p className={styles.contactBoxText}>535XXXXXX</p>
          </div>
        </div>
        <div className={`shortCol revealRight `}>
          <form className={styles.form} action="https://formsubmit.io/send/pompeczka17@gmail.com" method="POST">
            <label className={styles.label}>{t("Contactform_input1")}</label>
            <input className={styles.input} name="name" placeholder={`${t("Contactform_input1")}...`} />
            <label className={styles.label} type="email" name="mail">
              {t("Contactform_input2")}
            </label>
            <input className={styles.input} placeholder={`${t("Contactform_input2")}...`} />
            <label className={styles.label}>{t("Contactform_input3")}</label>
            <textarea className={styles.input} name="message" placeholder={`${t("Contactform_input3")}...`} />
            <button className={` btnPrimary ${styles.btn}`} type="submit">
              {t("Contactform_btn")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
