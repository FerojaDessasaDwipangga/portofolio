import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MessageCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import profilePic from '../../assets/profile.jpg';

// Authentic Brand Icons (Perfectly Sized to Prevent Clipping)
const WhatsAppIcon = ({ size = 28, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="-1 -1 26 26" {...props}>
    <path fill="#25D366" d="M11.99 0C5.367 0 0 5.366 0 11.99c0 2.63.847 5.068 2.302 7.05L.81 23.606l4.686-1.551A11.93 11.93 0 0 0 11.99 24c6.623 0 11.99-5.366 11.99-11.99S18.613 0 11.99 0z"/>
    <path fill="#FFF" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
  </svg>
);

const LinkedinIcon = ({ size = 28, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="12" fill="#0A66C2"/>
    <path fill="#FFF" d="M8.36 17.65H5.41V9.8h2.95v7.85zM6.88 8.48a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44zm11.72 9.17h-2.95v-4.63c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.77 1.2-1.77 2.44v4.71H9.39V9.8h2.83v1.07h.04c.39-.75 1.36-1.54 2.8-1.54 3 0 3.55 1.97 3.55 4.54v3.78z"/>
  </svg>
);

const InstagramIcon = ({ size = 28, ...props }) => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" 
    alt="Instagram" 
    style={{ width: size, height: size, objectFit: 'contain' }}
    className="drop-shadow-sm"
    {...props} 
  />
);

const GithubIcon = ({ size = 28, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="12" fill="#24292e"/>
    <path fill="#FFF" d="M12 2.7c-5.1 0-9.3 4.2-9.3 9.3 0 4.1 2.7 7.6 6.4 8.8.5.1.6-.2.6-.4v-1.7c-2.6.6-3.1-1.3-3.1-1.3-.4-1.1-1-1.4-1-1.4-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .5-1.3-2.1-.2-4.2-1-4.2-4.6 0-1 .4-1.8 1-2.5-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.6 1 .8-.2 1.6-.3 2.4-.3.8 0 1.6.1 2.4.3 1.8-1.2 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.5 1 2.5 0 3.6-2.1 4.3-4.2 4.6.3.3.6.8.6 1.7v2.6c0 .3.2.5.6.4 3.7-1.2 6.4-4.7 6.4-8.8 0-5.1-4.2-9.3-9.3-9.3z"/>
  </svg>
);

const EmailIcon = ({ size = 28, ...props }) => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" 
    alt="Gmail" 
    style={{ width: size, height: size, objectFit: 'contain' }}
    className="drop-shadow-sm"
    {...props} 
  />
);

const socialLinks = [
  { 
    name: 'WhatsApp', 
    icon: WhatsAppIcon, 
    url: 'https://wa.me/6285704536965',
    color: '#25D366'
  },
  { 
    name: 'LinkedIn', 
    icon: LinkedinIcon, 
    url: 'https://www.linkedin.com/in/ferojadessasa/',
    color: '#0A66C2'
  },
  { 
    name: 'GitHub', 
    icon: GithubIcon, 
    url: 'https://github.com/FerojaDessasaDwipangga',
    color: 'var(--github-bg)',
    textColor: 'var(--github-text)'
  },
  { 
    name: 'Instagram', 
    icon: InstagramIcon, 
    url: 'https://www.instagram.com/_ferooo__/',
    color: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    textColor: '#FFFFFF'
  },
  { 
    name: 'Email', 
    icon: EmailIcon, 
    url: 'mailto:contact@feroja.my.id',
    color: 'var(--email-bg)',
    textColor: 'var(--email-text)'
  },
];

const ROLES = [
  "SYSTEM LOGIC DESIGNER",
  "PPC FIELD OPERATOR",
  "WEB SYSTEM DEVELOPER",
  "PRODUCTION CONTROLLER"
];

const Hero = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center px-6 lg:px-16 overflow-hidden pt-20 lg:pt-0">
      <div className="container relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Bagian Kiri (Teks & Identitas) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-left order-2 lg:order-1"
        >
          <div className="space-y-2">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-base-200/40 border border-base-content/10 backdrop-blur-sm mb-6 shadow-sm"
            >
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </div>
              <span className="text-xs font-mono text-base-content/80 uppercase tracking-[0.2em] font-bold">
                Ready to Innovate
              </span>
            </motion.div>

            <p className="text-accent font-mono tracking-[0.3em] text-sm uppercase font-bold">
              Hi there, I'm
            </p>
            <div className="space-y-1">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-base-content uppercase">
                FEROJA
              </h1>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-accent uppercase">
                DESSASA
              </h1>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-base-content/30 uppercase">
                DWIPANGGA
              </h1>
            </div>
            <div className="h-8 md:h-10 mt-4 flex items-center">
              <h2 className="text-xl md:text-2xl font-mono text-base-content/80 tracking-widest uppercase font-bold">
                <Typewriter
                  words={ROLES}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={70}
                  delaySpeed={2500}
                />
              </h2>
            </div>
          </div>

          <p className="text-lg md:text-xl text-base-content/60 max-w-xl leading-relaxed font-medium">
            Profesional PPC yang menjembatani operasional manufaktur dan teknologi. 
            Berpengalaman merancang sistem digital kustom berbasis web untuk efisiensi 
            Work-In-Progress (WIP) dan manajemen alur kerja pabrik.
          </p>

          {/* Media Sosial Interaktif */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-8 bg-accent"></div>
                <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-base-content/60">
                  Connect With Me
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 items-center">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    animate={{ 
                      width: hoveredSocial === social.name ? 'auto' : '40px',
                      background: hoveredSocial === social.name ? social.color : 'transparent',
                    }}
                    className="flex items-center h-10 rounded-full overflow-hidden transition-colors duration-300 cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-[40px] h-[40px] flex items-center justify-center">
                      <social.icon size={26} className="drop-shadow-sm" />
                    </div>
                    {hoveredSocial === social.name && (
                      <motion.span 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="whitespace-nowrap font-bold text-sm ml-1 pr-5"
                        style={{ color: social.textColor || '#FFFFFF' }}
                      >
                        {social.name}
                      </motion.span>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a 
                href="#projects" 
                className="group btn btn-accent btn-sm rounded-none px-5 text-xs md:text-sm font-black tracking-widest uppercase hover:-translate-y-1 transition-all duration-300 border-2 border-accent shadow-none"
              >
                PROJECTS
                <ArrowRight size={14} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a 
                href="/resume-feroja.pdf" 
                download
                className="btn btn-outline btn-sm rounded-none px-5 text-xs md:text-sm border-2 font-black tracking-widest uppercase hover:-translate-y-1 transition-all duration-300 hover:bg-transparent hover:border-accent hover:text-accent"
              >
                <Download size={14} className="mr-1" />
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bagian Kanan (Visual Foto) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Container Foto */}
            <div className="relative w-72 h-96 md:w-80 md:h-[480px] overflow-hidden rounded-[3rem] bg-base-200 border-4 border-base-100">
              <img 
                src={profilePic} 
                alt="Feroja Dessasa" 
                className="w-full h-full object-cover transition-all duration-700 scale-110 hover:scale-100"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
