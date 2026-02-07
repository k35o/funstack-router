"use client";

import { useLayoutEffect, useState } from "react";

export function useCurrentPath(): string | null {
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  useLayoutEffect(() => {
    // @ts-expect-error -- TypeScript does not yet know about the Navigation API
    const navigation = window.navigation;
    setCurrentPath(new URL(navigation.currentEntry.url).pathname);
    const controller = new AbortController();
    navigation.addEventListener(
      "currententrychange",
      () => {
        setCurrentPath(new URL(navigation.currentEntry.url).pathname);
      },
      { signal: controller.signal },
    );
    return () => {
      controller.abort();
    };
  }, []);
  return currentPath;
}
