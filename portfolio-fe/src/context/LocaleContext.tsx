"use client";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState } from "react";

export type Locale = "vi" | "en";

interface LocaleContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const router = useRouter();

  const setLocale = async (newLocale: Locale) => {
    if (newLocale === locale) return;
    await fetch("/api/set-locale", {
      method: "POST",
      body: JSON.stringify({ locale: newLocale }),
    });
    setLocaleState(newLocale);
    router.refresh();
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}
