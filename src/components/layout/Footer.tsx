import Link from "next/link";

const footerLinks = [
  {
    heading: "Product",
    items: [
      { label: "Features", href: "#features" },
      { label: "Templates", href: "#templates" },
      { label: "Pricing", href: "#waitlist" }
    ]
  },
  {
    heading: "Company",
    items: [
      { label: "About", href: "#use-cases" },
      { label: "Contact", href: "mailto:hello@digiquiz.fun" },
      { label: "Careers", href: "#" }
    ]
  },
  {
    heading: "Resources",
    items: [
      { label: "Blog", href: "#" },
      { label: "FAQ", href: "#faqs" },
      { label: "Support", href: "#" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-12 text-slate-100">
      <div className="container grid gap-12 md:grid-cols-[2fr_3fr]">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-content-center rounded-2xl bg-white/10">
              <span className="text-lg font-bold text-white">DQ</span>
            </div>
            <span className="font-display text-xl font-semibold tracking-tight text-white">
              DigiQuiz
            </span>
          </div>
          <p className="max-w-sm text-sm text-slate-400">
            Create unforgettable quiz-led experiences that electrify audiences, strengthen communities,
            and accelerate revenue.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-slate-500">
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
            <Link href="mailto:hello@digiquiz.fun" className="hover:text-white">
              hello@digiquiz.fun
            </Link>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {footerLinks.map((group) => (
            <div key={group.heading} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                {group.heading}
              </h3>
              <ul className="space-y-3 text-sm text-slate-400">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} DigiQuiz. All rights reserved.</span>
        <div className="flex gap-3 text-[0.75rem] uppercase tracking-[0.3em] text-slate-600">
          <span>DIGI</span>
          <span>QUIZ</span>
          <span>FUN</span>
        </div>
      </div>
    </footer>
  );
}
