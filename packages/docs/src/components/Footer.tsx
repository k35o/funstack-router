"use client";

import { useLocationSSR } from "@funstack/router";

export function Footer() {
  const location = useLocationSSR();

  if (location === null) return null;

  return (
    <footer className="footer">
      <p>
        Built with <strong>@funstack/router</strong> &mdash; A modern React
        router based on the Navigation API
      </p>
    </footer>
  );
}
