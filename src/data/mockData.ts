import { Token, Project, TeamMember, AnalyticsData, LifecycleStage, DataSet, Report } from '../types';

export const tokens: Token[] = [
  {
    id: '1',
    name: 'Primary Blue',
    value: '#3B82F6',
    category: 'colors',
    description: 'Main brand color for buttons, links, and primary actions',
    usage: ['buttons', 'links', 'primary-actions'],
    cssVariable: '--color-primary'
  },
  {
    id: '2',
    name: 'Secondary Slate',
    value: '#64748B',
    category: 'colors',
    description: 'Secondary text color and subtle elements',
    usage: ['secondary-text', 'borders', 'placeholders'],
    cssVariable: '--color-secondary'
  },
  {
    id: '3',
    name: 'Success Green',
    value: '#10B981',
    category: 'colors',
    description: 'Success states, confirmations, and positive feedback',
    usage: ['success-messages', 'confirmations', 'positive-indicators'],
    cssVariable: '--color-success'
  },
  {
    id: '4',
    name: 'Warning Orange',
    value: '#F59E0B',
    category: 'colors',
    description: 'Warning states and attention-grabbing elements',
    usage: ['warnings', 'alerts', 'attention-elements'],
    cssVariable: '--color-warning'
  },
  {
    id: '5',
    name: 'Error Red',
    value: '#EF4444',
    category: 'colors',
    description: 'Error states and destructive actions',
    usage: ['errors', 'destructive-actions', 'validation-errors'],
    cssVariable: '--color-error'
  },
  {
    id: '6',
    name: 'Heading Font',
    value: 'Inter, system-ui, sans-serif',
    category: 'typography',
    description: 'Primary font for headings and titles',
    usage: ['headings', 'titles', 'navigation'],
    cssVariable: '--font-heading'
  },
  {
    id: '7',
    name: 'Body Font',
    value: 'Inter, system-ui, sans-serif',
    category: 'typography',
    description: 'Body text and general content',
    usage: ['body-text', 'paragraphs', 'content'],
    cssVariable: '--font-body'
  },
  {
    id: '8',
    name: 'Code Font',
    value: 'JetBrains Mono, monospace',
    category: 'typography',
    description: 'Code blocks and monospace text',
    usage: ['code-blocks', 'terminal', 'monospace'],
    cssVariable: '--font-code'
  },
  {
    id: '9',
    name: 'Base Spacing',
    value: '1rem',
    category: 'spacing',
    description: 'Base unit for consistent spacing',
    usage: ['margins', 'padding', 'gaps'],
    cssVariable: '--spacing-base'
  },
  {
    id: '10',
    name: 'Large Spacing',
    value: '2rem',
    category: 'spacing',
    description: 'Large spacing for sections and major elements',
    usage: ['section-spacing', 'major-gaps'],
    cssVariable: '--spacing-large'
  },
  {
    id: '11',
    name: 'Card Shadow',
    value: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    category: 'shadows',
    description: 'Standard card elevation shadow',
    usage: ['cards', 'modals', 'dropdowns'],
    cssVariable: '--shadow-card'
  },
  {
    id: '12',
    name: 'Hover Shadow',
    value: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    category: 'shadows',
    description: 'Enhanced shadow for hover states',
    usage: ['hover-effects', 'interactive-elements'],
    cssVariable: '--shadow-hover'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    name: 'Customer Portal Redesign',
    status: 'active',
    progress: 75,
    dueDate: '2024-02-15',
    team: ['Sarah Johnson', 'Mike Chen', 'Alex Rodriguez'],
    description: 'Complete redesign of customer portal with modern UI/UX',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    priority: 'high'
  },
  {
    id: '2',
    name: 'API Gateway Migration',
    status: 'active',
    progress: 45,
    dueDate: '2024-03-01',
    team: ['David Kim', 'Lisa Wang', 'Tom Wilson'],
    description: 'Migrate legacy API gateway to modern architecture',
    technologies: ['Node.js', 'Docker', 'Kubernetes'],
    priority: 'medium'
  },
  {
    id: '3',
    name: 'Mobile App v2.0',
    status: 'completed',
    progress: 100,
    dueDate: '2024-01-15',
    team: ['Emma Thompson', 'Ryan Park', 'Sofia Martinez'],
    description: 'Second major version of mobile application',
    technologies: ['React Native', 'Redux', 'Firebase'],
    priority: 'high'
  },
  {
    id: '4',
    name: 'Analytics Dashboard',
    status: 'on-hold',
    progress: 30,
    dueDate: '2024-04-01',
    team: ['John Doe', 'Jane Smith'],
    description: 'Internal analytics dashboard for business intelligence',
    technologies: ['Vue.js', 'D3.js', 'Python'],
    priority: 'low'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Senior Frontend Developer',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    skills: ['React', 'TypeScript', 'CSS', 'UI/UX'],
    availability: 85,
    projects: ['1', '3']
  },
  {
    id: '2',
    name: 'Mike Chen',
    role: 'Full Stack Developer',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    skills: ['Node.js', 'React', 'Python', 'Docker'],
    availability: 70,
    projects: ['1', '2']
  },
  {
    id: '3',
    name: 'Alex Rodriguez',
    role: 'DevOps Engineer',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    skills: ['Kubernetes', 'AWS', 'CI/CD', 'Monitoring'],
    availability: 90,
    projects: ['1', '2']
  },
  {
    id: '4',
    name: 'Emma Thompson',
    role: 'Mobile Developer',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    availability: 95,
    projects: ['3']
  }
];

