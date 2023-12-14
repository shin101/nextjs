import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/"> Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}

export default NavBar;
