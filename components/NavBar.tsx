import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

function NavBar() {
  const router = useRouter();

  return (
    <nav className="shadow text-center text-3xl p-8 space-x-8">
      <Image src="/maltese.jpeg" width="300" height="300" alt="maltese" />
      <Link
        href="/"
        className={router.pathname === "/" ? "font-bold underline" : ""}
      >
        {" "}
        Home
      </Link>
      <Link
        href="/about"
        className={router.pathname === "/about" ? "font-bold underline" : ""}
      >
        About
      </Link>
    </nav>
  );
}

export default NavBar;