export const analyticsData: AnalyticsData = {
  buildTime: [45, 52, 38, 65, 42, 55, 48],
  deploymentSuccess: 94,
  errorRate: 0.2,
  codeQuality: 92,
  performanceScore: 89,
  testCoverage: 87
};

export const lifecycleStages: LifecycleStage[] = [
  {
    id: '1',
    name: 'Planning',
    projects: 8,
    completionRate: 92,
    avgDuration: 14
  },
  {
    id: '2',
    name: 'Development',
    projects: 12,
    completionRate: 78,
    avgDuration: 45
  },
  {
    id: '3',
    name: 'Testing',
    projects: 6,
    completionRate: 88,
    avgDuration: 12
  },
  {
    id: '4',
    name: 'Deployment',
    projects: 4,
    completionRate: 96,
    avgDuration: 3
  },
  {
    id: '5',
    name: 'Maintenance',
    projects: 15,
    completionRate: 85,
    avgDuration: 90
  }
];

export const dataSets: DataSet[] = [
  {
    id: '1',
    name: 'User Profiles Sample',
    category: 'User Data',
    size: '2.3 MB',
    lastUpdated: '2024-01-15',
    downloads: 234,
    description: 'Sample user profile data for testing authentication flows'
  },
  {
    id: '2',
    name: 'Product Catalog JSON',
    category: 'E-commerce',
    size: '5.7 MB',
    lastUpdated: '2024-01-12',
    downloads: 156,
    description: 'Complete product catalog with categories and pricing'
  },
  {
    id: '3',
    name: 'Transaction History',
    category: 'Financial',
    size: '12.1 MB',
    lastUpdated: '2024-01-10',
    downloads: 89,
    description: 'Sample transaction data for financial analytics'
  },
  {
    id: '4',
    name: 'API Response Templates',
    category: 'API',
    size: '1.2 MB',
    lastUpdated: '2024-01-14',
    downloads: 312,
    description: 'Standard API response templates and error codes'
  }
];

export const reports: Report[] = [
  {
    id: '1',
    title: 'Weekly Performance Report',
    type: 'performance',
    generatedAt: '2024-01-15T10:30:00Z',
    status: 'generated',
    size: '2.3 MB'
  },
  {
    id: '2',
    title: 'Project Status Summary',
    type: 'project',
    generatedAt: '2024-01-14T16:45:00Z',
    status: 'generated',
    size: '1.8 MB'
  },
  {
    id: '3',
    title: 'Team Productivity Analysis',
    type: 'team',
    generatedAt: '2024-01-13T09:15:00Z',
    status: 'generated',
    size: '3.1 MB'
  },
  {
    id: '4',
    title: 'Monthly Analytics Report',
    type: 'analytics',
    generatedAt: '2024-01-12T14:20:00Z',
    status: 'pending',
    size: '4.5 MB'
  }
];