import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata = { title: "Preguntas frecuentes" };

const faqs = [
  ["¿Cómo solicito atención?", "Escribinos por WhatsApp con el modelo del equipo y una descripción del problema. Te orientamos sobre el siguiente paso."],
  ["¿Ofrecen soporte remoto?", "Sí. Primero evaluamos el caso y confirmamos si puede resolverse de forma segura a distancia."],
  ["¿Se puede resolver todo de forma remota?", "No. Primero evaluamos el caso y te decimos qué modalidad tiene más sentido."],
  ["¿También realizan soporte presencial?", "Sí. Para problemas físicos o revisiones que no pueden hacerse online, coordinamos una atención presencial."],
  ["¿También asesoran antes de comprar?", "Sí. Podemos ayudarte a elegir una PC, notebook o componentes según uso y presupuesto."],
  ["¿Arman PC gamer o de trabajo?", "Sí. El armado se diseña según el objetivo del equipo, el presupuesto y el equilibrio entre componentes."],
  ["¿Realizan configuración de redes?", "Sí. Podemos revisar routers, Wi-Fi, redes locales y problemas de conectividad."],
  ["¿Qué información tengo que enviar?", "Modelo del equipo, problema, desde cuándo ocurre y cualquier mensaje de error."],
  ["¿La página toma reservas o pagos?", "No por el momento. La consulta y coordinación se realizan directamente por WhatsApp."],
];

export default function FAQPage(){return <main><section className="page-hero"><div className="page-hero-bg"/><div className="shell page-hero-inner"><div><div className="eyebrow"><span/> Preguntas frecuentes</div><h1>Información clara<br/><em>antes de empezar.</em></h1><p>Respuestas rápidas sobre servicios, modalidades y forma de trabajo.</p></div><div className="page-hero-index">03</div></div></section><section className="section shell faq-list">{faqs.map(([q,a],index)=><ScrollReveal key={q} delay={(index%4)*50}><details><summary><span>0{index+1}</span><h2>{q}</h2><i>+</i></summary><p>{a}</p></details></ScrollReveal>)}</section></main>}
