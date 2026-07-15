import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://gzo-computacion.vercel.app";
  return ["", "/servicios", "/soporte-remoto", "/soporte-presencial", "/nosotros", "/contacto", "/preguntas-frecuentes"].map((path)=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:path===""?"weekly":"monthly",priority:path===""?1:.8}));
}
