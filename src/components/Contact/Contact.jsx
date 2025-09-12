import React from "react";
import styles from "./Contact.module.css";

import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";
import instagramIcon from "../../assets/contact/ig.png";
import facebookIcon from "../../assets/contact/fb.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:lalisefufi5@gmail.com">lalisefufi5@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/lalise-fufi-5291a5226/">linkedin.com/lalisefufi</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/Lalisecf">github.com/Lalisecf</a>
        </li>
        <li className={styles.link}>
          <img src={instagramIcon} alt="instagram icon" />
          <a href="https://www.instagram.com/lalise_cf?igsh=MWVzeTFqbmRlZTQ0Ng==/">instagram.com/Lalisecf</a>
        </li>
        <li className={styles.link}>
          <img src={facebookIcon} alt="Fb icon" />
          <a href="https://www.facebook.com/lalise.fufi.2025/">facebook.com/Lalisecf</a>
        </li>
      </ul>
    </footer>
  );
};
