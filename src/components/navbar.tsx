"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center font-bold text-black text-sm">
              RL
            </div>
            <span className="text-xl font-bold">
              Rank<span className="text-green-400">Local</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#features"
              className="text-[var(--color-secondary)] hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-[var(--color-secondary)] hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="text-[var(--color-secondary)] hover:text-white transition-colors"
            >
              Log in
            </Link>
            <Link href="/signup" className="btn-primary text-sm">
              Get Started Free
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href="/#features"
              className="block text-[var(--color-secondary)] hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block text-[var(--color-secondary)] hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="block text-[var(--color-secondary)] hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="block btn-primary text-sm text-center"
              onClick={() => setMobileOpen(false)}
            >
              Get Started Free
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
