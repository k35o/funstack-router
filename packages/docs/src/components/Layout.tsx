import { Suspense } from "react";
import { Outlet } from "@funstack/router";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
