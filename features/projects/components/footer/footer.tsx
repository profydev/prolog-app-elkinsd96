import React from "react";
import styles from "./footer.module.scss";
import packageJSON from "./../../../../package.json";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.version}>
        <p>Version: {packageJSON.version}</p>
      </div>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <a className={styles.link} href="#">
            Docs
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.link} href="#">
            API
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.link} href="#">
            Help
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.link} href="#">
            Community
          </a>
        </li>
      </ul>
      <div className={styles.logoContainer}>
        <img src="/icons/logo-small.svg" alt="logo" />
      </div>
    </footer>
  );
}
