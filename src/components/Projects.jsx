import { useReveal } from '../hooks/useReveal';
import { projects, projectIntro } from '../data';

export default function Projects() {
  const [titleRef, titleActive] = useReveal();
  const [introRef, introActive] = useReveal();
  return (
    <section id="projects" className="py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <div
          ref={titleRef}
          className={`flex justify-center mb-6 ${titleActive ? 'active' : ''} reveal`}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 translate-x-3 translate-y-2 bg-[var(--accent-hover)]/70 skew-x-[-12deg] rounded-md" />
            <div className="relative px-6 py-2.5 sm:px-10 sm:py-3 bg-[var(--accent)] skew-x-[-12deg] rounded-md border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
              <span className="block skew-x-[12deg] text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide">
                Projects
              </span>
            </div>
          </div>
        </div>
        <p
          ref={introRef}
          className={`text-center text-[var(--text-muted)] text-lg max-w-2xl mx-auto mb-12 leading-relaxed ${introActive ? 'active' : ''} reveal`}
        >
          {projectIntro}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [ref, active] = useReveal();
  const { title, description, image, link } = project;

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-[20px] bg-[var(--bg-glass)] backdrop-blur-[10px] border border-[var(--card-border)] shadow-[var(--shadow)] h-full flex flex-col transition-transform duration-300 hover:-translate-y-2.5 ${active ? 'active' : ''} reveal`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover rounded-t-[20px]"
      />
      <div className="p-5 flex flex-col flex-1">
        <h5 className="text-[var(--text-primary)] font-bold text-lg mb-2">{title}</h5>
        <p className="text-[var(--text-primary)] flex-grow mb-4">{description}</p>
        <a
          href={link}
          className="inline-flex self-start px-4 py-2 rounded-lg border-2 border-[var(--text-primary)] text-[var(--text-primary)] hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition-colors duration-200"
        >
          View
        </a>
      </div>
    </div>
  );
}
