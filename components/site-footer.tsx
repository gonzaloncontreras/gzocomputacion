import Image from "next/image";
import Link from "next/link";
import { WhatsappIcon } from "@/components/icons";
import { generalWhatsappLink, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid shell">
        <div className="footer-brand">
          <Image src="/brand/gzo-logo-fondo-negro.png" alt="GZO Computación" width={310} height={104} />
          <p>
            Soluciones informáticas con atención directa, diagnóstico claro y una propuesta adaptada a cada equipo.
          </p>
          <a className="footer-whatsapp" href={generalWhatsappLink} target="_blank" rel="noreferrer">
            <WhatsappIcon /> Escribir por WhatsApp
          </a>
        </div>

        <div>
          <h3>Servicios</h3>
          <ul>
            <li><Link href="/servicios">Reparación de PC y notebooks</Link></li>
            <li><Link href="/servicios">Armado y actualización de PC</Link></li>
            <li><Link href="/soporte-remoto">Soporte remoto</Link></li>
            <li><Link href="/servicios">Redes y conectividad</Link></li>
          </ul>
        </div>

        <div>
          <h3>Información</h3>
          <ul>
            <li><Link href="/nosotros">Quiénes somos</Link></li>
            <li><Link href="/preguntas-frecuentes">Preguntas frecuentes</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom shell">
        <span>© {new Date().getFullYear()} GZO Computación.</span>
      </div>
    </footer>
  );
}
