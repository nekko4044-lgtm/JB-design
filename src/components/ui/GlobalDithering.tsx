"use client";

import { useState, useEffect, Suspense, lazy } from "react";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

export default function GlobalDithering() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibility = () => setIsVisible(!document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isVisible && (
        <Suspense fallback={null}>
          <div className="absolute inset-0 opacity-45">
            <Dithering
              colorBack="#00000000"
              colorFront="#CEC0B2"
              shape="warp"
              type="2x2"
              speed={isHovered ? 0.45 : 0.12}
              className="size-full"
              minPixelRatio={1}
            />
          </div>
        </Suspense>
      )}
    </div>
  );
}
