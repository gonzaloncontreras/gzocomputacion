import Link from "next/link";
export default function NotFound(){return <main className="not-found"><div><span>404</span><h1>Esta página no está disponible.</h1><p>Volvé al inicio o revisá nuestros servicios.</p><Link href="/" className="button button-primary">Volver al inicio</Link></div></main>}
