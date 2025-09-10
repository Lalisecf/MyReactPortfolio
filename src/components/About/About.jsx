import React from "react";
import styles from "./About.module.css";

// Direct imports from src/assets/about
import aboutImage from "../../assets/about/image2.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/backend.png";
import databaseIcon from "../../assets/about/database.png";
import uiIcon from "../../assets/about/ui.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
  <img src={cursorIcon} alt="Frontend icon" className={styles.aboutIcon} />
  <div className={styles.aboutItemText}>
    <h3>Frontend Developer</h3>
    <p>Skilled in building responsive, user-friendly, and optimized web interfaces.</p>
  </div>
</li>

<li className={styles.aboutItem}>
  <img src={serverIcon} alt="Backend icon" className={styles.aboutIcon} />
  <div className={styles.aboutItemText}>
    <h3>Backend Developer</h3>
    <p>Experienced in designing fast, scalable back-end systems and APIs.</p>
  </div>
</li>

<li className={styles.aboutItem}>
  <img src={databaseIcon} alt="Database icon" className={styles.aboutIcon} />
  <div className={styles.aboutItemText}>
    <h3>Database Management</h3>
    <p>Proficient in designing, managing, and optimizing relational and NoSQL databases.</p>
  </div>
</li>

<li className={styles.aboutItem}>
  <img src={uiIcon} alt="UI icon" className={styles.aboutIcon} />
  <div className={styles.aboutItemText}>
    <h3>UI Designer</h3>
    <p>Passionate about creating clean, modern UI designs and design systems.</p>
  </div>
</li>

        </ul>
      </div>
    </section>
  );
};
