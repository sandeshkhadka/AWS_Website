import ContactUs from "@/components/ContactUs/ContactUs";
import CallToAction from "@/components/CTA/CTA";
import Rsvp from "@/components/CTA/Rsvp";
import FAQs from "@/components/FAQ/FAQ";
import { HeroSection } from "@/components/Hero/Hero";
import LogoClouds from "@/components/LogoCloud/LogoCloud";
import Team from "@/components/Teams/Team";
import PresidentReview from "@/components/Review/President";
import { TestimonialSection } from "@/components/Testimonials";
import { ContributorsSection } from "@/components/Contributors";
import { EventsSection } from "@/components/Events";

function Page() {
  return (
    <div className="relative mx-auto w-full">
      {/* Decorative elements - only show on larger screens */}
      <div className="hidden lg:block absolute left-[6px] xl:left-[10px] w-3 xl:w-5 inset-0 bg-[repeating-linear-gradient(-45deg,#e5e7eb_0px,#e5e7eb_2px,transparent_2px,transparent_7px)] dark:opacity-5 pointer-events-none" />
      <div className="hidden lg:block absolute top-0 right-[6px] xl:right-[10px] bottom-0 w-3 xl:w-5 bg-[repeating-linear-gradient(45deg,#e5e7eb_0px,#e5e7eb_2px,transparent_2px,transparent_7px)] dark:opacity-5 pointer-events-none" />
      
      {/* Main content area */}
      <div className="w-full relative">
        <HeroSection />
        <Rsvp />
        <LogoClouds />
        <EventsSection />
        <Team />
        <ContributorsSection />
        <PresidentReview />
        <FAQs />
        <TestimonialSection />
        <ContactUs />
        <CallToAction />
      </div>
    </div>
  );
}

export default Page;
