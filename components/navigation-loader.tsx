"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const minimumVisibleTime = 320;

export function NavigationLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const shownAt = useRef(0);

  useEffect(() => {
    const showForNavigation = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.target === "_blank" || link.hasAttribute("download")) return;

      const destination = new URL(link.href, window.location.href);
      const current = new URL(window.location.href);
      const isInternal = destination.origin === current.origin;
      const onlyHashChanged = destination.pathname === current.pathname && destination.search === current.search;

      if (!isInternal || onlyHashChanged) return;

      shownAt.current = performance.now();
      setVisible(true);
    };

    document.addEventListener("click", showForNavigation, true);
    return () => document.removeEventListener("click", showForNavigation, true);
  }, []);

  useEffect(() => {
    if (!shownAt.current) return;
    const remaining = Math.max(0, minimumVisibleTime - (performance.now() - shownAt.current));
    const timeout = window.setTimeout(() => {
      shownAt.current = 0;
      setVisible(false);
    }, remaining);
    return () => window.clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className={`navigation-loader${visible ? " is-visible" : ""}`} aria-hidden={!visible}>
      <div className="navigation-loader__mark">
        <Image src="/brand/gzo-logo-fondo-negro.png" alt="" width={240} height={80} priority />
      </div>
      <div className="navigation-loader__bar"><span /></div>
      <span>Preparando tu solución</span>
    </div>
  );
}
