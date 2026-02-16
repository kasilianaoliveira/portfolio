import Image from "next/image";

import fotoImg from "./assets/me.png";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { HeroIntro } from "./components/HeroIntro";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B001A] p-5">
      <section className="mx-auto w-full max-w-[1600px] rounded-xl bg-[#1E0044] px-6 py-5 md:px-12 lg:px-16">
        <Header />
        <div className="mx-auto my-12 flex w-full max-w-6xl flex-col items-center gap-10 md:my-28 md:flex-row md:items-center md:justify-between md:gap-16 lg:gap-20">
          <div className="min-w-0 flex-1 md:max-w-2xl">
            <HeroIntro />
          </div>
          <div className="shrink-0 w-full max-w-[280px] md:w-[320px]">
            <div className="relative">
              <div
                className="absolute"
                aria-hidden
              />
              <Image
                src={fotoImg}
                alt="Kasiliana Oliveira"
                width={320}
                height={400}
                className="relative rounded-2xl object-cover w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-6 w-full max-w-[1600px] md:mt-8">
        <About />
      </section>

      <section className="mx-auto mt-6 w-full max-w-[1600px] md:mt-8">
        <Skills />
      </section>
    </div>
  );
}
