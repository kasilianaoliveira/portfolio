
import { Montserrat } from "next/font/google";
import { About } from "./components/About";
import { Career } from "./components/Career";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Formation } from "./components/Formation";
import { Header } from "./components/Header";
import { HeroIntro } from "./components/HeroIntro";
import { Section } from "./components/Section";
import { Skills } from "./components/Skills";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`min-h-screen bg-[#0B001A] p-5 ${montserrat.className}`}>
      <section className="mx-auto w-full max-w-400 rounded-xl bg-[#1E0044] px-6 py-5 md:px-12 lg:px-16">
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
        <Formation />
      </Section>

      <Section>
        <Skills />
      </Section>
      <Section>
        <Contact />
      </Section>
      <Footer />
    </div>
  );
}
