import { Home, AlertTriangle, ArrowLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 space-y-8">
      {/* Visual Indicator */}
      <div className="relative group">
        <div className="absolute inset-0 bg-error/20 blur-[100px] rounded-full animate-pulse group-hover:bg-error/40 transition-colors"></div>
        <div className="relative z-10 text-[10rem] md:text-[15rem] font-black tracking-tighter leading-none select-none italic text-base-300">
          404
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <AlertTriangle size={120} className="text-error animate-bounce" />
        </div>
      </div>

      <div className="space-y-4 max-w-md relative z-30">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
          Proses <span className="text-error">Terhenti</span>
        </h1>
        <p className="text-base-content/60 font-medium leading-relaxed">
          Sumber daya operasional yang diminta tidak dapat ditemukan. Mungkin telah dipindahkan, dihapus, atau belum pernah ada dalam jalur produksi.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 relative z-30">
        <NavLink to="/" className="btn btn-neutral btn-lg rounded-full px-12 group">
          <Home size={20} className="transition-transform group-hover:scale-110" />
          Kembali ke Beranda
        </NavLink>
        <button 
          onClick={() => window.history.back()}
          className="btn btn-outline btn-lg rounded-full px-8"
        >
          <ArrowLeft size={20} />
          Langkah Sebelumnya
        </button>
      </div>
    </div>
  );
}
