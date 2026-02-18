
import { About } from "./components/About";
import { Career } from "./components/Career";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroIntro } from "./components/HeroIntro";
import { Section } from "./components/Section";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B001A] p-5">
      <section className="mx-auto w-full max-w-[1600px] rounded-xl bg-[#1E0044] px-6 py-5 md:px-12 lg:px-16">
        <Header />
        <HeroIntro />
      </section>
      <Section>
        <About />
      </Section>
      <Section>
        <Career />
      </Section>

      <Section>
        <Skills />
      </Section>
      <Footer />
    </div>
  );
}
