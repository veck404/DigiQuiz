'use client';

import { motion } from "framer-motion";

export function WaitlistCTA() {
  return (
    <section id="waitlist" className="container pb-32 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[44px] border border-brand-secondary/80 bg-gradient-to-br from-brand-primary/15 via-white to-brand-accent/15 p-12 text-center shadow-[0_35px_85px_rgba(108,74,224,0.2)] transition-colors duration-300 dark:border-brand-secondary/40 dark:from-brand-primary/25 dark:via-slate-950/70 dark:to-brand-accent/10 dark:text-white dark:shadow-[0_38px_95px_rgba(2,6,23,0.7)]"
      >
        <div className="absolute -left-16 top-0 size-40 rounded-full bg-white/40 blur-2xl" />
        <div className="absolute -right-10 bottom-0 size-56 rounded-full bg-brand-primary/20 blur-3xl" />

        <div className="relative space-y-6">
          <span className="section-label mx-auto flex w-max items-center gap-2 bg-white/60 dark:bg-slate-900/60">
            Join 10,000+ early adopters
          </span>
          <h2 className="text-4xl font-serif text-slate-900 sm:text-5xl dark:text-white">
            Start creating quiz experiences in minutes
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base dark:text-slate-300">
            Request access to the private beta and get templates, launch playbooks, and exclusive training
            to turn every campaign into a digital showstopper.
          </p>

          <form className="mx-auto flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              name="email"
              placeholder="you@brand.com"
              className="h-12 flex-1 rounded-full border border-white/60 bg-white/90 px-6 text-sm text-slate-700 shadow-inner outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30 dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-200 dark:focus:border-brand-primary"
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-slate-900 px-6 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-primary dark:bg-brand-primary"
            >
              Join waitlist
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
