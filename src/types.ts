export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Wedding' | 'Corporate' | 'Luxury' | 'Fashion' | 'Personal';
  description: string;
  longDescription: string;
  image: string;
  client: string;
  year: string;
  services: string[];
  challenge?: string;
  solution?: string;
  beforeImg?: string;
  afterImg?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'Detail' | 'Textile' | 'Metal' | 'Paper' | 'Sketch';
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  brand: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export type ViewType = 'home' | 'about' | 'portfolio' | 'casestudy' | 'gallery' | 'contact' | 'terms' | 'privacy';
