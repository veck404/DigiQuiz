'use client';

import { motion, useTransform } from "framer-motion";
import { templateCollections } from "@/data/content";
import { useParallax } from "@/hooks/useParallax";

export function TemplatesShowcase() {
  const { ref, scrollYProgress } = useParallax<HTMLDivElement>(["start end", "end center"]);
  const bubblesY = useTransform(scrollYProgress, [0, 1], [30, -22]);
  const gridY = useTransform(scrollYProgress, [0, 1], [18, -14]);

  return (
    <section id="templates" ref={ref} className="container relative overflow-hidden py-24">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 right-0 h-80 w-80 rounded-full bg-brand-accent/20 blur-3xl dark:bg-brand-accent/30"
        style={{ y: bubblesY }}
      />
      <motion.div className="mx-auto max-w-2xl text-center" style={{ y: gridY }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="section-label mx-auto"
        >
          <span className="size-2 rounded-full bg-brand-primary" />
          <span className="uppercase tracking-[0.2em] text-xs text-slate-700 dark:text-slate-300">
            Template library
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-4xl font-serif text-slate-900 sm:text-5xl dark:text-white"
        >
          Launch-ready layouts for every audience
        </motion.h2>
      </motion.div>

      <motion.div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3" style={{ y: gridY }}>
        {templateCollections.map((template, index) => (
          <motion.div
            key={template.label}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-[28px] border border-slate-100 bg-white p-6 shadow-[0_18px_45px_rgba(26,16,51,0.08)] transition-transform transition-colors duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(26,16,51,0.12)] dark:border-white/10 dark:bg-slate-900 dark:shadow-[0_22px_55px_rgba(2,6,23,0.6)] dark:hover:shadow-[0_28px_75px_rgba(2,6,23,0.75)]"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-secondary/60 via-white to-white opacity-0 transition group-hover:opacity-100 dark:from-slate-950 dark:via-slate-900/80 dark:to-brand-secondary/20" />
            <div className="flex flex-col gap-3">
              <span className="inline-flex w-max items-center gap-2 rounded-full bg-brand-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary dark:bg-brand-secondary/20 dark:text-brand-primary/90">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-display text-slate-900 dark:text-white">{template.label}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{template.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
