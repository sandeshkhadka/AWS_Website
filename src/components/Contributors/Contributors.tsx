"use client";

import React from "react";
import contributors from "@/data/contributors";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ContributorCard from "./ContributorCard";

export const ContributorsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14 text-foreground">
          Our Contributors
        </h2>


        <div className="flex items-center gap-2">
          <Carousel>
            <CarouselContent className="-ml-1">
              {contributors.map((contributor, idx) => (
                <CarouselItem key={idx} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <ContributorCard contributor={contributor} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section >
  );
};

