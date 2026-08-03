import type { Metadata } from "next";
import { Spectral, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/lang-provider";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Be-Support — Votre partenaire gain de temps",
    template: "%s — Be-Support",
  },
  description:
    "Support administratif, comptable et créatif à distance pour les PME de Belgique et de France. Équipe nearshore basée à Essaouira, augmentée par l'IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${spectral.variable} ${hanken.variable}`}>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <LangProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </LangProvider>
      </body>
    </html>
  );
}
