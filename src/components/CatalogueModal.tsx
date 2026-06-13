import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_dnazwdl';
const EMAILJS_TEMPLATE_ID = 'template_pmiv158';
const EMAILJS_PUBLIC_KEY = 'cmU1HRr_2S6TTlXiv';

interface CatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
  catalogueUrl: string;
}

export default function CatalogueModal({ isOpen, onClose, catalogueUrl }: CatalogueModalProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          company,
          reply_to: email,
          phone,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');

      // trigger download after notification sent
      const link = document.createElement('a');
      link.href = catalogueUrl;
      link.download = 'FeX Catalogue 2026.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        setStatus('idle');
        setName('');
        setCompany('');
        setEmail('');
        setPhone('');
        onClose();
      }, 2500);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputClass = "w-full bg-slate-50 border border-slate-200 py-3 px-4 rounded text-sm text-slate-800 focus:outline-none focus:border-industrial-red transition-colors placeholder:text-slate-400";
  const labelClass = "text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1.5";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-md pointer-events-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <div>
                  <h2 className="font-display font-extrabold text-dark-navy text-lg">Download Catalogue</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Please share your details to receive the catalogue</p>
                </div>
                <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                  <X size={20} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                  />
                </div>
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
                <div>
                  <label className={labelClass}>Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className="w-full bg-industrial-red hover:bg-secondary-red text-white py-3.5 px-6 font-sans text-xs uppercase tracking-widest font-extrabold transition-all duration-200 rounded flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {status === 'sending' ? (
                    <><Loader2 size={14} className="animate-spin" /> Sending...</>
                  ) : status === 'success' ? (
                    <><CheckCircle size={14} /> Downloading...</>
                  ) : (
                    <><Download size={14} /> Download Now</>
                  )}
                </button>

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded p-3 flex items-start gap-2">
                    <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={14} />
                    <p className="text-xs text-red-700">Something went wrong. Please try again.</p>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
