import { ButtonHTMLAttributes } from "react";
import { UnstyledButton } from "./unstyledButton";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <UnstyledButton {...props} />;
}
