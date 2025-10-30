'use client';

import { useRef } from "react";
import { useScroll, useSpring, type MotionValue } from "framer-motion";

type Offset = Parameters<typeof useScroll>[0]["offset"];
type SpringOptions = NonNullable<Parameters<typeof useSpring>[1]>;

const DEFAULT_SPRING: SpringOptions = {
  stiffness: 90,
  damping: 22,
  mass: 0.2,
  restDelta: 0.501
};

/**
 * Provides a ref and smoothed scroll progress for crafting parallax-driven transforms.
 * @param offset - Tuple describing when the animation starts/ends relative to the viewport.
 * @param springOptions - Optional spring configuration for smoothing the progress.
 */
export function useParallax<T extends HTMLElement = HTMLElement>(
  offset: Offset = ["start end", "end start"],
  springOptions?: SpringOptions
) {
  const ref = useRef<T>(null);
  const { scrollYProgress: rawScrollYProgress } = useScroll({
    target: ref,
    offset
  });

  const scrollYProgress: MotionValue<number> = useSpring(rawScrollYProgress, {
    ...DEFAULT_SPRING,
    ...springOptions
  });

  return { ref, scrollYProgress, rawScrollYProgress };
}
