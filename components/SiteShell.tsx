"use client";

import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";

type SiteShellProps = {
  children: React.ReactNode;
  showLoader?: boolean;
};

export default function SiteShell({ children, showLoader = false }: SiteShellProps) {
  return (
    <>
      <div className="grain-overlay" />
      <Cursor />
      {showLoader ? <Loader /> : null}
      <Nav />
      <ScrollReveal />
      <main>{children}</main>
      <Footer />
    </>
  );
}
