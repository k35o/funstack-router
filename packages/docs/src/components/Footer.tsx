"use client";

import { useCurrentPath } from "../hooks/useCurrentPath";

export function Footer() {
  const currentPath = useCurrentPath();

  if (currentPath === null) return null;

  return (
    <footer className="footer">
      <p>
        Built with <strong>@funstack/router</strong> &mdash; A modern React
        router based on the Navigation API
      </p>
    </footer>
  );
}
