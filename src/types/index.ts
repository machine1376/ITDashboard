export interface Token {
  id: string;
  name: string;
  value: string;
  category: 'colors' | 'typography' | 'spacing' | 'shadows' | 'borders' | 'animations';
  description: string;
  usage: string[];
  cssVariable: string;
}

export interface Project {
  id: string;
  name: string;
  status: 'active' | 'completed' | 'on-hold' | 'cancelled';
  progress: number;
  dueDate: string;
  team: string[];
  description: string;
  technologies: string[];
  priority: 'low' | 'medium' | 'high';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  skills: string[];
  availability: number;
  projects: string[];
}

export interface AnalyticsData {
  buildTime: number[];
  deploymentSuccess: number;
  errorRate: number;
  codeQuality: number;
  performanceScore: number;
  testCoverage: number;
}

export interface LifecycleStage {
  id: string;
  name: string;
  projects: number;
  completionRate: number;
  avgDuration: number;
}

export interface DataSet {
  id: string;
  name: string;
  category: string;
  size: string;
  lastUpdated: string;
  downloads: number;
  description: string;
}

export interface Report {
  id: string;
  title: string;
  type: 'performance' | 'project' | 'team' | 'analytics';
  generatedAt: string;
  status: 'generated' | 'pending' | 'scheduled';
  size: string;
}