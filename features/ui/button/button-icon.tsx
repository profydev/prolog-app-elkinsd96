import styles from "./button.module.scss";

type ButtonIconProps = {
  src: string;
};

export function ButtonIcon({ src }: ButtonIconProps) {
  return <img className={styles.icon} src={src} alt="" />;
}
