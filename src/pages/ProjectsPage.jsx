import Timeline from '../components/features/Timeline/Timeline';
import { ExternalLink, Globe, Monitor, Database, Layout } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Sistem Pelacakan WIP',
      description: 'Aplikasi web komprehensif untuk mengelola Work In Progress di lantai pabrik. Fitur entri real-time dan pelaporan WA otomatis.',
      tags: ['React', 'Firebase', 'Tailwind'],
      icon: Monitor,
      link: '#',
      github: '#',
    },
    {
      title: 'Aplikasi Stock Opname',
      description: 'Alat mobile-first untuk digitalisasi pengambilan stok gudang, menghilangkan pemborosan kertas dan kesalahan manusia.',
      tags: ['Next.js', 'PWA', 'Firestore'],
      icon: Database,
      link: '#',
      github: '#',
    },
    {
      title: 'Dashboard Operasional',
      description: 'Visualisasi terpusat untuk KPI produksi, indeks hambatan, dan tingkat utilitas mesin untuk tinjauan manajemen.',
      tags: ['Chart.js', 'React', 'Industrial Logic'],
      icon: Layout,
      link: '#',
      github: '#',
    },
  ];

  return (
    <div className="space-y-32 py-12 md:py-20">
      {/* Page Header */}
      <section className="container mx-auto px-4 text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          Perjalanan <span className="italic font-serif">&</span> <span className="text-accent">Proyek</span>
        </h1>
        <p className="text-lg md:text-xl text-base-content/60 max-w-2xl mx-auto">
          Evolusi karir profesional saya, dari helper operasional hingga pengembang solusi digital.
        </p>
      </section>

      {/* Professional Timeline */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-base-200/50 rounded-[3rem] p-8 md:p-16 border border-base-300">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl font-black tracking-tight mb-2 uppercase italic text-accent">Timeline Karir</h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto md:mx-0"></div>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 space-y-16">
        <div className="text-center md:text-left max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-end gap-4">
          <div className="space-y-2">
            <h2 className="text-4xl font-black tracking-tight uppercase">Inovasi Teknologi</h2>
            <p className="text-base-content/60 font-medium italic underline decoration-accent underline-offset-4 decoration-2">
              Proyek Unggulan & Passion
            </p>
          </div>
          <div className="text-sm font-mono font-bold opacity-40 uppercase tracking-widest">
            Total Proyek: 03
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="card bg-base-200 border border-base-300 transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-accent/30 group">
              <div className="card-body p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="bg-accent/10 p-3 rounded-2xl text-accent group-hover:bg-accent group-hover:text-accent-content transition-colors">
                    <project.icon size={28} />
                  </div>
                  <div className="flex gap-2">
                    <a href={project.github} className="btn btn-ghost btn-sm btn-circle opacity-40 hover:opacity-100">
                      <Globe size={20} />
                    </a>
                    <a href={project.link} className="btn btn-ghost btn-sm btn-circle text-accent opacity-40 hover:opacity-100">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="card-title text-2xl font-black tracking-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-60 leading-relaxed mt-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="badge badge-outline border-base-content/20 text-[10px] font-bold uppercase tracking-widest px-3 py-2">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
