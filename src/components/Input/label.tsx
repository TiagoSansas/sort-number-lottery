import { PropsWithChildren } from "react";

interface LabelProps extends PropsWithChildren {
  id: string;
  title: string;
}

export function Label({ children, title, id }: LabelProps) {
  return (
    <label htmlFor={id}>
      {title}
      {children}
    </label>
  );
}
