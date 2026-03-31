import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import Achievements from "@/components/Achievements";
import Leadership from "@/components/Leadership";

export default function Home() {
  return (
    <main className="bg-[#020617] min-h-screen selection:bg-white/30 selection:text-white sm:cursor-none">
      <Cursor />
      <div className="noise-bg" />
      <ScrollyCanvas />
      <div className="relative z-20 bg-[#020617]">
        <About />
        <Skills />
        <Achievements />
        <Leadership />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
