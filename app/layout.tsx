import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { NavigationLoader } from "@/components/navigation-loader";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { SiteInteractions } from "@/components/site-interactions";
import "./globals.css";

const manrope = Manrope({subsets:["latin"],variable:"--font-manrope",display:"swap"});
const sora = Sora({subsets:["latin"],variable:"--font-sora",display:"swap"});

export const metadata: Metadata = {
  title: {
    default: "GZO Computación | Soluciones informáticas",
    template: "%s | GZO Computación",
  },
  description:
    "Soporte informático, reparación de PC y notebooks, armado de computadoras, redes, mantenimiento y asistencia remota.",
  icons: { icon: { url: "/brand/gzo-symbol-orange.svg", type: "image/svg+xml" } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${sora.variable}`}>
        <div className="page-noise" aria-hidden="true" />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsappFloat />
        <NavigationLoader />
        <SiteInteractions />
      </body>
    </html>
  );
}
