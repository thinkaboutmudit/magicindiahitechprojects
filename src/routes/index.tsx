import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { HeroVideo } from "@/components/site/HeroVideo";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { ProjectsSection } from "@/components/site/ProjectsSection";
import { Amenities } from "@/components/site/Amenities";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Magic India Hitech Projects — Premium Real Estate" },
      { name: "description", content: "Find your dream home across Dehradun, Greater Noida and Yamuna Expressway with Magic India Hitech Projects." },
      { property: "og:title", content: "Magic India Hitech Projects" },
      { property: "og:description", content: "Premium real estate, trusted since 2012." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout transparentHeaderOffset>
      <Hero />
      <Stats />
      <About />
      <HeroVideo />
      <ProjectsSection />
      <Amenities />
    </SiteLayout>
  );
}
