'use client';

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import gsap from "gsap";
import bookAnimation from "@/data/animations/education-book.json";
import lightbulbAnimation from "@/data/animations/education-lightbulb.json";
import certificateAnimation from "@/data/animations/education-certificate.json";

const heroHighlights = [
  { label: "AI-written questions", value: "x10 faster" },
  { label: "Integrated lead capture", value: "CRM-ready" },
  { label: "Omni-channel publishing", value: "1-click deploy" }
];

export function Hero() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!cardsRef.current.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="hero-gradient relative isolate overflow-hidden pb-24 pt-36 sm:pt-40 lg:pt-48"
    >
      <div className="absolute inset-x-0 top-16 -z-10 h-[480px] bg-gradient-to-b from-brand-primary/15 via-white/0 to-transparent blur-3xl" />

      <div className="container relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8 text-slate-900 dark:text-slate-100">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-label w-fit"
          >
            <span className="size-2 rounded-full bg-brand-primary" />
            <span className="uppercase tracking-[0.2em] text-xs text-slate-700">Audience engagement</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-display leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            The playful way to{" "}
            <span className="text-gradient">engage, educate, and convert</span> every audience.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-xl text-lg text-slate-600 dark:text-slate-300"
          >
            Build branded quiz adventures in minutes. Spark conversations, gather zero-party data, and
            turn excitement into measurable growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#waitlist"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(108,74,224,0.3)] transition hover:bg-brand-primary"
            >
              <span className="relative z-10">Start creating experiences</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-primary via-brand-primary/40 to-brand-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            <a
              href="#features"
              className="text-sm font-semibold text-slate-600 underline-offset-8 hover:underline dark:text-slate-300"
            >
              See how DigiQuiz works
            </a>
          </motion.div>

          <div className="grid gap-4 pt-2 sm:grid-cols-3">
            {heroHighlights.map((highlight, index) => (
              <div
                key={highlight.label}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="glass-panel relative overflow-hidden rounded-2xl border border-white/40 p-5 shadow-lg"
              >
                <div className="flex flex-col gap-1 text-slate-950 dark:text-slate-100">
                  <span className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    {highlight.label}
                  </span>
                  <span className="text-base font-semibold text-slate-800 dark:text-slate-100">
                    {highlight.value}
                  </span>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-primary/0 via-brand-primary/30 to-brand-primary/0" />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute -right-12 top-6 hidden h-48 w-48 rounded-full bg-brand-primary/10 blur-3xl lg:block dark:bg-brand-primary/30" />
          <div className="relative w-full max-w-[460px]">
            <div className="mask-gradient glass-panel flex flex-col gap-6 rounded-[3rem] bg-white/60 p-8 shadow-[0_24px_55px_rgba(26,16,51,0.15)] backdrop-blur-lg dark:bg-slate-900/70 dark:shadow-[0_30px_70px_rgba(2,6,23,0.7)]">
              <div className="overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/70 p-6 shadow-lg dark:border-white/10 dark:bg-slate-950/70">
                <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary/90 dark:text-brand-primary/70">
                  <span className="size-1.5 rounded-full bg-brand-primary" aria-hidden="true" />
                  <span>Ideas ignite action</span>
                </div>
                <Lottie
                  animationData={lightbulbAnimation}
                  loop
                  autoplay
                  className="h-60 w-full"
                  aria-label="Animated illustration of a glowing idea bulb"
                />
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  Spotlight the key takeaways of every lesson with interactive storytelling.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="glass-panel flex items-center gap-4 rounded-3xl border border-white/40 bg-white/80 p-5 shadow-lg dark:border-white/10 dark:bg-slate-950/70">
                  <div className="h-20 w-20 overflow-hidden rounded-3xl border border-brand-secondary/40 bg-brand-secondary/10 p-4 dark:border-brand-secondary/30 dark:bg-brand-secondary/20">
                    <Lottie
                      animationData={bookAnimation}
                      loop
                      autoplay
                      className="h-full w-full"
                      aria-label="Animated book opening"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                      Personalized study guides
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Deliver tailored practice paths in every quiz journey.
                    </p>
                  </div>
                </div>

                <div className="glass-panel flex items-center gap-4 rounded-3xl border border-white/40 bg-white/80 p-5 shadow-lg dark:border-white/10 dark:bg-slate-950/70">
                  <div className="h-20 w-20 overflow-hidden rounded-3xl border border-brand-accent/30 bg-brand-accent/10 p-4 dark:border-brand-accent/20 dark:bg-brand-accent/30">
                    <Lottie
                      animationData={certificateAnimation}
                      loop
                      autoplay
                      className="h-full w-full"
                      aria-label="Animated certificate badge"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                      Celebrate mastery
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Award certificates and badges the moment learners level up.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
