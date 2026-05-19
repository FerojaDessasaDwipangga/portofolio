import TimelineItem from './TimelineItem';
import { Briefcase, Activity, Code, GraduationCap } from 'lucide-react';

export default function Timeline() {
  const milestones = [
    {
      date: '2023 - 2025',
      title: 'Helper & Operations',
      subtitle: 'PT Alam Dianraya / Indomarco Prismatama',
      description: 'Foundational experience in industrial logistics and distribution center operations, managing stock flow and administrative accuracy.',
      icon: Briefcase,
    },
    {
      date: 'March 2026',
      title: 'PPC Field Operator',
      subtitle: 'Plant 6, U-bolt/Centerbolt Monitoring',
      description: 'Taking charge of real-time production monitoring. Identified critical bottlenecks in the assembly line through data-driven observations.',
      icon: Activity,
    },
    {
      date: 'April 2026',
      title: 'Digital Solution Deployment',
      subtitle: 'Stock Opname Web App',
      description: 'Bridged the gap by building a custom Next.js/Firebase application to digitize manual stock counting, reducing lag by 40%.',
      icon: Code,
    },
    {
      date: 'May 2026',
      title: 'Digital Portfolio Launch',
      subtitle: 'Current Milestone',
      description: 'Consolidating operational expertise and technical skills into a professional digital presence. Continuously optimizing for excellence.',
      icon: GraduationCap,
    },
  ];

  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {milestones.map((item, index) => (
        <TimelineItem 
          key={index}
          {...item}
          isLast={index === milestones.length - 1}
        />
      ))}
    </ul>
  );
}
