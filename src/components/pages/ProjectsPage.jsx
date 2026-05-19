export default function ProjectsPage() {
  const milestones = [
    {
      date: '2023 - 2025',
      title: 'Fondasi Operasional Logistik Fisik',
      description:
        'Helper di PT Alam Dianraya & PT Indomarco Prismatama. Pemahaman mendalam tentang inventory management dan proses loading/unloading.',
      icon: '📦',
    },
    {
      date: 'Maret 2026',
      title: 'Program Magang PPC',
      description:
        'Memulai apprenticeship sebagai PPC Field Operator di Plant 6. Monitoring langsung lini produksi U-bolt dan centerbolt.',
      icon: '⚙️',
    },
    {
      date: 'April 2026',
      title: 'Inovasi Digital: Stock Opname Web App',
      description:
        'Bangun aplikasi Stock Opname berbasis web custom. Tracking bottleneck pabrik dan progress PO secara real-time.',
      icon: '💻',
    },
    {
      date: 'Mei 2026',
      title: 'Portfolio Digital Profesional',
      description:
        'Deploy identitas digital dan portofolio profesional ke domain custom. Go live! 🚀',
      icon: '🌐',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4 text-accent">Journey Digitalisasi</h1>
        <p className="text-base-content/60">
          Evolusi dari proses manual ke sistem digital yang efisien
        </p>
      </section>

      {/* Timeline */}
      <div className="timeline timeline-compact lg:timeline-vertical">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'lg:timeline-start' : 'lg:timeline-end'}`}
          >
            <div className="timeline-middle">
              <div className="bg-accent h-12 w-12 rounded-full flex items-center justify-center text-xl">
                {milestone.icon}
              </div>
            </div>
            <div className={`timeline-${index % 2 === 0 ? 'end' : 'start'} md:w-96 mb-4 md:mb-0`}>
              <div className="bg-base-200 p-4 rounded-lg border border-base-300 hover:border-accent transition-colors">
                <time className="text-accent font-bold">{milestone.date}</time>
                <h3 className="text-lg font-semibold mt-2">{milestone.title}</h3>
                <p className="text-sm text-base-content/60 mt-1">{milestone.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
