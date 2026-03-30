import Link from "next/link";
import { TRADES, PRICING_PLANS } from "@/lib/types";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 text-sm text-green-400 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Now generating pages for 10+ trades
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Rank #1 on Google
              <br />
              <span className="text-gradient">for your city</span>
            </h1>
            <p className="mt-6 text-xl text-[var(--color-secondary)] max-w-2xl mx-auto">
              Generate SEO-optimized landing pages for your contracting business in
              60 seconds. No coding. No agencies. Just leads.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup" className="btn-primary text-lg px-8 py-4">
                Generate Your Page Free
              </Link>
              <Link href="#how-it-works" className="btn-secondary text-lg px-8 py-4">
                See How It Works
              </Link>
            </div>
            <p className="mt-4 text-sm text-[var(--color-muted)]">
              No credit card required. Your first page is free.
            </p>
          </div>

          {/* Preview mockup */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="card p-0 overflow-hidden shadow-2xl shadow-green-500/10">
              <div className="bg-[#111] px-4 py-3 flex items-center gap-2 border-b border-[var(--color-border)]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 text-center">
                  <div className="bg-[var(--color-input)] rounded px-3 py-1 text-xs text-[var(--color-muted)] inline-block">
                    joes-plumbing-austin.ranklocal.com
                  </div>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-b from-[#0d1117] to-[#111]">
                <div className="space-y-4">
                  <div className="text-xs text-green-400 font-mono">
                    &lt;title&gt;Joe&apos;s Plumbing - #1 Rated Plumber in Austin, TX&lt;/title&gt;
                  </div>
                  <div className="text-xs text-green-400/60 font-mono">
                    &lt;meta name=&quot;description&quot; content=&quot;Licensed Austin plumber...&quot; /&gt;
                  </div>
                  <div className="h-px bg-[var(--color-border)]" />
                  <h2 className="text-2xl font-bold">
                    Joe&apos;s Plumbing — Austin&apos;s Most Trusted Plumber
                  </h2>
                  <p className="text-[var(--color-secondary)]">
                    Licensed & insured plumbing services in Austin, TX. Emergency
                    repairs, water heater installation, drain cleaning...
                  </p>
                  <div className="flex gap-3">
                    <span className="bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full">
                      Schema Markup
                    </span>
                    <span className="bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full">
                      Local SEO
                    </span>
                    <span className="bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full">
                      Mobile Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trades */}
      <section className="py-20 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[var(--color-muted)] text-sm uppercase tracking-wider mb-8">
            Built for every trade
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {TRADES.map((trade) => (
              <div
                key={trade.value}
                className="card flex items-center gap-3 px-5 py-3"
              >
                <span className="text-2xl">{trade.icon}</span>
                <span className="font-medium">{trade.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Your page, live in <span className="text-gradient">3 steps</span>
            </h2>
            <p className="mt-4 text-[var(--color-secondary)] max-w-xl mx-auto">
              No developers needed. No waiting weeks. Generate and publish your
              SEO-optimized page today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Pick Your Trade",
                desc: "Choose from 10+ contractor categories — plumbing, HVAC, electrical, roofing, and more.",
              },
              {
                step: "02",
                title: "Enter Your City",
                desc: "Tell us your service area and business details. We handle the local keyword research.",
              },
              {
                step: "03",
                title: "Go Live",
                desc: "Get a fully optimized landing page with schema markup, meta tags, and click-to-call — instantly.",
              },
            ].map((item) => (
              <div key={item.step} className="card relative group">
                <div className="text-5xl font-bold text-green-500/10 group-hover:text-green-500/20 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                <p className="text-[var(--color-secondary)] mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Everything you need to <span className="text-gradient">rank locally</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
                title: "Local SEO Keywords",
                desc: "Auto-generated keyword targeting for your trade + city combination.",
              },
              {
                icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
                title: "Schema Markup",
                desc: "LocalBusiness JSON-LD schema that tells Google exactly what you do and where.",
              },
              {
                icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3",
                title: "Mobile Responsive",
                desc: "Every page looks perfect on phones — where 70% of local searches happen.",
              },
              {
                icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
                title: "Click-to-Call",
                desc: "One-tap calling on mobile. Turn visitors into phone calls instantly.",
              },
              {
                icon: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z",
                title: "Google Maps Embed",
                desc: "Show your service area right on the page. Build local trust instantly.",
              },
              {
                icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
                title: "Reviews Section",
                desc: "Built-in review showcase section to display your best customer testimonials.",
              },
            ].map((feature) => (
              <div key={feature.title} className="card group hover:border-green-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-[var(--color-secondary)] mt-2 text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Simple <span className="text-gradient">pricing</span>
            </h2>
            <p className="mt-4 text-[var(--color-secondary)]">
              Start free. Scale when you&apos;re ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`card relative ${
                  plan.popular
                    ? "border-green-500 shadow-lg shadow-green-500/10"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-[var(--color-muted)]">/mo</span>
                </div>
                <p className="text-sm text-[var(--color-secondary)] mt-1">
                  {plan.pages === -1
                    ? "Unlimited pages"
                    : `${plan.pages} page${plan.pages > 1 ? "s" : ""}`}
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-[var(--color-secondary)]"
                    >
                      <svg
                        className="w-4 h-4 text-green-400 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={`block text-center mt-8 ${
                    plan.popular ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-[var(--color-border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to <span className="text-gradient">dominate local search</span>?
          </h2>
          <p className="mt-4 text-xl text-[var(--color-secondary)]">
            Join hundreds of contractors already ranking on page 1.
          </p>
          <div className="mt-8">
            <Link href="/signup" className="btn-primary text-lg px-10 py-4">
              Generate Your Page in 60 Seconds
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
