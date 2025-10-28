'use client';

import { motion } from "framer-motion";
import { featureCards, featurePills } from "@/data/content";

export function FeaturesShowcase() {
  return (
    <section id="features" className="container py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-label mx-auto"
        >
          <span className="size-2 rounded-full bg-brand-primary" />
          <span className="uppercase tracking-[0.2em] text-xs text-slate-700 dark:text-slate-300">
            Built for momentum
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-4xl font-serif text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
        >
          Quiz experiences engineered to move people
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-lg text-slate-600 dark:text-slate-300"
        >
          Design cinematic journeys, ask smarter questions, and capture the insights that power your
          next best idea.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {featurePills.map((pill) => (
            <span
              key={pill}
              className="rounded-full bg-brand-secondary px-4 py-1 text-sm font-medium text-brand-primary dark:bg-brand-secondary/20 dark:text-brand-primary/90"
            >
              {pill}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {featureCards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-[30px] border border-slate-100 bg-white p-8 shadow-[0_18px_45px_rgba(26,16,51,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(26,16,51,0.12)] dark:border-white/10 dark:bg-slate-900 dark:shadow-[0_22px_55px_rgba(2,6,23,0.6)] dark:hover:shadow-[0_28px_75px_rgba(2,6,23,0.75)]"
          >
            <div className="absolute right-[-20%] top-[-20%] size-40 rounded-full bg-brand-primary/10 blur-2xl transition group-hover:scale-125" />
            <div className="relative flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary/60">
                {card.accent}
              </span>
              <h3 className="text-2xl font-display text-slate-900 dark:text-white">{card.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{card.copy}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
