import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Map, CalendarDays, Clock, MapPinned } from "lucide-react";

function Rsvp() {
  return (
    <div
      id="scd"
      className="relative py-16 my-16 lg:my-32 flex items-center justify-center px-6"
    >
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

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        {/* Right Side – Logo Placeholder */}
        <div className="flex items-center justify-center">
          <div className="font-bold text-gray-400">
            <Image
              className="rounded-xl w-full lg:w-auto"
              src="/aws-scd.png"
              width={400}
              height={400}
              loading="lazy"
              decoding="async"
              alt="."
            />
          </div>
        </div>

        {/* Left Side – Text Content */}
        <div className="flex flex-col justify-between py-1 px-6 lg:px-0">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-wide">
              AWS STUDENT Community Day 2025
            </h2>
            <p className="mb-6 text-balance">
              AWS Student Community Day 2025 is a student-led event featuring
              hands-on workshops, expert talks, and networking opportunities.
              Join fellow cloud enthusiasts to learn, build, and connect with
              the AWS community.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 justify-self-end">
              <div className="flex gap-2">
                <CalendarDays /> <span>Nov 15, 2025</span>
              </div>
              <div className="flex gap-2">
                <Clock /> <span>10 A.M - 5 P.M</span>
              </div>
              <div className="flex gap-2">
                <MapPinned /> <span>Advanced College of Engineering</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="text-white" asChild>
                <Link
                  target="_blank"
                  href={
                    "https://www.meetup.com/aws-cloud-club-at-tribhuvan-university/events/310674609/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link&utm_version=v2"
                  }
                >
                  <span className="text-nowrap">RSVP Now!</span>
                </Link>
              </Button>

              <Button size="lg" className="text-white" asChild>
                <Link
                  target="_blank"
                  href={"https://maps.app.goo.gl/QVQ5cZpybMoa6u4U6"}
                >
                  <Map />
                  <span className="text-nowrap">Open in Google Maps</span>
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
