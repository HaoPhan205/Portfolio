"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import GifImage from "@/components/shared/GifImage";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { ClientOnly } from "@/components/shared/ClientOnly";
import { ModeToggle } from "@/components/shared/ModeToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0A2540]/90 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between sm:px-6 lg:px-8">
        <div className="flex items-center ">
          {" "}
          <GifImage
            src="/assets/icons/programmer.gif"
            alt="Animated GIF"
            size={40}
            rounded
            className="mr-4 shadow-lg rounded-full"
          />
          <div className="text-white font-bold text-xl">Eric Phan</div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-orange-500 transition">
            Home
          </a>
          <a href="#" className="text-white hover:text-orange-500 transition">
            About Us
          </a>
          <a href="#" className="text-white hover:text-orange-500 transition">
            Solutions
          </a>
          <a
            href="#"
            className="text-orange-500 font-semibold hover:text-orange-400"
          >
            Careers
          </a>
          <a href="#" className="text-white hover:text-orange-500 transition">
            Resources
          </a>
        </nav>{" "}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 ">
          <button className=" px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition">
            Resume
          </button>
          <button className="px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition">
            Contact Us
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 ">
          <LanguageSwitcher />
          <ClientOnly>
            <ModeToggle />
          </ClientOnly>
        </div>
      </div>
    </header>
  );
}
