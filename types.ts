export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface PricingItem {
  service_id: string;
  name: string;
  price_range: string;
  includes: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  procedure: string;
  quote: string;
  image_url?: string | null;
}

export interface DoctorProfile {
  name: string;
  credentials: {
    education: string;
    residency: string;
    advanced_training: string;
    memberships: string[];
  };
  experience: string;
  headshot_url: string;
}

export interface ServiceContentSection {
  title: string;
  content: string[]; // Array of paragraphs or bullet points
  type: 'text' | 'list' | 'process';
}

export interface ServicePageData {
  id: string;
  path: string;
  title: string;
  heroImage: string;
  description: string;
  sections: ServiceContentSection[];
}
