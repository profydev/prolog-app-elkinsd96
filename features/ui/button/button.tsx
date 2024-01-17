import { ButtonHTMLAttributes } from "react";
import { UnstyledButton } from "./unstyledButton";
import styles from "./button.module.scss";
import classNames from "classnames";

export enum ButtonSize {
  small = "sm",
  medium = "md",
  large = "lg",
  xlarge = "xl",
}

export enum ButtonColor {
  Primary = "primary",
  Secondary = "secondary",
  Gray = "gray",
  Error = "error",
}

export enum ButtonVariant {
  Default = "default",
  Empty = "empty",
  iconOnly = "iconOnly",
}

type ButtonProps = {
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  className,
  size = ButtonSize.medium,
  color = ButtonColor.Primary,
  variant = ButtonVariant.Default,
  ...props
}: ButtonProps) {
  return (
    <UnstyledButton
      className={classNames(
        styles.button,
        styles[size],
        styles[color],
        styles[variant],
        className,
      )}
      {...props}
    />
  );
}
