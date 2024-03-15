import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/Testimonials-Cards";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-white/[0.96] dark:bg-black/[0.96] antialiased bg-dot-black/[0.2]
    dark:bg-dot-white/[0.2]"
    >
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
    </main>
  );
}
