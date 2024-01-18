import React from "react";
import styles from "./loader.module.scss";

export function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <img
        className={styles.loader}
        src="/icons/loading-circle.svg"
        alt="loader"
      />
    </div>
  );
}
