import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="card max-w-md text-center">
        <div className="text-6xl font-bold text-green-500/20 mb-4">404</div>
        <h2 className="text-2xl font-bold">Page not found</h2>
        <p className="text-[var(--color-secondary)] mt-2">
          The page you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <div className="flex gap-3 mt-6 justify-center">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/dashboard" className="btn-secondary">
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
