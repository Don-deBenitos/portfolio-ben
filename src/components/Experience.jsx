import { useState, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import { workExperience, education, certifications, experienceIntro } from '../data';

// Icons for subsection labels (outline style, 24x24)
const WorkIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const EducationIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);
const CertificationsIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images?.length) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [images?.length]);

  if (!images?.length) return null;

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="relative w-full min-w-0 aspect-video min-h-[200px] max-h-[280px] rounded-3xl overflow-hidden bg-[var(--bg-primary)]/40 backdrop-blur-md p-3 border-2 border-white/20 shadow-[var(--shadow)]">
      {images.map((src, i) => (
        <div
          key={src + i}
          className="absolute inset-3 transition-opacity duration-500 ease-out rounded-2xl overflow-hidden bg-[var(--bg-primary)]/30 backdrop-blur-sm flex items-center justify-center"
          style={{ opacity: i === index ? 1 : 0, zIndex: i === index ? 1 : 0 }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-contain rounded-xl"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      ))}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
            aria-label="Next image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Experience() {
  const [titleRef, titleActive] = useReveal();
  const [introRef, introActive] = useReveal();

  return (
    <section id="experience" className="py-28 bg-[var(--bg-secondary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(107,142,35,0.08),transparent)] pointer-events-none" />
      <div className="container max-w-5xl mx-auto px-4 relative">
        <div
          ref={titleRef}
          className={`flex justify-center mb-8 ${titleActive ? 'active' : ''} reveal`}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 translate-x-3 translate-y-2 bg-[var(--accent-hover)]/70 skew-x-[-12deg] rounded-md" />
            <div className="relative px-6 py-2.5 sm:px-10 sm:py-3 bg-[var(--accent)] skew-x-[-12deg] rounded-md border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
              <span className="block skew-x-[12deg] text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide">
                Professional Experience
              </span>
            </div>
          </div>
        </div>
        <p
          ref={introRef}
          className={`text-center text-[var(--text-muted)] text-lg sm:text-xl max-w-2xl mx-auto mb-6 leading-relaxed ${introActive ? 'active' : ''} reveal`}
        >
          {experienceIntro}
        </p>
        <div className="flex justify-center mb-16">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 border-[var(--accent)]/60 text-[var(--accent)] bg-transparent hover:bg-[var(--accent)]/10 hover:border-[var(--accent)] hover:text-[var(--text-primary)] transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Work Experience */}
        <SubsectionLabel label="Work Experience" icon={<WorkIcon />} />
        <div className="space-y-12 mb-16">
          {workExperience.map((exp) => (
            <ExperienceCard key={exp.company + exp.period} experience={exp} />
          ))}
        </div>

        {/* Education */}
        <SubsectionLabel label="Education" icon={<EducationIcon />} />
        <div className="space-y-12 mb-16">
          {education.map((ed) => (
            <ExperienceCard key={ed.company + ed.period} experience={ed} />
          ))}
        </div>

        {/* Certifications & Achievements - carousel */}
        <SubsectionLabel label="Certifications & Achievements" icon={<CertificationsIcon />} />
        <CertificationsCarousel certifications={certifications} />
      </div>
    </section>
  );
}

function SubsectionLabel({ label, icon }) {
  const [ref, active] = useReveal();
  return (
    <div
      ref={ref}
      className={`mb-6 flex items-center gap-3 ${active ? 'active' : ''} reveal`}
    >
      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)]">
        {icon}
      </span>
      <h3 className="text-xl font-bold text-[var(--text-primary)] border-b-2 border-[var(--accent)] pb-2 flex-1">
        {label}
      </h3>
    </div>
  );
}

// Carousel for Certifications & Achievements (one cert per slide, image + caption)
function CertificationsCarousel({ certifications }) {
  const [index, setIndex] = useState(0);
  const total = certifications?.length || 0;

  useEffect(() => {
    if (total <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 5000);
    return () => clearInterval(id);
  }, [total]);

  if (!total) return null;

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);
  const cert = certifications[index];

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="rounded-3xl overflow-hidden bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--card-border)] shadow-[var(--shadow)]">
        {/* Certificate / achievement image - fills the box */}
        <div className="relative w-full h-[380px] bg-[var(--bg-primary)]/50 flex items-center justify-center p-3">
          {cert.image ? (
            <img
              src={encodeURI(cert.image)}
              alt={cert.name}
              className="w-full h-full object-contain object-center rounded-2xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling?.classList.remove('hidden');
              }}
            />
          ) : null}
          <div
            className={`w-full h-full flex items-center justify-center text-[var(--text-muted)] ${cert.image ? 'hidden' : ''}`}
          >
            <span className="text-[var(--accent)]/60">No image</span>
          </div>
        </div>
        {/* Caption */}
        <div className="p-4 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--card-border)]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">{cert.period}</span>
            <h4 className="text-base font-bold text-[var(--text-primary)] mt-0.5">{cert.name}</h4>
            <p className="text-[var(--text-muted)] text-sm m-0">{cert.issuer}</p>
          </div>
          {cert.url && (
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--accent)]/20 text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-colors"
            >
              View
            </a>
          )}
        </div>
      </div>
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-0 top-[calc(50%-1.5rem)] -translate-y-1/2 -translate-x-4 sm:-translate-x-12 w-10 h-10 rounded-full bg-[var(--bg-glass)] border border-[var(--card-border)] text-[var(--text-primary)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-colors shadow-lg z-10"
            aria-label="Previous certificate"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-0 top-[calc(50%-1.5rem)] -translate-y-1/2 translate-x-4 sm:translate-x-12 w-10 h-10 rounded-full bg-[var(--bg-glass)] border border-[var(--card-border)] text-[var(--text-primary)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-colors shadow-lg z-10"
            aria-label="Next certificate"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="flex justify-center gap-2 mt-4">
            {certifications.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === index ? 'bg-[var(--accent)] scale-125' : 'bg-[var(--card-border)] hover:bg-[var(--accent)]/60'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ExperienceCard({ experience }) {
  const [ref, active] = useReveal();
  const { title, period, company, description, images } = experience;
  const hasImages = images?.length > 0;

  return (
    <div
      ref={ref}
      className={`grid gap-8 lg:gap-10 items-start bg-[var(--bg-glass)] backdrop-blur-xl rounded-3xl border border-[var(--card-border)] shadow-[var(--shadow)] overflow-hidden hover:border-[var(--accent)]/30 transition-colors duration-300 ${hasImages ? 'lg:grid-cols-[1fr_1.2fr]' : ''} ${active ? 'active' : ''} reveal`}
    >
      <div className={`p-6 lg:py-8 flex flex-col justify-center order-2 ${hasImages ? 'lg:pl-8 lg:order-1' : 'lg:px-10'}`}>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
            {period}
          </span>
          <span className="text-[var(--text-muted)]">·</span>
          <span className="text-[var(--text-muted)] text-sm">{company}</span>
        </div>
        <h3 className="text-2xl font-bold text-[var(--text-primary)] mt-1 mb-3">{title}</h3>
        <p className="text-[var(--text-primary)]/90 text-base leading-relaxed m-0">{description}</p>
      </div>
      {hasImages && (
        <div className="p-6 lg:p-8 lg:pr-8 order-1 lg:order-2 min-w-0 overflow-hidden">
          <ImageCarousel images={images} />
        </div>
      )}
    </div>
  );
}
