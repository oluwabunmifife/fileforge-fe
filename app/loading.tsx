export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="rounded-3xl border border-white/60 bg-white/80 px-8 py-6 shadow-glow backdrop-blur-xl">
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accent" />
          Loading FileForge...
        </div>
      </div>
    </main>
  );
}
