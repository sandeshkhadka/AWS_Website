"use client";

import Image from "next/image";

export default function PresidentReview() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 max-w-xl space-y-6">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Building the Cloud Community in Nepal.
          </h2>
          <p>
            AWS Cloud Club Nepal is more than just a student community.{" "}
            <span className="font-medium">It’s a movement</span> — empowering
            students, developers, and innovators to learn, build, and grow with
            the power of AWS Cloud.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div>
            <p>
              We bring together cloud enthusiasts, builders, and learners to
              foster innovation and real-world skills through workshops,
              hackathons, and community projects.
            </p>
            <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
              <div className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  +2000
                </div>
                <p>Community Members</p>
              </div>
              <div className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  +50
                </div>
                <p>Workshops & Events</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <blockquote className="border-l-4 pl-4">
              <p>
                Being part of AWS Cloud Club Nepal has opened endless
                opportunities for students to explore cloud technologies. The
                community spirit and learning culture make it an inspiring place
                for the next generation of builders.
              </p>

              <div className="mt-6 space-y-3">
                <cite className="block font-medium">
                  Nikhil K.C, Club President
                </cite>
                <Image
                  className="border rounded-xl h-16 w-fit"
                  src="/logo.png"
                  alt="Nvidia Logo"
                  height="50"
                  width="50"
                />
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
