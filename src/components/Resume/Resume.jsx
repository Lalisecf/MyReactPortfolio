import React, { useState } from "react";
import styles from "./Resume.module.css";
import education from "../../data/Resume.json";
import certificates from "../../data/certificates.json";

export const Resume = () => {
  const [activeEdu, setActiveEdu] = useState(null);
  const [activeCert, setActiveCert] = useState(null);
  const [pdfModal, setPdfModal] = useState(null);

  const toggleEdu = (index, item) => {
    if (item.image && item.image.toLowerCase().endsWith(".pdf")) {
     
      setPdfModal(item.image);
    } else {
      setActiveEdu(activeEdu === index ? null : index);
    }
  };

  const toggleCert = (index, item) => {
    if (item.image && item.image.toLowerCase().endsWith(".pdf")) {
      setPdfModal(item.image);
    } else {
      setActiveCert(activeCert === index ? null : index);
    }
  };

  const closePdfModal = () => setPdfModal(null);

  const renderAttachment = (item) => {
    if (!item.image) return null;

    if (!item.image.toLowerCase().endsWith(".pdf")) {
      return (
        <div className={styles.certImageContainer}>
          <img
            src={item.image}
            alt={item.title || item.degree}
            className={styles.certImage}
          />
        </div>
      );
    }

    return null; 
  };

  return (
    <>
      <section
        className={`${styles.container} ${pdfModal ? styles.blurBackground : ""}`}
        id="Resume"
      >
        <h2 className={styles.title}>Education & Certificates</h2>
        <div className={styles.columns}>
          {/* Education Column */}
          <div className={`${styles.column} ${styles.education}`}>
            <h3 className={styles.subtitle}>Education</h3>
            <ul className={styles.timeline}>
              {education.map((item, index) => (
                <li
                  key={index}
                  className={`${styles.item} ${activeEdu === index ? styles.active : ""}`}
                  onClick={() => toggleEdu(index, item)}
                >
                  <div className={styles.degree}>{item.degree}</div>
                  <div className={styles.school}>{item.school}</div>
                  <div className={styles.year}>{item.year}</div>
                  {item.gpa && <div className={styles.gpa}>GPA: {item.gpa}</div>}
                  {activeEdu === index && renderAttachment(item)}
                </li>
              ))}
            </ul>
          </div>

          {/* Certificates Column */}
          <div className={`${styles.column} ${styles.certificates}`}>
            <h3 className={styles.subtitle}>Certificates</h3>
            <ul className={styles.timeline}>
              {certificates.map((item, index) => (
                <li
                  key={index}
                  className={`${styles.item} ${activeCert === index ? styles.active : ""}`}
                  onClick={() => toggleCert(index, item)}
                >
                  <div className={styles.degree}>{item.title}</div>
                  <div className={styles.school}>{item.organization}</div>
                  <div className={styles.year}>{item.year}</div>
                  {activeCert === index && renderAttachment(item)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      {pdfModal && (
        <div className={styles.pdfModal} onClick={closePdfModal}>
          <div
            className={styles.pdfModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={closePdfModal}>
              &times;
            </button>
            <iframe
              src={pdfModal}
              title="PDF Viewer"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </div>
        </div>
      )}
    </>
  );
};
