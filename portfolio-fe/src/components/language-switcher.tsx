"use client";

import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";

interface Props {
  value: "vi" | "en";
  onChange: (value: "vi" | "en") => void;
}

export function LanguageSwitcher({ value, onChange }: Props) {
  return (
    <Select
      value={value}
      onValueChange={(val: string) => onChange(val as "vi" | "en")}
    >
      <SelectTrigger className="w-[120px]">
        🌐 {value.toUpperCase()}
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="vi">Tiếng Việt</SelectItem>
      </SelectContent>
    </Select>
  );
}
