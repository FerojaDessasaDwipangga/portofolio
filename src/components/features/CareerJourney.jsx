import React, { useState } from 'react';
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  X
} from 'lucide-react';

const workData = [
  {
    id: 'indospring',
    role: 'PPC Field Apprentice',
    subtitle: 'Production Planning & Control',
    company: 'PT. Indospring Tbk',
    location: 'Gresik, Jawa Timur',
    period: '23 Februari 2026 – Sekarang',
    isCurrent: true,
    logoUrl: 'https://hc.indoprima.co.id/career/uploads/companylogo/4.png',
    tasks: [
      'Memantau Work-In-Progress (WIP) secara langsung di area produksi dan memastikan kelancaran alur kerja.',
      'Melakukan tracking progress produksi harian di lapangan dan melaporkan status ke tim PPC.',
      'Merancang sistem digital kustom berbasis web untuk efisiensi pelaporan WIP.',
      'Berkoordinasi dengan operator produksi, logistik, dan quality control untuk menjaga ketepatan delivery.',
    ],
  },
  {
    id: 'indomarco',
    role: 'Helper DC',
    subtitle: 'Distribution Center',
    company: 'PT. Indomarco Prismatama',
    location: 'Indonesia',
    period: 'November 2024 – November 2025',
    isCurrent: false,
    logoUrl: 'https://images.glints.com/unsafe/160x0/glints-dashboard.oss-ap-southeast-1-internal.aliyuncs.com/company-logo/48bee6157f5b2b838c6ec0944b4bca9e.png',
    tasks: [
      'Melakukan picking barang sesuai order list toko secara cepat dan akurat.',
      'Melakukan scanning barcode item sebelum pengiriman untuk memastikan hasil picking sesuai dengan pesanan toko.',
      'Melakukan stock opname berkala di area picking dan melaporkan selisih.',
      'Menjaga area kerja tetap bersih dan rapi sesuai standar K3.',
    ],
  },
  {
    id: 'alamdianraya',
    role: 'Helper Gudang',
    subtitle: 'Warehouse Operations',
    company: 'PT. Alam Dianraya',
    location: 'Indonesia',
    period: 'Juli 2023 – November 2024',
    isCurrent: false,
    logoUrl: 'https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/da07ff5bc2c9ba74aded7ec78c129d1f.jpeg',
    tasks: [
      'Melakukan proses bongkar muat barang dari dan ke kendaraan pengiriman.',
      'Menata dan menyusun barang di area gudang menggunakan hand stacker atau hand pallet sesuai SOP.',
      'Mengecek kondisi dan jumlah barang sebelum disimpan atau dikirim.',
      'Membantu stock check sederhana saat diperlukan.',
    ],
  },
];

const educationData = [
  {
    id: 'smk',
    school: 'SMK Diponegoro',
    major: 'Teknik Instalasi Tenaga Listrik',
    period: '2019 – 2022',
    grade: 'Nilai rata-rata: 84,23',
  },
  {
    id: 'smp',
    school: 'SMP N 1 Ploso',
    major: 'Pendidikan Umum',
    period: '2016 – 2019',
    grade: 'Akan diperbarui',
  },
  {
    id: 'sd',
    school: 'SDN Tondowulan 2',
    major: 'Pendidikan Dasar',
    period: '',
    grade: 'Akan diperbarui',
  },
];

const tabs = [
  { id: 'work', label: 'Work Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
];

export default function CareerJourney() {
  const [activeTab, setActiveTab] = useState('work');
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div id="journey" className="w-full max-w-6xl mx-auto space-y-10">

      {/* Header */}
      <div className="text-center space-y-3">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
          My <span className="text-accent">Journey</span>
        </h2>
        <p className="text-base-content/50 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Perjalanan karir dan pendidikan yang membentuk keahlian saya di bidang manufaktur dan teknologi.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-base-200/60 border border-base-300 rounded-2xl p-1.5 grid grid-cols-2 gap-1.5 max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setSelectedJob(null); }}
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
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content: Work Experience */}
      {activeTab === 'work' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {workData.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedJob(item)}
                className="group bg-base-100 border border-base-300 rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-md hover:-translate-y-1 flex flex-col items-center text-center gap-4 cursor-pointer"
              >
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-base-300 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <img src={item.logoUrl} alt={item.company} className="w-full h-full object-contain p-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-col items-center gap-1">
                    <h4 className="font-bold text-base-content text-sm">{item.role}</h4>
                    {item.isCurrent && (
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-accent font-medium mt-1">{item.company}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-base-content/30 italic">
            Klik kartu untuk melihat detail pekerjaan
          </p>
        </div>
      )}

      {/* Content: Education */}
      {activeTab === 'education' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {educationData.map((edu) => (
            <div key={edu.id} className="group bg-base-100 border border-base-300 rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-sm hover:-translate-y-1 flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <GraduationCap size={32} className="text-accent" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-base-content text-sm">{edu.school}</h4>
                <p className="text-xs text-accent font-medium">{edu.major}</p>
                {edu.period && (
                  <p className="text-[11px] text-base-content/30">{edu.period}</p>
                )}
                <p className="text-[11px] text-base-content/40">{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal / Popup for Job Details */}
      {selectedJob && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-base-100/80 backdrop-blur-sm" onClick={() => setSelectedJob(null)}></div>
          <div className="relative bg-base-100 border border-base-300 rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 border-b border-base-300 bg-base-200/50">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm border border-base-300 overflow-hidden">
                  <img src={selectedJob.logoUrl} alt={selectedJob.company} className="w-full h-full object-contain p-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-base-content">{selectedJob.role}</h3>
                  <p className="text-accent font-medium text-sm">{selectedJob.company}</p>
                </div>
              </div>
              <button onClick={() => setSelectedJob(null)} className="btn btn-ghost btn-sm btn-circle shrink-0">
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              <div className="flex flex-wrap items-center gap-4 text-xs text-base-content/50">
                <span className="flex items-center gap-1.5 bg-base-200 px-3 py-1.5 rounded-full">
                  <Calendar size={14} className="text-accent" />
                  {selectedJob.period}
                </span>
                <span className="flex items-center gap-1.5 bg-base-200 px-3 py-1.5 rounded-full">
                  <MapPin size={14} className="text-accent" />
                  {selectedJob.location}
                </span>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-widest text-base-content/40">Tugas & Tanggung Jawab</h4>
                <ul className="space-y-2.5">
                  {selectedJob.tasks.map((task, i) => (
                    <li key={i} className="flex gap-3 text-sm text-base-content/70 leading-relaxed">
                      <span className="text-accent mt-1 shrink-0">•</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

