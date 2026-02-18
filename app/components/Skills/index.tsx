import star01 from "../../assets/star-01.svg";
import star02 from "../../assets/star-02.svg";
import wormSvg from "../../assets/worm.svg";
import { Text } from "../Text";

const SKILLS_ROW_1 = ["Python", "FastAPI", "Docker", "PostgreSQL", "Node.js", "NestJS"];
const SKILLS_ROW_2 = ["React", "Typescript", "Nextjs", "Tailwind CSS", "React Query"];

function starSrc(s: { src?: string } | string) {
  return typeof s === "string" ? s : s.src;
}

export function Skills() {
  return (
    <section
      className="relative mt-25 px-6 py-16 md:px-12 md:py-20"
      id="skills"
    >
      <div className="absolute left-1/2 top-0 w-full max-w-[min(100%,720px)] -translate-x-1/2 -translate-y-1/2 opacity-90">
        <img
          src={starSrc(wormSvg)}
          alt=""
          width={727}
          height={140}
          className="h-auto w-full"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <Text classname="text-center text-white">
          Skills
        </Text>

        <div className="flex flex-col items-center gap-4 md:gap-5">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {SKILLS_ROW_1.map((skill) => (
              <span
                key={skill}
                className="skills-tag rounded-full border px-4 py-2 text-sm font-medium text-white transition-transform duration-300 ease-out hover:scale-105 md:px-5 md:py-2.5 md:text-base cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 pl-6 md:gap-4 md:pl-10">
            {SKILLS_ROW_2.map((skill) => (
              <span
                key={skill}
                className="skills-tag rounded-full border px-4 py-2 text-sm font-medium text-white transition-transform duration-300 ease-out hover:scale-105 md:px-5 md:py-2.5 md:text-base"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex gap-2 md:bottom-10 md:right-10" aria-hidden>
        <img
          src={starSrc(star01)}
          alt=""
          className="skills-star-pulse h-10 w-10 md:h-20 md:w-20"
          aria-hidden
        />
        <img
          src={starSrc(star02)}
          alt=""
          className="skills-star-pulse-delay h-8 w-8 md:h-15 md:w-15"
          aria-hidden
        />
      </div>
    </section>
  );
}
