import Image from "next/image";
import { ArrowRightIcon, CheckIcon, CpuIcon, DatabaseIcon, HeadsetIcon, LaptopIcon, ShieldIcon, SparkIcon, WifiIcon, WrenchIcon } from "@/components/icons";
import { ScrollReveal } from "@/components/scroll-reveal";
import { whatsappLink } from "@/lib/site";

const services = [
  { title: "Reparación de PC", subtitle: "Diagnóstico y solución", text: "Fallas de encendido, lentitud, errores del sistema, mantenimiento y revisión de componentes.", icon: WrenchIcon, image: "/images/servicio-reparacion.jpg", points: ["Diagnóstico inicial", "Revisión de hardware", "Optimización general"] },
  { title: "Servicio para notebooks", subtitle: "Mantenimiento integral", text: "Limpieza, rendimiento, almacenamiento, memoria y resolución de problemas de software o hardware.", icon: LaptopIcon, image: "/images/servicio-notebooks.jpg", points: ["Limpieza interna", "Cambio o mejora de SSD", "Configuración y software"] },
  { title: "Armado de computadoras", subtitle: "Equipos a medida", text: "Selección de componentes y armado equilibrado según presupuesto, uso y posibilidad de actualización.", icon: CpuIcon, image: "/images/servicio-armado-pc.jpg", points: ["Gaming", "Trabajo y estudio", "Productividad profesional"] },
  { title: "Actualización de hardware", subtitle: "Más vida útil", text: "Mejoras de rendimiento mediante SSD, memoria RAM, placa de video, refrigeración y otros componentes.", icon: SparkIcon, image: "/images/servicio-hardware.jpg", points: ["Evaluación de compatibilidad", "Priorización del presupuesto", "Instalación ordenada"] },
  { title: "Redes y conectividad", subtitle: "Conexión estable", text: "Configuración de routers, redes Wi-Fi y LAN, cableado y diagnóstico de problemas de conexión.", icon: WifiIcon, image: "/images/servicio-redes.jpg", points: ["Wi-Fi y routers", "Red local", "Diagnóstico de cortes"] },
  { title: "Soporte remoto", subtitle: "Asistencia online", text: "Ayuda a distancia para configuración, software, errores, correo, impresoras y puesta a punto.", icon: HeadsetIcon, image: "/images/servicio-remoto.jpg", points: ["Evaluación previa", "Conexión guiada", "Atención personalizada"] },
  { title: "Seguridad y respaldo", subtitle: "Protección de información", text: "Revisión de amenazas, buenas prácticas, copias de seguridad y organización básica de datos.", icon: ShieldIcon, image: "/images/seguridad-respaldo-real.jpg", points: ["Prevención", "Respaldo", "Recomendaciones"] },
  { title: "Asesoramiento de compra", subtitle: "Decisiones con criterio", text: "Comparación de notebooks, PC armadas y componentes para elegir según necesidades reales.", icon: DatabaseIcon, image: "/images/asesoramiento-compra-real.jpg", points: ["Análisis de uso", "Comparación de opciones", "Presupuesto equilibrado"] },
];

export const metadata = { title: "Servicios" };

export default function ServiciosPage() {
  return <main>
    <section className="page-hero">
      <div className="page-hero-bg" />
      <div className="shell page-hero-inner">
        <div><div className="eyebrow"><span /> Servicios</div><h1>Soluciones informáticas<br/><em>de punta a punta.</em></h1><p>Desde una falla puntual hasta el armado completo de un equipo o la mejora de una red.</p></div>
        <div className="page-hero-index">01</div>
      </div>
    </section>

    <section className="section shell">
      <div className="services-detail-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return <ScrollReveal key={service.title} delay={(index%4)*60}>
            <article className="service-detail-card">
              <div className="service-detail-image"><Image src={service.image} alt="" fill sizes="(max-width: 900px) 100vw, 50vw"/><div className="service-detail-number">0{index+1}</div></div>
              <div className="service-detail-body">
                <div className="service-detail-title"><div className="service-icon"><Icon/></div><div><span>{service.subtitle}</span><h2>{service.title}</h2></div></div>
                <p>{service.text}</p>
                <ul>{service.points.map(point=><li key={point}><CheckIcon/>{point}</li>)}</ul>
                <a href={whatsappLink(`Hola GZO Computación, quiero consultar por ${service.title}.`)} target="_blank" rel="noreferrer">Consultar servicio <ArrowRightIcon/></a>
              </div>
            </article>
          </ScrollReveal>;
        })}
      </div>
    </section>

    <section className="final-cta compact-cta"><div className="cta-grid-bg"/><div className="shell final-cta-inner"><div><div className="eyebrow light"><span/> Atención directa</div><h2>¿No sabés qué servicio elegir?</h2><p>Contanos el problema y te orientamos.</p></div><a href={whatsappLink("Hola GZO Computación, necesito ayuda pero no sé qué servicio elegir.")} className="button button-dark" target="_blank" rel="noreferrer">Pedir orientación <ArrowRightIcon/></a></div></section>
  </main>;
}
