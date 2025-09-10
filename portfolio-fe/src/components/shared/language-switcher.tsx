"use client";

import { useLocale } from "@/context/LocaleContext";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";

interface Props {
  value: "vi" | "en";
  onChange: (value: "vi" | "en") => void;
}

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  const handleChange = async (val: string) => {
    const newLocale = val === "en" ? "en" : "vi";
    setLocale(newLocale);

    await fetch("/api/set-locale", {
      method: "POST",
      body: JSON.stringify({ locale: val }),
      headers: { "Content-Type": "application/json" },
    });
    window.location.reload();
  };

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger className="w-[120px]">
        🌐 {locale.toUpperCase()}
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="vi">Tiếng Việt</SelectItem>
      </SelectContent>
    </Select>
  );
}
