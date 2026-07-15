import { CheckIcon, MessageIcon } from "@/components/icons";
import { ScrollReveal } from "@/components/scroll-reveal";
import { site } from "@/lib/site";

export const metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <main>
      <section className="contact-hero">
        <div className="shell contact-grid">
          <ScrollReveal>
            <div className="eyebrow"><span /> Contacto</div>
            <h1>Contanos qué necesitás.</h1>
            <p>
              El canal principal es WhatsApp. Para iniciar una consulta, usá el botón
              “Solicitar atención” del encabezado o el botón flotante disponible en toda la web.
            </p>
          </ScrollReveal>

          <ScrollReveal className="contact-card" delay={100}>
            <div className="contact-card-top"><MessageIcon /><span>Respuesta directa</span></div>
            <h2>Para ayudarte mejor</h2>
            <ul>
              <li><CheckIcon /> Tipo y modelo del equipo</li>
              <li><CheckIcon /> Qué problema presenta</li>
              <li><CheckIcon /> Desde cuándo ocurre</li>
              <li><CheckIcon /> Mensajes de error o fotos</li>
            </ul>
            <div className="contact-email">
              <span>Correo</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
