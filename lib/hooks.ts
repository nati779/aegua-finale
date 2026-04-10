"use client";

import { useState, useEffect } from "react";

export function useWindowSize() {
  const [size, setSize] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const update = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}

export function useButterflySize(
  mobile = 220,
  tablet = 280,
  desktop = 360
): number {
  const { width } = useWindowSize();
  if (width < 640) return mobile;
  if (width < 1024) return tablet;
  return desktop;
}
