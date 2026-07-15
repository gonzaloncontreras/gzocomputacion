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
  return <svg viewBox="0 0 32 32" fill="currentColor" {...props}><path d="M16.04 3C9.39 3 4 8.34 4 14.93c0 2.1.55 4.15 1.6 5.96L4 29l8.32-1.54a12.2 12.2 0 0 0 5.72 1.42C24.69 28.88 30 23.54 30 16.95S22.69 3 16.04 3Zm0 23.86c-1.8 0-3.55-.48-5.08-1.4l-.37-.22-4.93.91.95-4.78-.25-.39a10.03 10.03 0 0 1-1.54-5.35c0-5.47 4.54-9.92 10.12-9.92s10.12 4.45 10.12 9.92-4.54 9.92-10.12 9.92Zm5.56-7.42c-.3-.15-1.8-.88-2.08-.98-.28-.1-.49-.15-.7.15-.2.3-.8.98-.98 1.18-.18.2-.36.22-.66.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.47.13-.62.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.7-1.67-.96-2.29-.25-.6-.51-.52-.7-.53h-.6c-.2 0-.52.07-.8.37-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.2 5.14 4.49.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.8-.73 2.05-1.43.25-.7.25-1.31.18-1.43-.08-.13-.28-.2-.58-.35Z"/></svg>;
}
