import { IBM_Plex_Mono, Montserrat } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400"],
  style: ["italic"],
  subsets: ["latin"],
});
const montserrat = Montserrat({ subsets: ["latin"] });

export function HeroIntro() {

  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <h1
        className={`${ibmPlexMono.className} text-3xl font-semibold leading-tight md:text-5xl`}
      >
        <span>{"<"}</span>
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(90deg, var(--gradient-name-start) 0%, var(--gradient-name-end) 100%)",
          }}
        >
          Kasiliana Oliveira
        </span>
        <span>{"/>"}</span>
      </h1>
      <p
        className={`${montserrat.className} text-lg leading-relaxed text-text max-w-3xl`}
      >
        Desenvolvedora Fullstack com experiência em React, TypeScript,Node, Next.js e FastAPI.
      </p>
    </div>
  );
}
