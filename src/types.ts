export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
  tagline: string;
  description: string;
  role: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface JournalPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  content: string[];
}

export interface Client {
  id: string;
  name: string;
  industry: string;
  logoType: 'arc' | 'wave' | 'meridian' | 'oakley' | 'nordic' | 'delta';
}

export interface ContactSubmission {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
