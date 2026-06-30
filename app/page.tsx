import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import ExploreGrid from "@/components/ExploreGrid";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <FeaturedProjects />
      <ExploreGrid />
      <CtaBanner />
    </main>
  );
}
