import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Map, CalendarDays, Clock, MapPinned } from "lucide-react";
import CountdownTimer from "../CountDown/CDComponent";

function Rsvp() {
  return (
    <div id="scd" className="relative py-16 my-16 lg:my-32 flex items-center justify-center px-6">
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

      {/* Grid Layout */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-8">
        {/* Image Side */}
        <div className="flex items-center justify-center">
          <Image
            className="rounded-xl w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto"
            src="/aws-scd.png"
            width={450}
            height={450}
            loading="lazy"
            decoding="async"
            alt="AWS Student Community Day"
          />
        </div>

        {/* Text Content Side */}
        <div className="flex flex-col justify-between py-2 sm:py-4 px-2 sm:px-4 lg:px-0">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-wide leading-snug">
              AWS Student Community Day 2025
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              AWS Student Community Day 2025 is a student-led event featuring
              hands-on workshops, expert talks, and networking opportunities.
              Join fellow cloud enthusiasts to learn, build, and connect with
              the AWS community.
            </p>
          </div>

          {/* Countdown */}
          <div className="mb-8 w-full max-w-md">
            <CountdownTimer targetDate="2025-11-15T08:00:00" large />
          </div>

          {/* Event Info */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <CalendarDays className="w-5 h-5 shrink-0" />
                <span>Nov 15, 2025 | 10 A.M - 5 P.M</span>
              </div>

              <div className="flex items-center gap-2 text-sm sm:text-base">
                <MapPinned className="w-5 h-5 shrink-0" />
                <span>Advanced College of Engineering</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="text-white w-full sm:w-auto" asChild>
                <Link
                  target="_blank"
                  href="https://www.meetup.com/aws-cloud-club-at-tribhuvan-university/events/310674609/"
                >
                  RSVP Now!
                </Link>
              </Button>

              <Button size="lg" className="text-white w-full sm:w-auto" asChild>
                <Link target="_blank" href="https://maps.app.goo.gl/QVQ5cZpybMoa6u4U6">
                  <Map className="mr-2 h-4 w-4" />
                  Open in Google Maps
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rsvp;
