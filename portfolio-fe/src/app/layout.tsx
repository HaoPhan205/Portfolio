import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProviderWrapper } from "@/components/shared/ThemeProviderWrapper";
import { Footer } from "@/components/layout/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { cookies } from "next/headers";
import { Locale, LocaleProvider } from "@/context/LocaleContext";
import { HydrationFixer } from "@/components/shared/HydrationFixer";
import Header from "@/components/layout/header/Header";
import { GridBackground } from "@/components/shared/GridBackgroundView";
import ChatWidget from "@/components/chat/ChatWidget";

import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Eric Phan Developer",
  description:
    "Welcome to my personal website! I'm Eric Phan, a passionate developer specializing in web development and software engineering. Explore my projects, skills, and experiences as I share my journey in the tech world.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const store = cookies();
  const cookieLocale = (await store).get("locale")?.value as Locale | undefined;
  const locale: Locale = cookieLocale === "en" ? "en" : "vi";

  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body className="relative bg-slate-950 text-white overflow-x-hidden">
        <HydrationFixer />
        <GridBackground />
        <ThemeProviderWrapper>
          <LocaleProvider initialLocale={locale}>
            <NextIntlClientProvider messages={messages} locale={locale}>
              <div className="relative z-10 flex flex-col min-h-screen">
                <Header />
                <main className="flex-1 p-6 pt-16">{children}</main>
                <Footer />

                <div className="fixed bottom-4 right-4 z-50">
                  <ChatWidget />
                </div>
              </div>
            </NextIntlClientProvider>
          </LocaleProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
