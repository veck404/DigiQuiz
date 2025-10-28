'use client';

import { motion } from "framer-motion";
import { audienceHighlights } from "@/data/content";

export function AudienceGrid() {
  return (
    <section className="container relative z-10 -mt-8 rounded-[3rem] border border-slate-100 bg-white/90 p-10 shadow-[0_25px_65px_rgba(26,16,51,0.08)] backdrop-blur-lg dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_35px_95px_rgba(2,6,23,0.6)]">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {audienceHighlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.05, duration: 0.6, ease: "easeOut" }}
            className="shiny-border flex flex-col gap-3 rounded-3xl bg-white/70 p-6 transition-colors duration-300 dark:bg-slate-900/80"
          >
            <div className="flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-secondary text-sm font-semibold text-brand-primary">
                {index + 1}
              </span>
              <h3 className="font-display text-base text-slate-900 dark:text-white">{item.title}</h3>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
