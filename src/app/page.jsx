import Featured from "@/src/components/home/Featured";
import Hero from "@/src/components/home/Hero";
import Tips from "@/src/components/home/Tips";
import TopBreeds from "@/src/components/home/TopBreeds";
import WhyChooseUs from "@/src/components/home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="Home">
      <Hero />
      <Featured />
      <TopBreeds />
      <Tips />
      <WhyChooseUs />
    </div>
  );
}