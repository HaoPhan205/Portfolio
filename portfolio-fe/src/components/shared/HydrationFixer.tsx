"use client";

import { useEffect } from "react";

export function HydrationFixer() {
  useEffect(() => {
    document.documentElement.classList.add("ready");
  }, []);

  return null;
}
