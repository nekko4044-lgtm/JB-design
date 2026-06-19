"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);

  const rx = useSpring(mx, { stiffness: 130, damping: 24, mass: 0.65 });
  const ry = useSpring(my, { stiffness: 130, damping: 24, mass: 0.65 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setMounted(true);

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as Element;
      setHovering(!!el.closest("a, button, [role='button'], input, textarea, select, label"));
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, [mx, my]);

  if (!mounted) return null;

  return (
    <>
      {/* Dot — mix-blend-difference makes it white on dark, dark on light */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ x: mx, y: my, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: hovering ? 10 : 8,
            height: hovering ? 10 : 8,
          }}
          transition={{ type: "spring", stiffness: 600, damping: 40 }}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference rounded-full border border-white"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 52 : 34,
          height: hovering ? 52 : 34,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 28 }}
      />
    </>
  );
}
