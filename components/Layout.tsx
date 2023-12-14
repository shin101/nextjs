import React from "react";
import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
