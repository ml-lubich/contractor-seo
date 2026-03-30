"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TRADES, Trade } from "@/lib/types";
import { generateSlug } from "@/lib/seo-generator";

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY",
];

export default function GeneratePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [trade, setTrade] = useState<Trade | "">("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState("");

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!trade) return;
    setGenerating(true);
    setError("");

    const slug = generateSlug(businessName, trade as Trade, city);

    try {
      const res = await fetch("/api/pages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trade, city, state, businessName, phone, slug }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to generate page");
      }

      router.push(`/preview/${slug}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setGenerating(false);
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            Generate Your <span className="text-gradient">SEO Page</span>
          </h1>
          <p className="text-[var(--color-secondary)] mt-2">
            Fill in your details and get a fully optimized landing page instantly.
          </p>
        </div>

        {/* Progress steps */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  s <= step
                    ? "bg-green-500 text-black"
                    : "bg-[var(--color-input)] text-[var(--color-muted)]"
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className={`w-12 h-0.5 ${
                    s < step ? "bg-green-500" : "bg-[var(--color-border)]"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleGenerate} className="card">
          {/* Step 1: Pick Trade */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">What&apos;s your trade?</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {TRADES.map((t) => (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => {
                      setTrade(t.value);
                      setStep(2);
                    }}
                    className={`card text-left flex items-center gap-3 cursor-pointer hover:border-green-500/50 transition-colors ${
                      trade === t.value ? "border-green-500" : ""
                    }`}
                  >
                    <span className="text-2xl">{t.icon}</span>
                    <span className="text-sm font-medium">{t.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Location */}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Where do you serve?</h2>
              <div>
                <label className="block text-sm font-medium mb-2">City</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="e.g., Austin"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">State</label>
                <select
                  className="input-field"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                >
                  <option value="">Select state</option>
                  {US_STATES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn-secondary flex-1"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (city && state) setStep(3);
                  }}
                  className="btn-primary flex-1"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Business Details */}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Business details</h2>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="e.g., Joe's Plumbing"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="input-field"
                  placeholder="e.g., (512) 555-1234"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-secondary flex-1"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={generating || !businessName || !phone}
                  className="btn-primary flex-1 disabled:opacity-50"
                >
                  {generating ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Generating...
                    </span>
                  ) : (
                    "Generate SEO Page"
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
