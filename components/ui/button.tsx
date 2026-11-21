import Link from "next/link";
import type { ComponentPropsWithRef } from "react";

type ActionProps = ComponentPropsWithRef<"button"> & { href?: never };
type NavigationProps = Omit<ComponentPropsWithRef<typeof Link>, "type"> & {
  // Links navigate; native disabled / submit behavior belongs to buttons.
  disabled?: never;
  type?: never;
};

export type ButtonProps = ActionProps | NavigationProps;

export function Button({ className = "", ...props }: ButtonProps) {
  const classes = `ui-button ${className}`;

  if (props.href !== undefined) {
    return <Link className={classes} {...props} />;
  }

  const { type = "button", ...buttonProps } = props;
  return <button className={classes} type={type} {...buttonProps} />;
}
