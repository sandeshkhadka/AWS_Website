import { Button } from "@/components/ui/button";
import { Mail, SendHorizonal } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative py-16">
      {/* Lines */}
      <div className="absolute left-0 right-0  top-[20px] z-10 h-px w-full bg-border dark:bg-neutral-700 md:top-[48px]"></div>
      <div className="absolute bottom-0 right-[20px] top-0 z-10 h-full w-px bg-border dark:bg-neutral-700 md:right-[48px]"></div>
      <div className="absolute bottom-[20px] left-0 right-0 z-10 h-px w-full bg-border dark:bg-neutral-700 md:bottom-[48px]"></div>
      <div className="absolute bottom-0 left-[20px] top-0 z-10 h-full w-px bg-border dark:bg-neutral-700 md:left-[48px]"></div>

      {/* Top Right Cross */}
      <div className="absolute right-[43.5px] top-[48px] z-20 hidden h-[2px] w-3 dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      <div className="absolute right-[48px] top-[43.5px] z-20 hidden h-3 w-[2px] dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      {/* Top Left Cross */}
      <div className="absolute left-[42.5px] right-0 top-[48px] z-20 hidden h-[2px] w-3 dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      <div className="absolute left-[48px] right-0 top-[42.5px] z-20 hidden h-3 w-[2px] dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      {/* Bottom Left Cross */}
      <div className="absolute bottom-[48px] left-[42.5px] right-0 z-20 hidden h-[2px] w-3 dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      <div className="absolute bottom-[42.5px] left-[48px] right-0 z-20 hidden h-3 w-[2px] dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      {/* Bottom Right Cross */}
      <div className="absolute bottom-[48px] right-[43.5px] z-20 hidden h-[2px] w-3 dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      <div className="absolute bottom-[43.5px] right-[48px] z-20 hidden h-3 w-[2px] dark:bg-zinc-300 bg-neutral-500 md:block"></div>
      {/* lines end */}

      <div className="mx-auto max-w-5xl px-6 py-12 md:py-20 lg:py-32">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-bold lg:text-5xl">
            Join Our NewsLetter
          </h2>
          <p className="mt-4 font-medium">
            Stay updated with our latest open-source projects and community
            news.
          </p>

          <form action="" className="mx-auto mt-10 max-w-sm lg:mt-12">
            <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
              <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

              <input
                placeholder="Your mail address"
                className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                type="email"
              />

              <div className="md:pr-1.5 lg:pr-0">
                <Button aria-label="submit" className="rounded-(--radius)">
                  <span className="hidden md:block">Get Started</span>
                  <SendHorizonal
                    className="relative mx-auto size-5 md:hidden"
                    strokeWidth={2}
                  />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
