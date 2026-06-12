import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function EnquiryForm() {
  const [fullName, setFullName] = useState('');
  const [designation, setDesignation] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;
    setSubmitted(true);
    setFullName('');
    setDesignation('');
    setCompany('');
    setEmail('');
    setDescription('');
    setTimeout(() => setSubmitted(false), 6000);
  };

  const inputClass = "w-full bg-slate-50 border border-slate-200 py-3 px-4 rounded text-sm text-slate-800 focus:outline-none focus:border-industrial-red transition-colors placeholder:text-slate-400";
  const labelClass = "text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1.5";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 space-y-12"
      id="enquiry-view"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left — heading + contact info */}
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-extrabold text-industrial-red font-mono">Contact Us</span>
            <h1 className="font-display text-3xl md:text-4xl font-extrabold text-brand-primary leading-tight">
              Feel Free to Contact
            </h1>
            <div className="w-16 h-1.5 bg-industrial-red rounded"></div>
            <p className="text-slate-500 text-sm leading-relaxed pt-1">Happy to assist you!</p>
          </div>

          <div className="space-y-5 pt-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-red-50 flex items-center justify-center shrink-0">
                <MapPin className="text-industrial-red" size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-dark-navy font-display uppercase tracking-wide mb-1">Registered Office</p>
                <p className="text-sm text-slate-500 leading-relaxed">AN-64C, Shalimar Bagh,<br />New Delhi - 110088, INDIA</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-red-50 flex items-center justify-center shrink-0">
                <Phone className="text-industrial-red" size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-dark-navy font-display uppercase tracking-wide mb-1">Mobile</p>
                <a href="tel:+919350613737" className="text-sm text-slate-500 hover:text-industrial-red transition-colors">+91 9350613737</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-red-50 flex items-center justify-center shrink-0">
                <Mail className="text-industrial-red" size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-dark-navy font-display uppercase tracking-wide mb-1">Email</p>
                <a href="mailto:sales@fexalloys.com" className="text-sm text-slate-500 hover:text-industrial-red transition-colors">sales@fexalloys.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-7 lg:col-start-6 bg-white border border-slate-200 rounded-lg p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Designation</label>
                <input
                  type="text"
                  placeholder="e.g. Purchase Manager"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Company</label>
                <input
                  type="text"
                  placeholder="Company name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Description</label>
              <textarea
                rows={5}
                placeholder="Tell us about your requirements..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-industrial-red hover:bg-secondary-red text-white py-3.5 px-6 font-sans text-xs uppercase tracking-widest font-extrabold transition-all duration-200 rounded flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
            >
              <Send size={14} /> Send Message
            </button>

          </form>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-5 bg-emerald-50 border-2 border-emerald-400 rounded p-4 flex items-start gap-3"
              >
                <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-display font-bold text-emerald-900 text-sm">Message Sent!</h4>
                  <p className="text-xs text-emerald-700 mt-1">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
}
