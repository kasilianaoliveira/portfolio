import { IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";
import fotoImg from "../../assets/me.png";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400"],
  style: ["italic"],
  subsets: ["latin"],
});

export function HeroIntro() {

  return (
    <div className="mx-auto my-12 flex w-full max-w-6xl flex-col items-center gap-10 md:my-28 md:flex-row md:items-center md:justify-between md:gap-16 lg:gap-20">
      <div className="min-w-0 flex-1 md:max-w-2xl">
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
            className={`text-lg leading-relaxed text-text max-w-3xl`}
          >
            Engenheria de software que ama construir coisas e explorar as novidades do mundo da tecnologia.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full md:max-w-[400px] max-w-[300px]">

        <Image
          src={fotoImg}
          alt="Kasiliana Oliveira"
          className="rounded-2xl object-cover md:w-[300px] w-[230px] h-auto"
          priority
        />
      </div>
    </div>
  );
}
