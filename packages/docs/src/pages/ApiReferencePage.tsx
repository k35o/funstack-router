"use client";

import { Outlet, useLocation } from "@funstack/router";

const apiNavItems = [
  { path: "/api/components", label: "Components" },
  { path: "/api/hooks", label: "Hooks" },
  { path: "/api/utilities", label: "Utilities" },
  { path: "/api/types", label: "Types" },
];

export function ApiReferencePage() {
  const location = useLocation();

  return (
    <div className="page docs-page api-page">
      <h1>API Reference</h1>

      <nav className="api-nav">
        {apiNavItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className={location.pathname === item.path ? "active" : ""}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <Outlet />
    </div>
  );
}
