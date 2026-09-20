import Image from "next/image";

export default function Loading() {
  return (
    <div className="route-loader" role="status" aria-live="polite" aria-label="Cargando GZO Computación">
      <div className="route-loader__mark">
        <Image src="/brand/gzo-logo-fondo-negro.png" alt="GZO Computación" width={240} height={80} priority />
      </div>
      <div className="route-loader__bar" aria-hidden="true"><span /></div>
      <p>Preparando tu solución</p>
    </div>
  );
}
