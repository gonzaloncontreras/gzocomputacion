"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CloseIcon, MenuIcon, WhatsappIcon } from "@/components/icons";
import { generalWhatsappLink } from "@/lib/site";

const links = [
  ["/", "Inicio"],
  ["/servicios", "Servicios"],
  ["/soporte-remoto", "Soporte remoto"],
  ["/soporte-presencial", "Soporte presencial"],
  ["/nosotros", "Nosotros"],
  ["/contacto", "Contacto"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link href="/" className="brand-link" aria-label="GZO Computación - Inicio">
          <Image
            src="/brand/gzo-logo-fondo-negro.png"
            alt="GZO Computación"
            width={300}
            height={100}
            priority
            className="brand-logo"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className={pathname === href ? "active" : ""}>
              {label}
            </Link>
          ))}
        </nav>

        <a className="header-cta" href={generalWhatsappLink} target="_blank" rel="noreferrer">
          <WhatsappIcon aria-hidden="true" />
          <span>Solicitar atención</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div className={`mobile-panel ${open ? "open" : ""}`}>
        <nav className="mobile-nav shell" aria-label="Navegación móvil">
          {links.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <a href={generalWhatsappLink} target="_blank" rel="noreferrer">
            <WhatsappIcon /> Consultar por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
