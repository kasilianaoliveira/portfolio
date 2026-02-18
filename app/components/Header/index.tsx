"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import logoImg from "../../assets/logo.png";

const montserrat = Montserrat({ subsets: ["latin"] });

const navLinks = [
  { href: "#sobre", label: "SOBRE MIM" },
  { href: "#projetos", label: "PROJETOS" },
  { href: "#skills", label: "SKILLS" },
  { href: "#contato", label: "CONTATO" },
];

const CLOSE_DURATION_MS = 250;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, CLOSE_DURATION_MS);
  };

  return (
    <>
      <header
        className={`${montserrat.className} flex items-center justify-between py-5`}
      >
        <Link
          href="/"
          className="text-text underline decoration-text underline-offset-4 transition-opacity hover:opacity-80"
        >
          <Image
            src={logoImg}
            alt="Kasiliana Oliveira"
            width={180}
            height={32}
            className="h-6 md:h-8 w-auto"
            priority
          />
        </Link>

        <nav className="hidden flex-wrap items-center gap-6 text-sm font-medium uppercase tracking-wide text-text md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative pb-0.5 transition-opacity hover:opacity-80 after:absolute after:left-0 after:bottom-0 after:block after:h-0.5 after:w-0 after:bg-current after:content-[''] after:transition-[width] after:duration-300 after:ease-out hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded text-text transition-opacity hover:opacity-80 md:hidden"
          aria-label="Abrir menu"
        >
          <HiOutlineMenu className="h-7 w-7" />
        </button>
      </header>

      {menuOpen && (
        <div
          className={`fixed inset-0 z-50 h-full min-h-screen w-full overflow-hidden md:hidden ${isClosing ? "menu-overlay-closing" : ""}`}
          aria-modal
          role="dialog"
          aria-label="Menu de navegação"
        >
          <div className="menu-bubble" aria-hidden />
          <div className="menu-content-in relative z-10 flex flex-col gap-8 p-6 pt-8">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={closeMenu}
                className="flex h-10 w-10 items-center justify-center rounded text-text transition-opacity hover:opacity-80"
                aria-label="Fechar menu"
              >
                <HiOutlineX className="h-7 w-7" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-center text-lg font-medium uppercase tracking-wide text-text">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="relative py-2 transition-opacity hover:opacity-80 after:absolute after:left-0 after:bottom-0 after:block after:h-0.5 after:w-0 after:bg-current after:content-[''] after:transition-[width] after:duration-300 after:ease-out hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
