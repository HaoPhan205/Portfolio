"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toogleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      onClick={toogleTheme}
      className="relative flex items-center w-14 h-7 bg-gray-300 dark:bg-gray-700 rounded-full transition-colors duration-300"
    >
      {" "}
      <span
        className={`absolute left-1 top-1 flex items-center justify-center w-5 h-5 rounded-full bg-white dark:bg-black shadow-md transform transition-transform duration-300 ${
          theme === "dark" ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {theme === "light" ? (
          <Sun className="h-4 w-4 text-yellow-400" />
        ) : (
          <Moon className="h-4 w-4 text-blue-400" />
        )}
      </span>
    </Button>
  );
}
