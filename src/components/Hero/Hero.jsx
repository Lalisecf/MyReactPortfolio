// Hero.jsx
import React from "react";
import styles from "./Hero.module.css";
import laliseImg from "../../assets/hero/lalise.jpeg";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Lalise</h1>
        <p className={styles.description}>
          I'm a full-stack developer with Over 3 years of experience.
        </p>
        <a href="mailto:lalisefufi5@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={laliseImg}
        alt="image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
