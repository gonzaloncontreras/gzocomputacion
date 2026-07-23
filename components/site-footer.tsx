import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
    >
      <path d="M13.7 21v-8h2.8l.42-3.2H13.7V7.75c0-.93.27-1.56 1.62-1.56H17V3.33A22 22 0 0 0 14.55 3c-2.42 0-4.08 1.45-4.08 4.12V9.8H7.75V13h2.72v8h3.23Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid shell">
        <div className="footer-brand">
          <Image
            src="/brand/gzo-logo-fondo-negro.png"
            alt="GZO Computación"
            width={310}
            height={104}
          />
          <p>
            Soluciones informáticas con atención directa, diagnóstico claro y
            una propuesta adaptada a cada equipo.
          </p>
        </div>

        <div>
          <h3>Servicios</h3>
          <ul>
            <li>
              <Link href="/servicios">Reparación de PC y notebooks</Link>
            </li>
            <li>
              <Link href="/servicios">Armado y actualización de PC</Link>
            </li>
            <li>
              <Link href="/soporte-remoto">Soporte remoto</Link>
            </li>
            <li>
              <Link href="/servicios">Redes y conectividad</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Información</h3>
          <ul>
            <li>
              <Link href="/nosotros">Quiénes somos</Link>
            </li>
            <li>
              <Link href="/preguntas-frecuentes">Preguntas frecuentes</Link>
            </li>
          </ul>

          <h3>Contacto</h3>
          <ul>
            <li>
              <a
                href={`mailto:${site.email}`}
                aria-label={`Enviar correo a ${site.email}`}
                style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
              >
                <EmailIcon />
                <span>{site.email}</span>
              </a>
            </li>
          </ul>

          <h3>Seguinos</h3>
          <ul>
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de GZO Computación"
                style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
              >
                <InstagramIcon />
                Instagram · {site.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de GZO Computación"
                style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
              >
                <FacebookIcon />
                Facebook · GZO Computación
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom shell">
        <span>© {new Date().getFullYear()} GZO Computación. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}
