"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

// DATA PENGALAMAN
const experiences = [
  {
    id: 1,
    title: "PPC Field Apprentice",
    company: "PT Indospring Tbk (Plant 6)",
    logo: "/pt_indospring_tbk_logo.jpg",
    period: "Feb 2026 - Sekarang",
    number: "01",
    shortDesc: "Memonitor alur produksi U-Bolt & Center Bolt, dari ketersediaan material hingga packing.",
    detailDesc: "Dipercaya untuk mengawal kelancaran dua line produksi utama: U-Bolt dan project baru Center Bolt. Rutin berkoordinasi dalam briefing prioritas harian bersama leader, melakukan Stock Opname (SO) Work In Progress (WIP) untuk mengidentifikasi bottleneck, serta membantu mengarahkan man power. Menguasai pengawasan alur proses U-Bolt secara end-to-end (meliputi Cutting, Chamfering, Sizing, Bending, Body Correction, Powder Coating, hingga Packing) dan turut dilibatkan dalam pemantauan operasional Center Bolt."
  },
  {
    id: 3,
    title: "Helper DC (Distribution Center)",
    company: "PT. Indomarco Prismatama",
    logo: "/logo indomarco.jpg",
    period: "Nov 2024 - Nov 2025",
    number: "03",
    shortDesc: "Operasional picking, scanning, dan stock opname skala besar.",
    detailDesc: "Melakukan picking barang sesuai order list toko secara cepat and akurat. Bertanggung jawab melakukan scanning barcode item dan stock opname berkala untuk meminimalkan selisih stok serta menjaga standar K3 di area kerja yang memiliki ritme cepat."
  },
  {
    id: 4,
    title: "Helper Gudang",
    company: "PT. Alam Dianraya",
    logo: "/ikon pt  alam dianraya.webp",
    period: "Juli 2023 - Nov 2024",
    number: "04",
    shortDesc: "Proses bongkar muat dan manajemen penyimpanan barang.",
    detailDesc: "Terbiasa dengan manajemen logistik fisik. Melakukan proses bongkar muat barang menggunakan hand stacker atau hand pallet sesuai SOP, serta memverifikasi kualitas dan kuantitas barang sebelum disimpan ke dalam area gudang."
  }
];

const projects = [
  {
    id: 2,
    title: "WIP Tracking System",
    company: "Tech Innovation",
    logo: "/process_tech_logo-removebg-preview.png",
    isPassion: true,
    period: "2026 - Sekarang",
    number: "PROJ-01",
    shortDesc: "Digitalisasi pemantauan Work In Progress (WIP) untuk efisiensi manufaktur.",
    detailDesc: "Merancang alur logika sistem tracking produksi untuk meminimalkan bottleneck. Proyek ini menggabungkan pemahaman mendalam tentang lantai produksi dengan implementasi teknologi digital untuk menciptakan visibilitas real-time terhadap stok dan status pesanan."
  }
];

const expertise = [
  { category: "Production", skills: ["PPC", "Manufacturing Flow", "SAP/ERP", "Quality Control"] },
  { category: "Tech", skills: ["Next.js", "JavaScript", "Tailwind CSS", "UI/UX Design"] },
  { category: "Management", skills: ["Team Leadership", "Strategic Planning", "Data Analysis", "Logistics"] }
];

// ICON COMPONENTS
const FactoryIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);
const TechIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);
const TruckIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a2 2 0 002 2h2a2 2 0 002-2m-8 1v.01M3 16v.01" />
  </svg>
);
const WarehouseIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const getIcon = (id) => {
  switch (id) {
    case 1: return <FactoryIcon />;
    case 2: return <TechIcon />;
    case 3: return <TruckIcon />;
    case 4: return <WarehouseIcon />;
    default: return <FactoryIcon />;
  }
}

