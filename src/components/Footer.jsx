export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center py-8 bg-[var(--bg-secondary)] text-[var(--text-primary)]">
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:underline"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Resume
        </a>
      </div>
      <p className="m-0">
        © {year}{' '}
        <span className="font-bold">
          <span className="text-[var(--accent)]">&lt;</span> DonDevBenitos{' '}
          <span className="text-[var(--accent)]">/&gt;</span>
        </span>
      </p>
    </footer>
  );
}
