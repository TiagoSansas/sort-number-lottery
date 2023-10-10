import { Link } from "react-router-dom";
import { Navbar } from "./components/navbar";

export function Header() {
  return (
    <div className="bg-blue-300 p-5">
      <div className="flex items-center justify-between">
        <Link to="/">
          <h1 className="font-mono text-2xl font-semibold">
            Sort Number Lottery
          </h1>
        </Link>
        <Navbar.Root>
          <Navbar.Item href="/about">About</Navbar.Item>
          <Navbar.Item href="/contact">Contact</Navbar.Item>
        </Navbar.Root>
      </div>
    </div>
  );
}
