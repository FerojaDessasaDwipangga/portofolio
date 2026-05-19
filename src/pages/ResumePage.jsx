import { Download, Printer, FileText, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

export default function ResumePage() {
  const resumeUrl = "/resume-feroja.pdf"; // Placeholder path

  return (
    <div className="space-y-16 py-12 md:py-20 max-w-5xl mx-auto px-4">
      {/* Header with Actions */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-8 bg-base-200 p-8 rounded-[2rem] border border-base-300">
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
            Curriculum <span className="text-accent">Vitae</span>
          </h1>
          <p className="text-base-content/60 font-medium">Salinan digital diperbarui: Mei 2026</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          <button 
            onClick={() => window.print()}
            className="btn btn-outline btn-circle"
            title="Cetak Resume"
          >
            <Printer size={20} />
          </button>
          <a 
            href={resumeUrl} 
            download 
            className="btn btn-accent rounded-full px-8 gap-2"
          >
            <Download size={20} />
            Unduh PDF
          </a>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar Info */}
        <aside className="lg:col-span-4 space-y-12">
          {/* Quick Contact */}
          <div className="space-y-6 bg-base-200/50 p-8 rounded-3xl border border-base-300">
            <h3 className="text-xl font-black uppercase tracking-widest text-accent italic">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="bg-base-300 p-2 rounded-lg text-accent"><Mail size={16} /></div>
                <span className="text-sm font-medium opacity-70">feroja.dessasa@email.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-base-300 p-2 rounded-lg text-accent"><Phone size={16} /></div>
                <span className="text-sm font-medium opacity-70">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-base-300 p-2 rounded-lg text-accent"><MapPin size={16} /></div>
                <span className="text-sm font-medium opacity-70">Gresik, Jawa Timur</span>
              </li>
            </ul>
          </div>

          {/* Core Competencies */}
          <div className="space-y-6">
            <h3 className="text-xl font-black uppercase tracking-widest text-accent italic">Keahlian</h3>
            <div className="flex flex-wrap gap-2">
              {['PPC', 'Logistik', 'Gudang', 'Next.js', 'React', 'Firebase', 'Industrial IoT', 'Tailwind CSS'].map((skill) => (
                <span key={skill} className="badge badge-lg bg-base-200 border-base-300 text-xs font-bold uppercase tracking-widest py-4">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* PDF Preview / Interactive Resume */}
        <main className="lg:col-span-8 space-y-12">
          {/* PDF Viewer Placeholder */}
          <div className="aspect-[1/1.4] w-full bg-base-300 rounded-[2rem] border-4 border-dashed border-base-content/10 flex flex-col items-center justify-center p-12 text-center group relative overflow-hidden">
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <FileText size={80} className="text-base-content/20 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black mb-2">Pratinjau Resume</h3>
            <p className="text-base-content/50 max-w-xs mb-8">
              Klik untuk melihat versi PDF lengkap atau unduh untuk dibaca secara offline.
            </p>
            
            <a 
              href={resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-neutral rounded-full px-10 gap-2 shadow-xl"
            >
              Buka Viewer
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Education / Certification Summary */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black uppercase tracking-tighter">Pendidikan</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6 py-2 space-y-1">
                <div className="text-xs font-mono font-bold text-accent uppercase">Lulus 2023</div>
                <h4 className="text-xl font-black">Teknik Industri</h4>
                <p className="text-sm font-bold opacity-60">Universitas Teknik Unggulan</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
