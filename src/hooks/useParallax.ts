'use client';

import { useRef } from "react";
import { useScroll } from "framer-motion";

type Offset = Parameters<typeof useScroll>[0]["offset"];

/**
 * Provides a ref and scroll progress for crafting parallax-driven transforms.
 * @param offset - Tuple describing when the animation starts/ends relative to the viewport.
 */
export function useParallax<T extends HTMLElement = HTMLElement>(
  offset: Offset = ["start end", "end start"]
) {
  const ref = useRef<T>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset
  });

  return { ref, scrollYProgress };
}

