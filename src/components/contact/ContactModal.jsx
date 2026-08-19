import { useState, useEffect, useRef } from 'react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    opportunity: 'Internship opportunity',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const firstInputRef = useRef();

  // Handle ESC key press & body scroll locking
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      setStatus('idle');
      setErrors({});
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.opportunity) {
      newErrors.opportunity = 'Please select an opportunity type.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE';

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          company: formData.company || 'N/A',
          opportunity: formData.opportunity,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name} (${formData.opportunity})`,
          from_name: 'Portfolio Contact Form',
        }),
      });

      const result = await response.json();
      if (result.success || response.status === 200) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('[ContactModal] Form submission error:', err);
      setStatus('error');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      {/* Modal Container: Max-width 640px, Max-height 85vh (desktop) / 90vh (mobile), internal scroll */}
      <div 
        className="w-full max-w-[640px] max-h-[85vh] sm:max-h-[85vh] bg-[#080808] border border-[#242424] rounded-[2px] shadow-2xl p-6 sm:p-9 relative overflow-y-auto text-[#F2F2F0] font-sans my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#242424] mb-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[#A6B84A] uppercase tracking-widest mb-1 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7F000]" />
              <span>[ CONTACT // 01 ]</span>
            </div>
            <h2 id="contact-modal-title" className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight uppercase text-[#F2F2F0]">
              LET'S TALK.
            </h2>
            <p className="font-sans text-xs text-[#858585] mt-1">
              Tell me a little about yourself and what you'd like to build.
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close contact modal"
            className="font-mono text-xs text-[#858585] hover:text-[#A6B84A] transition-colors uppercase tracking-widest font-semibold flex items-center gap-1 px-2.5 py-1 border border-[#242424] hover:border-[#A6B84A] rounded-[2px]"
          >
            <span>× CLOSE</span>
          </button>
        </div>

        {/* Dynamic Modal Body */}
        {status === 'success' ? (
          /* SUCCESS STATE */
          <div className="py-10 flex flex-col items-center justify-center text-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#A6B84A]/10 border border-[#A6B84A] flex items-center justify-center text-[#A6B84A] text-xl font-bold font-mono">
              ✓
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#F2F2F0] uppercase tracking-tight mb-2">
                MESSAGE SENT ✓
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#858585] max-w-sm leading-relaxed">
                Thanks for reaching out. I'll get back to you soon.
              </p>
            </div>
            <button
              onClick={onClose}
              className="mt-2 px-8 py-3 bg-[#A6B84A] text-[#080808] font-mono text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-[#B7F000] transition-all"
            >
              CLOSE
            </button>
          </div>
        ) : status === 'error' ? (
          /* ERROR STATE */
          <div className="py-8 flex flex-col items-center justify-center text-center gap-5">
            <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/40 flex items-center justify-center text-red-400 text-lg font-bold font-mono">
              !
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#F2F2F0] uppercase tracking-tight mb-1">
                MESSAGE COULD NOT BE SENT
              </h3>
              <p className="font-sans text-xs text-[#858585] max-w-sm leading-relaxed">
                Something went wrong. Please try again or contact me directly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button
                onClick={() => setStatus('idle')}
                className="px-5 py-2.5 bg-[#080808] border border-[#242424] text-[#F2F2F0] font-mono text-xs font-semibold uppercase tracking-wider rounded-[2px] hover:border-[#A6B84A] hover:text-[#A6B84A] transition-all"
              >
                TRY AGAIN
              </button>
              <a
                href="mailto:meet.alshi@gmail.com"
                className="px-5 py-2.5 bg-[#A6B84A] text-[#080808] font-mono text-xs font-bold uppercase tracking-wider rounded-[2px] hover:bg-[#B7F000] transition-all text-center"
              >
                EMAIL ME →
              </a>
            </div>
          </div>
        ) : (
          /* FORM STATE */
          <form onSubmit={handleSubmit} className="flex flex-col gap-4.5" noValidate>
            {/* FIELD 01: NAME */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="font-mono text-[11px] font-semibold text-[#858585] uppercase tracking-wider">
                YOUR NAME <span className="text-[#A6B84A]">*</span>
              </label>
              <input
                ref={firstInputRef}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="bg-[#050505] border border-[#252525] text-[#F2F2F0] text-xs sm:text-sm h-[46px] rounded-[2px] px-3.5 focus:outline-none focus:border-[#A6B84A] transition-colors placeholder:text-[#666666]"
              />
              {errors.name && <span className="font-mono text-[10px] text-red-400">{errors.name}</span>}
            </div>

            {/* FIELD 02: EMAIL */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="font-mono text-[11px] font-semibold text-[#858585] uppercase tracking-wider">
                EMAIL <span className="text-[#A6B84A]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="bg-[#050505] border border-[#252525] text-[#F2F2F0] text-xs sm:text-sm h-[46px] rounded-[2px] px-3.5 focus:outline-none focus:border-[#A6B84A] transition-colors placeholder:text-[#666666]"
              />
              {errors.email && <span className="font-mono text-[10px] text-red-400">{errors.email}</span>}
            </div>

            {/* FIELD 03: COMPANY (OPTIONAL) */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="company" className="font-mono text-[11px] font-semibold text-[#858585] uppercase tracking-wider">
                COMPANY / ORGANIZATION <span className="text-[#5F5F5B]">(OPTIONAL)</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company or organization"
                className="bg-[#050505] border border-[#252525] text-[#F2F2F0] text-xs sm:text-sm h-[46px] rounded-[2px] px-3.5 focus:outline-none focus:border-[#A6B84A] transition-colors placeholder:text-[#666666]"
              />
            </div>

            {/* FIELD 04: OPPORTUNITY TYPE */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="opportunity" className="font-mono text-[11px] font-semibold text-[#858585] uppercase tracking-wider">
                WHAT ARE YOU INTERESTED IN? <span className="text-[#A6B84A]">*</span>
              </label>
              <select
                id="opportunity"
                name="opportunity"
                value={formData.opportunity}
                onChange={handleChange}
                className="bg-[#050505] border border-[#252525] text-[#F2F2F0] text-xs sm:text-sm h-[46px] rounded-[2px] px-3.5 focus:outline-none focus:border-[#A6B84A] transition-colors"
              >
                <option value="Internship opportunity">Internship opportunity</option>
                <option value="Full-stack development">Full-stack development</option>
                <option value="Freelance / project">Freelance / project</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Hackathon / technical project">Hackathon / technical project</option>
                <option value="Other">Other</option>
              </select>
              {errors.opportunity && <span className="font-mono text-[10px] text-red-400">{errors.opportunity}</span>}
            </div>

            {/* FIELD 05: MESSAGE */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-mono text-[11px] font-semibold text-[#858585] uppercase tracking-wider">
                MESSAGE <span className="text-[#A6B84A]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity or project..."
                className="bg-[#050505] border border-[#252525] text-[#F2F2F0] text-xs sm:text-sm h-[115px] rounded-[2px] p-3.5 focus:outline-none focus:border-[#A6B84A] transition-colors placeholder:text-[#666666] resize-none"
              />
              {errors.message && <span className="font-mono text-[10px] text-red-400">{errors.message}</span>}
            </div>

            {/* SUBMIT BUTTON */}
            <div className="pt-2 pb-1">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full h-[48px] bg-[#A6B84A] text-[#080808] font-mono text-xs font-bold uppercase tracking-widest rounded-[2px] hover:bg-[#B7F000] hover:-translate-y-0.5 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE →'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
