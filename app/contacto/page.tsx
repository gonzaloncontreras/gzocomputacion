import { ArrowRightIcon, CheckIcon, MessageIcon, WhatsappIcon } from "@/components/icons";
import { ScrollReveal } from "@/components/scroll-reveal";
import { generalWhatsappLink, site, whatsappLink } from "@/lib/site";

export const metadata = { title: "Contacto" };

const shortcuts = [
  ["Soporte remoto", "Hola GZO Computación, necesito soporte remoto."],
  ["Reparación de equipo", "Hola GZO Computación, necesito revisar o reparar un equipo."],
  ["Armar o mejorar una PC", "Hola GZO Computación, necesito asesoramiento para armar o mejorar una PC."],
  ["Redes y Wi-Fi", "Hola GZO Computación, necesito ayuda con una red o conexión Wi-Fi."],
];

export default function ContactoPage() {
  return <main>
    <section className="contact-hero"><div className="shell contact-grid">
      <ScrollReveal><div className="eyebrow"><span/> Contacto</div><h1>Contanos qué necesitás.</h1><p>El canal principal es WhatsApp. Podés enviar una descripción del problema, fotos o capturas para una primera orientación.</p><a href={generalWhatsappLink} className="button button-primary" target="_blank" rel="noreferrer"><WhatsappIcon/> Abrir WhatsApp</a></ScrollReveal>
      <ScrollReveal className="contact-card" delay={100}><div className="contact-card-top"><MessageIcon/><span>Respuesta directa</span></div><h2>Para ayudarte mejor</h2><ul><li><CheckIcon/> Tipo y modelo del equipo</li><li><CheckIcon/> Qué problema presenta</li><li><CheckIcon/> Desde cuándo ocurre</li><li><CheckIcon/> Mensajes de error o fotos</li></ul><div className="contact-email"><span>Correo</span><a href={`mailto:${site.email}`}>{site.email}</a></div></ScrollReveal>
    </div></section>

    <section className="section shell"><ScrollReveal><div className="section-heading center-heading"><div className="eyebrow"><span/> Consultas rápidas</div><h2>Elegí el motivo de tu consulta</h2><p>Se abrirá WhatsApp con un mensaje inicial listo para completar.</p></div></ScrollReveal><div className="shortcut-grid">{shortcuts.map(([title,message],index)=><ScrollReveal key={title} delay={index*70}><a href={whatsappLink(message)} target="_blank" rel="noreferrer"><span>0{index+1}</span><h3>{title}</h3><ArrowRightIcon/></a></ScrollReveal>)}</div></section>
  </main>;
}
