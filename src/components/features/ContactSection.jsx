import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, Share2, MessageCircle, Image } from 'lucide-react';

export default function ContactSection() {
  const [comments, setComments] = useState([
    { id: 1, name: 'Recruiter Demo', message: 'Great portfolio! Love the industrial + tech combination.', date: '2026-05-15' },
  ]);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [commentForm, setCommentForm] = useState({ name: '', message: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = contactForm;
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    window.open(`mailto:contact@feroja.my.id?subject=${subject}&body=${body}`, '_self');
    setContactForm({ name: '', email: '', message: '' });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentForm.name.trim() || !commentForm.message.trim()) return;
    const newComment = {
      id: Date.now(),
      name: commentForm.name,
      message: commentForm.message,
      date: new Date().toISOString().split('T')[0],
    };
    setComments(prev => [newComment, ...prev]);
    setCommentForm({ name: '', message: '' });
  };

  return (
    <section id="contact" className="w-full">
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <p className="text-base-content/50 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Punya pertanyaan? Kirimi saya pesan, dan saya akan segera membalasnya.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        
        {/* Left - Contact Form */}
        <div className="bg-base-200 border border-base-300 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-accent">Contact</h3>
              <p className="text-base-content/50 text-sm mt-1">
                Ada yang ingin didiskusikan? Kirim saya pesan dan mari kita bicara.
              </p>
            </div>
            <Share2 size={20} className="text-base-content/30" />
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="relative">
              <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30" />
              <input
                type="text"
                placeholder="Nama Anda"
                value={contactForm.name}
                onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                required
                className="input input-bordered w-full pl-11 bg-base-300/50 border-base-300 focus:border-accent focus:outline-none rounded-xl text-sm placeholder:text-base-content/30"
              />
            </div>
            <div className="relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30" />
              <input
                type="email"
                placeholder="Email Anda"
                value={contactForm.email}
                onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                required
                className="input input-bordered w-full pl-11 bg-base-300/50 border-base-300 focus:border-accent focus:outline-none rounded-xl text-sm placeholder:text-base-content/30"
              />
            </div>
            <div className="relative">
              <MessageSquare size={16} className="absolute left-4 top-4 text-base-content/30" />
              <textarea
                placeholder="Pesan Anda"
                rows={4}
                value={contactForm.message}
                onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                required
                className="textarea textarea-bordered w-full pl-11 bg-base-300/50 border-base-300 focus:border-accent focus:outline-none rounded-xl text-sm resize-none placeholder:text-base-content/30"
              />
            </div>
            <button
              type="submit"
              className="btn btn-accent w-full rounded-xl font-bold tracking-wider text-sm gap-2 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Send size={16} />
              Kirim Pesan
            </button>
          </form>
        </div>

        {/* Right - Comments / Guestbook */}
        <div className="bg-base-200 border border-base-300 rounded-2xl p-6 md:p-8 space-y-6 flex flex-col">
          <div className="flex items-center gap-3">
            <MessageCircle size={22} className="text-accent" />
            <h3 className="text-xl font-bold text-base-content">
              Comments <span className="text-base-content/40 font-normal text-base">({comments.length})</span>
            </h3>
          </div>

          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-base-content/60 mb-1 block">
                Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={commentForm.name}
                onChange={(e) => setCommentForm(prev => ({ ...prev, name: e.target.value }))}
                required
                className="input input-bordered w-full bg-base-300/50 border-base-300 focus:border-accent focus:outline-none rounded-xl text-sm placeholder:text-base-content/30"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-base-content/60 mb-1 block">
                Message <span className="text-accent">*</span>
              </label>
              <textarea
                placeholder="Write your message here..."
                rows={3}
                value={commentForm.message}
                onChange={(e) => setCommentForm(prev => ({ ...prev, message: e.target.value }))}
                required
                className="textarea textarea-bordered w-full bg-base-300/50 border-base-300 focus:border-accent focus:outline-none rounded-xl text-sm resize-none placeholder:text-base-content/30"
              />
            </div>
            <button
              type="submit"
              className="btn btn-accent w-full rounded-xl font-bold tracking-wider text-sm gap-2 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Send size={16} />
              Post Comment
            </button>
          </form>

          {/* Comments List */}
          <div className="flex-1 overflow-y-auto max-h-48 space-y-3 pr-1">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-base-300/40 rounded-xl p-4 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-base-content">{comment.name}</span>
                  <span className="text-[10px] text-base-content/30 font-mono">{comment.date}</span>
                </div>
                <p className="text-sm text-base-content/60 leading-relaxed">{comment.message}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
