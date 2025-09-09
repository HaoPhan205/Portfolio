import Image from "next/image";
import { FacebookIcon, GithubIcon, InstagramIcon } from "public/assets";
import React from "react";

const SocialLinks = () => {
  const links = [
    { src: GithubIcon, alt: "Github", href: "https://github.com/HaoPhan205" },
    {
      src: FacebookIcon,
      alt: "Facebook",
      href: "https://web.facebook.com/EricPhannn",
    },
    // { src: InstagramIcon, alt: "Instagram", href: "https://instagram.com" },
  ];
  return (
    <ul className="flex space-x-4">
      {links.map(({ src, alt, href }) => (
        <a
          key={alt}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
        >
          {" "}
          <Image
            src={src}
            alt={alt}
            width={28}
            height={28}
            className="opacity-70 hover:opacity-100 dark:invert"
          />
        </a>
      ))}
    </ul>
  );
};

export default SocialLinks;
