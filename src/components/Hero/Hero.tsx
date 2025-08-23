"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <>
      <main className="overflow-hidden">
        <section>
          <div className="relative pt-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="max-w-3xl text-center sm:mx-auto lg:mr-auto lg:mt-0 lg:w-4/5">
                <Link
                  href="/"
                  className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border border-neutral-400/60 dark:border-neutral-500 p-1 pr-3"
                >
                  <span className="bg-primary text-white rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
                    New
                  </span>
                  <span className="text-sm">AWS Student Community Day Nepal 2025</span>
                  <span className="bg-(--color-border) block h-4 w-px"></span>

                  <ArrowRight className="size-4" />
                </Link>

                <h1 className="mt-8 text-balance text-4xl font-semibold md:text-5xl xl:text-6xl xl:[line-height:1.125]">
                  AWS Cloud Club in Nepal
                </h1>

                <h2 className="mt-8 text-balance text-3xl font-semibold md:text-3xl xl:text-4xl">
                  Where Clouds Code, Coffee Flows, and IT Geeks Roam Free!
                </h2>
                <p className="mx-auto mt-8 hidden max-w-2xl text-wrap text-muted-foreground text-lg sm:block">

                  The AWS Cloud Club at Nepal introduces cloud computing focusing on AWS, to Nepal's education sector. It's a vibrant community of students exploring and innovating in cloud technology, aiming to empower future Nepalese leaders with essential digital skills.
                </p>

                <div className="mt-8">
                  <Button size="lg" className="text-white" asChild>
                    <Link href="#">
                      <span className="text-nowrap">Register Now!</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative mt-16">
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border-2  p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  <Image
                    className="bg-background aspect-15/10 relative hidden rounded-2xl dark:block"
                    src="/hero-image.png"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                  <Image
                    className="z-2 border-border/25 aspect-15/10 relative rounded-2xl border dark:hidden"
                    src="/hero-image.png"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
