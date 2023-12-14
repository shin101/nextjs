import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link
        href="/"
        className={
          router.pathname === "/" ? "text-3xl font-bold underline" : ""
        }
      >
        {" "}
        Home
      </Link>
      <Link
        href="/about"
        className={
          router.pathname === "/about" ? "text-3xl font-bold underline" : ""
        }
      >
        About
      </Link>
    </nav>
  );
}

export default NavBar;
