"use client";

import React from "react";
import contributors from "./contributors";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ContributorsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14 text-foreground">
          Our Contributors
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {contributors.map((contributor, idx) => (
            <SwiperSlide key={idx} className="flex justify-center">
              <div className="bg-card text-card-foreground rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl hover:-translate-y-1 w-[280px]">
                
                {/* Image */}
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={contributor.image}
                    alt={contributor.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col items-center text-center">
                  <h3 className="text-lg font-semibold">{contributor.name}</h3>
                  {contributor.role && (
                    <p className="text-muted-foreground text-sm mt-1">
                      {contributor.role}
                    </p>
                  )}
                  <div className="flex space-x-5 mt-3">
                    {contributor.github && (
                      <a
                        href={contributor.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition"
                      >
                        GitHub
                      </a>
                    )}
                    {contributor.linkedin && (
                      <a
                        href={contributor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ContributorsSection;
