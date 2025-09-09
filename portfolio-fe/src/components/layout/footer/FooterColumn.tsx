import React from "react";
import { useTranslations } from "next-intl";

type FooterColumnProps = {
  title: string;
  links: { label: string; url: string }[];
};

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  const t = useTranslations("FooterColumn");
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {t(title)}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
            >
              {t(`links.${link.label}`)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
