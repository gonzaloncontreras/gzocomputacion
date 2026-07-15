import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, CpuIcon, DatabaseIcon, MessageIcon, ShieldIcon, WrenchIcon } from "@/components/icons";
import { ScrollReveal } from "@/components/scroll-reveal";
import { generalWhatsappLink } from "@/lib/site";

const reasons = [
  ["Diagnóstico claro", "Primero entendemos el problema y te explicamos las alternativas sin vueltas."],
  ["Atención personalizada", "Cada equipo y cada uso requieren una solución distinta, no una respuesta genérica."],
  ["Cuidado del equipo", "Trabajamos con criterio técnico, orden y especial atención a tu información."],
  ["Contacto directo", "Coordinación simple por WhatsApp, sin formularios eternos ni procesos confusos."],
];

export default function HomePage() {
  return (
    <main>
      <section className="hero section-dark">
        <div className="hero-grid shell">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Soluciones informáticas</div>
            <h1>Tu tecnología, <em>bien resuelta.</em></h1>
            <p>
              Soporte técnico para computadoras, notebooks y redes. Diagnóstico, reparación, armado y asistencia con una comunicación simple y profesional.
            </p>
            <div className="hero-actions">
              <a href={generalWhatsappLink} className="button button-primary" target="_blank" rel="noreferrer">
                Solicitar atención <ArrowRightIcon />
              </a>
              <Link href="/servicios" className="button button-ghost">Conocer servicios</Link>
            </div>
            <div className="hero-proof">
              <span><CheckIcon /> Atención directa</span>
              <span><CheckIcon /> Diagnóstico previo</span>
              <span><CheckIcon /> Remoto y presencial</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-glow" />
            <Image src="/images/home-hero-pc.jpg" alt="Computadora de alto rendimiento con iluminación naranja" fill priority sizes="(max-width: 900px) 100vw, 50vw" />
            <div className="hero-overlay" />
            <div className="hero-badge hero-badge-top"><CpuIcon /><span>Hardware<br/><b>optimizado</b></span></div>
            <div className="hero-badge hero-badge-bottom"><ShieldIcon /><span>Soporte<br/><b>confiable</b></span></div>
          </div>
        </div>
        <div className="tech-strip" aria-hidden="true">
          <div>DIAGNÓSTICO · REPARACIÓN · ARMADO DE PC · SOPORTE REMOTO · REDES · MANTENIMIENTO · ACTUALIZACIÓN ·</div>
          <div>DIAGNÓSTICO · REPARACIÓN · ARMADO DE PC · SOPORTE REMOTO · REDES · MANTENIMIENTO · ACTUALIZACIÓN ·</div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="shell trust-grid">
          <div><strong>8</strong><span>servicios disponibles</span></div>
          <div><strong>2</strong><span>modalidades de atención</span></div>
          <div><strong>1</strong><span>contacto directo</span></div>
          <div><strong>360°</strong><span>visión de tu equipo</span></div>
        </div>
      </section>

      <section className="section shell" id="servicios">
        <ScrollReveal>
          <div className="section-heading center-heading">
            <div className="eyebrow"><span /> Servicios</div>
            <h2>Conocé todas nuestras soluciones informáticas</h2>
            <p>
              Reparación, mantenimiento, armado de equipos, soporte remoto,
              redes y asesoramiento en un solo lugar.
            </p>
          </div>
          <div className="center-action">
            <Link href="/servicios" className="button button-outline">
              Ver todos los servicios <ArrowRightIcon />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <section className="section section-panel">
        <div className="shell reasons-layout">
          <ScrollReveal className="reasons-media">
            <Image src="/images/home-diagnostico.jpg" alt="Diagnóstico técnico de una computadora" fill sizes="(max-width: 900px) 100vw, 48vw" />
            <div className="media-caption"><span className="caption-number">01</span><span>Diagnóstico técnico<br/><b>antes de avanzar</b></span></div>
          </ScrollReveal>
          <div>
            <ScrollReveal>
              <div className="eyebrow"><span /> Por qué GZO</div>
              <h2>La diferencia está en cómo se resuelve.</h2>
              <p className="lead">No se trata solo de “hacer que funcione”. Se trata de entender la causa, explicarla con claridad y elegir una solución razonable para tu caso.</p>
            </ScrollReveal>
            <div className="reason-list">
              {reasons.map(([title, text], index) => (
                <ScrollReveal key={title} delay={index * 80}>
                  <article><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section shell">
        <ScrollReveal>
          <div className="section-heading center-heading">
            <div className="eyebrow"><span /> Cómo trabajamos</div>
            <h2>Un proceso simple, de punta a punta.</h2>
            <p>Menos incertidumbre y más claridad desde el primer mensaje.</p>
          </div>
        </ScrollReveal>
        <div className="process-grid">
          {[
            [MessageIcon, "01", "Nos contás el problema", "Por WhatsApp, con una descripción del equipo y lo que está pasando."],
            [DatabaseIcon, "02", "Analizamos el caso", "Definimos si conviene asistencia remota, revisión presencial o asesoramiento."],
            [WrenchIcon, "03", "Proponemos la solución", "Te explicamos el camino recomendado y coordinamos el trabajo."],
            [CheckIcon, "04", "Validamos el resultado", "Revisamos que todo quede funcionando y te dejamos recomendaciones."],
          ].map(([Icon, number, title, text], index) => {
            const C = Icon as typeof MessageIcon;
            return <ScrollReveal key={String(number)} delay={index * 90}><article className="process-card"><div className="process-top"><C/><span>{String(number)}</span></div><h3>{String(title)}</h3><p>{String(text)}</p></article></ScrollReveal>;
          })}
        </div>
      </section>

      <section className="section shell faq-preview">
        <ScrollReveal>
          <div className="section-heading split-heading">
            <div><div className="eyebrow"><span /> Preguntas frecuentes</div><h2>Antes de escribirnos</h2></div>
            <Link href="/preguntas-frecuentes" className="text-link">Ver todas <ArrowRightIcon /></Link>
          </div>
        </ScrollReveal>
        <div className="faq-grid">
          {[
            ["¿Qué información tengo que enviar?", "Modelo del equipo, problema, desde cuándo ocurre y cualquier mensaje de error."],
            ["¿Se puede resolver todo de forma remota?", "No. Primero evaluamos el caso y te decimos qué modalidad tiene más sentido."],
            ["¿También asesoran antes de comprar?", "Sí. Podemos ayudarte a elegir una PC, notebook o componentes según uso y presupuesto."],
          ].map(([q, a], index) => <ScrollReveal key={q} delay={index*80}><article className="faq-card"><span>0{index+1}</span><h3>{q}</h3><p>{a}</p></article></ScrollReveal>)}
        </div>
      </section>


    </main>
  );
}
