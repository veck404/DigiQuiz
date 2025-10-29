'use client';

import { motion } from "framer-motion";
import { useCaseTracks } from "@/data/content";

export function UseCases() {
  return (
    <section id="use-cases" className="bg-slate-50 py-24 transition-colors duration-300 dark:bg-slate-950">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="section-label mx-auto"
          >
            <span className="size-2 rounded-full bg-brand-primary" />
            <span className="uppercase tracking-[0.2em] text-xs text-slate-700 dark:text-slate-300">
              Trusted across teams
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-serif text-slate-900 sm:text-5xl dark:text-white"
          >
            One platform, limitless use-cases
          </motion.h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {useCaseTracks.map((track, index) => (
            <motion.article
              key={track.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-[32px] border border-slate-200/60 bg-white p-8 shadow-xl shadow-slate-200/40 transition-transform transition-colors duration-300 hover:-translate-y-1 hover:shadow-[0_26px_65px_rgba(26,16,51,0.12)] dark:border-white/10 dark:bg-slate-900 dark:shadow-[0_22px_55px_rgba(2,6,23,0.6)] dark:hover:shadow-[0_28px_75px_rgba(2,6,23,0.75)]"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-brand-secondary/30 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-slate-950 dark:via-slate-900/80 dark:to-brand-secondary/20" />
              <div className="flex flex-col gap-5">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  {track.eyebrow}
                </span>
                <h3 className="text-2xl font-display text-slate-900 dark:text-white">{track.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{track.description}</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {track.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1 inline-block size-2 rounded-full bg-brand-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className="inline-flex w-max items-center gap-2 text-sm font-semibold text-brand-primary transition hover:text-brand-primary/80 dark:text-brand-primary/90"
                >
                  {track.cta} -&gt;
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
