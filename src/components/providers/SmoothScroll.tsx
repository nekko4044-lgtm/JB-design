"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisInstance = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  // Intercept clicks on /#hash links — smooth scroll if already on /, navigate otherwise
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || !href.startsWith("/#")) return;

      const hash = href.slice(1); // e.g. "#contact"
      const section = document.querySelector(hash);

      if (pathname === "/" && section && lenisInstance) {
        e.preventDefault();
        lenisInstance.scrollTo(section as HTMLElement, { duration: 1.4 });
      }
      // If not on main page — let the browser navigate normally to /#hash
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  // After navigating to /#hash from another page — scroll to section smoothly
  useEffect(() => {
    if (!window.location.hash) {
      if (lenisInstance) lenisInstance.scrollTo(0, { immediate: true });
      else window.scrollTo(0, 0);
      return;
    }

    // Small delay to let the page render before scrolling
    const id = setTimeout(() => {
      const section = document.querySelector(window.location.hash);
      if (section && lenisInstance) {
        lenisInstance.scrollTo(section as HTMLElement, { duration: 1.4 });
      }
    }, 100);

    return () => clearTimeout(id);
  }, [pathname]);

  return <>{children}</>;
}
