import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsappFloat } from "@/components/whatsapp-float";
import "./globals.css";

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
      <body>
        <div className="page-noise" aria-hidden="true" />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsappFloat />
      </body>
    </html>
  );
}
