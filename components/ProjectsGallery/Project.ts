export interface Project {
  _id: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
  urls: {
    demo?: string;
    repository?: string;
  };
}
