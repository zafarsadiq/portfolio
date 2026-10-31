import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tools from "@/components/Tools";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="mx-auto max-w-[1000px] px-5">
      <Hero />
      <About />
      <Tools />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <footer className="py-7 pb-9 text-center text-[.8rem] text-muted">© 2026 Zafar Sadiq</footer>
      </div>
    </>
  );
}
