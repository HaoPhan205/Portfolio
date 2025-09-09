"use client";

import React from "react";
import enMessages from "../messages/en.json";
import viMessages from "../messages/vi.json";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ModeToggle } from "@/components/ThemeToggle";
import { ClientOnly } from "@/components/ClientOnly";

export default function HomePage() {
  const [language, setLanguage] = React.useState<"vi" | "en">("vi");
  const messages = language === "vi" ? viMessages : enMessages;
  return (
    <div className="min-h-screens flex flex-col items-center justify-center transition-colors duration-500 bg-white text-black dark:bg-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6">{messages.welcome}</h1>
      <LanguageSwitcher value={language} onChange={setLanguage} />
      <ClientOnly>
        <ModeToggle />
      </ClientOnly>
    </div>
  );
}
