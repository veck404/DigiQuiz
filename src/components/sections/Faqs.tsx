'use client';

import { useState } from "react";
import { motion, AnimatePresence, useTransform } from "framer-motion";
import { faqs } from "@/data/content";
import { useParallax } from "@/hooks/useParallax";

export function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, scrollYProgress } = useParallax<HTMLDivElement>(["start end", "end center"]);
  const floatY = useTransform(scrollYProgress, [0, 1], [22, -18]);

  return (
    <section
      id="faqs"
      ref={ref}
      className="relative overflow-hidden bg-slate-50 py-24 transition-colors duration-300 dark:bg-slate-950"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-6 -z-10 h-72 w-72 rounded-full bg-brand-primary/15 blur-3xl dark:bg-brand-primary/30"
        style={{ y: floatY }}
      />
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="section-label mx-auto"
          >
            <span className="size-2 rounded-full bg-brand-primary" />
            <span className="uppercase tracking-[0.2em] text-xs text-slate-700 dark:text-slate-300">FAQs</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-serif text-slate-900 sm:text-5xl dark:text-white"
          >
            Answers for curious creators
          </motion.h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition-transform transition-colors duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg dark:border-white/10 dark:bg-slate-900 dark:hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-slate-800 dark:text-slate-100">{faq.question}</span>
                  <span className="text-sm font-semibold text-brand-primary">
                    {isOpen ? "Close" : "Open"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{faq.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
