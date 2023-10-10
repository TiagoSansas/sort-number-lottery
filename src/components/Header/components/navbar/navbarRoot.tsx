import { PropsWithChildren } from "react";

export function navbarRoot({ children }: PropsWithChildren) {
  return (
    <nav>
      <ul className="flex gap-5">{children}</ul>
    </nav>
  );
}
