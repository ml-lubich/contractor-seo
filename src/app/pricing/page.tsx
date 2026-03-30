import Link from "next/link";
import { Metadata } from "next";
import { PRICING_PLANS } from "@/lib/types";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for contractor SEO landing pages. Start free, scale when ready.",
};

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Simple, transparent <span className="text-gradient">pricing</span>
        </h1>
        <p className="mt-4 text-xl text-[var(--color-secondary)] max-w-2xl mx-auto">
          No contracts. No hidden fees. Cancel anytime. Start with a free page
          and upgrade when you&apos;re ready to scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`card relative ${
              plan.popular
                ? "border-green-500 shadow-xl shadow-green-500/10 scale-105"
                : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <div className="mt-4">
              <span className="text-5xl font-bold">${plan.price}</span>
              <span className="text-[var(--color-muted)]">/mo</span>
            </div>
            <p className="text-sm text-[var(--color-secondary)] mt-2">
              {plan.pages === -1
                ? "Unlimited SEO pages"
                : `Up to ${plan.pages} SEO page${plan.pages > 1 ? "s" : ""}`}
            </p>
            <ul className="mt-8 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-[var(--color-secondary)]"
                >
                  <svg
                    className="w-5 h-5 text-green-400 shrink-0"
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
            <button
              className={`w-full text-center mt-8 ${
                plan.popular ? "btn-primary" : "btn-secondary"
              }`}
            >
              {plan.price === 19 ? "Start Free Trial" : "Subscribe Now"}
            </button>
            <p className="text-center text-xs text-[var(--color-muted)] mt-3">
              Stripe checkout coming soon
            </p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto mt-20">
        <h2 className="text-2xl font-bold text-center mb-8">
          Pricing Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "Can I try it for free?",
              a: "Yes! Sign up and generate your first SEO page completely free. No credit card required.",
            },
            {
              q: "What happens if I cancel?",
              a: "Your pages stay active through the end of your billing period. After that, they go offline but your data is saved for 30 days.",
            },
            {
              q: "Can I change plans later?",
              a: "Absolutely. Upgrade or downgrade at any time. Changes take effect on your next billing cycle.",
            },
            {
              q: "Do you offer annual pricing?",
              a: "Annual plans are coming soon with a 20% discount. Sign up for our newsletter to be notified.",
            },
          ].map((faq) => (
            <div key={faq.q} className="card">
              <h3 className="font-semibold">{faq.q}</h3>
              <p className="text-[var(--color-secondary)] mt-2 text-sm">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold">
          Ready to start ranking?
        </h2>
        <p className="text-[var(--color-secondary)] mt-2">
          Generate your first page free — no credit card needed.
        </p>
        <Link href="/signup" className="btn-primary inline-block mt-6 text-lg px-8 py-4">
          Get Started Free
        </Link>
      </div>
    </div>
  );
}
