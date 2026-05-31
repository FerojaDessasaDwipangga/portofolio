import React, { useState } from 'react';
import { Factory, Code2, FolderOpen, Award, Settings, ClipboardCheck, LineChart, FileText } from 'lucide-react';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiVite, SiGithub, SiVercel } from 'react-icons/si';

const tabs = [
  { id: 'industrial', label: 'Industrial Operations', icon: Factory, type: 'content' },
  { id: 'techstack', label: 'Tech Stack', icon: Code2, type: 'content' },
  { id: 'certificates', label: 'Certificates', icon: Award, type: 'content' },
  { id: 'projects', label: 'Projects', icon: FolderOpen, type: 'scroll', target: 'projects' },
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
];

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState('industrial');

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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {activeData.map((item, index) => {
          // For certificates, render full image with title
          if (activeTab === 'certificates') {
            return (
              <div
                key={item.title}
                className="group flex flex-col gap-3"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-[4/3] overflow-hidden cursor-pointer"
                  title={item.title}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-2xl shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:scale-105"
                  />
                </a>
                <div className="px-1">
                  <p className="text-sm font-semibold text-base-content/80 text-center line-clamp-2">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          }

          // For other tabs, render icon cards
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

    </div>
  );
}
