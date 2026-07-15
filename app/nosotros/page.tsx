import Image from "next/image";
import { CheckIcon, CpuIcon, MessageIcon, ShieldIcon, SparkIcon } from "@/components/icons";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata = { title: "Nosotros" };

export default function NosotrosPage() {
  return <main>
    <section className="page-hero"><div className="page-hero-bg"/><div className="shell page-hero-inner"><div><div className="eyebrow"><span/> Nosotros</div><h1>Tecnología con<br/><em>criterio humano.</em></h1><p>GZO Computación nace para brindar soluciones informáticas claras, cercanas y técnicamente responsables.</p></div><div className="page-hero-index">02</div></div></section>

    <section className="section shell story-grid">
      <ScrollReveal className="story-image">
        <Image src="/images/nosotros-pc.jpg" alt="Computadora de escritorio de alto rendimiento" fill sizes="(max-width:900px) 100vw, 50vw"/>
        <div className="story-logo-panel">
          <Image src="/brand/gzo-logo-fondo-negro.png" alt="GZO Computación" width={520} height={173}/>
        </div>
      </ScrollReveal>
      <ScrollReveal className="story-copy" delay={100}><div className="eyebrow"><span/> Nuestra forma de trabajar</div><h2>Resolver bien también significa explicar bien.</h2><p>La informática puede volverse frustrante cuando aparecen fallas, mensajes extraños o compras difíciles de comparar. Nuestro enfoque es bajar esa complejidad a decisiones concretas.</p><p>Analizamos el contexto, el uso real del equipo y el presupuesto antes de recomendar una reparación, una mejora o una compra.</p><ul className="check-list"><li><CheckIcon/> Diagnóstico antes de recomendar</li><li><CheckIcon/> Comunicación directa</li><li><CheckIcon/> Soluciones proporcionales al problema</li></ul></ScrollReveal>
    </section>

    <section className="section section-panel"><div className="shell values-grid">
      {[
        [MessageIcon,"Claridad","Explicaciones simples, sin esconder el criterio técnico detrás de palabras complicadas."],
        [ShieldIcon,"Responsabilidad","Cuidado del equipo y de la información durante cada intervención."],
        [CpuIcon,"Criterio técnico","Recomendaciones basadas en compatibilidad, rendimiento y uso real."],
        [SparkIcon,"Mejora continua","Búsqueda de soluciones modernas, eficientes y sostenibles en el tiempo."],
      ].map(([Icon,title,text],index)=>{const C=Icon as typeof CpuIcon;return <ScrollReveal key={String(title)} delay={index*70}><article className="value-card"><C/><span>0{index+1}</span><h3>{String(title)}</h3><p>{String(text)}</p></article></ScrollReveal>})}
    </div></section>


  </main>;
}
