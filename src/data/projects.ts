export type Project = { title: string; eyebrow: string; description: string; technologies: string[]; liveUrl?: string; repositoryUrl?: string; status?: string; accent: 'cyan' | 'violet' }
export const projects: Project[] = [
  { title: 'AppSoft Agency', eyebrow: 'Agência digital', description: 'Site institucional para apresentar serviços de criação de sites e conectar empresas a soluções digitais sob medida.', technologies: ['Vite', 'JavaScript', 'CSS', 'Design responsivo'], liveUrl: 'https://appsoft-agency-gu5c9v5as-lucios-projects-68ccb071.vercel.app', repositoryUrl: 'https://github.com/appsoft-lucio/appsoft-agency', accent: 'cyan' },
  { title: 'EduRegistro', eyebrow: 'Tecnologia educacional', description: 'Plataforma pensada para simplificar registros escolares e apoiar a rotina de educadores com organização e agilidade.', technologies: ['Gestão escolar', 'Interface web', 'Produtividade'], status: 'Em desenvolvimento', accent: 'violet' },
]
