"use client";
import { useEffect, useId, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const id = useId();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="inline-flex items-center gap-2">
      <Switch
        id={id}
        checked={!isDark}
        onCheckedChange={toggleTheme}
        aria-label="Toggle switch"
      />
      <Label htmlFor={id}>
        <span className="sr-only">Toggle switch</span>
        {!isDark ? (
          <SunIcon size={16} aria-hidden="true" />
        ) : (
          <MoonIcon size={16} aria-hidden="true" />
        )}
      </Label>
    </div>
  );
}
