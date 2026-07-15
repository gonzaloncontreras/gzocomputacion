import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, CpuIcon, DatabaseIcon, HeadsetIcon, LaptopIcon, MessageIcon, ShieldIcon, SparkIcon, WifiIcon, WrenchIcon } from "@/components/icons";
import { ScrollReveal } from "@/components/scroll-reveal";
import { generalWhatsappLink, whatsappLink } from "@/lib/site";

const services = [
  { title: "Reparación de PC", text: "Diagnóstico de fallas, rendimiento, hardware, software y mantenimiento general.", icon: WrenchIcon, image: "/images/home-card-reparacion.jpg" },
  { title: "Notebooks", text: "Revisión integral, limpieza, mejora de rendimiento y solución de problemas frecuentes.", icon: LaptopIcon, image: "/images/home-card-notebooks.jpg" },
  { title: "Armado de PC", text: "Equipos pensados para estudio, trabajo, gaming o productividad profesional.", icon: CpuIcon, image: "/images/home-card-armado.jpg" },
  { title: "Actualización de hardware", text: "SSD, memoria, placa de video y componentes para extender la vida útil del equipo.", icon: SparkIcon, image: "/images/home-card-hardware.jpg" },
  { title: "Redes y conectividad", text: "Configuración de routers, Wi-Fi, cableado y resolución de problemas de conexión.", icon: WifiIcon, image: "/images/home-card-redes.jpg" },
  { title: "Soporte remoto", text: "Asistencia online para software, configuración, errores y puesta a punto.", icon: HeadsetIcon, image: "/images/home-card-remoto.jpg" },
];

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
          <div><strong>4</strong><span>frentes de solución</span></div>
          <div><strong>2</strong><span>modalidades de atención</span></div>
          <div><strong>1</strong><span>contacto directo</span></div>
          <div><strong>360°</strong><span>visión de tu equipo</span></div>
        </div>
      </section>

      <section className="section shell" id="servicios">
        <ScrollReveal>
          <div className="section-heading split-heading">
            <div>
              <div className="eyebrow"><span /> Servicios</div>
              <h2>Soluciones para cada problema informático</h2>
            </div>
            <p>Una propuesta integral que combina soporte técnico, mantenimiento, conectividad y asesoramiento para que tu equipo vuelva a rendir como corresponde.</p>
          </div>
        </ScrollReveal>

        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={index * 70}>
                <article className="service-card">
                  <div className="service-image"><Image src={service.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
                  <div className="service-content">
                    <div className="service-icon"><Icon /></div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <a href={whatsappLink(`Hola GZO Computación, quiero consultar por ${service.title}.`)} target="_blank" rel="noreferrer">
                      Consultar <ArrowRightIcon />
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
        <div className="center-action"><Link href="/servicios" className="button button-outline">Ver todos los servicios <ArrowRightIcon /></Link></div>
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

      <section className="feature-band">
        <div className="shell feature-split">
          <ScrollReveal className="feature-copy">
            <div className="eyebrow"><span /> Soporte remoto</div>
            <h2>Ayuda técnica sin perder tiempo.</h2>
            <p>Para problemas de software, configuración, rendimiento, correo, impresoras o errores del sistema, la asistencia remota puede ser la forma más rápida de avanzar.</p>
            <ul className="check-list">
              <li><CheckIcon /> Evaluación previa por WhatsApp</li>
              <li><CheckIcon /> Conexión guiada y segura</li>
              <li><CheckIcon /> Explicación clara de lo realizado</li>
            </ul>
            <Link href="/soporte-remoto" className="text-link">Conocer soporte remoto <ArrowRightIcon /></Link>
          </ScrollReveal>
          <ScrollReveal className="feature-image" delay={120}>
            <Image src="/images/home-remoto.jpg" alt="Profesionales realizando soporte remoto" fill sizes="(max-width: 900px) 100vw, 50vw" />
            <div className="image-corner-label">REMOTE<br/><b>SUPPORT</b></div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section shell">
        <div className="dual-feature">
          <ScrollReveal className="dual-image">
            <Image src="/images/home-componentes.jpg" alt="Componentes de una PC de alto rendimiento" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </ScrollReveal>
          <ScrollReveal className="dual-copy" delay={100}>
            <div className="eyebrow"><span /> Armado y actualización</div>
            <h2>Una PC pensada para lo que realmente necesitás.</h2>
            <p>Te ayudamos a elegir componentes, equilibrar presupuesto y rendimiento, y evitar compras innecesarias. Para estudiar, trabajar, crear contenido o jugar.</p>
            <div className="mini-grid">
              <div><CpuIcon/><span>Componentes compatibles</span></div>
              <div><SparkIcon/><span>Rendimiento equilibrado</span></div>
              <div><ShieldIcon/><span>Armado ordenado</span></div>
              <div><DatabaseIcon/><span>Posibilidad de actualización</span></div>
            </div>
            <a href={whatsappLink("Hola GZO Computación, necesito asesoramiento para armar o actualizar una PC.")} className="button button-primary" target="_blank" rel="noreferrer">Consultar armado de PC <ArrowRightIcon /></a>
          </ScrollReveal>
        </div>
      </section>

      <section className="network-section">
        <Image src="/images/home-redes.jpg" alt="Configuración de redes y conectividad" fill sizes="100vw" />
        <div className="network-overlay" />
        <div className="shell network-content">
          <ScrollReveal>
            <div className="eyebrow"><span /> Redes y conectividad</div>
            <h2>Una conexión estable también es parte del sistema.</h2>
            <p>Configuración de routers, Wi-Fi, cableado y diagnóstico de problemas de red para hogares, espacios de trabajo y pequeños entornos profesionales.</p>
            <a href={whatsappLink("Hola GZO Computación, necesito ayuda con una red o conexión Wi-Fi.")} className="button button-primary" target="_blank" rel="noreferrer">Consultar por redes <ArrowRightIcon /></a>
          </ScrollReveal>
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

      <section className="final-cta">
        <div className="cta-grid-bg" aria-hidden="true" />
        <div className="shell final-cta-inner">
          <ScrollReveal>
            <div className="eyebrow light"><span /> Hablemos de tu equipo</div>
            <h2>¿Necesitás una solución informática?</h2>
            <p>Contanos qué está pasando y te orientamos sobre el próximo paso.</p>
          </ScrollReveal>
          <ScrollReveal delay={100}><a href={generalWhatsappLink} className="button button-dark" target="_blank" rel="noreferrer">Escribir por WhatsApp <ArrowRightIcon /></a></ScrollReveal>
        </div>
      </section>
    </main>
  );
}
