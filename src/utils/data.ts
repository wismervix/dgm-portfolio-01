import halcyonImage from '@/assets/images/project-1.avif'
import goldParkTradingImage from '@/assets/images/gold_park_trading_2.png'
import unityCoinImage from '@/assets/images/unity_coin.png'
import reliaCRMImageInverted from '@/assets/images/reliaCRM_inverted.png'

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
  others: boolean
  image: string
  description: string
  technologies: string[]
  links?: ProjectLink[]
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
    others: false,
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
      name: 'ReliaCRM',
      route: 'https://manage.reliacrm.com/',
    },
    others: false,
    image: reliaCRMImageInverted,
    // description: 'Automates billing, provisioning, domain reselling, support, and more for web hosting businesses.',
    description:
      'A fully-featured hosting management and billing system automating provisioning, domain reselling, invoicing, payment processing, user management, and support tools. I contributed extensively to UI development, dashboard components, billing interfaces, customer pages, and admin controls. Available on ',
    technologies: ['Vue 3', 'Inertia', 'Laravel', 'Bootstrap', 'SCSS + SASS', 'Xampp'],
    links: [
      {
        title: 'Browsers',
        route: 'https://manage.reliacrm.com/',
      },
    ],
    platformLinks: [
      {
        title: 'BitBucket Link',
        icon: 'bitBucket',
        route: 'https://bitbucket.org/ozitechteam/reliacrm-01/',
      },
    ],
    year: 2025,
  },
  {
    id: 3,
    title: {
      name: 'Gold Park Trading',
      route: 'https://halcyon-theme.netlify.com/',
    },
    others: false,
    image: goldParkTradingImage,
    description:
      'A trading app supporting currencies, crypto, and commodities. Implemented trading UI components, bid-placement interfaces, product listings, asset detail views, and various user-facing dashboards.',
    technologies: ['Blade', 'Laravel', 'Bootstrap', 'SCSS + SASS', 'Xampp'],
    platformLinks: [
      {
        title: 'BitBucket Link',
        icon: 'bitBucket',
        route: 'https://bitbucket.org/ozitechteam/reliacrm-01/',
      },
    ],
    year: 2025,
  },
  {
    id: 4,
    title: {
      name: 'Unity Coin',
      route: 'https://halcyon-theme.netlify.com/',
    },
    others: true,
    image: unityCoinImage,
    description: 'Crypto & asset trading platform.',
    technologies: ['Blade', 'Laravel', 'Bootstrap', 'SCSS + SASS', 'Xampp'],
    platformLinks: [
      {
        title: 'BitBucket Link',
        icon: 'bitBucket',
        route: 'https://bitbucket.org/ozitechteam/reliacrm-01/',
      },
    ],
    year: 2025,
  },
  {
    id: 5,
    title: {
      name: 'My AdShop',
      route: 'https://halcyon-theme.netlify.com/',
    },
    others: true,
    image: unityCoinImage,
    description: 'Platform for paid digital ads placement.',
    technologies: ['Vue 3', 'Inertia', 'Laravel', 'Bootstrap', 'SCSS + SASS', 'Xampp'],
    platformLinks: [
      {
        title: 'BitBucket Link',
        icon: 'bitBucket',
        route: 'https://bitbucket.org/ozitechteam/my-ad-shop-v01/',
      },
    ],
    year: 2025,
  },
  {
    id: 6,
    title: {
      name: 'Ozitech Website Redesign',
      route: 'https://ozitechgroup.com/',
    },
    others: true,
    image: unityCoinImage,
    description: ' Helped redesign and implement the new corporate website.',
    technologies: ['Blade', 'Laravel', 'Bootstrap', 'SCSS + SASS', 'Xampp'],
    platformLinks: [
      {
        title: 'BitBucket Link',
        icon: 'bitBucket',
        route: 'https://bitbucket.org/ozitechteam/ozitechgroup-v02/',
      },
    ],
    year: 2025,
  },
  {
    id: 7,
    title: {
      name: 'Tierwave / Infinity Pair / Unilux MLM / Spark Agro Life',
      route: 'https://halcyon-theme.netlify.com/',
    },
    others: true,
    image: unityCoinImage,
    description: ' Health & wellness multi-level platforms.',
    technologies: ['Blade', 'Laravel', 'Bootstrap', 'SCSS + SASS', 'Xampp'],
    platformLinks: [
      {
        title: 'BitBucket Link',
        icon: 'bitBucket',
        route: 'https://bitbucket.org/ozitechteam/spark-agro-life-01/',
      },
    ],
    year: 2025,
  },
]

// Optional: Helper functions
export const getProjectById = (id: number): Project | undefined => {
  return projects.find((project) => project.id === id)
}

export const getProjectsByTech = (tech: string): Project[] => {
  return projects.filter((project) => project.technologies.includes(tech))
}

export const getProjectsByOthers = (): Project[] => {
  return projects.filter((project) => project.others)
}

export const getMyProjects = (): Project[] => {
  return projects.filter((project) => !project.others)
}

/* 
USUAGE:
// In any component or store
import { projects, getProjectById } from '@/data/projects';
*/
