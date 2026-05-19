export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold mb-4 text-accent">
          Presisi Industrial Bertemu Inovasi Digital
        </h1>
        <p className="text-xl text-base-content/70 mb-8 max-w-2xl mx-auto">
          PPC Field Apprentice di manufaktur pegas + Frontend Developer. Digitalisasi proses pabrik
          untuk efisiensi maksimal.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/projects" className="btn btn-lg btn-accent">
            Jelajahi Proyek
          </a>
          <a href="/resume" className="btn btn-lg btn-outline">
            Download Resume
          </a>
        </div>
      </section>

      {/* Placeholder for WIP Simulator */}
      <section className="bg-base-200 p-8 rounded-lg border border-base-300">
        <p className="text-base-content/60 text-center">WIP Logic Simulator - Coming Soon</p>
      </section>

      {/* Placeholder for Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="stats shadow bg-base-200 border border-base-300">
          <div className="stat">
            <div className="stat-figure text-accent">
              <div className="text-3xl">📊</div>
            </div>
            <div className="stat-title">Efisiensi Produksi</div>
            <div className="stat-value text-success">85%</div>
          </div>
        </div>
        <div className="stats shadow bg-base-200 border border-base-300">
          <div className="stat">
            <div className="stat-figure text-accent">
              <div className="text-3xl">⚙️</div>
            </div>
            <div className="stat-title">Line Status</div>
            <div className="stat-value text-success">Optimal</div>
          </div>
        </div>
        <div className="stats shadow bg-base-200 border border-base-300">
          <div className="stat">
            <div className="stat-figure text-accent">
              <div className="text-3xl">🚀</div>
            </div>
            <div className="stat-title">Digitalisasi</div>
            <div className="stat-value text-success">Active</div>
          </div>
        </div>
      </section>
    </div>
  );
}
