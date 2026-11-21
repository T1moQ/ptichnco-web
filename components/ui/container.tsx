import type { ComponentPropsWithRef } from "react";

export type ContainerProps = ComponentPropsWithRef<"div">;

export function Container({ className = "", ...props }: ContainerProps) {
  return <div className={`ui-container ${className}`} {...props} />;
}
