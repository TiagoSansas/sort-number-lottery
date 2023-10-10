import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface navbarItemProps extends PropsWithChildren {
  href: string;
}

export function navbarItem({ href, children }: navbarItemProps) {
  return (
    <Link className="font-mono text-2xl" to={href}>
      {children}
    </Link>
  );
}
