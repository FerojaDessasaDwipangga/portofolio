import React, { useState } from 'react';
import { Factory, Code2, FolderOpen, Award, Settings, ClipboardCheck, LineChart, FileText, ExternalLink } from 'lucide-react';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiVite, SiGithub, SiVercel } from 'react-icons/si';

const tabs = [
  { id: 'industrial', label: 'Industrial Operations', icon: Factory, type: 'content' },
  { id: 'techstack', label: 'Tech Stack', icon: Code2, type: 'content' },
  { id: 'projects', label: 'Projects', icon: FolderOpen, type: 'content' },
  { id: 'certificates', label: 'Certificates', icon: Award, type: 'content' },
];

const industrialData = [
  { name: 'Production Planning (PPC)', icon: <Factory size={48} className="text-accent" strokeWidth={1.5} /> },
  { name: 'WIP Tracking', icon: <Settings size={48} className="text-accent" strokeWidth={1.5} /> },
  { name: 'Stock Opname', icon: <ClipboardCheck size={48} className="text-accent" strokeWidth={1.5} /> },
  { name: 'Supply Chain Logic', icon: <LineChart size={48} className="text-accent" strokeWidth={1.5} /> },
];

const techStackData = [
  { name: 'ReactJS', icon: <FaReact size={48} color="#61DAFB" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={48} className="text-base-content" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={48} color="#06B6D4" /> },
  { name: 'Vite', icon: <SiVite size={48} color="#646CFF" /> },
  { name: 'GitHub', icon: <SiGithub size={48} className="text-base-content" /> },
  { name: 'Vercel', icon: <SiVercel size={48} className="text-base-content" /> },
];

const certificatesData = [
  {
    title: 'AI Fluency',
    subtitle: 'Sertifikat pelatihan AI Fluency.',
    image: '/sertifikat/AI Fluency.png',
    link: '/sertifikat/AI Fluency.png',
    type: 'image',
  },
  {
    title: '21K Finisher – Isoplus Half Marathon 2025',
    subtitle: 'Sertifikat penyelesaian lomba half marathon.',
    image: '/sertifikat/21K Finisher – Isoplus Half Marathon 2025.jpg',
    link: '/sertifikat/21K Finisher – Isoplus Half Marathon 2025.jpg',
    type: 'image',
  },
  {
    title: 'Kelas Persiapan Kerja',
    subtitle: 'Sertifikat persiapan kerja dari Sekolahmu.',
    image: '/sertifikat/Kelas Persiapan Kerja.by sekolahmu_page-0001.jpg',
    link: '/sertifikat/Kelas Persiapan Kerja.by sekolahmu_page-0001.jpg',
    type: 'image',
  },
  {
    title: 'Mini Course Digital Marketing',
    subtitle: 'Sertifikat mini course digital marketing dari Sekolahmu.',
    images: [
      '/sertifikat/Mini-Course-Digital-Marketing.by-sekolahmu/Mini Course Digital Marketing.by sekolahmu_page-0001.jpg',
      '/sertifikat/Mini-Course-Digital-Marketing.by-sekolahmu/Mini Course Digital Marketing.by sekolahmu_page-0002.jpg',
    ],
    type: 'image',
  },
  {
    title: 'Praktek Kerja Industri',
    subtitle: 'Sertifikat praktik kerja industri.',
    images: [
      '/sertifikat/Sertifikat-praktek-kerja-Industri/Sertifikat praktek kerja Industri_page-0001.jpg',
      '/sertifikat/Sertifikat-praktek-kerja-Industri/Sertifikat praktek kerja Industri_page-0002.jpg',
    ],
    type: 'image',
  },
  
];

