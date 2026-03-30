import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center font-bold text-black text-sm">
                RL
              </div>
              <span className="text-xl font-bold">
                Rank<span className="text-green-400">Local</span>
              </span>
            </div>
            <p className="text-[var(--color-secondary)] max-w-md">
              Generate SEO-optimized landing pages for your contracting business.
              Rank on Google. Get more leads. Grow your revenue.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-[var(--color-secondary)]">
              <li>
                <Link href="/#features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/generate" className="hover:text-white transition-colors">
                  Generator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-[var(--color-secondary)]">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--color-border)] text-center text-[var(--color-muted)] text-sm">
          &copy; {new Date().getFullYear()} RankLocal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
