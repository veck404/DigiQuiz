'use client';

import { motion, useTransform } from "framer-motion";
import { resourceVideos } from "@/data/content";
import { useParallax } from "@/hooks/useParallax";

export function VideoResources() {
  const { ref, scrollYProgress } = useParallax<HTMLDivElement>(["start end", "end center"]);
  const accentY = useTransform(scrollYProgress, [0, 1], [26, -24]);
  const gridY = useTransform(scrollYProgress, [0, 1], [16, -12]);

  return (
    <section ref={ref} className="container relative overflow-hidden py-24">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-16 top-0 -z-20 h-80 rounded-full bg-brand-secondary/40 blur-3xl dark:bg-brand-secondary/30"
        style={{ y: accentY }}
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
            Learn more
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-4xl font-serif text-slate-900 sm:text-5xl dark:text-white"
        >
          See DigiQuiz in action
        </motion.h2>
      </motion.div>

      <motion.div className="mt-14 grid gap-6 md:grid-cols-2" style={{ y: gridY }}>
        {resourceVideos.map((resource, index) => (
          <motion.article
            key={resource.title + index}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
            className="group relative overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-xl shadow-black/5 transition hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900 dark:shadow-[0_22px_55px_rgba(2,6,23,0.6)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-accent/10 opacity-0 transition group-hover:opacity-100 dark:from-brand-primary/15 dark:via-transparent dark:to-brand-accent/20" />
            <div className="relative p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary/70">
                {resource.subtitle}
              </span>
              <h3 className="mt-3 text-2xl font-display text-slate-900 dark:text-white">{resource.title}</h3>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{resource.description}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
                Watch demo <span aria-hidden>&gt;</span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
