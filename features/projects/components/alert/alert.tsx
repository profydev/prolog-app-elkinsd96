import React from "react";
import styles from "./alert.module.scss";
import {
  Button,
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from "./../../../ui/button/button";

type AlertProps = {
  error: Error;
  message?: string;
  onRetry: () => void;
};

export function Alert({ error, message, onRetry }: AlertProps) {
  return (
    <div className={styles.alertContainer} data-cy="alert">
      <div className={styles.alert}>
        <img className={styles.alertIcon} src="/icons/alert-circle.svg" />
        <p className={styles.alertText}>{message ? message : error.message}</p>
      </div>
      <Button
        data-cy="alert-button"
        size={ButtonSize.small}
        color={ButtonColor.Error}
        variant={ButtonVariant.Empty}
        onClick={() => onRetry()}
      >
        {
          <>
            <p>Try again</p>
            <img
              className={styles.arrowIcon}
              src="/icons/arrow-right.svg"
              alt="arrow-right-error-icon"
            />
          </>
        }
      </Button>
    </div>
  );
}