export default function Home() {
  const [selectedId, setSelectedId] = useState(null);
  const [activeTab, setActiveTab] = useState("experience");
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    setMounted(true);
    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  const allItems = [...experiences, ...projects];

  return (
    <main className="relative min-h-screen w-full bg-[#020617] text-zinc-100 overflow-x-hidden selection:bg-blue-500/30">
      
      {/* Background Mesh Effect */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Spotlight Follower */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] bg-blue-500/[0.04] rounded-full blur-[140px] z-10"
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* --- NEW HERO SECTION --- */}
      <section className="relative z-20 pt-32 pb-24 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono tracking-[0.2em] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Strategic Operations & Tech
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gradient leading-[0.9] mb-8">
            Feroja Dessasa<br />Dwipangga
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-light">
            A results-oriented professional specializing in <span className="text-white font-medium text-glow">Production Planning and Control (PPC)</span> with a deep passion for digital transformation. Bridging the gap between industrial operations and modern web technologies.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mb-12">
            <a href="https://linkedin.com/in/ferojadessasa" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://github.com/FerojaDessasaDwipangga/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.instagram.com/_ferooo__/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-pink-500 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="mailto:ferojadessasa90@gmail.com" className="text-zinc-500 hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l12-9.725v15.438h-24v-15.438l12 9.725z"/></svg>
            </a>
          </div>

          <motion.a
            href="https://wa.me/6285704536965"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 transition-all items-center gap-3"
          >
            GET IN TOUCH
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Glowing Aura */}
          <div className="absolute -inset-10 bg-blue-500/20 rounded-full blur-[80px] animate-pulse-glow" />
          
          <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl animate-float">
            <Image
              src="/foto Feroja Dessasa Dwipangga.jpg"
              alt="Feroja Dessasa Dwipangga"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-40"></div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 glass px-6 py-4 rounded-2xl border border-white/10 shadow-xl z-30">
            <p className="text-[10px] font-mono text-blue-400 mb-1 tracking-widest uppercase">Specialization</p>
            <p className="text-sm font-bold text-white">Operations & Tech</p>
          </div>
        </motion.div>
      </section>

      {/* --- TABS NAVIGATION --- */}
      <section className="relative z-20 px-6 max-w-6xl mx-auto mb-16">
        <div className="flex items-center justify-center md:justify-start gap-8 border-b border-white/5 pb-4">
          <button onClick={() => setActiveTab("experience")} className={`text-sm font-mono tracking-widest uppercase pb-2 ${activeTab === "experience" ? "tab-active" : "tab-inactive"}`}>
            Professional Journey
          </button>
          <button onClick={() => setActiveTab("projects")} className={`text-sm font-mono tracking-widest uppercase pb-2 ${activeTab === "projects" ? "tab-active" : "tab-inactive"}`}>
            Tech Innovation
          </button>
          <button onClick={() => setActiveTab("expertise")} className={`text-sm font-mono tracking-widest uppercase pb-2 ${activeTab === "expertise" ? "tab-active" : "tab-inactive"}`}>
            Expertise
          </button>
        </div>
      </section>

      {/* --- TABS CONTENT --- */}
      <section className="relative z-20 px-6 w-full max-w-6xl mx-auto pb-32 min-h-[600px]">
        <AnimatePresence mode="wait">
          {activeTab === "experience" && (
            <motion.div
              key="experience-tab"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  layoutId={`card-${exp.id}`}
                  onClick={() => setSelectedId(exp.id)}
                  whileHover={{ y: -8 }}
                  className="group glass p-8 rounded-[2rem] cursor-pointer border-white/5 hover:border-blue-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-white p-3 mb-6 shadow-xl flex items-center justify-center overflow-hidden">
                      {exp.logo ? (
                        <div className="relative w-full h-full scale-110">
                          <Image src={exp.logo} alt={exp.company} fill className="object-contain" />
                        </div>
                      ) : (
                        <div className="text-blue-500">{getIcon(exp.id)}</div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2 leading-tight">{exp.title}</h3>
                    <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mb-4">{exp.company}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">{exp.shortDesc}</p>
                  </div>
                  <div className="mt-8 flex items-center text-[10px] font-bold tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                    VIEW DETAILS <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "projects" && (
            <motion.div
              key="projects-tab"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {projects.map((proj) => (
                <motion.div
                  key={proj.id}
                  layoutId={`card-${proj.id}`}
                  onClick={() => setSelectedId(proj.id)}
                  whileHover={{ y: -8 }}
                  className="group glass p-10 rounded-[2.5rem] cursor-pointer border-blue-500/20 bg-blue-500/[0.02] transition-all flex flex-col md:flex-row gap-8"
                >
                  <div className="w-24 h-24 shrink-0 rounded-[2rem] bg-white/5 border border-white/10 p-4 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/10 blur-xl"></div>
                    <Image src={proj.logo} alt={proj.title} fill className="object-contain p-2 mix-blend-screen relative z-10" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-blue-500/20 text-[8px] font-mono text-blue-400 uppercase tracking-widest mb-4">Internal Innovation</div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">{proj.title}</h3>
                    <p className="text-zinc-400 leading-relaxed mb-6">{proj.shortDesc}</p>
                    <div className="flex items-center text-xs font-bold text-blue-400">EXPLORE PROJECT <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "expertise" && (
            <motion.div
              key="expertise-tab"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {expertise.map((item, i) => (
                <div key={i} className="glass p-10 rounded-[2.5rem] border-white/5 relative overflow-hidden group">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors" />
                  <h3 className="text-zinc-500 font-mono text-xs tracking-[0.3em] uppercase mb-8">{item.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {item.skills.map((skill, si) => (
                      <span key={si} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-blue-500/10 hover:border-blue-500/30 transition-all">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Pop-up Modal Detail */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 sm:p-12">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#020617]/95 backdrop-blur-3xl"
              onClick={() => setSelectedId(null)}
            />
            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-3xl bg-[#0f172a]/90 border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden glass"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />
              <button onClick={() => setSelectedId(null)} className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all z-20">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div className="p-10 md:p-16 overflow-y-auto max-h-[85vh]">
                {allItems.map((item) => item.id === selectedId && (
                  <div key={`modal-${item.id}`} className="space-y-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-[1px] bg-blue-500"></span>
                          <p className="text-blue-400 font-mono text-xs tracking-widest uppercase">{item.company}</p>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">{item.title}</h2>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-mono tracking-widest uppercase">{item.period}</span>
                      </div>
                      {item.logo && (
                        <div className="relative w-24 h-24 rounded-2xl bg-white p-4 shadow-2xl flex items-center justify-center">
                          <Image src={item.logo} alt={item.company} fill className="object-contain p-2" />
                        </div>
                      )}
                    </div>
                    <div className="h-[1px] w-full bg-white/5" />
                    <p className="text-zinc-300 leading-relaxed text-lg md:text-xl font-light">{item.detailDesc}</p>
                    <button onClick={() => setSelectedId(null)} className="w-full py-5 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all tracking-widest uppercase text-xs">BACK TO EXPLORER</button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer / Connect Section */}
      <footer className="relative z-30 py-24 w-full max-w-6xl mx-auto px-6 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-3xl font-bold text-gradient">Let's Connect.</h2>
            <p className="text-zinc-500 text-sm font-mono tracking-widest uppercase text-center md:text-left">
              Interested in collaboration? Feel free to reach out.
            </p>
            <a 
              href="mailto:ferojadessasa90@gmail.com"
              className="mt-4 px-10 py-5 bg-white text-black font-bold rounded-2xl hover:bg-blue-50 transition-all flex items-center gap-3 shadow-2xl shadow-blue-500/10 group cursor-pointer relative z-40"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              SAY HELLO
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
            {/* WhatsApp */}
            <a href="https://wa.me/6285704536965" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all">
              <svg className="w-6 h-6 text-zinc-400 group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .081 5.363.078 11.969c0 2.112.551 4.173 1.597 6.01L0 24l6.191-1.622a11.79 11.79 0 005.854 1.548h.005c6.604 0 11.967-5.363 11.97-11.97a11.815 11.815 0 00-3.507-8.473z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/_ferooo__/" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/50 transition-all">
              <svg className="w-6 h-6 text-zinc-400 group-hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/ferojadessasa/" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all text-zinc-400 hover:text-blue-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            {/* GitHub */}
            <a href="https://github.com/FerojaDessasaDwipangga/" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/50 transition-all text-zinc-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-[0.3em]">© 2026 — Feroja Dessasa Dwipangga. Crafted with precision.</p>
        </div>
      </footer>
    </main>
  );
}