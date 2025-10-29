'use client';

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import gsap from "gsap";
import studentAnimation from "@/data/animations/student.json";

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
          <div className="absolute -right-20 top-16 hidden h-64 w-64 rounded-full bg-brand-primary/15 blur-3xl lg:block dark:bg-brand-primary/30" />
          <div className="relative w-full">
            <Lottie
              animationData={studentAnimation}
              loop
              autoplay
              className="w-full h-auto"
              style={{ maxHeight: "640px" }}
              aria-label="Animated illustration of a student immersed in learning"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent dark:from-slate-950/90 dark:via-slate-950/40"
              style={{ height: "10%" }}
            />
            <div
              className="absolute left-1/2 bottom-[4%] w-[86%] max-w-lg -translate-x-1/2 overflow-hidden rounded-2xl bg-white/85 px-5 py-3 text-sm text-slate-700 shadow-lg dark:bg-slate-950/85 dark:text-slate-200"
              style={{ maxHeight: "10%" }}
            >
              <p className="font-semibold text-slate-900 dark:text-white">Guided learning journeys</p>
              <p className="text-xs text-slate-500 dark:text-slate-300">
                Walk learners through story-driven quizzes, gentle progress checks, and instant feedback.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
