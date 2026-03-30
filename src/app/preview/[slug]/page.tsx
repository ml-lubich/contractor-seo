"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Trade } from "@/lib/types";
import { generateSEOContent } from "@/lib/seo-generator";
import Link from "next/link";

function PreviewContent() {
  const searchParams = useSearchParams();
  const trade = searchParams.get("trade") as Trade;
  const city = searchParams.get("city") || "";
  const state = searchParams.get("state") || "";
  const businessName = searchParams.get("business") || "";
  const phone = searchParams.get("phone") || "";

  if (!trade || !city || !businessName) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="card text-center">
          <h2 className="text-xl font-bold">Page not found</h2>
          <p className="text-[var(--color-secondary)] mt-2">
            Generate a new page to see your SEO-optimized landing page.
          </p>
          <Link href="/generate" className="btn-primary inline-block mt-4">
            Generate Page
          </Link>
        </div>
      </div>
    );
  }

  const seo = generateSEOContent(trade, city, state, businessName, phone);
  const location = `${city}, ${state}`;

  return (
    <div>
      {/* Admin bar */}
      <div className="bg-green-500/10 border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">
              PREVIEW
            </span>
            <span className="text-sm text-[var(--color-secondary)]">
              This is how your page will look to visitors and search engines
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="btn-secondary text-sm px-4 py-2">
              Dashboard
            </Link>
            <Link href="/generate" className="btn-primary text-sm px-4 py-2">
              Generate Another
            </Link>
          </div>
        </div>
      </div>

      {/* SEO Meta Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="card mb-6">
          <h3 className="text-sm font-semibold text-green-400 mb-3">
            Google Search Preview
          </h3>
          <div className="bg-white rounded-lg p-4">
            <div className="text-blue-600 text-lg font-medium hover:underline cursor-pointer">
              {seo.title}
            </div>
            <div className="text-green-700 text-sm mt-1">
              ranklocal.com/pages/{trade}-{city.toLowerCase().replace(/\s+/g, "-")}
            </div>
            <div className="text-gray-600 text-sm mt-1">
              {seo.metaDescription}
            </div>
          </div>
        </div>

        {/* Schema Markup Preview */}
        <div className="card mb-6">
          <h3 className="text-sm font-semibold text-green-400 mb-3">
            Schema Markup (JSON-LD)
          </h3>
          <pre className="bg-[var(--color-input)] rounded-lg p-4 overflow-x-auto text-xs text-green-400 font-mono">
            {JSON.stringify(seo.schemaMarkup, null, 2)}
          </pre>
        </div>
      </div>

      {/* Actual Landing Page */}
      <div className="border-t-2 border-green-500">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#0d1117] to-[var(--color-background)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                  {seo.h1}
                </h1>
                <p className="mt-6 text-lg text-[var(--color-secondary)]">
                  {seo.bodyContent[0]}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${phone.replace(/\D/g, "")}`}
                    className="btn-primary text-lg text-center"
                  >
                    Call Now: {phone}
                  </a>
                  <button className="btn-secondary text-lg">
                    Get Free Estimate
                  </button>
                </div>
                <div className="mt-6 flex items-center gap-4 text-sm text-[var(--color-secondary)]">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Licensed & Insured
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    5-Star Rated
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Free Estimates
                  </span>
                </div>
              </div>
              <div className="card bg-gradient-to-br from-green-500/5 to-transparent">
                <h3 className="text-xl font-semibold mb-4">
                  Request a Free Quote
                </h3>
                <div className="space-y-3">
                  <input
                    className="input-field"
                    placeholder="Your Name"
                    disabled
                  />
                  <input
                    className="input-field"
                    placeholder="Phone Number"
                    disabled
                  />
                  <input
                    className="input-field"
                    placeholder="Email"
                    disabled
                  />
                  <textarea
                    className="input-field"
                    placeholder="Describe your project..."
                    rows={3}
                    disabled
                  />
                  <button className="btn-primary w-full" disabled>
                    Submit Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 border-t border-[var(--color-border)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              {seo.h2s[2]}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {seo.services.map((service) => (
                <div
                  key={service}
                  className="card flex items-center gap-3 hover:border-green-500/30 transition-colors"
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
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 border-t border-[var(--color-border)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              {seo.h2s[1]}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
                  title: "Licensed & Insured",
                  desc: `${businessName} is fully licensed and insured in ${state}. Your property is protected on every job.`,
                },
                {
                  icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
                  title: "Fast Response Time",
                  desc: `We know ${city} — our local team provides same-day service and 24/7 emergency availability.`,
                },
                {
                  icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
                  title: "5-Star Rated",
                  desc: `With 127+ five-star reviews, ${businessName} is the top-rated ${trade} service in ${location}.`,
                },
              ].map((item) => (
                <div key={item.title} className="card text-center">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-[var(--color-secondary)] mt-2 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Maps Placeholder */}
        <section className="py-16 border-t border-[var(--color-border)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              {seo.h2s[3]}
            </h2>
            <div className="card p-0 overflow-hidden">
              <div className="bg-[var(--color-input)] h-80 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 text-[var(--color-muted)] mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                    />
                  </svg>
                  <p className="text-[var(--color-muted)] font-medium">
                    Google Maps Embed — {location}
                  </p>
                  <p className="text-[var(--color-muted)] text-sm mt-1">
                    Map will display your service area when published
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 border-t border-[var(--color-border)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              {seo.h2s[5]}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sarah M.",
                  rating: 5,
                  text: `${businessName} was amazing! Fast, professional, and fair pricing. Best ${trade} service in ${city} by far.`,
                },
                {
                  name: "Mike R.",
                  rating: 5,
                  text: `Called for an emergency and they were at my door within an hour. Highly recommend ${businessName} to anyone in ${location}.`,
                },
                {
                  name: "Jennifer L.",
                  rating: 5,
                  text: `We've used ${businessName} three times now and they always deliver excellent work. The team is courteous and knowledgeable.`,
                },
              ].map((review) => (
                <div key={review.name} className="card">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[var(--color-secondary)] text-sm">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="mt-3 font-semibold text-sm">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 border-t border-[var(--color-border)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              {seo.h2s[4]}
            </h2>
            <div className="space-y-4">
              {seo.faqs.map((faq) => (
                <div key={faq.question} className="card">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="text-[var(--color-secondary)] mt-2">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-[var(--color-border)] bg-gradient-to-b from-green-500/5 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-[var(--color-secondary)] mt-4 text-lg">
              Call {businessName} today for a free estimate on any {trade} service in {location}.
            </p>
            <a
              href={`tel:${phone.replace(/\D/g, "")}`}
              className="btn-primary text-xl inline-block mt-8 px-10 py-4"
            >
              Call {phone}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function PreviewPage() {
  return (
    <Suspense>
      <PreviewContent />
    </Suspense>
  );
}
