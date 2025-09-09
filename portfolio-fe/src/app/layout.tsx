import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProviderWrapper } from "@/components/ThemeProviderWrapper";
import { Footer } from "@/components/layout/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
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
  const messages = await getMessages();

  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <ThemeProviderWrapper>
          <NextIntlClientProvider locale="vi" messages={messages}>
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
