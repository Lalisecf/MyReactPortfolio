import React from "react";
import styles from "./ProjectCard.module.css";

// Import images statically
import rentAmortizationImg from "../../assets/projects/rental.png";
import wso2ApiImg from "../../assets/projects/awashbirrpro.jpg";
import exchangeRateImg from "../../assets/projects/Xchange.png";
import vendorManagementImg from "../../assets/projects/vendor.png";
import materialManagementImg from "../../assets/projects/material.png";
import PortoImg from "../../assets/projects/Porto.png";
import driverImg from "../../assets/projects/driver.png";

// Map image filenames to imported modules
const projectImages = {
  "rental.png": rentAmortizationImg,
  "awashbirrpro.jpg": wso2ApiImg,
  "Xchange.png": exchangeRateImg,
  "vendor.png": vendorManagementImg,
  "material.png": materialManagementImg,
  "Porto.png": PortoImg,
  "driver.png": driverImg,
};

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const projectImage = projectImages[imageSrc] || rentAmortizationImg; // fallback

  return (
    <div className={styles.container}>
      <img src={projectImage} alt={`Image of ${title}`} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
