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
    period: "Feb 2026 - Sekarang",
    number: "01",
    shortDesc: "Memonitor alur produksi U-Bolt & Center Bolt, dari ketersediaan material hingga packing.",
    detailDesc: "Dipercaya untuk mengawal kelancaran dua line produksi utama: U-Bolt dan project baru Center Bolt. Rutin berkoordinasi dalam briefing prioritas harian bersama leader, melakukan Stock Opname (SO) Work In Progress (WIP) untuk mengidentifikasi bottleneck, serta membantu mengarahkan man power. Menguasai pengawasan alur proses U-Bolt secara end-to-end (meliputi Cutting, Chamfering, Sizing, Bending, Body Correction, Powder Coating, hingga Packing) dan turut dilibatkan dalam pemantauan operasional Center Bolt."
  },
  {
    id: 2,
    title: "Process Improvement & Tech",
    company: "Personal Development",
    period: "2026 - Sekarang",
    number: "02",
    shortDesc: "Merancang konsep digitalisasi WIP dan aktif mempelajari web development.",
    detailDesc: "Memiliki minat besar terhadap modernisasi sistem manufaktur. Berperan sebagai inisiator konsep dalam merancang alur logika (system logic) untuk pembuatan alat tracking PO & Stock Opname WIP U-Bolt. Saat ini aktif mempelajari pemrograman web secara mandiri agar kelak dapat membangun dan mengimplementasikan sistem untuk menciptakan efisiensi nyata di lantai produksi."
  },
  {
    id: 3,
    title: "Helper DC (Distribution Center)",
    company: "PT. Indomarco Prismatama",
    period: "Nov 2024 - Nov 2025",
    number: "03",
    shortDesc: "Operasional picking, scanning, dan stock opname skala besar.",
    detailDesc: "Melakukan picking barang sesuai order list toko secara cepat dan akurat. Bertanggung jawab melakukan scanning barcode item dan stock opname berkala untuk meminimalkan selisih stok serta menjaga standar K3 di area kerja yang memiliki ritme cepat."
  },
  {
    id: 4,
    title: "Helper Gudang",
    company: "PT. Alam Dianraya",
    period: "Juli 2023 - Nov 2024",
    number: "04",
    shortDesc: "Proses bongkar muat dan manajemen penyimpanan barang.",
    detailDesc: "Terbiasa dengan manajemen logistik fisik. Melakukan proses bongkar muat barang menggunakan hand stacker atau hand pallet sesuai SOP, serta memverifikasi kualitas dan kuantitas barang sebelum disimpan ke dalam area gudang."
  }
];

// ICON COMPONENTS
const FactoryIcon = () => (
  <svg className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);
const TechIcon = () => (
  <svg className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);
