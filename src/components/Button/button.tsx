import { PropsWithChildren } from "react";

export function Button({ children }: PropsWithChildren) {
  return (
    <button className="rounded-md bg-blue-600 p-2 font-bold">{children}</button>
  );
}
