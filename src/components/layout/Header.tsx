'use client';

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Templates", href: "#templates" },
  { label: "Use cases", href: "#use-cases" },
  { label: "FAQs", href: "#faqs" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { isDark, toggleTheme, mounted } = useTheme();

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/80"
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="#hero" className="flex items-center gap-3">
          <div className="gradient-ring grid h-11 w-11 place-content-center rounded-2xl bg-white shadow-lg dark:bg-slate-900">
            <span className="text-xl font-bold text-brand-primary">DQ</span>
          </div>
          <span className="font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
            DigiQuiz
          </span>
        </Link>

        <nav className="hidden items-center gap-10 text-sm font-medium text-slate-600 md:flex dark:text-slate-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-brand-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 transition hover:border-brand-primary/60 hover:text-brand-primary dark:border-white/10 dark:text-slate-200"
          >
            {mounted ? (
              isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
            ) : (
              <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" />
            )}
            <span className="sr-only">{isDark ? "Light mode" : "Dark mode"}</span>
          </button>
          <Link
            href="#waitlist"
            className="rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(108,74,224,0.25)] transition hover:bg-brand-primary dark:bg-brand-primary"
          >
            Join waitlist
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 transition hover:border-brand-primary/60 hover:text-brand-primary md:hidden dark:border-white/10 dark:text-slate-200"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <AnimatePresence>
          {open ? (
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-4 top-[calc(100%+0.75rem)] overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl md:hidden dark:border-white/10 dark:bg-slate-900"
            >
              <div className="flex flex-col divide-y divide-slate-100 dark:divide-white/10">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-6 py-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    toggleTheme();
                  }}
                  className="flex items-center justify-between px-6 py-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <span>{isDark ? "Switch to light mode" : "Switch to dark mode"}</span>
                  {mounted ? (
                    isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" />
                  )}
                </button>
                <Link
                  href="#waitlist"
                  onClick={() => setOpen(false)}
                  className="px-6 py-4 text-sm font-semibold text-brand-primary"
                >
                  Join waitlist
                </Link>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