const TruckIcon = () => (
  <svg className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a2 2 0 002 2h2a2 2 0 002-2m-8 1v.01M3 16v.01" />
  </svg>
);
const WarehouseIcon = () => (
  <svg className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 300 });

  useEffect(() => {
    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center bg-zinc-950 text-zinc-100 overflow-x-hidden font-sans pt-12">

      {/* Spotlight */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[160px] z-0"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-32 pb-24 px-6 max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-14">

        {/* FOTO (Ukuran Sedikit Diperbesar) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          // Perubahan ukuran di sini: w-48->w-60, md:w-56->md:w-72
          className="relative aspect-[3/4] w-60 md:w-72 shrink-0 group shadow-2xl shadow-black/40 rounded-2xl"
        >
          <div className="absolute inset-0 rounded-2xl bg-zinc-900 border border-zinc-800 z-10 transition-colors group-hover:border-zinc-700"></div>

          <Image
            src="/foto Feroja Dessasa Dwipangga.jpg"
            alt="Feroja Dessasa Dwipangga"
            fill
            // object-cover memastikan foto full body gunung Anda memenuhi kotak dengan rapi
            className="rounded-2xl object-cover z-20 grayscale border-2 border-zinc-900/50 hover:grayscale-0 transition-all duration-700 shadow-xl group-hover:scale-[1.02]"
            priority
          />
        </motion.div>

        {/* NAMA & JUDUL */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center md:text-left flex flex-col items-center md:items-start"
        >
          <p className="text-zinc-600 text-xs md:text-sm font-mono tracking-widest pl-[0.1em] mb-3">About Me,</p>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white leading-[1.1] mb-6">
            Feroja Dessasa<br />Dwipangga
          </h1>

          <div className="h-[1px] w-16 bg-zinc-700 mb-6"></div>

          <p className="text-zinc-400 text-base md:text-lg font-medium tracking-[0.2em] uppercase">
            Production Planning
          </p>
          <p className="text-zinc-600 text-xs md:text-sm font-light tracking-[0.2em] uppercase mt-2">
            Tech Enthusiast
          </p>
        </motion.div>
      </section>

      {/* Grid Kartu Pengalaman */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 w-full max-w-7xl pb-32"
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            layoutId={`card-${exp.id}`}
            onClick={() => setSelectedId(exp.id)}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.25)", backgroundColor: "rgba(39, 39, 42, 0.4)" }}
            className="p-7 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 cursor-pointer backdrop-blur-sm transition-all flex flex-col justify-between h-full group"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-2.5 bg-zinc-800/40 rounded-xl border border-zinc-700/30 transition-colors group-hover:border-zinc-600/50">
                  {getIcon(exp.id)}
                </div>
                <span className="font-mono text-[10px] text-zinc-700 tracking-wider font-medium">{exp.number}</span>
              </div>

              <h3 className="text-lg font-semibold text-zinc-100 mb-1 leading-tight">{exp.title}</h3>
              <p className="text-[10px] text-blue-400/80 mb-5 font-mono uppercase tracking-widest">{exp.company}</p>
              <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3">{exp.shortDesc}</p>
            </div>

            <p className="mt-8 text-[9px] text-zinc-600 font-bold tracking-widest group-hover:text-white transition-colors flex items-center">
              VIEW DETAILS
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-1.5">→</span>
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Pop-up Modal Detail */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-${selectedId}`}
              className="bg-zinc-900 border border-zinc-700 p-10 md:p-12 rounded-3xl max-w-2xl w-full shadow-2xl overflow-y-auto max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-7 right-7 text-zinc-600 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l18 18" /></svg>
              </button>

              {experiences.map((exp) => exp.id === selectedId && (
                <div key={`modal-${exp.id}`}>
                  <h2 className="text-3xl font-extrabold text-white tracking-tight mb-3 leading-tight">{exp.title}</h2>
                  <p className="text-blue-400 font-mono text-sm mb-2">{exp.company}</p>
                  <p className="text-zinc-500 font-mono text-xs tracking-wide bg-zinc-800 px-3 py-1 inline-block rounded-md mb-8">{exp.period}</p>

                  <div className="h-[1px] w-full bg-zinc-800 mb-8"></div>

                  <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
                    {exp.detailDesc}
                  </p>

                  <button
                    onClick={() => setSelectedId(null)}
                    className="mt-12 px-6 py-2.5 bg-white text-black text-xs font-extrabold rounded-lg hover:bg-zinc-200 transition-all w-full tracking-widest uppercase"
                  >
                    Close Details
                  </button>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative z-10 py-10 w-full border-t border-zinc-900 mt-20 flex flex-col items-center bg-zinc-950">
        <a
          href="https://linkedin.com/in/ferojadessasa"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-zinc-800 rounded-full text-zinc-500 hover:text-white hover:border-zinc-500 transition-all text-xs font-mono tracking-wide"
        >
          linkedin.com/in/ferojadessasa
        </a>
        <p className="mt-4 text-[9px] text-zinc-800 font-mono">© 2026 Feroja Dessasa Dwipangga. Built with Next.js.</p>
      </footer>

    </main>
  );
}