import { ArrowUpRight, ClipboardList, Github, GraduationCap, PanelsTopLeft } from 'lucide-react'
import type { Project } from '../data/projects'

const projectIcons = {
  'AppSoft Agency': PanelsTopLeft,
  EduRegistro: GraduationCap,
  'Ocorrência BH': ClipboardList,
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = projectIcons[project.title as keyof typeof projectIcons] ?? PanelsTopLeft

  return (
    <article className={`project-card project-${project.accent}`}>
      <div className="project-visual">
        <span className="project-number">0{index + 1}</span>
        <div className="project-icon">
          <Icon />
        </div>
        <div className="visual-lines">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="project-content">
        <p className="eyebrow">{project.eyebrow}</p>
        <div className="project-title-row">
          <h3>{project.title}</h3>
          {project.status && <span className="status">{project.status}</span>}
        </div>
        <p>{project.description}</p>
        <ul className="tag-list">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Ver projeto <ArrowUpRight size={17} />
            </a>
          )}
          {project.repositoryUrl && (
            <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
              <Github size={17} /> Código
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
