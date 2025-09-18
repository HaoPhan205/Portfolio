import Image from "next/image";
import React from "react";

const SocialLinks = () => {
  const links = [
    {
      src: "/assets/icons/github_icon.png",
      alt: "Github",
      href: "https://github.com/HaoPhan205",
    },
    {
      src: "/assets/icons/facebook_icon.png",
      alt: "Facebook",
      href: "https://web.facebook.com/EricPhannn",
    },
    // { src: InstagramIcon, alt: "Instagram", href: "https://instagram.com" },
  ];

  return (
    <ul className="flex space-x-4">
      {links.map(({ src, alt, href }) => (
        <li key={alt}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:scale-110 hover:shadow-lg rounded-full"
          >
            <Image
              src={src}
              alt={alt}
              width={28}
              height={28}
              className="block"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
