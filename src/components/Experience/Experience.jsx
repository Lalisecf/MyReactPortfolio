import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* Skills */}
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            const skillImg = new URL(`../../assets/skills/${skill.imageSrc}`, import.meta.url).href;
            console.log(`Skill: ${skill.title}, Path: ${skillImg}`);

            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skillImg} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        {/* History */}
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            const historyImg = new URL(`../../assets/history/${historyItem.imageSrc}`, import.meta.url).href;
            console.log(`History: ${historyItem.organisation}, Path: ${historyImg}`);

            return (
              <li key={id} className={styles.historyItem}>
                <img src={historyImg} alt={`${historyItem.organisation} Logo`} />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((exp, i) => (
                      <li key={i}>{exp}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
