import Image from "next/image";

export function BrandLogo({priority = false}: {priority?: boolean}) {
  return <span className="brand-lockup"><Image src="/brand/gzo-symbol-orange.svg" alt="" width={44} height={44} unoptimized priority={priority}/><span className="brand-wordmark">gzo<span className="brand-name">computacion</span></span></span>;
}
