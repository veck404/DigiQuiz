import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans"
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: "DigiQuiz — Interactive Engagement Platform",
  description:
    "Create immersive, branded quiz experiences that capture attention, delight audiences, and convert curiosity into qualified leads."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${sans.variable} ${display.variable} ${serif.variable} font-sans`}>
        <ThemeProvider>
          <div className="bg-grid-soft/[0.35] relative min-h-screen overflow-x-hidden bg-white transition-colors duration-300 dark:bg-slate-950">
            <div className="absolute inset-0 -z-10 bg-gradient-radial opacity-70 dark:opacity-40" />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
