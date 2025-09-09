import { useTranslations } from "next-intl";
import React from "react";

const FOOTER_CONTACT = {
  title: "title",
  address: "address",
  email: "email",
  phone: "phone",
};

const FooterContact = () => {
  const t = useTranslations("FooterContact");

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {t(FOOTER_CONTACT.title)}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {t(FOOTER_CONTACT.address)}
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        {t(FOOTER_CONTACT.email)}
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        {t(FOOTER_CONTACT.phone)}
      </p>
    </div>
  );
};

export default FooterContact;
