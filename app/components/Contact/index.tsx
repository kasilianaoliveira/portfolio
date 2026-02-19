import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";


import { Text } from "../Text";



const CONTACTS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/kasiliana-oliveira/", icon: AiOutlineLinkedin, label: "in/kasiliana-oliveira" },
  { name: "GitHub", href: "https://github.com/kasilianaoliveira", icon: FiGithub, label: "/kasilianaoliveira" },
  { name: "Email", href: "mailto:kasilianaoliveira@gmail.com", icon: MdOutlineEmail, label: "kasilianaoliveira@gmail.com" },
  { name: "Instagram", href: "https://www.instagram.com/kasiliana.dev/", icon: FaInstagram, label: "/kasiliana.dev" }
];

export function Contact() {
  return (
    <div id="contato" className="flex flex-col items-center justify-center gap-4 py-10">
      <Text>Contato</Text>
      <div className="w-full px-4 md:px-8">
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACTS.map((contact) => (
            <a key={contact.href}
              href={contact.href}
              rel="noopener noreferrer"
              aria-label={contact.label}
              target="_blank"
              className="flex min-h-40 flex-col justify-between gap-2 rounded-2xl border-2 border-[#1E0044] bg-transparent p-5 transition-colors duration-300 hover:bg-purple-700/30">
              <span className="font-semibold">{contact.name}</span>
              <div className="flex flex-col gap-2">
                <contact.icon className="h-5 w-5 text-white md:h-6 md:w-6" />
                <span className="">{contact.label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div >
  );
}

// <div className="flex gap-4 md:flex-col md:gap-5">
//   {SOCIAL.map(({ href, icon: Icon, label }) => (
//     <a
//       key={label}
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-purple-900 shadow-md transition-transform hover:scale-110 md:h-12 md:w-12"
//       aria-label={label}
//     >
//       <Icon className="h-5 w-5 md:h-6 md:w-6 text-[#0B001A]]" />
//     </a>
//   ))}
// </div>
