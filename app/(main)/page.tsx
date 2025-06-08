import CTA from "@/components/main/home/cta";
import Hero from "@/components/main/home/hero";
import Process from "@/components/main/home/process";
import Pricing from "@/components/main/home/pricing";
import Companies from "@/components/main/home/companies";

export default async function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Process />
      <Pricing />
      <CTA />
    </main>
  );
}
