import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { NavigationLoader } from "@/components/navigation-loader";
import { WhatsappFloat } from "@/components/whatsapp-float";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GZO Computación | Soluciones informáticas",
    template: "%s | GZO Computación",
  },
  description:
    "Soporte informático, reparación de PC y notebooks, armado de computadoras, redes, mantenimiento y asistencia remota.",
  icons: { icon: "/brand/gzo-logo-fondo-negro.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${plexSans.variable} ${plexMono.variable}`}>
        <div className="page-noise" aria-hidden="true" />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsappFloat />
        <NavigationLoader />
      </body>
    </html>
  );
}
