export interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  url?: string;
}
