"use client";
import { useTranslations } from "next-intl";
import React from "react";
import SocialLinks from "./SocialLinks";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { ClientOnly } from "@/components/shared/ClientOnly";
import { ModeToggle } from "@/components/shared/ThemeToggle";
import GifImage from "@/components/shared/GifImage";
import { AnimatedGif } from "public/assets";

function Footer() {
  const t = useTranslations("footer");

  const navLinks = [
    { name: t("nav.features"), href: "#projects" },
    { name: t("nav.solution"), href: "#skills" },
    { name: t("nav.customers"), href: "#clients" },
    { name: t("nav.pricing"), href: "#services" },
    { name: t("nav.help"), href: "#contact" },
    { name: t("nav.about"), href: "#about" },
  ];

  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden ">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <div className="mb-6 flex items-center justify-center ">
          <GifImage
            src={AnimatedGif}
            alt="Animated GIF"
            size={60}
            rounded
            className="mr-4 shadow-lg rounded-full"
          />

          <span className="text-textPrimary dark:text-textDarkPrimary text-3xl font-extrabold tracking-wide">
            {t("brand")}
          </span>
        </div>
        <nav className="mb-6 w-full">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-1 text-sm sm:text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.href} className="text-center sm:text-left">
                <a
                  href={link.href}
                  aria-label={link.name}
                  className="block text-textSecondary dark:text-textDarkSecondary hover:text-gray-900 dark:hover:text-white transition-all duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-gray-900 dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mb-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <LanguageSwitcher />
          <ClientOnly>
            <ModeToggle />
          </ClientOnly>
        </div>

        <div className="my-6 flex  flex-wrap justify-center gap-3 sm:gap-4 text-sm">
          <SocialLinks />
        </div>

        <p className="text-center text-xs sm:text-sm text-textSecondary dark:text-textDarkSecondary mt-4 sm:mt-6">
          &copy; {new Date().getFullYear()} {t("brand")}. {t("copyright")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
