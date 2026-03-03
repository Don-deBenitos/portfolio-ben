import { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { skillSet } from '../data';

function SkillIcon({ skill }) {
  return (
    <span className="skill-icon-wrap flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--bg-glass)] border border-[var(--card-border)] overflow-hidden flex-shrink-0">
      <img
        src={`/assets/${skill.icon}`}
        alt=""
        className="w-8 h-8 object-contain"
        onError={(e) => {
          e.target.style.display = 'none';
          const wrap = e.target.closest('.skill-icon-wrap');
          const fallback = wrap?.querySelector('.skill-icon-fallback');
          if (fallback) fallback.classList.remove('hidden');
        }}
      />
      <span className="skill-icon-fallback hidden w-8 h-8 flex items-center justify-center text-lg font-bold text-[var(--accent)]" aria-hidden>
        {skill.name.charAt(0)}
      </span>
    </span>
  );
}

function SkillCard({ skill, index, isVisible }) {
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const t = setTimeout(() => setFilled(true), 120 + index * 80);
    return () => clearTimeout(t);
  }, [isVisible, index]);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--card-border)] p-5 shadow-[var(--shadow)] transition-all duration-300 hover:scale-[1.02] hover:border-[var(--accent)]/40 hover:shadow-[0_0_32px_rgba(107,142,35,0.2)] hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="relative flex items-start gap-4">
        <SkillIcon skill={skill} />
        <div className="flex-1 min-w-0 pt-0.5">
          <div className="flex justify-between items-baseline gap-2 mb-2">
            <span className="font-semibold text-[var(--text-primary)] truncate">{skill.name}</span>
            <span className="text-sm font-bold text-[var(--accent)] tabular-nums flex-shrink-0">
              {skill.percent}%
            </span>
          </div>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden skill-progress-track">
            <div
              className="h-full rounded-full bg-[var(--accent)] transition-[width] duration-1000 ease-out"
              style={{ width: filled ? `${skill.percent}%` : '0%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [sectionRef, sectionVisible] = useReveal();
  const [titleRef, titleActive] = useReveal();

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-28 bg-[var(--bg-secondary)] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(107,142,35,0.12),transparent)] pointer-events-none" />
      <div className="container max-w-6xl mx-auto px-4 relative">
        <div
          ref={titleRef}
          className={`flex justify-center mb-6 ${titleActive ? 'active' : ''} reveal`}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 translate-x-3 translate-y-2 bg-[var(--accent-hover)]/70 skew-x-[-12deg] rounded-md" />
            <div className="relative px-6 py-2.5 sm:px-10 sm:py-3 bg-[var(--accent)] skew-x-[-12deg] rounded-md border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
              <span className="block skew-x-[12deg] text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide">
                Skill Set
              </span>
            </div>
          </div>
        </div>
        <p className="text-center text-[var(--text-muted)] text-lg max-w-xl mx-auto mb-14">
          Technologies and tools I use to build modern, responsive experiences.
        </p>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 ${sectionVisible ? 'active' : ''} reveal`}
        >
          {skillSet.map((skill, index) => (
            <div
              key={skill.name}
              className="opacity-0"
              style={
                sectionVisible
                  ? {
                      animation: 'skill-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                      animationDelay: `${index * 60}ms`,
                    }
                  : undefined
              }
            >
              <SkillCard skill={skill} index={index} isVisible={sectionVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
