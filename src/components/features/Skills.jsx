import React from 'react';
import { 
  Factory, 
  Settings, 
  ClipboardCheck, 
  LineChart,
  Monitor,
  Cpu
} from 'lucide-react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiNextdotjs, 
  SiFirebase,
  SiVite
} from 'react-icons/si';

const SkillCard = ({ icon, name }) => (
  <div className="group flex flex-col items-center justify-center gap-4 p-6 md:p-8 bg-base-200 border border-base-300 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:bg-base-200/80 cursor-default">
    <div className="transition-transform duration-300 group-hover:scale-110">
      {icon}
    </div>
    <span className="text-sm font-semibold text-base-content/70 group-hover:text-base-content transition-colors duration-300 text-center">
      {name}
    </span>
  </div>
);

export default function Skills() {
  const industrialSkills = [
    { name: 'Production Planning', icon: <Factory size={44} className="text-accent" strokeWidth={1.5} /> },
    { name: 'WIP Tracking', icon: <Settings size={44} className="text-accent" strokeWidth={1.5} /> },
    { name: 'Stock Opname', icon: <ClipboardCheck size={44} className="text-accent" strokeWidth={1.5} /> },
    { name: 'Supply Chain Logic', icon: <LineChart size={44} className="text-accent" strokeWidth={1.5} /> },
  ];

  const techSkills = [
    { name: 'React', icon: <FaReact size={44} color="#61DAFB" /> },
    { name: 'Next.js', icon: <SiNextdotjs size={44} className="text-base-content" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={44} color="#06B6D4" /> },
    { name: 'Vite', icon: <SiVite size={44} color="#646CFF" /> },
    { name: 'Firebase', icon: <SiFirebase size={44} color="#FFCA28" /> },
    { name: 'Node.js', icon: <FaNodeJs size={44} color="#339933" /> },
    { name: 'Web Monitoring', icon: <Monitor size={44} color="#3b82f6" strokeWidth={1.5} /> },
    { name: 'System Logic', icon: <Cpu size={44} color="#8b5cf6" strokeWidth={1.5} /> },
  ];

  return (
    <div id="skills" className="w-full space-y-16">

      {/* Tech Stack Grid */}
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center gap-3 px-1">
          <div className="h-px flex-1 bg-base-300"></div>
          <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-base-content/50">
            Tech Stack
          </h3>
          <div className="h-px flex-1 bg-base-300"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techSkills.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>

      {/* Industrial Operations Grid */}
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center gap-3 px-1">
          <div className="h-px flex-1 bg-base-300"></div>
          <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-base-content/50">
            Industrial Operations
          </h3>
          <div className="h-px flex-1 bg-base-300"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {industrialSkills.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>

    </div>
  );
}
