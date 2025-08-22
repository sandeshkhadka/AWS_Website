import FAQs from "@/components/FAQ/FAQ";
import { HeroSection } from "@/components/Hero/Hero";
import { TestimonialSection } from "@/components/Testimonials";

function Page() {
  return (
    <div className="w-full">
      <HeroSection />
      <TestimonialSection />
      <FAQs />
    </div>
  );
}

export default Page;
