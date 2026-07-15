import Image from "next/image";
import { ArrowRightIcon, CheckIcon, CpuIcon, LaptopIcon, WrenchIcon } from "@/components/icons";
import { ScrollReveal } from "@/components/scroll-reveal";
import { whatsappLink } from "@/lib/site";

export const metadata = { title: "Soporte presencial" };

export default function SoportePresencialPage() {
  return <main>
    <section className="service-hero">
      <Image src="/images/soporte-presencial-hero.jpg" alt="Técnico revisando una computadora" fill priority sizes="100vw"/>
      <div className="service-hero-overlay"/>
      <div className="shell service-hero-content"><div className="eyebrow light"><span/> Soporte presencial</div><h1>Cuando el equipo necesita<br/><em>una revisión real.</em></h1><p>Para fallas físicas, mantenimiento, componentes y casos que no pueden resolverse a distancia.</p><a href={whatsappLink("Hola GZO Computación, necesito soporte presencial.")} className="button button-primary" target="_blank" rel="noreferrer">Solicitar atención <ArrowRightIcon/></a></div>
    </section>

    <section className="section shell">
      <div className="presential-intro">
        <ScrollReveal><div className="eyebrow"><span/> Evaluación previa</div><h2>Primero entendemos el problema.</h2><p className="lead">Antes de coordinar, revisamos por WhatsApp los síntomas del equipo. Así podemos anticipar qué información o elementos conviene tener preparados.</p></ScrollReveal>
        <ScrollReveal className="presential-card" delay={100}><WrenchIcon/><h3>Atención según el caso</h3><p>La modalidad y el alcance se coordinan de acuerdo con el tipo de falla y el equipo.</p></ScrollReveal>
      </div>
      <div className="presential-grid">
        {[
          [LaptopIcon,"Notebooks","Limpieza, rendimiento, almacenamiento, memoria, software y diagnóstico de fallas."],
          [CpuIcon,"PC de escritorio","Encendido, componentes, temperatura, rendimiento, actualizaciones y armado."],
          [WrenchIcon,"Mantenimiento","Limpieza interna, revisión preventiva y recomendaciones de uso."],
        ].map(([Icon,title,text],index)=>{const C=Icon as typeof WrenchIcon; return <ScrollReveal key={String(title)} delay={index*80}><article><C/><span>0{index+1}</span><h3>{String(title)}</h3><p>{String(text)}</p></article></ScrollReveal>})}
      </div>
    </section>

    <section className="section section-panel"><div className="shell dual-feature">
      <ScrollReveal className="dual-image"><Image src="/images/soporte-presencial-componentes.jpg" alt="Componentes internos de una computadora de escritorio" fill sizes="(max-width:900px) 100vw, 50vw"/></ScrollReveal>
      <ScrollReveal className="dual-copy" delay={100}><div className="eyebrow"><span/> Cuidado técnico</div><h2>Orden, diagnóstico y criterio.</h2><p>La revisión de un equipo no debería ser una caja negra. Te explicamos qué encontramos, qué alternativas existen y qué opción tiene más sentido.</p><ul className="check-list"><li><CheckIcon/> Revisión enfocada en la causa</li><li><CheckIcon/> Explicación de alternativas</li><li><CheckIcon/> Recomendaciones para prevenir futuras fallas</li></ul></ScrollReveal>
    </div></section>

    <section className="final-cta compact-cta"><div className="cta-grid-bg"/><div className="shell final-cta-inner"><div><h2>¿Tu equipo necesita revisión?</h2><p>Mandanos los datos y coordinamos.</p></div><a href={whatsappLink("Hola GZO Computación, quiero coordinar una revisión presencial de mi equipo.")} className="button button-dark" target="_blank" rel="noreferrer">Escribir por WhatsApp <ArrowRightIcon/></a></div></section>
  </main>;
}
