import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowRightIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>;
}
export function CheckIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="m5 12 4 4L19 6"/></svg>;
}
export function CpuIcon(props: IconProps) {
  return <svg {...base} {...props}><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/><rect x="10" y="10" width="4" height="4" rx=".5"/></svg>;
}
export function LaptopIcon(props: IconProps) {
  return <svg {...base} {...props}><rect x="4" y="4" width="16" height="11" rx="2"/><path d="M2 19h20M9 19h6"/></svg>;
}
export function ShieldIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M12 3 4.5 6v5.4c0 4.7 3.2 8 7.5 9.6 4.3-1.6 7.5-4.9 7.5-9.6V6L12 3Z"/><path d="m9 12 2 2 4-5"/></svg>;
}
export function WifiIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M5 9a10 10 0 0 1 14 0M8.5 12.5a5 5 0 0 1 7 0M11.5 16a1 1 0 0 1 1 0"/><circle cx="12" cy="18" r=".6" fill="currentColor" stroke="none"/></svg>;
}
export function HeadsetIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 1-2ZM20 14h-3v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-1-2ZM17 20c0 1-1 2-3 2"/></svg>;
}
export function WrenchIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M14.7 6.3a5 5 0 0 0-6.9 6.2L3 17.3 6.7 21l4.8-4.8a5 5 0 0 0 6.2-6.9l-3 3-3-3 3-3Z"/></svg>;
}
export function DatabaseIcon(props: IconProps) {
  return <svg {...base} {...props}><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>;
}
export function SparkIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="m12 2 1.3 4.2L17.5 7.5l-4.2 1.3L12 13l-1.3-4.2-4.2-1.3 4.2-1.3L12 2ZM18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14ZM6 15l.7 1.8 1.8.7-1.8.7L6 20l-.7-1.8-1.8-.7 1.8-.7L6 15Z"/></svg>;
}
export function MessageIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M21 11.5a8.4 8.4 0 0 1-9 8.3 9.8 9.8 0 0 1-4.2-1L3 20l1.2-4.2a8.2 8.2 0 1 1 16.8-4.3Z"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"/></svg>;
}
export function MenuIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
}
export function CloseIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="m6 6 12 12M18 6 6 18"/></svg>;
}
export function WhatsappIcon(props: IconProps) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>;
}
