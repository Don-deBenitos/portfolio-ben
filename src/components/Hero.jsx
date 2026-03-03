import { useReveal } from "../hooks/useReveal";

export default function Hero() {
  const [leftRef, leftActive] = useReveal();
  const [rightRef, rightActive] = useReveal();

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-28 pb-24 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[var(--accent)]/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-[var(--accent)]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--accent)]/[0.03] blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Photo + intro */}
          <div
            ref={leftRef}
            className={`hero-left flex flex-col items-center text-center ${leftActive ? "active" : ""} reveal`}
          >
            <div className="inline-block mb-8">
              <div className="hero-photo-wrap relative inline-block opacity-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[var(--accent)]/40 to-[var(--accent)]/10 blur-xl opacity-60 animate-photo-glow" />
                <img
                  src="/assets/BenPhoto.JPG"
                  alt="Ben - Web Developer"
                  className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover rounded-full border-2 border-[var(--accent)]/30 shadow-2xl ring-4 ring-[var(--bg-primary)]/80"
                />
              </div>
            </div>

            <div className="w-full max-w-lg flex flex-col items-center text-center">
              <h1
                className="text-[var(--text-primary)] font-bold mb-3 tracking-tight opacity-0 transition-all duration-700 delay-150"
                style={
                  leftActive
                    ? { opacity: 1, transform: "translateY(0)" }
                    : { opacity: 0, transform: "translateY(12px)" }
                }
              >
                <span className="block text-4xl sm:text-5xl lg:text-6xl">
                  Hi, I'm{" "}
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl text-[var(--accent)] mt-1">
                  Ben
                </span>
              </h1>
              <div className="flex justify-center mb-5 min-h-[1.5em]">
                <span
                  className={`hero-typewriter-badge text-2xl sm:text-4xl lg:text-5xl font-bold uppercase text-white tracking-wide opacity-0 transition-opacity duration-700 delay-200 ${leftActive ? "hero-typewriter-active" : ""}`}
                  style={leftActive ? { opacity: 1 } : undefined}
                >
                  <span className="hero-typewriter-inner">
                    A Web Developer
                    <span className="hero-typewriter-cursor">|</span>
                  </span>
                </span>
              </div>
              <p
                className="text-[var(--text-muted)] text-lg sm:text-xl mb-8 italic opacity-0 transition-all duration-700 delay-300"
                style={leftActive ? { opacity: 1 } : undefined}
              >
                "I turn coffee into code and ideas into experiences."
              </p>

              <div
                className="flex flex-wrap gap-4 justify-center opacity-0 transition-all duration-700 delay-500"
                style={leftActive ? { opacity: 1 } : undefined}
              >
                <a
                  href="#projects"
                  className="hero-cta-primary group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white bg-[var(--accent)] shadow-[0_4px_24px_rgba(107,142,35,0.4)] hover:shadow-[0_8px_32px_rgba(107,142,35,0.5)] hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] transition-all duration-300"
                >
                  View My Work
                  <svg
                    className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="hero-cta-secondary inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold border-2 border-[var(--accent)]/60 text-[var(--accent)] bg-transparent hover:bg-[var(--accent)]/10 hover:border-[var(--accent)] hover:text-[var(--text-primary)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          {/* Right: What I do card */}
          <div
            ref={rightRef}
            className={`hero-right flex flex-col justify-center ${rightActive ? "active" : ""} reveal`}
          >
            <div className="relative">
              <div className="mb-4 flex justify-center lg:justify-start">
                <div className="relative inline-block">
                  <div className="absolute inset-0 translate-x-3 translate-y-2 bg-[var(--accent-hover)]/70 skew-x-[-12deg] rounded-md" />
                  <div className="relative px-6 py-2.5 sm:px-9 sm:py-3 bg-[var(--accent)] skew-x-[-12deg] rounded-md border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
                    <span className="block skew-x-[12deg] text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide">
                      What I do
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-[var(--text-muted)] text-lg mb-6">
                Building digital experiences that matter
              </p>
              <div className="relative rounded-2xl bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--card-border)] p-6 sm:p-8 shadow-[var(--shadow)] overflow-hidden group hover:border-[var(--accent)]/30 transition-colors duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--accent)] to-[var(--accent)]/50" />
                <p className="text-[var(--text-primary)]/95 text-base sm:text-lg leading-relaxed pl-2">
                  I build modern, responsive web applications with a focus on
                  clean code and user-friendly interfaces. I love turning ideas
                  into real experiences—from concept to launch—and making sure
                  every project is both functional and a pleasure to use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
