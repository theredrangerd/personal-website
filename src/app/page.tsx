import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Interests } from "@/components/sections/Interests";
import { Activities } from "@/components/sections/Activities";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Interests />
      <Activities />
      <Achievements />
      <Contact />
    </>
  );
}
