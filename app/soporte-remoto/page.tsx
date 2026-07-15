import Image from "next/image";
import { CheckIcon, HeadsetIcon, MessageIcon, ShieldIcon } from "@/components/icons";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata = { title: "Soporte remoto" };

export default function SoporteRemotoPage() {
  return <main>
    <section className="service-hero remote-hero">
      <Image src="/images/soporte-remoto-hero.jpg" alt="Soporte informático remoto" fill priority sizes="100vw"/>
      <div className="service-hero-overlay"/>
      <div className="shell service-hero-content"><div className="eyebrow light"><span/> Soporte remoto</div><h1>Asistencia técnica<br/><em>sin perder tiempo.</em></h1><p>Evaluamos el problema y, cuando es posible, te ayudamos a distancia de forma guiada y segura.</p></div>
    </section>

    <section className="section shell remote-layout">
      <div>
        <ScrollReveal><div className="eyebrow"><span/> Qué podemos resolver</div><h2>Problemas de software, configuración y rendimiento.</h2><p className="lead">El soporte remoto es ideal cuando el equipo enciende y tiene conexión a internet, pero presenta errores o necesita configuración.</p></ScrollReveal>
        <div className="remote-cases">
          {["Windows lento o con errores","Instalación y configuración de programas","Correo, impresoras y periféricos","Limpieza lógica y programas de inicio","Configuración básica de seguridad","Orientación y diagnóstico inicial"].map((item,index)=><ScrollReveal key={item} delay={index*60}><div><span>0{index+1}</span>{item}</div></ScrollReveal>)}
        </div>
      </div>
      <ScrollReveal className="remote-side" delay={100}>
        <HeadsetIcon/>
        <h3>¿Cómo funciona?</h3>
        <ol><li><span>1</span>Nos escribís y describís el problema.</li><li><span>2</span>Confirmamos si puede resolverse a distancia.</li><li><span>3</span>Te guiamos para realizar la conexión.</li><li><span>4</span>Trabajamos y verificamos el resultado.</li></ol>
      </ScrollReveal>
    </section>

    <section className="section section-panel"><div className="shell safe-grid">
      <ScrollReveal className="safe-card"><ShieldIcon/><h3>Conexión guiada</h3><p>Te explicamos cada paso antes de iniciar y vos mantenés el control de la sesión.</p></ScrollReveal>
      <ScrollReveal className="safe-card" delay={80}><MessageIcon/><h3>Comunicación clara</h3><p>Sabés qué se está revisando y por qué se realiza cada cambio.</p></ScrollReveal>
      <ScrollReveal className="safe-card" delay={160}><CheckIcon/><h3>Validación final</h3><p>Probamos junto a vos que la solución haya quedado funcionando correctamente.</p></ScrollReveal>
    </div></section>


  </main>;
}
