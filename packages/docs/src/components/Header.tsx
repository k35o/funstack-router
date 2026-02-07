"use client";

import { useState } from "react";
import { useCurrentPath } from "../hooks/useCurrentPath";

const navItems = [
  { path: "/funstack-router/", label: "Home" },
  { path: "/funstack-router/getting-started", label: "Getting Started" },
  { path: "/funstack-router/learn", label: "Learn" },
  { path: "/funstack-router/api", label: "API Reference" },
  { path: "/funstack-router/examples", label: "Examples" },
];

export function Header() {
  const currentPath = useCurrentPath();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (currentPath === null) return false;
    // Handle API Reference section (match any /api/* path)
    if (path === "/funstack-router/api") {
      return currentPath.startsWith("/funstack-router/api");
    }
    // Handle Learn section (match any /learn/* path)
    if (path === "/funstack-router/learn") {
      return currentPath.startsWith("/funstack-router/learn");
    }
    // Handle home path
    if (path === "/funstack-router/") {
      return (
        currentPath === "/funstack-router/" ||
        currentPath === "/funstack-router"
      );
    }
    return currentPath === path;
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">
          <a href="/funstack-router/">FUNSTACK Router</a>
        </h1>
        <nav className="nav">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`nav-link ${isActive(item.path) ? "active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="https://github.com/uhyo/funstack-router"
          className="github-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`mobile-nav-link ${isActive(item.path) ? "active" : ""}`}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
