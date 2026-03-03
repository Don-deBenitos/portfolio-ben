import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { contactIntro } from '../data';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:alagasejb@gmail.com',
    label: 'alagasejb@gmail.com',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/benito-jr-alagase-05a989325/',
    label: 'Benito Jr Alagase',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Don-deBenitos',
    label: 'Don-deBenitos',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/janbenito.alagase/',
    label: 'Jan Benito Alagase',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [sectionRef, sectionActive] = useReveal();
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setSending(true);
    const form = e.target;
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    try {
      const res = await fetch('https://formsubmit.co/ajax/alagasejb@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
          _replyto: email,
          _subject: `Portfolio contact from ${name}`,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[var(--bg-secondary)] relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 relative">
        <div
          ref={sectionRef}
          className={`flex justify-center mb-6 ${sectionActive ? 'active' : ''} reveal`}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 translate-x-3 translate-y-2 bg-[var(--accent-hover)]/70 skew-x-[-12deg] rounded-md" />
            <div className="relative px-6 py-2.5 sm:px-10 sm:py-3 bg-[var(--accent)] skew-x-[-12deg] rounded-md border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
              <span className="block skew-x-[12deg] text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide">
                Contact Me
              </span>
            </div>
          </div>
        </div>
        <p className={`text-center text-[var(--text-muted)] text-lg max-w-2xl mx-auto mb-12 leading-relaxed ${sectionActive ? 'active' : ''} reveal`}>
          {contactIntro}
        </p>

        {status === 'success' && (
          <div className="max-w-2xl mx-auto mb-6 p-4 rounded-xl bg-[rgba(107,142,35,0.2)] border border-[var(--accent)] text-[var(--text-primary)] text-center">
            Message sent successfully!
          </div>
        )}
        {status === 'error' && (
          <div className="max-w-2xl mx-auto mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500 text-[var(--text-primary)] text-center">
            Something went wrong. Please try again.
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: Form */}
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 bg-[var(--bg-glass)] backdrop-blur-[10px] rounded-2xl border border-[var(--card-border)] shadow-[var(--shadow)]"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="contact-name" className="block text-[var(--text-primary)] font-medium text-sm mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-[var(--text-primary)] font-medium text-sm mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-colors"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="contact-message" className="block text-[var(--text-primary)] font-medium text-sm mb-1">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[var(--text-primary)] placeholder-[var(--text-muted)] min-h-[140px] resize-y focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-colors"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto px-8 py-3 rounded-full font-semibold bg-[var(--accent)] text-white border-2 border-white/40 shadow-[0_4px_16px_rgba(107,142,35,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(107,142,35,0.4)] transition-all duration-200 disabled:opacity-70"
            >
              {sending ? 'Sending…' : 'Send Message'}
            </button>
          </form>

          {/* Right: Social & contact */}
          <div className="p-6 sm:p-8 bg-[var(--bg-glass)] backdrop-blur-[10px] rounded-2xl border border-[var(--card-border)] shadow-[var(--shadow)]">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Connect with me</h3>
            <p className="text-[var(--text-muted)] text-sm mb-6">
              Reach out via email or find me on these platforms.
            </p>
            <ul className="space-y-4">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl border border-[var(--card-border)] bg-white/5 hover:bg-[var(--accent)]/10 hover:border-[var(--accent)]/40 transition-colors group"
                  >
                    <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--accent)]/20 text-[var(--accent)] flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
                      {item.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="block font-semibold text-[var(--text-primary)]">{item.name}</span>
                      <span className="block text-sm text-[var(--text-muted)] truncate">{item.label}</span>
                    </div>
                    <svg className="w-5 h-5 flex-shrink-0 text-[var(--accent)] opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
