"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { TRADES, GeneratedPage } from "@/lib/types";

export default function DashboardPage() {
  const [pages, setPages] = useState<GeneratedPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPages = useCallback(async () => {
    try {
      const res = await fetch("/api/pages");
      if (!res.ok) throw new Error("Failed to load pages");
      const data = await res.json();
      setPages(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load pages");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPages();
  }, [fetchPages]);

  async function handleDelete(id: string) {
    try {
      const res = await fetch(`/api/pages/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setPages((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete page");
    }
  }

  function getTradeIcon(trade: string) {
    return TRADES.find((t) => t.value === trade)?.icon || "📄";
  }

  function getTradeLabel(trade: string) {
    return TRADES.find((t) => t.value === trade)?.label || trade;
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-[var(--color-card)] rounded w-48" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card h-24" />
            ))}
          </div>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="card h-20" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Your Pages</h1>
          <p className="text-[var(--color-secondary)] mt-1">
            Manage your SEO landing pages
          </p>
        </div>
        <Link href="/generate" className="btn-primary">
          + Generate New Page
        </Link>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm mb-6">
          {error}
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="card">
          <p className="text-sm text-[var(--color-muted)]">Total Pages</p>
          <p className="text-3xl font-bold mt-1">{pages.length}</p>
        </div>
        <div className="card">
          <p className="text-sm text-[var(--color-muted)]">Plan</p>
          <p className="text-3xl font-bold mt-1 text-green-400">Starter</p>
        </div>
        <div className="card">
          <p className="text-sm text-[var(--color-muted)]">Pages Remaining</p>
          <p className="text-3xl font-bold mt-1">{Math.max(0, 1 - pages.length)}</p>
          <Link
            href="/pricing"
            className="text-green-400 text-sm hover:underline mt-1 inline-block"
          >
            Upgrade for more
          </Link>
        </div>
      </div>

      {/* Pages list */}
      {pages.length === 0 ? (
        <div className="card text-center py-16">
          <div className="w-16 h-16 bg-[var(--color-input)] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-[var(--color-muted)]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">No pages yet</h3>
          <p className="text-[var(--color-secondary)] mt-2">
            Generate your first SEO-optimized landing page in 60 seconds.
          </p>
          <Link href="/generate" className="btn-primary inline-block mt-6">
            Generate Your First Page
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {pages.map((page) => (
            <div
              key={page.id}
              className="card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{getTradeIcon(page.trade)}</span>
                <div>
                  <h3 className="font-semibold text-lg">
                    {page.business_name}
                  </h3>
                  <p className="text-sm text-[var(--color-secondary)]">
                    {getTradeLabel(page.trade)} &middot; {page.city},{" "}
                    {page.state} &middot; {page.phone}
                  </p>
                  <p className="text-xs text-[var(--color-muted)] mt-1">
                    Created{" "}
                    {new Date(page.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href={`/preview/${page.slug}`}
                  className="btn-secondary text-sm px-4 py-2 flex-1 sm:flex-none text-center"
                >
                  View Page
                </Link>
                <button
                  onClick={() => handleDelete(page.id)}
                  className="text-red-400 hover:text-red-300 text-sm px-4 py-2 border border-red-500/20 rounded-lg hover:bg-red-500/10 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
