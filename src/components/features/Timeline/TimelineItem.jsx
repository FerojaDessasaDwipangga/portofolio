import { CheckCircle2 } from 'lucide-react';

export default function TimelineItem({ date, title, subtitle, description, isLast, icon: Icon }) {
  return (
    <li>
      {!isLast && <hr className="bg-accent/30" />}
      <div className="timeline-middle">
        {Icon ? (
          <div className="bg-accent/10 p-2 rounded-full border border-accent/20 text-accent">
            <Icon size={18} />
          </div>
        ) : (
          <CheckCircle2 size={24} className="text-accent" />
        )}
      </div>
      <div className="timeline-start md:text-end mb-10 md:mr-4 space-y-1">
        <time className="font-mono text-xs font-bold opacity-40 uppercase tracking-widest">{date}</time>
        <div className="text-lg font-black text-accent">{title}</div>
        <div className="text-sm font-bold opacity-70">{subtitle}</div>
        <p className="text-xs max-w-xs md:ml-auto opacity-50 leading-relaxed italic">
          {description}
        </p>
      </div>
      <hr className="bg-accent/30" />
    </li>
  );
}
