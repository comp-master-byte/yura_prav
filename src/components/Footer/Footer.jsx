import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerInner}>
          <p>Юра.Прав</p>
          <p>Разработано в 2023 году, г.Санкт-Петербург</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
