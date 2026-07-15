import { WhatsappIcon } from "@/components/icons";
import { generalWhatsappLink } from "@/lib/site";

export function WhatsappFloat() {
  return (
    <a
      href={generalWhatsappLink}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Consultar por WhatsApp"
    >
      <span className="whatsapp-ripple" />
      <WhatsappIcon />
      <span>WhatsApp</span>
    </a>
  );
}
