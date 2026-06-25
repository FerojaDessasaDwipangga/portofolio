import React from 'react';
import { Download, ExternalLink, FileText, ImageIcon, Award } from 'lucide-react';

const certificates = [
  {
    title: 'AI Fluency',
    file: '/sertifikat/AI Fluency.png',
    type: 'image',
    description: 'Sertifikat pelatihan AI Fluency.',
  },
  {
    title: '21K Finisher – Isoplus Half Marathon 2025',
    file: '/sertifikat/21K Finisher – Isoplus Half Marathon 2025.jpg',
    type: 'image',
    description: 'Sertifikat penyelesaian acara lari half marathon.',
  },
  {
    title: 'Kelas Persiapan Kerja',
    file: '/sertifikat/Kelas Persiapan Kerja.by sekolahmu.pdf',
    type: 'pdf',
    description: 'Sertifikat persiapan kerja dari Sekolahmu.',
  },
  {
    title: 'Mini Course Digital Marketing',
    file: '/sertifikat/Mini Course Digital Marketing.by sekolahmu.pdf',
    type: 'pdf',
    description: 'Sertifikat mini course digital marketing dari Sekolahmu.',
  },
  {
    title: 'Praktek Kerja Industri',
    file: '/sertifikat/Sertifikat praktek kerja Industri.pdf',
    type: 'pdf',
    description: 'Sertifikat praktik kerja industri.',
  },
  
];

const renderIcon = (type) => {
  if (type === 'image') return <ImageIcon size={22} className="text-accent" />;
  return <FileText size={22} className="text-accent" />;
};

const CertificateModal = () => {
  return (
    <section id="certificates" className="space-y-8 py-16 lg:py-24">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-accent font-bold uppercase tracking-[0.4em] text-[0.7rem]">
          <Award size={16} /> Certificates
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Sertifikat dan Penghargaan</h2>
        <p className="max-w-2xl mx-auto text-base-content/60 leading-relaxed">
          Berikut beberapa sertifikat yang telah saya peroleh. Klik untuk melihat dokumen dan unduh bila ingin memeriksa secara lengkap.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {certificates.map((item) => {
          const encodedUrl = encodeURI(item.file);
          return (
            <article
              key={item.title}
              className="group rounded-3xl border border-base-300 bg-base-200/70 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-black tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm text-base-content/70">{item.description}</p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-base-100 text-accent shadow-sm">
                  {renderIcon(item.type)}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={encodedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm gap-2"
                >
                  <ExternalLink size={16} /> Lihat
                </a>
                <a href={encodedUrl} download className="btn btn-accent btn-sm gap-2">
                  <Download size={16} /> Unduh
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CertificateModal;
