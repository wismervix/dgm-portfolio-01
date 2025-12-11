import halcyonImage from '@/assets/images/project-1.avif'

export interface ProjectLink {
  title: string
  icon?: string
  route: string
}

export interface ProjectTitle {
  name: string
  route: string
}

export interface Project {
  id: number
  title: ProjectTitle
  image: string
  description: string
  technologies: string[]
  links: ProjectLink[]
  platformLinks: ProjectLink[]
  year: number
}

export const projects: Project[] = [
  {
    id: 1,
    title: {
      name: 'Halcyon Theme',
      route: 'https://halcyon-theme.netlify.com/',
    },
    image: halcyonImage,
    description:
      'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on',
    technologies: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
    links: [
      {
        title: 'Visual Studio Marketplace',
        route: 'https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode',
      },
      {
        title: 'Package Control',
        route: 'https://packagecontrol.io/packages/Halcyon%20Theme',
      },
      {
        title: 'Atom Package Manager',
        route: 'https://atom.io/themes/halcyon-syntax',
      },
      {
        title: 'npm',
        route: 'https://www.npmjs.com/package/hyper-halcyon-theme',
      },
    ],
    platformLinks: [
      {
        title: 'GitHub Link',
        icon: 'gitHub',
        route: 'https://github.com/bchiang7/halcyon-site',
      },
      {
        title: 'External Link',
        icon: 'extLink',
        route: 'https://halcyon-theme.netlify.com/',
      },
    ],
    year: 2024,
  },
  {
    id: 2,
    title: {
      name: 'Dashboard Analytics',
      route: 'https://halcyon-theme.netlify.com/',
    },
    image: halcyonImage,
    description: 'Real-time data visualization',
    technologies: ['Vue 3', 'D3.js', 'Firebase'],
    links: [
      {
        title: 'Visual Studio Marketplace',
        route: 'https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode',
      },
      {
        title: 'Package Control',
        route: 'https://packagecontrol.io/packages/Halcyon%20Theme',
      },
      {
        title: 'Atom Package Manager',
        route: 'https://atom.io/themes/halcyon-syntax',
      },
      {
        title: 'npm',
        route: 'https://www.npmjs.com/package/hyper-halcyon-theme',
      },
    ],
    platformLinks: [
      {
        title: 'GitHub Link',
        route: 'https://github.com/bchiang7/halcyon-site',
      },
      {
        title: 'External Link',
        route: 'https://halcyon-theme.netlify.com/',
      },
    ],
    year: 2024,
  },
]

// Optional: Helper functions
export const getProjectById = (id: number): Project | undefined => {
  return projects.find((project) => project.id === id)
}

export const getProjectsByTech = (tech: string): Project[] => {
  return projects.filter((project) => project.technologies.includes(tech))
}

/* 
USUAGE:
// In any component or store
import { projects, getProjectById } from '@/data/projects';
*/
