'use client';

import { motion, useTransform } from "framer-motion";
import { testimonials } from "@/data/content";
import { useParallax } from "@/hooks/useParallax";

export function Testimonial() {
  const [primary] = testimonials;
  const { ref, scrollYProgress } = useParallax<HTMLDivElement>(["start end", "end center"]);
  const glowY = useTransform(scrollYProgress, [0, 1], [24, -18]);
  const cardY = useTransform(scrollYProgress, [0, 1], [14, -12]);

  if (!primary) return null;

  return (
    <section ref={ref} className="container relative overflow-hidden py-24">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-10 top-6 -z-10 h-64 rounded-full bg-brand-secondary/50 blur-3xl dark:bg-brand-secondary/30"
        style={{ y: glowY }}
      />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[40px] border border-brand-secondary/70 bg-gradient-to-br from-brand-secondary/70 via-white to-white p-10 shadow-[0_28px_65px_rgba(26,16,51,0.1)] transition-colors duration-300 dark:border-brand-secondary/30 dark:from-slate-950 dark:via-slate-900/70 dark:to-brand-secondary/15 dark:shadow-[0_32px_85px_rgba(2,6,23,0.7)]"
        style={{ y: cardY }}
      >
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="relative grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <span className="section-label mb-4 inline-flex">Success story</span>
            <h2 className="text-3xl font-serif text-slate-900 md:text-4xl dark:text-white">
              Brands everywhere trust DigiQuiz with their showtime moments
            </h2>
          </div>

          <div className="space-y-4 rounded-3xl bg-white/70 p-6 shadow-[0_16px_40px_rgba(26,16,51,0.12)] backdrop-blur dark:bg-slate-900/80 dark:shadow-[0_20px_50px_rgba(2,6,23,0.6)]">
            <p className="text-lg font-medium text-slate-800 dark:text-slate-100">
              &ldquo;{primary.quote}&rdquo;
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-300">
              {primary.name}
              <br />
              {primary.role}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
