import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const MoonIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
  </svg>
);
const SunIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 18a6 6 0 0 1-6-6 6 6 0 0 1 6-6 6 6 0 0 1 6 6 6 6 0 0 1-6 6zm0-2a4 4 0 0 0 4-4 4 4 0 0 0-4-4 4 4 0 0 0-4 4 4 4 0 0 0 4 4zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM19 11v2h3v-2h-3zM4 11v2H1v-2h3z" />
  </svg>
);

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-6 bg-[var(--bg-glass)] backdrop-blur-[10px] border-b border-[var(--card-border)] shadow-[var(--shadow)]">
      <div className="container max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <a
          href="#"
          className="text-[var(--text-primary)] font-bold text-xl hover:tracking-wide transition-all duration-200 hover:-translate-y-0.5"
        >
          <span className="text-[var(--accent)] font-bold">&lt;</span> DonDevBenitos{' '}
          <span className="text-[var(--accent)] font-bold">/&gt;</span>
        </a>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-[var(--text-primary)] border border-[var(--card-border)]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            )}
          </svg>
        </button>

        <div
          className={`w-full md:w-auto md:flex items-center gap-1 ${open ? 'flex flex-col' : 'hidden md:flex'}`}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block py-2 px-4 rounded-full text-[var(--text-primary)] font-medium border-2 border-transparent hover:text-[var(--accent)] hover:bg-[rgba(107,142,35,0.15)] hover:border-[rgba(107,142,35,0.4)] hover:shadow-[0_4px_20px_rgba(107,142,35,0.25)] hover:-translate-y-0.5 transition-all duration-200"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="mt-2 md:mt-0 md:ml-2 w-12 h-12 rounded-full bg-[var(--bg-glass)] border border-[var(--card-border)] text-[var(--text-primary)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-white hover:scale-105 transition-all duration-200"
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
          >
            {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
