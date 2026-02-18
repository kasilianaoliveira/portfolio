import { Montserrat } from "next/font/google";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Text } from "../Text";

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
    <div
      className={`${montserrat.className} rounded-2xl px-6 py-8 md:px-10 md:py-20`}
      id="sobre"
      style={{
        backgroundColor: "#e8ddf5",
        backgroundImage: CARD_BG_IMAGE,
      }}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="min-w-0 flex-1">
          <Text classname="text-purple-700/80">
            Sobre mim
          </Text>
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
          <p className="max-w-5xl text-sm leading-relaxed text-purple-900/90 md:text-base">
            Desde criança, sempre fui apaixonada por tecnologia, mesmo sem saber exatamente qual caminho seguir
            dentro desse universo tão amplo. Tudo começou quando ganhei meu primeiro computador dos meus pais.
            A partir dali, mergulhei de vez nesse mundo fascinante: explorei design, criei meu primeiro site e
            até me aventurei no YouTube com alguns tutoriais (rsrs).
            <br />
            Foi no terceiro ano do ensino médio que decidi cursar Sistemas de Informação. Na época, eu já fazia o
            curso técnico em Logística e resolvi unir o útil ao agradável, buscando uma formação que conectasse
            tecnologia e processos. Sem dúvidas, foi uma das melhores decisões que já tomei.
            <br />
            O que mais me motiva é poder ajudar pessoas por meio da tecnologia. Criar um produto que realmente
            impacta a vida de alguém, tornando seu dia a dia mais simples e eficiente, é algo que me inspira
            profundamente. Para mim, tecnologia vai além de código, é sobre gerar valor e transformar experiências.
            <br />
            Fora do ambiente profissional e acadêmico, participo ativamente de uma comunidade que organiza
            eventos geek na minha cidade e em cidades vizinhas. Nosso objetivo é tornar esse universo mais
            acessível, criando um espaço para quem ama a cultura nerd e geek se conectar, compartilhar
            experiências e mostrar que ser geek não é algo negativo, mas sim algo criativo, divertido e cheio
            de possibilidades.
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
    </div>
  );
}
