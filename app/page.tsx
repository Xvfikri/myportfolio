import { FloatingNav } from "@/components/floating-nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground selection:bg-primary/20 selection:text-primary relative selection:bg-purple-500/30">
      <FloatingNav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
