import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { SideMenu } from "./Mobile";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <div className="container py-5">{children}</div>
      </main>
      <Footer />
      <SideMenu />
    </>
  );
}
