// Indicates that this component should be rendered on the client-side.
'use client';

// Import necessary hooks and libraries.
import { useEffect, useRef } from "react";
import { motion, useTransform } from "framer-motion"; // For animations.
import Lottie from "lottie-react"; // For rendering Lottie animations.
import gsap from "gsap"; // For advanced animations.
import studentAnimation from "@/data/animations/student.json"; // Lottie animation data.
import { useParallax } from "@/hooks/useParallax";

// Data for the hero section's highlight cards.
const heroHighlights = [
  { label: "AI-written questions", value: "x10 faster" },
  { label: "Integrated lead capture", value: "CRM-ready" },
  { label: "Omni-channel publishing", value: "1-click deploy" }
];

/**
 * The Hero component is the main introductory section of the homepage.
 * It features a headline, a call-to-action, and an animated illustration.
 */
export function Hero() {
  // Ref to store the DOM elements of the highlight cards for animation.
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const { ref: sectionRef, scrollYProgress } = useParallax<HTMLDivElement>([
    "start start",
    "end center"
  ]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [-160, 120]);
  const glowY = useTransform(scrollYProgress, [0, 1], [60, -40]);
  const highlightsY = useTransform(scrollYProgress, [0, 1], [40, -20]);
  const illustrationY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const floatingNoteY = useTransform(scrollYProgress, [0, 1], [70, -50]);

  // Animate the highlight cards into view on component mount.
  useEffect(() => {
    // Don't run the animation if the refs haven't been populated yet.
    if (!cardsRef.current.length) return;

    // Use GSAP for a staggered fade-in and slide-up animation.
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current.filter(Boolean), // Ensure no null elements are in the array.
        { y: 32, opacity: 0 }, // Starting position and opacity.
        {
          y: 0, // End position.
          opacity: 1, // End opacity.
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12 // Delay between each card's animation.
        }
      );
    });

    // Cleanup function to revert the animations when the component unmounts.
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="hero-gradient relative isolate overflow-hidden pb-24 pt-36 sm:pt-40 lg:pt-48"
    >
      {/* Background gradient that softly blends the text area into the illustration side */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-primary/18 via-brand-primary/12 to-transparent blur-3xl dark:from-brand-primary/28 dark:via-brand-primary/14 dark:to-transparent"
        style={{ y: backgroundY }}
      />
      <motion.div
        aria-hidden
        className="absolute -left-16 top-10 -z-10 size-64 rounded-full bg-brand-secondary/60 blur-3xl dark:bg-brand-secondary/40"
        style={{ y: glowY }}
        transition={{ type: "spring", stiffness: 50 }}
      />

      <div className="container relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Left column: Text content */}
        <div className="space-y-8 text-slate-900 dark:text-slate-100">
          {/* Section label with a subtle animation */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-label w-fit"
          >
            <span className="size-2 rounded-full bg-brand-primary" />
            <span className="uppercase tracking-[0.2em] text-xs text-slate-700">Audience engagement</span>
          </motion.div>

          {/* Main headline with animation */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-display leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            The playful way to{" "}
            <span className="text-gradient">engage, educate, and convert</span> every audience.
          </motion.h1>

          {/* Sub-headline/description with animation */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-xl text-lg text-slate-600 dark:text-slate-300"
          >
            Build branded quiz adventures in minutes. Spark conversations, gather zero-party data, and
            turn excitement into measurable growth.
          </motion.p>

          {/* Call-to-action buttons with animation */}
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

          {/* Highlight cards section */}
          <motion.div className="grid gap-4 pt-2 sm:grid-cols-3" style={{ y: highlightsY }}>
            {heroHighlights.map((highlight, index) => (
              <div
                key={highlight.label}
                // Assign a ref to each card for the GSAP animation.
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="glass-panel relative overflow-hidden rounded-2xl border border-white/40 p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:border-white/60 hover:shadow-xl dark:hover:border-white/20"
              >
                <div className="flex flex-col gap-1 text-slate-950 dark:text-slate-100">
                  <span className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    {highlight.label}
                  </span>
                  <span className="text-base font-semibold text-slate-800 dark:text-slate-100">
                    {highlight.value}
                  </span>
                </div>
                {/* Decorative gradient line at the bottom of the card */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-primary/0 via-brand-primary/30 to-brand-primary/0" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column: Animated illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="relative flex items-center justify-center"
          style={{ y: illustrationY }}
        >
          {/* Decorative background blur element */}
          <div className="absolute -right-20 top-16 hidden h-64 w-64 rounded-full bg-brand-primary/15 blur-3xl lg:block dark:bg-brand-primary/30" />
          <div className="relative w-full">
            {/* Lottie animation component */}
            <Lottie
              animationData={studentAnimation}
              loop
              autoplay
              className="w-full h-auto"
              style={{ maxHeight: "740px" }}
              aria-label="Animated illustration of a student immersed in learning"
            />
            {/* Gradient overlay to fade the bottom of the animation */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent dark:from-slate-950/40 dark:via-slate-950/40"
              style={{ height: "10%" }}
            />
            {/* Floating card with additional information */}
            <motion.div
              className="absolute left-1/2 w-[86%] max-w-lg -translate-x-1/2 overflow-hidden rounded-2xl bg-white/40 px-5 py-3 text-sm text-slate-700 shadow-lg backdrop-blur-sm dark:bg-slate-950/40 dark:text-slate-200"
              style={{ bottom: "-12%", maxHeight: "15%" }}
              animate={{ y: [-8, 4, -8] }}
              transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
            >
              <p className="font-semibold text-slate-900 dark:text-white">Guided learning journeys</p>
              <p className="text-xs text-slate-500 dark:text-slate-300">
                Walk learners through story-driven quizzes, gentle progress checks, and instant feedback.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.span
        aria-hidden
        className="pointer-events-none absolute bottom-16 right-[12%] -z-10 hidden h-28 w-28 rotate-12 rounded-3xl border border-white/60 bg-white/50 backdrop-blur md:block dark:border-white/10 dark:bg-slate-900/50"
        style={{ y: floatingNoteY }}
      />
    </section>
  );
}
