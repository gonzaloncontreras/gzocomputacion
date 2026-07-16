import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, CpuIcon, DatabaseIcon, MessageIcon, ShieldIcon, WrenchIcon } from "@/components/icons";
import { ScrollReveal } from "@/components/scroll-reveal";
import { generalWhatsappLink } from "@/lib/site";


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

      


    </main>
  );
}
