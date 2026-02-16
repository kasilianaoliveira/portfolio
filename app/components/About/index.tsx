import { Montserrat } from "next/font/google";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const montserrat = Montserrat({ subsets: ["latin"] });

const BADGES = ["Fullstack", "Desenvolvimento"];

const SOCIAL = [
  { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
  { href: "https://linkedin.com", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://github.com", icon: FaGithub, label: "GitHub" },
];

const CARD_BG_IMAGE = `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60 Q30 40 60 60 T120 60' stroke='%238338EC' stroke-width='0.8' fill='none' opacity='0.12'/%3E%3Cpath d='M0 80 Q40 50 80 80 T120 80' stroke='%238338EC' stroke-width='0.6' fill='none' opacity='0.08'/%3E%3Cpath d='M0 40 Q50 70 100 40' stroke='%23B923FF' stroke-width='0.5' fill='none' opacity='0.1'/%3E%3C/svg%3E")`;

export function About() {
  return (
    <section
      className={`${montserrat.className} relative rounded-2xl px-6 py-8 md:px-10 md:py-20`}
      id="sobre"
      style={{
        backgroundColor: "#e8ddf5",
        backgroundImage: CARD_BG_IMAGE,
      }}
    >
      <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-10">
        <div className="min-w-0 flex-1">
          <h2 className="mb-4 text-2xl font-semibold text-purple-900 md:text-3xl">
            Sobre mim
          </h2>
          <div className="mb-4 flex flex-wrap gap-2">
            {BADGES.map((label) => (
              <span
                key={label}
                className="rounded-full border-2 border-purple-700/60 bg-transparent] px-3 py-1 text-sm font-medium text-purple-900"
              >
                {label}
              </span>
            ))}
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-purple-900/90 md:text-base">
            Atuo em todo o ciclo do produto: da ideia ao deploy. Gosto de código
            legível, testes e de trabalhar em equipe, acredito que o melhor
            software nasce quando técnico e negócio conversam. Nos projetos,
            busco equilibrar entre entregar valor rápido e manter a base
            sustentável a longo prazo.
          </p>
        </div>
        <div className="flex gap-4 md:flex-col md:gap-5">
          {SOCIAL.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-purple-900 shadow-md transition-transform hover:scale-110 md:h-12 md:w-12"
              aria-label={label}
            >
              <Icon className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
