export const site = {
  name: "GZO Computación",
  description:
    "Soluciones informáticas, soporte técnico, armado de PC, redes y asistencia remota.",
  whatsappNumber: "541151798570",
  email: "gzocomputacion@gmail.com",
  instagramUrl: "https://www.instagram.com/gzocomputacion/",
  facebookUrl: "https://www.facebook.com/gzocomputacion/",
  instagramHandle: "@gzocomputacion",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const generalWhatsappLink = whatsappLink(
  "Hola GZO Computación, necesito asesoramiento por un servicio informático."
);