const projectsData = [
  {
    title: 'Remi League: Automated Tournament System',
    subtitle: 'Automated tournament queue management for local remi competitions.',
    detailText: 'Dashboard berbasis data untuk mengelola klasemen turnamen lokal dan mengotomatisasi antrean pemain. Sistem ini memprioritaskan pemain dengan jumlah main rendah, mendeteksi perilaku avoiding match, dan memberikan penalti WO otomatis agar kompetisi tetap adil dan transparan.',
    badges: ['System Analyst', 'Google Sheets', 'Data Logic'],
    tags: ['Spreadsheet Logic', 'UX/UI', 'Data Automation'],
    image: '/project/tampilan klasemen live (utama).png',
    link: '#',
    github: '#',
  },
];

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState('industrial');
  const [detailItem, setDetailItem] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleTabClick = (tab) => {
    if (tab.type === 'scroll') {
      const el = document.getElementById(tab.target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveTab(tab.id);
    }
  };

  const activeData =
    activeTab === 'industrial' ? industrialData
      : activeTab === 'techstack' ? techStackData
        : activeTab === 'projects' ? projectsData
          : certificatesData;

  return (
    <div id="skills" className="w-full max-w-6xl mx-auto space-y-10">

      {/* Header */}
      <div className="text-center space-y-3">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
          Portfolio <span className="text-accent">Showcase</span>
        </h2>
        <p className="text-base-content/50 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Explore my journey through technical expertise, industrial operations, and certifications.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-base-200/60 border border-base-300 rounded-2xl p-1.5 grid grid-cols-2 md:grid-cols-4 gap-1.5">
        {tabs.map((tab) => {
          const isActive = tab.type === 'content' && activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              className={`
                flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm 
                transition-all duration-300 cursor-pointer
                ${isActive
                  ? 'bg-base-100 text-accent shadow-md border border-base-300'
                  : 'text-base-content/40 hover:text-base-content/70 hover:bg-base-300/30'
                }
              `}
            >
              <tab.icon size={18} strokeWidth={1.8} />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden text-xs">{tab.label.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        {activeData.map((item, index) => {
          if (activeTab === 'certificates') {
            return (
              <button
                key={item.title}
                onClick={() => {
                  setDetailItem(item);
                  if (item.images && item.images.length > 0) setMainImage(item.images[0]);
                  else setMainImage(item.image || item.link || null);
                  setIsDetailOpen(true);
                }}
                className="group flex flex-col gap-3 overflow-hidden rounded-3xl border border-base-300 bg-base-100 transition duration-300 hover:shadow-lg"
                type="button"
                title={`Buka sertifikat ${item.title}`}
              >
                {item.type === 'image' || (item.images && item.images.length > 0) ? (
                  <div className="overflow-hidden rounded-t-3xl">
                    <img
                      src={item.image || (item.images && item.images[0])}
                      alt={item.title}
                      className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="relative h-48 overflow-hidden rounded-t-3xl border-b border-base-300 bg-gradient-to-br from-base-200 via-base-100 to-base-200 px-6 py-5 text-left">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_35%)]" />
                    <div className="relative flex h-full flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                          PDF
                        </span>
                        <FileText size={28} className="text-accent" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-base font-black text-base-content">{item.title}</h3>
                        <div className="space-y-2">
                          <div className="h-2 w-28 rounded-full bg-base-300/80" />
                          <div className="h-2 w-32 rounded-full bg-base-300/70" />
                          <div className="h-2 w-20 rounded-full bg-base-300/70" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="px-4 pb-4 pt-3 text-center">
                  <p className="text-sm font-black text-base-content line-clamp-2">{item.title}</p>
                  <p className="mt-1 text-xs text-base-content/60 line-clamp-2">{item.subtitle}</p>
                </div>
              </button>
            );
          }

          if (activeTab === 'projects') {
            return (
              <div
                key={item.title}
                className="group flex flex-col items-center justify-center gap-4 p-4 bg-base-100 border border-base-300 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
              >
                <button
                  onClick={() => { setDetailItem(item); setIsDetailOpen(true); }}
                  className="w-full overflow-hidden rounded-3xl bg-base-200"
                >
                  <img src={item.image} alt={item.title} className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105" />
                </button>
                <div className="w-full text-center">
                  <h4 className="text-sm font-black text-base-content line-clamp-2">{item.title}</h4>
                  <div className="mt-2 flex flex-wrap justify-center gap-2">
                    {item.badges?.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className="badge badge-outline badge-sm border-base-content/20 text-[10px] font-semibold uppercase tracking-[0.18em] text-base-content/70"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-base-content/60 mt-3 line-clamp-2">{item.subtitle}</p>
                </div>
                <button
                  onClick={() => { setDetailItem(item); setIsDetailOpen(true); }}
                  className="btn btn-sm btn-accent"
                >
                  Lihat Detail
                </button>
              </div>
            );
          }

          return (
            <div
              key={`${activeTab}-${index}`}
              className="group flex flex-col items-center justify-center gap-4 p-6 md:p-8 
                bg-base-100 border border-base-300 rounded-2xl shadow-sm
                transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-accent/40 cursor-default"
            >
              <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-base-content/70 group-hover:text-base-content transition-colors duration-300 text-center">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>

      {isDetailOpen && detailItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setIsDetailOpen(false)} />
          <div className="relative max-w-4xl w-full bg-base-100 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-2xl font-black">{detailItem.title}</h3>
                  {detailItem.subtitle && <p className="text-sm text-base-content/70 mt-2">{detailItem.subtitle}</p>}
                </div>
                <button onClick={() => setIsDetailOpen(false)} className="btn btn-sm btn-ghost">Tutup</button>
              </div>

              <div className="overflow-hidden rounded-3xl border border-base-300 bg-base-200">
                {detailItem.images && detailItem.images.length > 0 ? (
                  <div>
                    <img
                      src={mainImage}
                      alt={detailItem.title}
                      className="w-full max-h-[650px] object-contain bg-white"
                    />
                    <div className="mt-3 flex gap-3 overflow-x-auto px-3 pb-3">
                      {detailItem.images.map((imgSrc, idx) => (
                        <button
                          key={imgSrc}
                          onClick={() => setMainImage(imgSrc)}
                          className={`flex-shrink-0 h-20 w-28 overflow-hidden rounded-lg border ${mainImage === imgSrc ? 'border-accent' : 'border-base-300'} bg-white`}
                          type="button"
                          title={`Lihat halaman ${idx + 1}`}
                        >
                          <img src={imgSrc} alt={`${detailItem.title} - ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                ) : detailItem.type === 'image' ? (
                  <img
                    src={detailItem.image}
                    alt={detailItem.title}
                    className="w-full max-h-[650px] object-contain"
                  />
                ) : (
                  <iframe
                    src={detailItem.link}
                    title={detailItem.title}
                    className="w-full min-h-[560px]"
                  >
                    <div className="p-6 text-center text-base-content/70">
                      Tidak dapat menampilkan PDF. Silakan unduh untuk melihat.
                    </div>
                  </iframe>
                )}
              </div>

              {detailItem.detailText && (
                <div className="mt-4 rounded-2xl border border-base-300 bg-base-200 p-4 text-sm text-base-content/80">
                  {detailItem.detailText}
                </div>
              )}

              <div className="mt-4 flex flex-wrap items-center justify-end gap-3">
                <a href={detailItem.images && mainImage ? mainImage : detailItem.image ? detailItem.image : detailItem.link} download className="btn btn-accent btn-sm gap-2">
                  <FileText size={16} /> Unduh
                </a>
                <button onClick={() => setIsDetailOpen(false)} className="btn btn-ghost btn-sm">
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
