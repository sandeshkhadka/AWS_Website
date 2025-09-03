import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const SCDButton = () => {
  return (
    <div className="w-full overflow-hidden">
      <Link
        href="#scd"
        className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border border-neutral-400/60 dark:border-neutral-500 p-1 pr-3"
      >
        <span className="bg-primary text-white rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
          New
        </span>
        <span className="text-sm">AWS Student Community Day Nepal 2025</span>
        <span className="bg-(--color-border) block h-4 w-px"></span>

        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
};
